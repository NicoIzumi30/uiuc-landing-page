"use client"

import { Calendar, ChevronRight, Megaphone } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const announcementData = [
  {
    id: 1,
    title: "INFORMASI PELAKSANAAN WISUDA PERIODE I TA 2025/2026 BULAN AGUSTUS 2025",
    date: "Sunday, August 17, 2025 - 09:44",
    type: "info"
  },
  {
    id: 2,
    title: "HARI LIBUR NASIONAL DAN CUTI BERSAMA UCIC TAHUN 2025",
    date: "Tuesday, August 12, 2025 - 09:21",
    type: "holiday"
  },
  {
    id: 3,
    title: "PELAKSANAAN PELATIHAN TEKNOLOGI INFORMASI DAN KOMUNIKASI LITERASI AKADEMIK DAN TRANSFORMASI DIGITAL BAGI MAHASISWA BARU UCIC ANGKATAN 2025/2026",
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
  const { t } = useLanguage();
  return (
    <section id="pengumuman" className="py-12 sm:py-16 bg-primary  relative overflow-hidden">
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-start">
          
          {/* PENGUMUMAN Section */}
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <Megaphone className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" />
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{t('announce.heading')}</h2>
            </div>
            
            <div className="space-y-4 sm:space-y-6 flex-1">
              {announcementData.map((item) => (
                <div key={item.id} className="group hover:cursor-pointer">
                  <div className="border-b border-white/20 pb-3 sm:pb-4 hover:border-white/40 transition-colors">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-secondary transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* View More Button */}
            <div className="mt-6 sm:mt-8">
              <button className="flex items-center gap-2 border border-white text-white hover:border-none hover:bg-secondary hover:text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 group text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start">
                <Megaphone className="h-4 w-4" />
                <span className="font-medium">{t('announce.more')}</span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* EVENT/KEGIATAN Section */}
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" />
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{t('events.heading')}</h2>
            </div>
            
            <div className="space-y-3 sm:space-y-4 flex-1">
              {eventData.map((event) => (
                <div 
                  key={event.id} 
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 border border-white/20 rounded-lg hover:border-secondary/60 hover:bg-white/5 transition-all duration-300 hover:cursor-pointer group"
                >
                  {/* Date Box */}
                  <div className="flex-shrink-0 bg-white/10 group-hover:bg-white/15 rounded-lg p-2 sm:p-3 text-center min-w-[60px] sm:min-w-[80px] transition-colors">
                    <div className="text-lg sm:text-2xl font-bold text-white">{event.day}</div>
                    <div className="text-xs sm:text-sm text-white/70">{event.month}</div>
                    <div className="text-xs text-white/60">{event.year}</div>
                  </div>
                  
                  {/* Event Content */}
                  <div className="flex-1 min-w-0">
                    {/* Event Title */}
                    <h3 className="text-sm sm:text-base font-bold text-white mb-1 sm:mb-2 group-hover:text-secondary transition-colors leading-tight">
                      {event.title}
                    </h3>
                    
                    {/* Event Subtitle (if exists) */}
                    {event.subtitle && (
                      <h4 className="text-xs sm:text-sm font-semibold text-secondary mb-1 sm:mb-2">
                        {event.subtitle}
                      </h4>
                    )}
                    
                    {/* Full Date */}
                    <div className="text-xs sm:text-sm text-white font-medium mb-1">
                      {event.date} -  {event.time}
                    </div>
                    
                    {/* Location */}
                    <div className="text-xs sm:text-sm text-white/70">
                      {event.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* View More Button */}
            <div className="mt-6 sm:mt-8">
              <button className="flex items-center gap-2 border border-white text-white hover:border-none hover:bg-secondary hover:text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 group text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start">
                <Calendar className="h-4 w-4" />
                <span className="font-medium">{t('events.more')}</span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
