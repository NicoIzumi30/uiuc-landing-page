'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const topBarLinks = [
    { name: 'Email', href: 'https://ugmail.ugm.ac.id/' },
    { name: 'Perpustakaan', href: 'https://lib.ugm.ac.id/' },
    { name: 'Mahasiswa', href: 'https://ugm.ac.id/id/mahasiswa/' },
    { name: 'Staff', href: 'https://ugm.ac.id/id/staff/' },
    { name: 'Alumni', href: 'https://ugm.ac.id/id/alumni/' }
  ];

  const mainMenuItems = [
    { name: 'Pendaftaran', href: 'https://ugm.ac.id/id/', hasArrow: true },
    { name: 'Pendidikan', href: 'https://ugm.ac.id/id/', hasArrow: true },
    { name: 'Penelitian', href: 'https://ugm.ac.id/id/', hasArrow: true },
    { name: 'Pengabdian', href: 'https://ugm.ac.id/id/', hasArrow: true },
    { name: 'Layanan', href: 'https://ugm.ac.id/id/', hasArrow: true },
    { name: 'Tentang', href: 'https://ugm.ac.id/id/', hasArrow: true },
    { name: 'SDGs Portal', href: 'https://ugm.ac.id/id/', hasArrow: true },
    { name: 'Berita', href: 'https://ugm.ac.id/id/', active: true },
    { name: 'PIONIR 2025', href: 'https://pionir.ugm.ac.id/2025/' }
  ];

  const socialLinks = [
    { icon: 'fab fa-instagram', href: 'https://www.instagram.com/ugm.yogyakarta' },
    { icon: 'fab fa-youtube', href: 'https://m.youtube.com/@UGM.Yogyakarta' },
    { icon: 'fab fa-facebook', href: 'https://www.facebook.com/UGMYogyakarta/' },
    { icon: 'fab fa-twitter', href: 'https://twitter.com/UGMYogyakarta/' },
    { icon: 'fab fa-linkedin', href: 'https://id.linkedin.com/school/universitas-gadjah-mada-ugm-/' },
    { icon: 'fab fa-tiktok', href: 'https://www.tiktok.com/@ugm.id/' }
  ];

  return (
    <>
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <header className="w-full bg-primary text-white font-albert-sans">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              {/* Brand */}
              <Link href="https://ugm.ac.id/id" className="flex items-center gap-3">
                <Image
                  src="https://ugm.ac.id/wp-content/uploads/2022/11/ugm_header.png"
                  alt="UGM Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                />
                <div className="font-inter">
                  <div className="text-lg font-normal leading-tight">UNIVERSITAS</div>
                  <div className="text-lg font-normal leading-tight">GADJAH MADA</div>
                </div>
              </Link>

              {/* Right Cluster */}
              <div className="flex flex-col items-end gap-2">
                {/* Top row: socials | lang | search */}
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
                      <div className="absolute top-full right-0 mt-1 bg-white shadow-lg rounded border py-1 z-50">
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

                  {/* Search */}
                  <button className="hover:text-secondary transition-colors duration-200">
                    <i className="fas fa-search text-lg"></i>
                  </button>
                </div>

                {/* Bottom row: quick links */}
                <div className="flex items-center gap-6">
                  {topBarLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-secondary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

{/* Desktop Main Menu (keeps the menu strip with yellow top border) */}
        <div className="hidden lg:block bg-secondary-bg border-t border-secondary">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="flex items-center">
              {mainMenuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-5 py-3 md:py-4 font-semibold text-base transition-colors duration-200 ${
                    item.active ? 'text-secondary' : 'text-white hover:text-secondary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        {/* Mobile Header */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-secondary">
            {/* Hamburger Menu */}
            <div className='flex items-center gap-3'>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2"
              >
                <i className="fas fa-bars text-xl"></i>
              </button>

              {/* Logo */}
              <Link href="https://ugm.ac.id/id" className="flex items-center gap-2">
                <Image
                  src="https://ugm.ac.id/wp-content/uploads/2022/11/ugm_header.png"
                  alt="UGM Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <div className="font-inter text-sm">
                  <div className="leading-tight">UNIVERSITAS</div>
                  <div className="leading-tight">GADJAH MADA</div>
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

              {/* Search */}
              <button className="p-1">
                <i className="fas fa-search text-lg"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex flex-col">
            {/* Mobile Menu Header */}
            <div className="bg-primary flex items-center justify-between px-4 py-3 border-b border-secondary">
              {/* Close Button */}
              <div className='flex items-center gap-3'>

                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>

                {/* Logo */}
                <Link
                  href="https://ugm.ac.id/id"
                  className="flex items-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Image
                    src="https://ugm.ac.id/wp-content/uploads/2022/11/ugm_header.png"
                    alt="UGM Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  <div className="font-inter text-sm">
                    <div className="leading-tight">UNIVERSITAS</div>
                    <div className="leading-tight">GADJAH MADA</div>
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

                {/* Search */}
                <button className="p-1">
                  <i className="fas fa-search text-lg"></i>
                </button>
              </div>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex-1 overflow-y-auto bg-secondary-bg">
              {/* Menu Items */}
              <div className="px-4 py-6">
                {mainMenuItems.map((item, index) => (
                  <div key={index} className="border-b border-white/10 last:border-b-0">
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-between py-4 text-lg font-medium transition-colors duration-200 ${item.active ? 'text-secondary' : 'hover:text-secondary'
                        }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>{item.name}</span>
                      {item.hasArrow && <i className="fas fa-chevron-right text-sm text-white/70"></i>}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Menu Footer */}
            <div className="bg-primary border-t border-secondary">
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

              {/* Footer Links */}
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pb-4 px-4">
                {topBarLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors duration-200 text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
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