"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

/**
 * Build facilitiesData by grouping images in /public/img/fasilitas by folder.
 * Each folder becomes one facility card with its own gallery. Only 9 shown initially,
 * with an option to show more. Images use native lazy loading.
 */

// List all images (paths relative to /public)
const fasilitasImages = [
  "/img/fasilitas/auditorium/1.jpeg",
  "/img/fasilitas/auditorium/2.jpeg",
  "/img/fasilitas/auditorium/3.jpeg",
  "/img/fasilitas/aula/1.jpg",
  "/img/fasilitas/aula/2.jpg",
  "/img/fasilitas/aula/3.jpg",
  "/img/fasilitas/aula/4.jpg",
  "/img/fasilitas/gedungA/Gedung A.jpeg",
  "/img/fasilitas/gedungB/Gedung B (1).jpeg",
  "/img/fasilitas/gedungB/Gedung B (2).jpeg",
  "/img/fasilitas/gedungB/Gedung B (3).jpeg",
  "/img/fasilitas/gedungC/Gedung C (1).jpeg",
  "/img/fasilitas/gedungC/Gedung C (2).jpeg",
  "/img/fasilitas/gedungC/Gedung C (3).jpeg",
  "/img/fasilitas/gedungD/Gedung D (1).jpeg",
  "/img/fasilitas/gedungD/Gedung D (2).jpeg",
  "/img/fasilitas/gedungUCIC/Gedung UCIC.jpeg",
  "/img/fasilitas/gedungUCIC/Gedung UCIC2.jpeg",
  "/img/fasilitas/gedungUCIC/Gedung UCIC3.jpeg",
  "/img/fasilitas/gedungUCIC/Gedung UCIC4.jpeg",
  "/img/fasilitas/gedungUCIC/Gedung UCIC5.jpeg",
  "/img/fasilitas/gedungUCIC/Gedung UCIC6.jpeg",
  "/img/fasilitas/halalCenter/1.jpeg",
  "/img/fasilitas/halalCenter/2.jpeg",
  "/img/fasilitas/halalCenter/4.jpeg",
  "/img/fasilitas/halalCenter/Lab Halal Center (6).jpeg",
  "/img/fasilitas/kwu/1.jpeg",
  "/img/fasilitas/kwu/2.jpeg",
  "/img/fasilitas/kwu/3.jpeg",
  "/img/fasilitas/kwu/4.jpeg",
  "/img/fasilitas/lab/1.jpeg",
  "/img/fasilitas/lab/2.jpeg",
  "/img/fasilitas/lab/3.jpeg",
  "/img/fasilitas/labMulmed/1.jpeg",
  "/img/fasilitas/labMulmed/2.jpeg",
  "/img/fasilitas/labMulmed/3.jpeg",
  "/img/fasilitas/labMulmed/4.jpeg",
  "/img/fasilitas/labMulmed/5.jpeg",
  "/img/fasilitas/labPrograming/1.jpeg",
  "/img/fasilitas/labPrograming/3.jpeg",
  "/img/fasilitas/labPrograming/Lab Programming (3).jpeg",
  "/img/fasilitas/perpus/1.jpeg",
  "/img/fasilitas/perpus/2.jpeg",
  "/img/fasilitas/perpus/3.jpeg",
  "/img/fasilitas/ruangBKM/1.jpeg",
  "/img/fasilitas/ruangBKM/2.jpeg",
  "/img/fasilitas/ruangBKM/4.jpeg",
  "/img/fasilitas/ruangBKM/Ruang BKM (4).jpeg",
  "/img/fasilitas/ruangDekan/1.jpeg",
  "/img/fasilitas/ruangDekan/2.jpeg",
  "/img/fasilitas/ruangDekan/3.jpeg",
  "/img/fasilitas/ruangDekan/4.jpeg",
  "/img/fasilitas/ruangDekan/5.jpeg",
  "/img/fasilitas/ruangkelas/1.jpeg",
  "/img/fasilitas/ruangkelas/2.jpeg",
  "/img/fasilitas/ruangkelas/3.jpeg",
  "/img/fasilitas/ruangkelas/4.jpeg",
  "/img/fasilitas/ruangkelas/5.jpeg",
  "/img/fasilitas/ruangkelas/6.jpeg",
  "/img/fasilitas/ruangkelas/7.jpeg",
  "/img/fasilitas/ruangkelas/8.jpeg",
  "/img/fasilitas/ruangkelas/9.jpeg",
  "/img/fasilitas/ruangKhusus/ Sanfrancisco.jpeg",
  "/img/fasilitas/ruangKhusus/barcellona.jpeg",
  "/img/fasilitas/ruangKhusus/Manchester.jpeg",
  "/img/fasilitas/ruangKhusus/Paris.jpeg",
  "/img/fasilitas/ruangKhusus/Roma.jpeg",
  "/img/fasilitas/ruangKhusus/Vancover.jpeg",
  "/img/fasilitas/ruangRapat/1.jpeg",
  "/img/fasilitas/ruangRapat/2.jpeg",
  "/img/fasilitas/ruangRapat/3.jpeg",
  "/img/fasilitas/ruangRapat/4.jpeg",
  "/img/fasilitas/ruangRapat/5.jpeg",
  "/img/fasilitas/ruangRapat/6.jpeg",
  "/img/fasilitas/ruangRapat/7.jpeg",
  "/img/fasilitas/ruangRapat/8.jpeg",
  "/img/fasilitas/ruangRapat/9.jpeg",
  "/img/fasilitas/ruangRapat/10.jpeg",
  "/img/fasilitas/SekretariatRektorat/1.jpeg",
  "/img/fasilitas/SekretariatRektorat/2.jpeg",
  "/img/fasilitas/SekretariatRektorat/3.jpeg",
  "/img/fasilitas/ucicHub/1.jpeg",
  "/img/fasilitas/ucicHub/2.jpeg",
  "/img/fasilitas/ucicHub/3.jpeg",
  "/img/fasilitas/ucicHub/4.jpeg",
  "/img/fasilitas/ucicHub/5.jpeg",
]

