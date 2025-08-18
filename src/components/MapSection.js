"use client"

import uni from "@/data/university-data.json"
import { MapPin } from "lucide-react"

function buildEmbedUrl(url) {
  if (!url) return "https://www.google.com/maps?q=Universitas+Catur+Insan+Cendekia+Cirebon&output=embed"
  try {
    const hasOutput = url.includes("output=embed")
    return hasOutput ? url : (url.includes("?") ? `${url}&output=embed` : `${url}?output=embed`)
  } catch {
    return "https://www.google.com/maps?q=Universitas+Catur+Insan+Cendekia+Cirebon&output=embed"
  }
}

export default function MapSection() {
  const mapsUrl = uni?.identitas?.lokasi_google_maps || ""
  const embedUrl = buildEmbedUrl(mapsUrl)

  return (
    <section id="lokasi" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <MapPin className="h-7 w-7 text-primary" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Lokasi Kampus
            </h2>
          </div>
          <p className="text-gray-600">
            {uni?.identitas?.alamat || "Jl. Kesambi No.202, Kota Cirebon, Jawa Barat"}
          </p>
        </div>

        {/* Map Embed */}
        <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-200">
          <div className="aspect-[16/9] bg-gray-100">
            <iframe
              src={embedUrl}
              title="Peta Lokasi UCIC"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

      </div>
    </section>
  )
}