"use client"

import { Calendar, ChevronRight, Megaphone } from "lucide-react"

const announcementData = [
  {
    id: 1,
    title: "INFORMASI PELAKSANAAN WISUDA PERIODE I TA 2025/2026 BULAN AGUSTUS 2025",
    date: "Sunday, August 17, 2025 - 09:44",
    type: "info"
  },
  {
    id: 2,
    title: "HARI LIBUR NASIONAL DAN CUTI BERSAMA UNY TAHUN 2025",
    date: "Tuesday, August 12, 2025 - 09:21",
    type: "holiday"
  },
  {
    id: 3,
    title: "PELAKSANAAN PELATIHAN TEKNOLOGI INFORMASI DAN KOMUNIKASI LITERASI AKADEMIK DAN TRANSFORMASI DIGITAL BAGI MAHASISWA BARU UNY ANGKATAN 2025/2026",
    date: "Monday, August 11, 2025 - 14:51",
    type: "training"
  },
  {
    id: 4,
    title: "INFORMASI AWAL WISUDA AGUSTUS 2025",
    date: "Friday, August 8, 2025 - 15:48",
    type: "info"
  },
  {
    id: 5,
    title: "TENDER PASCAKUALIFIKASI PEMBANGUNAN GEDUNG FAKULTAS HUKUM UNIVERSITAS NEGERI YOGYAKARTA TAHUN 2025",
    date: "Friday, August 8, 2025 - 14:17",
    type: "tender"
  },
  {
    id: 6,
    title: "TENDER PASCAKUALIFIKASI PEMBANGUNAN GEDUNG FAKULTAS HUKUM UNIVERSITAS NEGERI YOGYAKARTA TAHUN 2025",
    date: "Friday, August 8, 2025 - 14:17",
    type: "tender"
  }
]

const eventData = [
  {
    id: 1,
    title: "ODD SEMESTER FINAL EXAM EXHIBITION FOR THE 2024-2025 ACADEMIC YEAR",
    subtitle: "",
    day: "27",
    month: "Feb",
    year: "2025",
    date: "February 27 - February 27, 2025",
    time: "08.30 to 12.00",
    location: "3rd Floor Audit Hall"
  },
  {
    id: 2,
    title: "International Conference of Ethics on Business, Economics, and Social Science (ICEBESS) 2025",
    subtitle: "",
    day: "18",
    month: "Oct",
    year: "2025",
    date: "October 18, 2025",
    time: "09.00 to 17.00",
    location: "Main Auditorium"
  },
  {
    id: 3,
    title: "WISUDA AGUSTUS 2025",
    subtitle: "",
    day: "26",
    month: "Aug",
    year: "2025",
    date: "August 26, 2025",
    time: "08.00 to 12.00",
    location: "Sports Hall"
  },
  {
    id: 4,
    title: "Pelepasan KKN dan atau PK Semester Gasal 2025/2026",
    subtitle: "",
    day: "21",
    month: "Jul",
    year: "2025",
    date: "July 21, 2025", 
    time: "09.00 to 11.00",
    location: "Main Hall"
  },
  {
    id: 5,
    title: "WISUDA Periode Mei 2025",
    subtitle: "",
    day: "31",
    month: "May",
    year: "2025",
    date: "May 31, 2025",
    time: "08.00 to 12.00",
    location: "Sports Hall"
  }
]

export default function Announcement() {
  return (
    <div className="py-12 sm:py-16 bg-white relative overflow-hidden">      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-start">
          
          {/* PENGUMUMAN Section */}
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <Megaphone className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">PENGUMUMAN</h2>
            </div>
            
            <div className="space-y-4 sm:space-y-6 flex-1">
              {announcementData.map((item) => (
                <div key={item.id} className="group cursor-pointer">
                  <div className="border-b border-gray-200 pb-3 sm:pb-4 hover:border-primary/30 transition-colors">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* View More Button */}
            <div className="mt-6 sm:mt-8">
              <button className="flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 group text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start">
                <Megaphone className="h-4 w-4" />
                <span className="font-medium">PENGUMUMAN LAINNYA</span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* EVENT/KEGIATAN Section */}
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">EVENT/KEGIATAN</h2>
            </div>
            
            <div className="space-y-3 sm:space-y-4 flex-1">
              {eventData.map((event) => (
                <div 
                  key={event.id} 
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 border border-gray-200 rounded-lg hover:border-primary/50 hover:bg-gray-50 transition-all duration-300 cursor-pointer group"
                >
                  {/* Date Box */}
                  <div className="flex-shrink-0 bg-gray-50 group-hover:bg-primary/10 rounded-lg p-2 sm:p-3 text-center min-w-[60px] sm:min-w-[80px] transition-colors">
                    <div className="text-lg sm:text-2xl font-bold text-primary">{event.day}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{event.month}</div>
                    <div className="text-xs text-gray-500">{event.year}</div>
                  </div>
                  
                  {/* Event Content */}
                  <div className="flex-1 min-w-0">
                    {/* Event Title */}
                    <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1 sm:mb-2 group-hover:text-primary transition-colors leading-tight">
                      {event.title}
                    </h3>
                    
                    {/* Event Subtitle (if exists) */}
                    {event.subtitle && (
                      <h4 className="text-xs sm:text-sm font-semibold text-primary mb-1 sm:mb-2">
                        {event.subtitle}
                      </h4>
                    )}
                    
                    {/* Full Date */}
                    <div className="text-xs sm:text-sm text-primary font-medium mb-1">
                      {event.date} -  {event.time}
                    </div>
                    
                    {/* Location */}
                    <div className="text-xs sm:text-sm text-gray-500">
                      {event.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* View More Button */}
            <div className="mt-6 sm:mt-8">
              <button className="flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 group text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start">
                <Calendar className="h-4 w-4" />
                <span className="font-medium">KEGIATAN LAINNYA</span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
