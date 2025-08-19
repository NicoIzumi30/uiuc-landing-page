"use client"

import Marquee from "react-fast-marquee"
import { useLanguage } from "@/context/LanguageContext"

const collaborationData = [
  {
    id: 1,
    name: "Partner 1",
    logo: "/img/kerjasama/21.png",
    type: "Partner"
  },
  {
    id: 2,
    name: "Partner 2", 
    logo: "/img/kerjasama/ef.png",
    type: "Partner"
  },
  {
    id: 3,
    name: "Partner 3",
    logo: "/img/kerjasama/esda.png",
    type: "Partner"
  },
  {
    id: 4,
    name: "Partner 4",
    logo: "/img/kerjasama/pb.jpg",
    type: "Partner"
  }
]

export default function Collaboration() {
  // Duplicate data multiple times for infinite effect
  const firstRow = [...collaborationData, ...collaborationData, ...collaborationData, ...collaborationData]

  return (
    <section id="kerjasama" className="py-16 bg-white overflow-hidden">
      <div>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Kerjasama
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            CIC University telah menjalin kerjasama strategis dengan berbagai perusahaan terkemuka untuk memberikan kesempatan terbaik bagi mahasiswa kami
          </p>
        </div>

        {/* Marquee Section with Fade Effects */}
        <div className="relative overflow-hidden">
          {/* Left fade overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none"></div>
          
          {/* Right fade overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none"></div>
          
          <Marquee 
            speed={50} 
            gradient={true} 
            gradientColor={[255, 255, 255]} 
            gradientWidth={80}
            className="py-4"
            pauseOnHover={true}
            loop={0}
          >
            {firstRow.map((partner, index) => (
              <div 
                key={`partner-${partner.id}-${index}`} 
                className="mx-6 flex items-center justify-center group cursor-pointer"
              >
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 border border-gray-100 w-48 h-24 flex items-center justify-center">
                  <img 
                    src={partner.logo} 
                    alt={`Partner ${partner.id}`}
                    className="max-h-16 max-w-32 object-contain"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>

      </div>
    </section>
  )
}
