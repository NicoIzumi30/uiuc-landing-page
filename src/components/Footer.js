"use client"

import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* University Info - Left Section */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold mb-2">CIC</h2>
              <h3 className="text-lg font-medium mb-4 opacity-90">
                Universitas Catur Insan Cendekia
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed max-w-md">
                Menjadi universitas yang berorientasi dalam bidang teknologi dan 
                kewirausahaan, untuk mendukung masyarakat daerah dengan 
                menghasilkan lulusan yang mampu untuk menanggapi 
                perubahan jaman.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-blue-100">
                    Jl. Kesambi No.202, Drajat, Kec. Kesambi, Kota Cirebon,
                    <br />
                    Jawa Barat 45133
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-sm text-blue-100">0231 - 2004 - 18</span>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-sm text-blue-100">0895 - 1231 - 4188</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-sm text-blue-100">info@cic.ac.id</span>
              </div>
            </div>
          </div>

          {/* Navigation Menus - Right Section */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Profil */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Profil</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                      Tentang Kami
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                      Struktur Organisasi
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                      Visi Misi & Tujuan
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                      Program Kerja
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                      Mekanisme PPEPP
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                      Siklus Audit
                    </a>
                  </li>
                </ul>
              </div>

              {/* Dokumen */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Dokumen</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                      Kebijakan Mutu
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                      Manual Mutu
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                      Standar Mutu
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                      Formulir Mutu
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                      SOP
                    </a>
                  </li>
                </ul>
              </div>

              {/* Laporan */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Laporan</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                      Akademik
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                      Non Akademik
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                      Benchmarking
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                      PPEPP
                    </a>
                  </li>
                </ul>
              </div>

              {/* Akreditasi & Lainnya */}
              <div className="space-y-8">
                {/* Akreditasi */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Akreditasi</h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                        Institusi
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                        Program Studi
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                        Perpustakaan
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Lainnya */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Lainnya</h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                        Galeri
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                        Agenda
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">
                        Download
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
              © CIC - Universitas Catur Insan Cendekia Kota Cirebon. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-primary pointer-events-none"></div>
    </footer>
  )
}
