"use client"

import Marquee from "react-fast-marquee"

const collaborationData = [
  {
    id: 1,
    name: "PT. Telkom Indonesia",
    logo: "/img/partners/telkom.svg",
    type: "Industri"
  },
  {
    id: 2,
    name: "Bank BCA",
    logo: "/img/partners/bca.svg",
    type: "Perbankan"
  },
  {
    id: 3,
    name: "Gojek",
    logo: "/img/partners/gojek.svg",
    type: "Teknologi"
  },
  {
    id: 4,
    name: "Shopee",
    logo: "/img/partners/shopee.svg",
    type: "E-commerce"
  },
  {
    id: 5,
    name: "Microsoft",
    logo: "/img/partners/microsoft.svg",
    type: "Teknologi"
  },
  {
    id: 6,
    name: "Google",
    logo: "/img/partners/google.svg",
    type: "Teknologi"
  },
  {
    id: 7,
    name: "Tokopedia",
    logo: "/img/partners/tokopedia.svg",
    type: "E-commerce"
  },
  {
    id: 8,
    name: "Garuda Indonesia",
    logo: "/img/partners/garuda.svg",
    type: "Penerbangan"
  },
  {
    id: 9,
    name: "Astra International",
    logo: "/img/partners/astra.svg",
    type: "Otomotif"
  },
  {
    id: 10,
    name: "Unilever",
    logo: "/img/partners/unilever.svg",
    type: "Consumer Goods"
  },
  {
    id: 11,
    name: "Pertamina",
    logo: "/img/partners/pertamina.svg",
    type: "Energi"
  },
  {
    id: 12,
    name: "Grab",
    logo: "/img/partners/grab.svg",
    type: "Teknologi"
  }
]

// Create placeholder SVG logos
const createPlaceholderLogo = (name, color) => (
  `data:image/svg+xml,${encodeURIComponent(`
    <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="60" rx="8" fill="${color}"/>
      <text x="60" y="30" text-anchor="middle" dominant-baseline="middle" fill="white" font-family="Arial" font-size="10" font-weight="bold">${name}</text>
    </svg>
  `)}`
)

export default function Collaboration() {
  // Add placeholder logos to data
  const partnersWithLogos = collaborationData.map((partner, index) => ({
    ...partner,
    logo: createPlaceholderLogo(partner.name.split(' ')[0], `hsl(${index * 30}, 70%, 50%)`)
  }))

  // Duplicate data multiple times for infinite effect
  const firstRow = [...partnersWithLogos.slice(0, 6), ...partnersWithLogos.slice(0, 6), ...partnersWithLogos.slice(0, 6)]
  const secondRow = [...partnersWithLogos.slice(6, 12), ...partnersWithLogos.slice(6, 12), ...partnersWithLogos.slice(6, 12)]

  return (
    <div className="py-16 bg-white overflow-hidden">
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
            {firstRow.map((partner) => (
              <div 
                key={`first-${partner.id}`} 
                className="mx-6 flex flex-col items-center group cursor-pointer"
              >
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 border border-gray-100">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-12 w-auto object-contain mb-3"
                  />
                  <div className="text-center">
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">{partner.name}</h4>
                    <span className="text-xs text-gray-500 px-2 py-1 bg-gray-100 rounded-full">
                      {partner.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Benefits Section */}
        {/* <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Program Magang</h3>
            <p className="text-sm text-gray-600">
              Kesempatan magang di perusahaan ternama untuk pengalaman kerja yang berharga
            </p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Job Placement</h3>
            <p className="text-sm text-gray-600">
              Peluang kerja langsung setelah lulus melalui program rekrutmen partner
            </p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Industry Projects</h3>
            <p className="text-sm text-gray-600">
              Projek riil dari industri untuk pengalaman pembelajaran yang aplikatif
            </p>
          </div>
        </div> */}

      </div>
    </div>
  )
}
