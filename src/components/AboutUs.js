"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react"

const menuItems = [
  { id: "welcome", label: "Sambutan Rektor" },
  { id: "history", label: "Sejarah UCIC" },
  { id: "vision", label: "Visi, Misi, & Tujuan" },
]

const contentData = {
  welcome: {
    title: "SAMBUTAN REKTOR",
    content: `Selamat datang di Universitas Catur Insan Cendekia (UCIC). Kami berkomitmen menghadirkan pendidikan berkualitas yang berorientasi pada teknologi dan kewirausahaan, serta membentuk lulusan berkarakter, berintegritas, dan siap bersaing di era global.`,
  },
  vision: {
    title: "VISI, MISI, DAN TUJUAN",
    content: `UCIC menjalankan peran sebagai perguruan tinggi berbasis pengetahuan yang berkolaborasi dengan dunia usaha, industri, dan pemerintah daerah. Visi, misi, dan tujuan UCIC sebagai berikut:`,
    expandableItems: [
      {
        id: "vision",
        title: "Visi UCIC",
        content:
          '"Menjadi universitas yang berorientasi pada teknologi dan kewirausahaan untuk mendukung masyarakat daerah dengan menghasilkan lulusan yang mampu merespons perubahan zaman."',
        defaultExpanded: true,
      },
      {
        id: "mission",
        title: "Misi UCIC",
        content:
          "Menyelenggarakan pendidikan bermutu yang mengintegrasikan teknologi dan kewirausahaan, mendorong inovasi, serta menyiapkan lulusan menjadi pemimpin yang bermanfaat bagi masyarakat.",
        defaultExpanded: false,
      },
      {
        id: "goals",
        title: "Tujuan UCIC",
        content:
          "Menjadi institusi terkemuka dalam pendidikan teknologi dan kewirausahaan, membangun kemitraan strategis, serta menghasilkan lulusan yang inovatif, beretika, dan berdaya saing global.",
        defaultExpanded: false,
      },
    ],
  },
  history: {
    title: "SEJARAH UCIC",
    content: `UCIC berdiri untuk menjembatani kebutuhan dunia akademik dan industri. Berlokasi di Kota Cirebon, UCIC terus berkembang melalui pembaruan kurikulum, peningkatan fasilitas, dan kolaborasi dengan berbagai mitra agar relevan dengan kebutuhan masa kini.`,
  },
}

export default function AboutUsPage() {
  const [activeMenu, setActiveMenu] = useState("vision")
  const [expandedItems, setExpandedItems] = useState(["vision"])

  const toggleExpanded = (id) => {
    setExpandedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const MenuItems = ({ className = "" }) => (
    <div className={`${className}`}>
      <div className="p-4">
        <nav className="space-y-3">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveMenu(item.id)
              }}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-200 border ${
                activeMenu === item.id
                  ? "bg-primary text-white font-medium border-primary shadow-lg"
                  : "text-gray-600 hover:bg-gray-50 border-gray-200 hover:border-gray-300"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )

  const renderContent = () => {
    const currentContent = contentData[activeMenu]

    return (
      <div className="max-w-4xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 uppercase tracking-wide">
            {currentContent.title}
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed text-sm lg:text-base whitespace-pre-line">
            {currentContent.content}
          </p>

          {/* Expandable Sections - only for vision menu */}
          {activeMenu === "vision" && currentContent.expandableItems && (
            <div className="space-y-4">
              {currentContent.expandableItems.map((item) => {
                const isExpanded = expandedItems.includes(item.id)

                return (
                  <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleExpanded(item.id)}
                      className={`w-full flex items-center justify-between p-4 text-left transition-colors ${
                        isExpanded ? "bg-primary text-white" : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded flex items-center justify-center ${
                            isExpanded ? "bg-secondary" : "bg-gray-400"
                          }`}
                        >
                          {isExpanded ? (
                            <span className="text-white text-lg">−</span>
                          ) : (
                            <span className="text-white text-lg">+</span>
                          )}
                        </div>
                        <span className="font-medium text-sm lg:text-base">{item.title}</span>
                      </div>
                      {isExpanded ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                    </button>

                    {isExpanded && (
                      <div className="p-6 bg-white border-t">
                        <p className="text-gray-600 leading-relaxed text-sm lg:text-base italic">{item.content}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div id="profil" className="min-h-fit bg-white">
      <div className="text-center py-8">
        <div className="flex items-center justify-center gap-3 mb-2">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">Tentang Kami</h1>
        </div>
      </div>

      <div className="lg:flex mx-auto max-w-7xl">
        {/* Mobile Menu - Always visible on mobile */}
        <div className="lg:hidden border-b bg-gray-50">
          <MenuItems />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block w-80 p-6">
          <MenuItems />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 lg:p-8 ">{renderContent()}</div>
      </div>
    </div>
  )
}

