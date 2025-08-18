"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react"

const menuItems = [
  { id: "welcome", label: "Rector's Welcome Speech" },
  { id: "history", label: "History of CIC" },
  { id: "vision", label: "Vision, Mission, & Goals" },
]

const contentData = {
  welcome: {
    title: "RECTOR'S WELCOME SPEECH",
    content: `Welcome to CIC University, where innovation meets tradition and academic excellence drives our mission forward. As we continue to build upon our strong foundation, we remain committed to providing world-class education that prepares our students for the challenges of tomorrow.

Our university stands as a beacon of knowledge, fostering an environment where creativity, critical thinking, and entrepreneurship flourish. We believe in nurturing not just academic prowess, but also the character and leadership qualities that will serve our graduates throughout their careers.

I invite you to explore the opportunities that await you at CIC University, where your journey toward success begins.`,
  },
  vision: {
    title: "VISION, MISSION, AND OBJECTIVES",
    content: `CIC University also carries out its role as a Knowledge based by collaborating with the business and industrial world as well as local governments throughout the Cirebon residency, both in the form of PBL (Problem Based Learning) based learning studies, sending practitioners to teach at CIC University as well as channeling students for field work practice and absorbing CIC University graduates and making CIC University graduates as strong entrepreneurs in the global era. To realize this, CIC University has a vision, mission, and objectives as follows:`,
    expandableItems: [
      {
        id: "vision",
        title: "CIC University Vision",
        content:
          '"To become a university oriented towards technology and entrepreneurship, to support local communities by producing graduates who are capable of responding to changing times."',
        defaultExpanded: true,
      },
      {
        id: "mission",
        title: "CIC University Mission",
        content:
          "To provide quality education that integrates technology and entrepreneurship, fostering innovation and preparing students to become leaders in their respective fields while contributing to community development.",
        defaultExpanded: false,
      },
      {
        id: "goals",
        title: "CIC University's Goals",
        content:
          "To establish CIC University as a leading institution in technology and entrepreneurship education, to develop strategic partnerships with industry and government, and to produce graduates who are innovative, ethical, and globally competitive.",
        defaultExpanded: false,
      },
    ],
  },
  history: {
    title: "HISTORY OF CIC",
    content: `CIC University was established with a vision to bridge the gap between academic learning and practical industry needs. Founded in the heart of Cirebon, our institution has grown from humble beginnings to become a recognized center of excellence in technology and entrepreneurship education.

Over the years, we have continuously evolved our programs and facilities to meet the changing demands of the global marketplace. Our commitment to innovation and quality education has earned us recognition both nationally and internationally.

Today, CIC University stands proud as an institution that not only imparts knowledge but also shapes the future leaders and entrepreneurs of tomorrow.`,
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
    <div className="min-h-[75vh] bg-white">
      <div className="text-center py-8">
        <div className="flex items-center justify-center gap-3 mb-2">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">About Us</h1>
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
