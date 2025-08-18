/* eslint-disable no-console */
import { readFile } from 'node:fs/promises';
import path from 'node:path';

/**
 * API Chat Gemini
 * - Grounding dengan data kampus dari JSON lokal
 * - Bahasa balasan: Indonesia
 * - Tanpa SDK: gunakan REST API Gemini v1beta
 */

const UNIVERSITY_DATA_PATH = path.join(process.cwd(), 'src', 'data', 'university-data.json');

async function loadUniversityData() {
  try {
    const content = await readFile(UNIVERSITY_DATA_PATH, 'utf8');
    return JSON.parse(content);
  } catch (err) {
    console.warn('[chat] Gagal membaca university-data.json:', err?.message);
    return null;
  }
}

function normalizeHistory(history) {
  if (!Array.isArray(history)) return [];
  // Terima struktur sederhana: [{sender: 'user'|'ai', text: '...'}]
  const safe = [];
  for (const it of history) {
    if (!it || typeof it.text !== 'string') continue;
    const role = it.sender === 'ai' || it.role === 'model' ? 'model' : 'user';
    safe.push({
      role,
      parts: [{ text: it.text.slice(0, 4000) }] // batasi panjang per part
    });
  }
  return safe.slice(-8); // batasi riwayat terakhir untuk efisiensi
}
function sanitizeReply(str) {
  try {
    if (!str) return '';
    let s = String(str);

    // Hilangkan marker markdown umum (bold/italic/code)
    s = s.replace(/\*\*(.*?)\*\*/g, '$1');
    s = s.replace(/__(.*?)__/g, '$1');
    s = s.replace(/\*(.*?)\*/g, '$1');
    s = s.replace(/_(.*?)_/g, '$1');
    s = s.replace(/`{1,3}(.*?)`{1,3}/gs, '$1');

    // Bersihkan bullet di awal baris: -, *, •, atau penomoran "1."
    const cleanedLines = s.split('\n').map((l) =>
      l
        .replace(/^\s*([•\-*]|\d+\.)\s+/g, '')
        .replace(/^\s*>\s?/g, '') // blockquote
    );

    s = cleanedLines.join('\n');

    // Hilangkan sisa bullet/asterisk yang tersisa di tengah kalimat
    s = s.replace(/[•*]+/g, '');

    // Rapikan spasi
    s = s.replace(/[ \t]+/g, ' ');
    s = s.replace(/\s+\n/g, '\n').replace(/\n{3,}/g, '\n\n');

    return s.trim();
  } catch {
    return String(str || '');
  }
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GOOGLE_API_KEY;
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '6281234567890';

  try {
    const { message, history } = req.body || {};
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Pesan tidak valid.' });
    }

    // Jika API key belum diisi, balas fallback
    if (!apiKey) {
      const fallback = `Maaf, layanan AI sementara belum aktif. Untuk bantuan cepat, silakan chat WhatsApp admin PMB: https://wa.me/${waNumber}`;
      return res.status(200).json({ reply: fallback });
    }

    const uni = await loadUniversityData();

    const systemPreamble = [
      'Anda adalah Asisten AI resmi UCIC (Universitas Cirebon).',
      'Tujuan Anda adalah membantu calon mahasiswa & orang tua memahami informasi kampus seperti PMB, beasiswa, prodi, fasilitas, biaya, dan kontak.',
      'Jawab selalu dalam bahasa Indonesia yang singkat, jelas, dan akurat.',
      'Hindari format markdown: tanpa **tebal**, *italic*, heading, bullet/list bernomor; jangan gunakan simbol bintang (*) atau dash (-). Tulis jawaban rapi dalam kalimat biasa.',
      'Jika informasi tidak tersedia pada data berikut, sampaikan dengan sopan dan arahkan pengguna untuk menghubungi admin via WhatsApp.',
      `Nomor WhatsApp rujukan: ${waNumber}.`,
      'Saat menyebut tautan, hanya gunakan tautan yang ada pada data jika tersedia.',
      'Jangan menjanjikan hal yang tidak tercantum pada data.',
      '',
      'DATA_KAMPUS_JSON:',
      JSON.stringify(uni ?? { catatan: 'Data kampus tidak tersedia.' }, null, 2)
    ].join('\n');

    // Gunakan role yang valid (user|model) agar sesuai spesifikasi API
    const contents = [
      { role: 'user', parts: [{ text: systemPreamble }] },
      ...normalizeHistory(history),
      { role: 'user', parts: [{ text: message }] }
    ];

    // Sesuaikan endpoint dan header API key sesuai dokumentasi cURL
    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
    const body = { contents };

    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-goog-api-key': apiKey
      },
      body: JSON.stringify(body)
    });

    if (!resp.ok) {
      const errText = await resp.text();
      console.error('[chat] Gemini API error:', resp.status, errText);
      return res.status(500).json({
        error: 'Gagal memproses permintaan AI.',
        details: errText?.slice(0, 500)
      });
    }

    const data = await resp.json();
    const raw =
      data?.candidates?.[0]?.content?.parts
        ?.map((p) => p?.text || '')
        .join('')
        .trim() || '';

    const reply = sanitizeReply(raw);

    if (!reply) {
      const fallback = `Maaf, saya belum dapat menemukan jawabannya. Silakan chat WhatsApp admin PMB: https://wa.me/${waNumber}`;
      return res.status(200).json({ reply: fallback });
    }

    return res.status(200).json({ reply });
  } catch (err) {
    console.error('[chat] Unexpected error:', err);
    return res.status(500).json({ error: 'Terjadi kesalahan pada server.' });
  }
}