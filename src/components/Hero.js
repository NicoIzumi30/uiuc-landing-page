'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    src: 'https://ugm.ac.id/wp-content/uploads/2025/08/80-RI.jpg',
    alt: 'Banner Universitas Amikom - Talenta Perusahaan Terpopuler',
  },
  {
    src: 'https://ugm.ac.id/wp-content/uploads/2025/08/MM-UGM.webp',
    alt: 'Highlight Prestasi Universitas Amikom',
  },
  {
    src: 'https://ugm.ac.id/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-16-at-12.04.25.jpeg',
    alt: 'Informasi Pendaftaran Mahasiswa Baru',
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const goTo = (i) => setIndex(i);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  return (
    <section
      className="relative w-full bg-white"
      aria-label="Hero carousel"
    >
      <div className="relative mx-auto max-w-[100rem] px-4 sm:px-6 lg:px-8 pt-6 pb-24 lg:pb-28">
        <div
          className="relative rounded-2xl bg-gradient-to-br from-primary to-[#1a2c43]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Slider viewport */}
          <div
            className="relative h-[13rem] md:h-[30rem] lg:h-[40rem] rounded-2xl"
          >
            {/* Slides track */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <div
                className="flex h-full w-full transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {slides.map((slide, i) => (
                  <div key={i} className="relative h-full w-full flex-shrink-0">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      priority={i === 0}
                      sizes="(min-width: 1024px) 1200px, 100vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Overlay card (right) */}
            <aside className="pointer-events-auto">
              <div className="hidden md:block lg:absolute lg:right-16 lg:-bottom-20 lg:w-[384px] lg:z-20">
                <div className="m-4 lg:m-0 rounded-xl bg-white p-6 md:p-8 shadow-2xl ring-1 ring-black/5 space-y-6 font-albert-sans">
                  {/* Heading */}
                  <header className="space-y-1">
                    <h1 className="font-inter text-2xl font-extrabold text-primary">
                      Yuk Daftar Sekarang!
                    </h1>
                    <p className="text-gray-400">
                      Bantuan Seputar Pendaftaran Beasiswa?
                    </p>
                  </header>

                  {/* WhatsApp contact */}
                  <div className="space-y-3">
                    <h2 className="text-gray-500">WhatsApp</h2>
                    <div className="flex items-center gap-3">
                      <div className="inline-flex">
                        <Link
                          href="https://wa.me/085253444999"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Hubungi WhatsApp 085253444999"
                          className="inline-flex items-center rounded-lg bg-primary px-2.5 py-2 text-white  focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
                        >
                          {/* WhatsApp icon */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5"
                            aria-hidden="true"
                          >
                            <path d="M20.52 3.48A11.85 11.85 0 0 0 12.07.1C5.67.1.5 5.23.5 11.59c0 2.04.53 4.02 1.54 5.77L.05 24l6.83-1.95a12 12 0 0 0 5.2 1.22h.01c6.39 0 11.57-5.13 11.57-11.49 0-3.07-1.21-5.96-3.15-8.3ZM12.09 21.5h-.01a10.51 10.51 0 0 1-5.35-1.48l-.38-.22-4.05 1.16 1.16-3.94-.25-.4a10.03 10.03 0 0 1-1.54-5.02C1.67 6.06 6.22 1.6 12.07 1.6c2.69 0 5.22 1.04 7.12 2.94a9.81 9.81 0 0 1 2.96 7.06c0 5.84-4.76 10.89-10.06 10.89Zm5.85-7.89c-.32-.16-1.89-.93-2.18-1.04-.29-.1-.5-.16-.71.16-.21.31-.82 1.04-1 1.26-.18.22-.37.24-.69.08-.32-.16-1.35-.49-2.58-1.56-.95-.81-1.58-1.81-1.77-2.12-.18-.31-.02-.48.14-.64.15-.15.32-.39.48-.58.16-.19.21-.31.32-.53.11-.22.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.63-.51-.53-.71-.54l-.61-.01c-.2 0-.53.08-.8.39-.27.31-1.05 1.02-1.05 2.49 0 1.47 1.08 2.89 1.23 3.09.16.2 2.12 3.24 5.14 4.42.72.3 1.29.48 1.73.62.73.23 1.4.2 1.93.12.59-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.53-.08-.14-.29-.22-.61-.38Z" />
                          </svg>
                        </Link>
                      </div>
                      <div className="inline-flex flex-col">
                        <Link
                          href="https://wa.me/085253444999"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-inter text-base font-semibold text-black hover:underline focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
                        >
                          085253444999
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Scholarship info (dashed) */}
                  <Link
                    href="https://beasiswa.amikom.ac.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg border-2 border-primary border-dashed px-2 py-3 text-center hover:bg-primary focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 text-primary hover:text-white"
                  >
                    <span className="font-inter text-base font-semibold">
                      Info Beasiswa Mahasiswa Baru
                    </span>
                  </Link>

                  {/* CTA PMB */}
                  <Link
                    href="https://cmhs.amikom.ac.id/daftar#!/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg bg-primary px-6 py-5 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
                  >
                    <div className="flex flex-col">
                      <span className="text-white text-sm">Pendaftaran Mahasiswa Baru</span>
                      <span className="text-white/90 -mt-1">pmb.amikom.ac.id</span>
                    </div>
                    <span aria-hidden="true" className="inline-flex">
                      <Image src="/img/vector.svg" alt="" width={20} height={20} />
                    </span>
                  </Link>
                </div>
              </div>
            </aside>

            {/* Prev / Next arrows */}
            <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 sm:px-4">
              <button
                type="button"
                aria-label="Slide sebelumnya"
                onClick={prev}
                className=" md:ml-[-2.3rem] pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary opacity-80 hover:opacity-100 text-white shadow-md focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 z-10"
              >
                {/* Left chevron */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M12.78 15.53a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 1.06L9.31 10l3.47 3.47a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Slide berikutnya"
                onClick={next}
                className="md:mr-[-2.3rem] pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary opacity-80 hover:opacity-100 text-white shadow-md focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 z-10"
              >
                {/* Right chevron */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M7.22 4.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06L10.69 10 7.22 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Dots indicator */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Ke slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${i === index ? 'bg-white' : 'bg-white/50 hover:bg-white/70'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}