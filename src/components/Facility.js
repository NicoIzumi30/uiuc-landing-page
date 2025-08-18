"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const facilitiesData = [
  {
    id: 1,
    title: "Laboratorium Komputer",
    description: "Fasilitas komputer modern dengan perangkat terkini untuk pembelajaran teknologi.",
    image: "/img/lab-komputer.svg",
    category: "Akademik",
    gallery: [
      "/img/lab-komputer.svg",
      "/img/perpustakaan.svg",
      "/img/ruang-kuliah.svg",
      "/img/lab-komputer.svg",
      "/img/perpustakaan.svg"
    ]
  },
  {
    id: 2,
    title: "Perpustakaan Digital",
    description: "Koleksi buku digital dan ruang baca yang nyaman untuk mahasiswa.",
    image: "/img/perpustakaan.svg",
    category: "Akademik",
    gallery: [
      "/img/perpustakaan.svg",
      "/img/ruang-kuliah.svg",
      "/img/lab-komputer.svg",
      "/img/perpustakaan.svg",
      "/img/ruang-kuliah.svg"
    ]
  },
  {
    id: 3,
    title: "Ruang Kuliah",
    description: "Ruang kuliah ber-AC dengan proyektor dan sound system modern.",
    image: "/img/ruang-kuliah.svg",
    category: "Akademik",
    gallery: [
      "/img/ruang-kuliah.svg",
      "/img/lab-komputer.svg",
      "/img/perpustakaan.svg",
      "/img/ruang-kuliah.svg",
      "/img/lab-komputer.svg"
    ]
  },
  {
    id: 4,
    title: "Kantin Kampus",
    description: "Berbagai pilihan makanan dengan cita rasa lokal dan harga terjangkau.",
    image: "/img/lab-komputer.svg",
    category: "Fasilitas Umum",
    gallery: [
      "/img/lab-komputer.svg",
      "/img/perpustakaan.svg",
      "/img/ruang-kuliah.svg",
      "/img/lab-komputer.svg"
    ]
  },
  {
    id: 5,
    title: "Lapangan Olahraga",
    description: "Lapangan serbaguna untuk berbagai aktivitas olahraga mahasiswa.",
    image: "/img/perpustakaan.svg",
    category: "Rekreasi",
    gallery: [
      "/img/perpustakaan.svg",
      "/img/ruang-kuliah.svg",
      "/img/lab-komputer.svg",
      "/img/perpustakaan.svg"
    ]
  },
  {
    id: 6,
    title: "Auditorium",
    description: "Ruang serbaguna untuk seminar, konferensi, dan acara kampus.",
    image: "/img/ruang-kuliah.svg",
    category: "Akademik",
    gallery: [
      "/img/ruang-kuliah.svg",
      "/img/lab-komputer.svg",
      "/img/perpustakaan.svg",
      "/img/ruang-kuliah.svg",
      "/img/lab-komputer.svg"
    ]
  },
  {
    id: 7,
    title: "Masjid Kampus",
    description: "Tempat ibadah yang nyaman untuk seluruh civitas akademika.",
    image: "/img/lab-komputer.svg",
    category: "Fasilitas Umum",
    gallery: [
      "/img/lab-komputer.svg",
      "/img/perpustakaan.svg",
      "/img/ruang-kuliah.svg"
    ]
  },
  {
    id: 8,
    title: "Klinik Kesehatan",
    description: "Layanan kesehatan 24 jam untuk mahasiswa dan karyawan.",
    image: "/img/perpustakaan.svg",
    category: "Fasilitas Umum",
    gallery: [
      "/img/perpustakaan.svg",
      "/img/ruang-kuliah.svg",
      "/img/lab-komputer.svg",
      "/img/perpustakaan.svg"
    ]
  },
  {
    id: 9,
    title: "Co-working Space",
    description: "Ruang kerja bersama yang mendukung kreativitas dan kolaborasi.",
    image: "/img/ruang-kuliah.svg",
    category: "Akademik",
    gallery: [
      "/img/ruang-kuliah.svg",
      "/img/lab-komputer.svg",
      "/img/perpustakaan.svg",
      "/img/ruang-kuliah.svg"
    ]
  }
]

export default function Facility() {
  const [selectedFacility, setSelectedFacility] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Fasilitas Kampus
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nikmati berbagai fasilitas modern yang mendukung kegiatan akademik dan non-akademik di CIC University
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitiesData.map((facility) => (
            <div
              key={facility.id}
              onClick={() => openModal(facility)}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="h-80 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${facility.image})`,
                  backgroundColor: '#4F46E5'
                }}
              >
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
                    <span className="text-white/80 text-xs">Klik untuk melihat galeri</span>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
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
