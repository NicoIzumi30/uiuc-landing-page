"use client"

import { useState } from "react"

const facilitiesData = [
  {
    id: 1,
    title: "Laboratorium Komputer",
    description: "Fasilitas komputer modern dengan perangkat terkini untuk pembelajaran teknologi.",
    image: "/img/lab-komputer.svg",
    category: "Akademik"
  },
  {
    id: 2,
    title: "Perpustakaan Digital",
    description: "Koleksi buku digital dan ruang baca yang nyaman untuk mahasiswa.",
    image: "/img/perpustakaan.svg",
    category: "Akademik"
  },
  {
    id: 3,
    title: "Ruang Kuliah",
    description: "Ruang kuliah ber-AC dengan proyektor dan sound system modern.",
    image: "/img/ruang-kuliah.svg",
    category: "Akademik"
  },
  {
    id: 4,
    title: "Kantin Kampus",
    description: "Berbagai pilihan makanan dengan cita rasa lokal dan harga terjangkau.",
    image: "/img/lab-komputer.svg", // Placeholder
    category: "Fasilitas Umum"
  },
  {
    id: 5,
    title: "Lapangan Olahraga",
    description: "Lapangan serbaguna untuk berbagai aktivitas olahraga mahasiswa.",
    image: "/img/perpustakaan.svg", // Placeholder
    category: "Rekreasi"
  },
  {
    id: 6,
    title: "Auditorium",
    description: "Ruang serbaguna untuk seminar, konferensi, dan acara kampus.",
    image: "/img/ruang-kuliah.svg", // Placeholder
    category: "Akademik"
  },
  {
    id: 7,
    title: "Masjid Kampus",
    description: "Tempat ibadah yang nyaman untuk seluruh civitas akademika.",
    image: "/img/lab-komputer.svg", // Placeholder
    category: "Fasilitas Umum"
  },
  {
    id: 8,
    title: "Klinik Kesehatan",
    description: "Layanan kesehatan 24 jam untuk mahasiswa dan karyawan.",
    image: "/img/perpustakaan.svg", // Placeholder
    category: "Fasilitas Umum"
  },
  {
    id: 9,
    title: "Co-working Space",
    description: "Ruang kerja bersama yang mendukung kreativitas dan kolaborasi.",
    image: "/img/ruang-kuliah.svg", // Placeholder
    category: "Akademik"
  }
]

const categories = ["Semua", "Akademik", "Fasilitas Umum", "Rekreasi"]

export default function Facility() {
  const [selectedCategory, setSelectedCategory] = useState("Semua")

  const filteredFacilities = selectedCategory === "Semua" 
    ? facilitiesData 
    : facilitiesData.filter(facility => facility.category === selectedCategory)

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

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="h-80 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${facility.image})`,
                  backgroundColor: '#4F46E5' // Fallback color if image doesn't load
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
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
