'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(() => [
    {
      sender: 'ai',
      text: 'Halo! Saya Asisten UCIC. Ada yang bisa dibantu seputar pendaftaran, beasiswa, prodi, fasilitas, atau biaya kuliah?'
    }
  ]);
  const scrollRef = useRef(null);

  const waNumber = useMemo(() => {
    // Value akan di-inline saat build jika NEXT_PUBLIC_WHATSAPP_NUMBER tersedia
    const envNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    return (envNumber && envNumber.trim()) || '6281234567890';
  }, []);

  useEffect(() => {
    // Auto scroll ke bawah saat ada pesan baru
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const hasUserAsked = useMemo(() => messages.some(m => m.sender === 'user'), [messages]);
  const showWhatsAppCTA = hasUserAsked && messages.length > 0 && messages[messages.length - 1].sender === 'ai';

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || sending) return;

    const nextHistory = [...messages, { sender: 'user', text }];
    setMessages(nextHistory);
    setInput('');
    setSending(true);

    try {
      const resp = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: nextHistory
        })
      });

      let reply = '';
      if (resp.ok) {
        const data = await resp.json();
        reply = data?.reply || '';
      } else {
        reply = '';
      }

      if (!reply) {
        reply = `Maaf, saya mengalami kendala memproses pertanyaan. Untuk bantuan cepat, silakan hubungi WhatsApp Admin PMB: https://wa.me/${waNumber}`;
      }

      setMessages((prev) => [...prev, { sender: 'ai', text: reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: `Maaf, terjadi gangguan jaringan. Anda bisa chat WhatsApp Admin PMB di https://wa.me/${waNumber}`
        }
      ]);
    } finally {
      setSending(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Tombol mengambang */}
      {!open && (
        <button
          type="button"
          aria-label="Buka Chatbot"
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-[var(--index-70)] inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-xl ring-1 ring-black/5 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
        >
          {/* Ikon chat */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="M3 5.25C3 4.007 4.007 3 5.25 3h13.5C19.993 3 21 4.007 21 5.25v9.5C21 15.993 19.993 17 18.75 17H8.81l-3.905 3.124A.75.75 0 0 1 3 19.5v-14.25Z" />
          </svg>
        </button>
      )}

      {/* Popup Chat */}
      {open && (
        <div className="fixed bottom-6 right-6 z-[var(--index-70)] w-[22rem] sm:w-[24rem] h-[32rem] sm:h-[36rem] rounded-xl bg-white shadow-2xl ring-1 ring-black/5 font-albert-sans flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between rounded-t-xl bg-gradient-to-r from-primary to-[#1a2c43] px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white">
                {/* Ikon UCIC (chat) */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 5.25C3 4.007 4.007 3 5.25 3h13.5C19.993 3 21 4.007 21 5.25v9.5C21 15.993 19.993 17 18.75 17H8.81l-3.905 3.124A.75.75 0 0 1 3 19.5v-14.25Z" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-inter text-white text-[15px] font-extrabold">Asisten UCIC</span>
                <span className="text-white/90 text-[12px] -mt-[2px]">Online • Siap membantu</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Minimize"
                onClick={() => setOpen(false)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-white/90 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-blue-200 focus-visible:outline-offset-2"
              >
                {/* Ikon minimize */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M4 10.75A.75.75 0 0 1 4.75 10h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10.75Z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Area Pesan */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-3 space-y-3 bg-white">
            {messages.map((m, idx) => {
              const isUser = m.sender === 'user';
              return (
                <div key={idx} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`rounded-2xl px-3 py-2 text-[14px] leading-relaxed shadow-sm ring-1
                    ${isUser ? 'bg-primary text-white ring-transparent' : 'bg-gray-50 text-gray-800 ring-gray-200'}
                  `}
                    style={{ maxWidth: '80%' }}
                  >
                    <MessageText text={m.text} />
                  </div>
                </div>
              );
            })}

            {/* CTA WA setelah respons AI */}
            {showWhatsAppCTA && (
              <div className="mt-1 flex items-center justify-center">
                <a
                  href={`https://wa.me/${waNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-primary border-dashed px-3 py-2 text-primary hover:bg-primary hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
                >
                  {/* Ikon WA */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path d="M20.52 3.48A11.85 11.85 0 0 0 12.07.1C5.67.1.5 5.23.5 11.59c0 2.04.53 4.02 1.54 5.77L.05 24l6.83-1.95a12 12 0 0 0 5.2 1.22h.01c6.39 0 11.57-5.13 11.57-11.49 0-3.07-1.21-5.96-3.15-8.3ZM12.09 21.5h-.01a10.51 10.51 0 0 1-5.35-1.48l-.38-.22-4.05 1.16 1.16-3.94-.25-.4a10.03 10.03 0 0 1-1.54-5.02C1.67 6.06 6.22 1.6 12.07 1.6c2.69 0 5.22 1.04 7.12 2.94a9.81 9.81 0 0 1 2.96 7.06c0 5.84-4.76 10.89-10.06 10.89Zm5.85-7.89c-.32-.16-1.89-.93-2.18-1.04-.29-.1-.5-.16-.71.16-.21.31-.82 1.04-1 1.26-.18.22-.37.24-.69.08-.32-.16-1.35-.49-2.58-1.56-.95-.81-1.58-1.81-1.77-2.12-.18-.31-.02-.48.14-.64.15-.15.32-.39.48-.58.16-.19.21-.31.32-.53.11-.22.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.63-.51-.53-.71-.54l-.61-.01c-.2 0-.53.08-.8.39-.27.31-1.05 1.02-1.05 2.49 0 1.47 1.08 2.89 1.23 3.09.16.2 2.12 3.24 5.14 4.42.72.3 1.29.48 1.73.62.73.23 1.4.2 1.93.12.59-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.53-.08-.14-.29-.22-.61-.38Z" />
                  </svg>
                  <span className="font-inter text-[14px] font-semibold">Butuh bantuan lebih lanjut? Chat WhatsApp</span>
                </a>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 bg-white px-3 py-3 rounded-b-xl">
            <div className="flex items-end gap-2">
              <textarea
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Tulis pertanyaan Anda..."
                className="min-h-[44px] max-h-[120px] flex-1 resize-y rounded-lg border border-gray-300 bg-white px-3 py-2 text-[14px] text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-0 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
              />
              <button
                type="button"
                onClick={sendMessage}
                disabled={sending || !input.trim()}
                className="inline-flex h-[44px] items-center justify-center rounded-lg bg-primary px-4 text-white disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
                aria-label="Kirim"
              >
                {sending ? (
                  <svg className="h-5 w-5 animate-spin text-white" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                    <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v3A5 5 0 0 0 7 12H4Z"></path>
                  </svg>
                ) : (
                  // Ikon kirim
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3.172 16.95 18.384 10 3.172 3.05l-.028 5.887L12.25 10l-9.106 1.063.028 5.887Z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function MessageText({ text }) {
  // Render sederhana: linkify URL
  const parts = linkify(text);
  return (
    <>
      {parts.map((p, i) =>
        p.href ? (
          <a key={i} href={p.href} target="_blank" rel="noopener noreferrer" className="underline decoration-primary underline-offset-2">
            {p.text}
          </a>
        ) : (
          <span key={i}>{p.text}</span>
        )
      )}
    </>
  );
}

function linkify(str) {
  const urlRegex = /(https?:\/\/[^\s)]+)|(wa\.me\/\d+)/gi;
  const out = [];
  let lastIndex = 0;
  let match;
  while ((match = urlRegex.exec(str)) !== null) {
    const start = match.index;
    const end = urlRegex.lastIndex;
    if (start > lastIndex) {
      out.push({ text: str.slice(lastIndex, start) });
    }
    const raw = str.slice(start, end);
    const href = raw.startsWith('http') ? raw : `https://${raw}`;
    out.push({ text: raw, href });
    lastIndex = end;
  }
  if (lastIndex < str.length) {
    out.push({ text: str.slice(lastIndex) });
  }
  return out;
}