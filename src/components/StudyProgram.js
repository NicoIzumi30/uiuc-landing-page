"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, ExternalLink, Download, BookOpen, Monitor, Calculator, Users, Building2 } from "lucide-react"

// Computer Science Faculty Programs
const computerSciencePrograms = [
  {
    id: 1,
    name: "S1 - Informatics Engineering Study Program",
    description: "Program studi yang fokus pada pengembangan software, sistem informasi, dan teknologi komputer. Mahasiswa akan mempelajari pemrograman, database, jaringan komputer, dan kecerdasan buatan.",
    duration: "4 Tahun",
    degree: "S1 (Sarjana)",
    accreditation: "A",
    pdfUrl: "/pdf/biaya-teknik-informatika.html",
    color: "bg-blue-500"
  },
  {
    id: 2,
    name: "S1 - Information Systems Study Program",
    description: "Program studi yang menggabungkan teknologi informasi dengan manajemen bisnis. Fokus pada analisis sistem, manajemen proyek IT, dan pengembangan sistem informasi enterprise.",
    duration: "4 Tahun",
    degree: "S1 (Sarjana)",
    accreditation: "A",
    pdfUrl: "/pdf/biaya-teknik-informatika.html",
    color: "bg-green-500"
  },
  {
    id: 3,
    name: "S1 - Visual Communication Design Study Program",
    description: "Program studi yang mengembangkan kreativitas dalam komunikasi visual. Mempelajari desain digital, branding, ilustrasi, dan multimedia untuk berbagai media.",
    duration: "4 Tahun",
    degree: "S1 (Sarjana)",
    accreditation: "B",
    pdfUrl: "/pdf/biaya-teknik-informatika.html",
    color: "bg-pink-500"
  },
  {
    id: 4,
    name: "D3 - Informatics Management Study Program",
    description: "Program diploma yang fokus pada manajemen sistem informasi dan teknologi. Mempersiapkan tenaga ahli madya di bidang manajemen informatika.",
    duration: "3 Tahun",
    degree: "D3 (Diploma)",
    accreditation: "B",
    pdfUrl: "/pdf/biaya-teknik-informatika.html",
    color: "bg-indigo-500"
  },
  {
    id: 5,
    name: "D3 - Computerized Accounting Study Program",
    description: "Program diploma yang menggabungkan akuntansi dengan teknologi komputer. Fokus pada sistem akuntansi terkomputerisasi dan aplikasi keuangan.",
    duration: "3 Tahun",
    degree: "D3 (Diploma)",
    accreditation: "B",
    pdfUrl: "/pdf/biaya-teknik-informatika.html",
    color: "bg-teal-500"
  }
]

// Economics & Business Faculty Programs
const economicsBusinessPrograms = [
  {
    id: 6,
    name: "S1 - Management Study Program",
    description: "Program studi yang mempersiapkan mahasiswa menjadi pemimpin bisnis yang kompeten. Mempelajari manajemen strategis, keuangan, pemasaran, dan kewirausahaan.",
    duration: "4 Tahun",
    degree: "S1 (Sarjana)",
    accreditation: "A",
    pdfUrl: "/pdf/biaya-teknik-informatika.html",
    color: "bg-purple-500"
  },
  {
    id: 7,
    name: "S1 - Accounting Study Program",
    description: "Program studi yang fokus pada pencatatan, pengukuran, dan komunikasi informasi keuangan. Mempersiapkan mahasiswa menjadi akuntan profesional dan auditor.",
    duration: "4 Tahun",
    degree: "S1 (Sarjana)",
    accreditation: "A",
    pdfUrl: "/pdf/biaya-teknik-informatika.html",
    color: "bg-orange-500"
  },
  {
    id: 8,
    name: "D3 - Business Management Study Program",
    description: "Program diploma yang fokus pada praktik manajemen bisnis. Mempersiapkan tenaga ahli madya dalam bidang manajemen operasional dan administrasi bisnis.",
    duration: "3 Tahun",
    degree: "D3 (Diploma)",
    accreditation: "B",
    pdfUrl: "/pdf/biaya-teknik-informatika.html",
    color: "bg-amber-500"
  }
]

export default function StudyProgram() {
  const [expandedProgram, setExpandedProgram] = useState(null)

  const toggleExpansion = (programId) => {
    setExpandedProgram(expandedProgram === programId ? null : programId)
  }

  const handleViewPDF = (pdfUrl) => {
    window.open(pdfUrl, '_blank')
  }

  const handleDownloadPDF = (pdfUrl, programName) => {
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = `Biaya-${programName.replace(/\s+/g, '-')}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const renderProgramCard = (program) => {
    const isExpanded = expandedProgram === program.id
    
    return (
      <div
        key={program.id}
        className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 ${
          isExpanded ? 'shadow-2xl' : 'hover:shadow-xl'
        }`}
      >
        {/* Program Header */}
        <div className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 flex-1">
              
              {/* Program Info */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 break-words">
                    {program.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {program.description}
                </p>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={() => toggleExpansion(program.id)}
              className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 sm:px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto sm:ml-4"
            >
              <span className="text-sm sm:text-base">Lihat Biaya</span>
              {isExpanded ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Expanded Content - PDF Preview */}
        {isExpanded && (
          <div className="border-t border-gray-100 bg-gray-50">
            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                {/* PDF Preview */}
                <div className="bg-white rounded-xl shadow-inner p-3 sm:p-4 order-2 lg:order-1">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
                    <span className="text-sm sm:text-base">Preview Biaya Kuliah</span>
                  </h4>
                  
                  {/* PDF Iframe */}
                  <iframe
                    src={program.pdfUrl}
                    className="w-full h-64 sm:h-80 lg:h-96 rounded-lg border border-gray-200"
                    title={`Biaya ${program.name}`}
                  />
                </div>

                {/* PDF Actions */}
                <div className="space-y-3 sm:space-y-4 order-1 lg:order-2">
                  <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                      Informasi Program Studi
                    </h4>
                    <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Program:</span>
                        <span className="font-medium text-right">{program.name}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Jenjang:</span>
                        <span className="font-medium">{program.degree}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Durasi:</span>
                        <span className="font-medium">{program.duration}</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-gray-600">Akreditasi:</span>
                        <span className="font-medium">{program.accreditation}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2 sm:space-y-3">
                    <button
                      onClick={() => handleViewPDF(program.pdfUrl)}
                      className="w-full bg-primary hover:bg-primary-dark text-white px-4 sm:px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Buka PDF di Tab Baru
                    </button>
                    
                    <button
                      onClick={() => handleDownloadPDF(program.pdfUrl, program.name)}
                      className="w-full bg-secondary hover:bg-yellow-500 text-gray-800 px-4 sm:px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
                    >
                      <Download className="h-4 w-4" />
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
              Program Studi
            </h1>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Pilih program studi yang sesuai dengan minat dan bakat Anda. Setiap program dirancang untuk mempersiapkan lulusan yang kompeten dan siap berkarir.
          </p>
        </div>

        {/* Computer Science Faculty */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <Monitor className="h-8 w-8 text-primary" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Fakultas Ilmu Komputer
            </h2>
          </div>
          <div className="space-y-6">
            {computerSciencePrograms.map((program) => renderProgramCard(program))}
          </div>
        </div>

        {/* Economics & Business Faculty */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <Building2 className="h-8 w-8 text-primary" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Fakultas Ekonomi & Bisnis
            </h2>
          </div>
          <div className="space-y-6">
            {economicsBusinessPrograms.map((program) => renderProgramCard(program))}
          </div>
        </div>

      </div>
    </div>
  )
}
