'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import uni from '@/data/university-data.json';

const faculties = Array.isArray(uni?.fakultas_dan_prodi) ? uni.fakultas_dan_prodi : [];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isFakultasOpenDesktop, setIsFakultasOpenDesktop] = useState(false);
  const [isFakultasOpenMobile, setIsFakultasOpenMobile] = useState(false);

  const socialLinks = [
    { icon: 'fab fa-instagram', href: 'https://www.instagram.com/ucic.cirebon' },
    { icon: 'fab fa-youtube', href: 'https://www.youtube.com' },
    { icon: 'fab fa-facebook', href: 'https://www.facebook.com' },
    { icon: 'fab fa-twitter', href: 'https://twitter.com' },
    { icon: 'fab fa-linkedin', href: 'https://www.linkedin.com' },
    { icon: 'fab fa-tiktok', href: 'https://www.tiktok.com' }
  ];

  const navItems = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Pengumuman', href: '#pengumuman' },
    { name: 'Berita', href: '#berita' },
    { name: 'Profil', href: '#profil' },
    { name: 'Fasilitas', href: '#fasilitas' },
    { name: 'Fakultas', href: '#fakultas', isDropdown: true }
  ];

  return (
    <>
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <header className="w-full bg-secondary-bg text-white font-albert-sans">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              {/* Brand */}
              <Link href="#beranda" className="flex items-center gap-3">
                <Image
                  src="/img/cic.png"
                  alt="UCIC Logo"
                  width={300}
                  height={50}
                  className="object-contain"
                />
              </Link>

              {/* Right Cluster */}
              <div className="flex flex-col items-end gap-2">
                {/* Top row: socials | lang | PMB */}
                <div className="flex items-center gap-5">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-secondary transition-colors duration-200"
                    >
                      <i className={`${social.icon} text-lg`}></i>
                    </Link>
                  ))}
                  <span className="h-5 w-px bg-white/40" aria-hidden="true"></span>

                  {/* Language Selector */}
                  <div className="relative">
                    <button
                      className="flex items-center gap-2 hover:text-secondary transition-colors duration-200"
                      onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                    >
                      <div className="w-4 h-4 rounded-full overflow-hidden">
                        <Image
                          src="https://flagcdn.com/w20/id.png"
                          alt="ID"
                          width={16}
                          height={12}
                          className="object-cover"
                        />
                      </div>
                      <span className="text-sm font-bold">ID</span>
                      <i className="fas fa-chevron-down text-xs"></i>
                    </button>

                    {isLanguageDropdownOpen && (
                      <div className="absolute top-full right-0 mt-1 bg-white shadow-lg rounded border py-1 z-50 min-w-28">
                        <Link
                          href="#"
                          className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 text-gray-700"
                          onClick={() => setIsLanguageDropdownOpen(false)}
                        >
                          <div className="w-4 h-4 rounded-full overflow-hidden">
                            <Image
                              src="https://flagcdn.com/w20/gb.png"
                              alt="EN"
                              width={16}
                              height={12}
                              className="object-cover"
                            />
                          </div>
                          <span className="text-sm">EN</span>
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* PMB Button */}
                  <Link
                    href={uni?.pmb?.tautan_pendaftaran || 'https://pmb.cic.ac.id'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-secondary text-primary font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition"
                  >
                    <span>Info PMB</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Main Menu */}
        <div className="hidden lg:block bg-primary border-t border-secondary">
          <div className="max-w-[100rem] mx-auto px-4">
            <nav className="flex items-center justify-center">
              {navItems.slice(0, 5).map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="px-5 py-3 md:py-4 font-semibold text-base transition-colors duration-200 text-white hover:text-secondary"
                >
                  {item.name}
                </Link>
              ))}

              {/* Fakultas Dropdown (Desktop) */}
              <div
                className="relative"
                onMouseEnter={() => setIsFakultasOpenDesktop(true)}
                onMouseLeave={() => setIsFakultasOpenDesktop(false)}
              >
                <button className="px-5 py-3 md:py-4 font-semibold text-base transition-colors duration-200 text-white hover:text-secondary inline-flex items-center gap-2">
                  Fakultas
                  <i className={`fas fa-chevron-down text-xs transition-transform ${isFakultasOpenDesktop ? 'rotate-180' : ''}`}></i>
                </button>

                {isFakultasOpenDesktop && (
                  <div className="absolute left-0 top-full z-50 mt-1 w-[720px] bg-white text-gray-800 rounded-lg shadow-xl ring-1 ring-black/10 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {faculties.map((fak, i) => (
                        <div key={i}>
                          <Link href="#fakultas" className="font-semibold text-primary hover:underline">
                            {fak.fakultas}
                          </Link>
                          <ul className="mt-3 space-y-2">
                            {(fak.program_studi || []).map((prodi, j) => (
                              <li key={j}>
                                <Link
                                  href="#fakultas"
                                  className="text-sm text-gray-700 hover:text-primary"
                                >
                                  • {prodi.nama} ({prodi.jenjang})
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-secondary">
            {/* Left cluster */}
            <div className="flex items-center gap-3">
              {/* Hamburger Menu */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2"
                aria-label="Buka menu"
              >
                <i className="fas fa-bars text-xl"></i>
              </button>

              {/* Logo */}
              <Link href="#beranda" className="flex items-center gap-2">
                <Image
                  src="/img/ucic-logo.svg"
                  alt="UCIC Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <div className="text-sm leading-tight">
                  <div className="font-semibold">UCIC</div>
                  <div className="opacity-90">Universitas CIC</div>
                </div>
              </Link>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Language Selector */}
              <div className="relative">
                <button
                  className="flex items-center gap-1"
                  onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                  aria-label="Pilih bahasa"
                >
                  <div className="w-4 h-4 rounded-full overflow-hidden">
                    <Image
                      src="https://flagcdn.com/w20/id.png"
                      alt="ID"
                      width={16}
                      height={12}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-bold">ID</span>
                  <i className="fas fa-chevron-down text-xs"></i>
                </button>

                {isLanguageDropdownOpen && (
                  <div className="absolute top-full right-0 mt-1 bg-white shadow-lg rounded border py-1 z-50">
                    <Link
                      href="#"
                      className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 text-gray-700 whitespace-nowrap"
                      onClick={() => setIsLanguageDropdownOpen(false)}
                    >
                      <div className="w-4 h-4 rounded-full overflow-hidden">
                        <Image
                          src="https://flagcdn.com/w20/gb.png"
                          alt="EN"
                          width={16}
                          height={12}
                          className="object-cover"
                        />
                      </div>
                      <span className="text-sm">EN</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* PMB Button */}
              <Link
                href={uni?.pmb?.tautan_pendaftaran || 'https://pmb.cic.ac.id'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-secondary text-primary font-semibold px-3 py-1.5 rounded-md hover:opacity-90 transition text-sm"
              >
                <span>Info PMB</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex flex-col">
            {/* Mobile Menu Header */}
            <div className="bg-secondary-bg flex items-center justify-between px-4 py-3 border-b border-secondary">
              {/* Close + Logo */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2"
                  aria-label="Tutup menu"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>

                {/* Logo */}
                <Link
                  href="#beranda"
                  className="flex items-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Image
                    src="/img/cic.png"
                    alt="UCIC Logo"
                    width={200}
                    height={40}
                    className="object-contain"
                  />
                </Link>
              </div>

              {/* Right Actions */}
              <div className="flex items-center gap-3">
                {/* Language Selector */}
                <div className="relative">
                  <button
                    className="flex items-center gap-1"
                    onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                    aria-label="Pilih bahasa"
                  >
                    <div className="w-4 h-4 rounded-full overflow-hidden">
                      <Image
                        src="https://flagcdn.com/w20/id.png"
                        alt="ID"
                        width={16}
                        height={12}
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm font-bold">ID</span>
                    <i className="fas fa-chevron-down text-xs"></i>
                  </button>

                  {isLanguageDropdownOpen && (
                    <div className="absolute top-full right-0 mt-1 bg-white shadow-lg rounded border py-1 z-50">
                      <Link
                        href="#"
                        className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 text-gray-700 whitespace-nowrap"
                        onClick={() => {
                          setIsLanguageDropdownOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        <div className="w-4 h-4 rounded-full overflow-hidden">
                          <Image
                            src="https://flagcdn.com/w20/gb.png"
                            alt="EN"
                            width={16}
                            height={12}
                            className="object-cover"
                          />
                        </div>
                        <span className="text-sm">EN</span>
                      </Link>
                    </div>
                  )}
                </div>

                {/* PMB Button */}
                <Link
                  href={uni?.pmb?.tautan_pendaftaran || 'https://pmb.cic.ac.id'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-secondary text-primary font-semibold px-3 py-1.5 rounded-md hover:opacity-90 transition text-sm"
                >
                  <span>Info PMB</span>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex-1 overflow-y-auto bg-primary">
              {/* Menu Items */}
              <div className="px-4 py-6">
                {navItems.slice(0, 5).map((item, index) => (
                  <div key={index} className="border-b border-white/10 last:border-b-0">
                    <Link
                      href={item.href}
                      className="flex items-center justify-between py-4 text-lg font-medium transition-colors duration-200 hover:text-secondary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </div>
                ))}

                {/* Fakultas (Mobile collapsible) */}
                <div className="border-b border-white/10">
                  <button
                    className="w-full flex items-center justify-between py-4 text-lg font-medium hover:text-secondary"
                    onClick={() => setIsFakultasOpenMobile(!isFakultasOpenMobile)}
                  >
                    <span>Fakultas</span>
                    <i className={`fas fa-chevron-${isFakultasOpenMobile ? 'up' : 'down'} text-sm`}></i>
                  </button>

                  {isFakultasOpenMobile && (
                    <div className="pb-4">
                      {faculties.map((fak, i) => (
                        <div key={i} className="mb-3 last:mb-0">
                          <Link
                            href="#fakultas"
                            className="block text-base font-semibold text-secondary mb-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {fak.fakultas}
                          </Link>
                          <ul className="pl-3 space-y-2">
                            {(fak.program_studi || []).map((prodi, j) => (
                              <li key={j}>
                                <Link
                                  href="#fakultas"
                                  className="text-sm text-white/90 hover:text-secondary"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  • {prodi.nama} ({prodi.jenjang})
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile Menu Footer */}
            <div className="bg-secondary-bg border-t border-secondary">
              {/* Social Media */}
              <div className="flex justify-center gap-6 py-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className={`${social.icon} text-xl`}></i>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;