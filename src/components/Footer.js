"use client"

import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* University Info - Left Section */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src="/img/cic.png"
                  alt="Logo UCIC"
                  width={400}
                  height={48}
                  className="object-contain"
                />
              </div>
              <p className="text-blue-100 text-sm leading-relaxed max-w-md">
                {t('footer.vision')}
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-blue-100">
                    {t('footer.addressLine1')}
                    <br />
                    {t('footer.addressLine2')}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-sm text-blue-100">{t('footer.phone')}</span>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-sm text-blue-100">{t('footer.wa')}</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-sm text-blue-100">{t('footer.email')}</span>
              </div>
            </div>
          </div>

          {/* Navigation Menus - Right Section */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Profil */}
              <div>
                <h4 className="text-lg font-semibold mb-4">{t('footer.headings.profil')}</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                      {t('footer.items.tentangKami')}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                      {t('footer.items.strukturOrganisasi')}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                      {t('footer.items.visiMisiTujuan')}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                      {t('footer.items.programKerja')}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                      {t('footer.items.mekanismePpepp')}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                      {t('footer.items.siklusAudit')}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Dokumen */}
              <div>
                <h4 className="text-lg font-semibold mb-4">{t('footer.headings.dokumen')}</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                      {t('footer.items.kebijakanMutu')}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                      {t('footer.items.manualMutu')}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                      {t('footer.items.standarMutu')}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                      {t('footer.items.formulirMutu')}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                      {t('footer.items.sop')}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Laporan */}
              <div>
                <h4 className="text-lg font-semibold mb-4">{t('footer.headings.laporan')}</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                      {t('footer.items.akademik')}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                      {t('footer.items.nonAkademik')}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                      {t('footer.items.benchmarking')}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                      {t('footer.items.ppepp')}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Akreditasi & Lainnya */}
              <div className="space-y-8">
                {/* Akreditasi */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">{t('footer.headings.akreditasi')}</h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                        {t('footer.items.institusi')}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                        {t('footer.items.programStudi')}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                        {t('footer.items.perpustakaan')}
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Lainnya */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">{t('footer.headings.lainnya')}</h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                        {t('footer.items.galeri')}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                        {t('footer.items.agenda')}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                        {t('footer.items.download')}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="relative z-10 border-t border-blue-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-blue-200">
              {t('footer.copyright')}
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-primary pointer-events-none"></div>
    </footer>
  )
}