// Encode URLs to safely handle spaces and parentheses
const allImages = fasilitasImages.map((p) => encodeURI(p))

// Group images by folder name under /img/fasilitas/<folder>/
const groupedByFolder = allImages.reduce((acc, p) => {
  const parts = decodeURI(p).split("/")
  const folder = parts[3] || "lainnya"
  if (!acc[folder]) acc[folder] = []
  acc[folder].push(p)
  return acc
}, {})

// Map folder slug -> human-readable title
const folderTitleMap = {
  auditorium: "Ruang Auditorium",
  aula: "Aula",
  gedungA: "Gedung A",
  gedungB: "Gedung B",
  gedungC: "Gedung C",
  gedungD: "Gedung D",
  gedungUCIC: "Gedung UCIC",
  halalCenter: "Lab Halal Center",
  kwu: "Lab Kewirausahaan",
  lab: "Laboratorium Komputer",
  labMulmed: "Lab Multimedia dan Digital Marketing",
  labPrograming: "Lab Programming",
  perpus: "Perpustakaan",
  ruangBKM: "Ruang BKM",
  ruangDekan: "Ruang Dekan",
  ruangkelas: "Ruang Kelas",
  ruangKhusus: "Ruang Khusus",
  ruangRapat: "Ruang Rapat",
  SekretariatRektorat: "Sekretariat Rektorat",
  ucicHub: "UCIC Hub",
}

// Category inference by title
function getCategory(title) {
  if (/lab|perpustakaan|ruang\s+(kuliah|kelas)|auditorium|aula|programming|multimedia/i.test(title)) return "Akademik"
  if (/rapat|bkm|dekan|sekretariat|ucic\s*hub|gedung|khusus/i.test(title)) return "Fasilitas Umum"
  return "Lainnya"
}

// Description inference by title
function getDescription(title) {
  if (/perpustakaan/i.test(title)) return "Perpustakaan dengan koleksi referensi dan ruang baca yang nyaman."
  if (/lab.*(komputer|programming)/i.test(title)) return "Laboratorium komputer untuk praktikum dan pengembangan perangkat lunak."
  if (/lab.*multimedia/i.test(title)) return "Laboratorium multimedia dan digital marketing untuk produksi konten kreatif."
  if (/lab.*kewirausahaan/i.test(title)) return "Laboratorium kewirausahaan untuk praktik bisnis dan inkubasi ide."
  if (/halal\s*center/i.test(title)) return "Lab Halal Center sebagai dukungan penelitian dan pengujian."
  if (/ruang\s+kuliah|ruang\s+kelas/i.test(title)) return "Ruang kelas berfasilitas proyektor dan pendingin ruangan."
  if (/auditorium|aula/i.test(title)) return "Ruang auditorium/aula untuk seminar, kuliah umum, dan kegiatan akademik."
  if (/ruang\s+rapat/i.test(title)) return "Ruang rapat untuk koordinasi akademik dan organisasi."
  if (/ruang\s+bkm/i.test(title)) return "Ruang BKM untuk layanan administrasi dan kemahasiswaan."
  if (/ruang\s+dekan/i.test(title)) return "Ruang Dekan untuk layanan administrasi fakultas."
  if (/sekretariat\s+rektorat/i.test(title)) return "Sekretariat Rektorat sebagai pusat layanan administratif."
  if (/ucic\s*hub/i.test(title)) return "UCIC Hub sebagai area kolaborasi, diskusi, dan kegiatan komunitas."
  if (/gedung/i.test(title)) return "Area gedung kampus sebagai fasilitas pendukung kegiatan."
  if (/ruang\s+khusus/i.test(title)) return "Ruang khusus tematik untuk kegiatan tertentu."
  return `Galeri ${title} di UCIC.`
}

// Sorting helpers
const categoryOrder = { "Akademik": 0, "Fasilitas Umum": 1, "Lainnya": 2 }
function titleWeight(t) {
  if (/perpustakaan/i.test(t)) return 0
  if (/lab.*(komputer|programming)/i.test(t)) return 1
  if (/lab.*multimedia/i.test(t)) return 2
  if (/lab.*kewirausahaan/i.test(t)) return 3
  if (/lab.*halal/i.test(t)) return 4
  if (/ruang\s+(kuliah|kelas)/i.test(t)) return 5
  if (/auditorium|aula/i.test(t)) return 6
  if (/ucic\s*hub/i.test(t)) return 7
  if (/ruang\s+rapat/i.test(t)) return 8
  if (/ruang\s+bkm/i.test(t)) return 9
  if (/ruang\s+dekan/i.test(t)) return 10
  if (/sekretariat\s+rektorat/i.test(t)) return 11
  if (/gedung/i.test(t)) return 12
  if (/ruang\s+khusus/i.test(t)) return 13
  return 99
}

// Build facilitiesData from folder groups
const facilitiesData = Object.entries(groupedByFolder)
  .map(([folder, gallery], i) => {
    const title = folderTitleMap[folder] || folder.replace(/[-_]/g, " ").replace(/\b\w/g, (m) => m.toUpperCase())
    const category = getCategory(title)
    const description = getDescription(title)
    return {
      id: i + 1,
      title,
      description,
      category,
      image: gallery[0],
      gallery,
    }
  })
  .sort((a, b) => {
    const c = (categoryOrder[a.category] ?? 99) - (categoryOrder[b.category] ?? 99)
    if (c !== 0) return c
    const t = titleWeight(a.title) - titleWeight(b.title)
    if (t !== 0) return t
    return a.title.localeCompare(b.title, "id")
  })

export default function Facility() {
  const { t } = useLanguage();
  const [selectedFacility, setSelectedFacility] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showAll, setShowAll] = useState(false)
  const visibleFacilities = showAll ? facilitiesData : facilitiesData.slice(0, 9)

  const openModal = (facility) => {
    setSelectedFacility(facility)
    setCurrentImageIndex(0)
  }

  const closeModal = () => {
    setSelectedFacility(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedFacility) {
      setCurrentImageIndex((prev) => 
        prev === selectedFacility.gallery.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedFacility) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedFacility.gallery.length - 1 : prev - 1
      )
    }
  }

  const goToImage = (index) => {
    setCurrentImageIndex(index)
  }

  return (
    <div id="fasilitas" className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {t('facility.heading')}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('facility.subtitle')}
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleFacilities.map((facility) => (
            <div
              key={facility.id}
              onClick={() => openModal(facility)}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
            >
              {/* Background Image with lazy-loaded <img> */}
              <div className="h-80 w-full relative overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2 transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                    {facility.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed transform transition-all duration-300 opacity-90 group-hover:opacity-100">
                    {facility.description}
                  </p>
                  
                  {/* Gallery Indicator */}
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-white/80 text-xs">{t('facility.hint')}</span>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Load more / show less */}
        {facilitiesData.length > 9 && (
          <div className="mt-8 flex justify-center">
            {!showAll ? (
              <button
                onClick={() => setShowAll(true)}
                className="px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors shadow"
              >
                {t('facility.showMore', { n: facilitiesData.length - 9 })}
              </button>
            ) : (
              <button
                onClick={() => {
                  setShowAll(false)
                  window.scrollTo({ top: document.getElementById('fasilitas')?.offsetTop || 0, behavior: 'smooth' })
                }}
                className="px-6 py-3 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors shadow"
              >
                {t('facility.showLess')}
              </button>
            )}
          </div>
        )}
      </div>

      {/* Modal Gallery */}
      {selectedFacility && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-start justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{selectedFacility.title}</h2>
                <p className="text-gray-600 mt-1">{selectedFacility.description}</p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            {/* Main Image Display */}
            <div className="relative">
              <div className="aspect-video bg-gray-100 relative overflow-hidden">
                <img
                  src={selectedFacility.gallery[currentImageIndex]}
                  alt={`${selectedFacility.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Navigation Arrows */}
                {selectedFacility.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {selectedFacility.gallery.length}
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="p-6">
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {selectedFacility.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex
                          ? "border-primary scale-105"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
