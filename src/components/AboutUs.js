"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

const contentData = {
  welcome: {
    title: "SAMBUTAN REKTOR",
    content: `Assalamu'alaikum Wr. Wb., 

Puji syukur kehadirat Allah SWT yang tidak pernah berhenti melimpahkan rahmat dan hidayah-Nya untuk kita semua.

Kehadiran website Universitas CIC yang mudah diakses, akurat dan informatif, semoga dapat memudahkan keluarga besar civitas akademika Universitas CIC dan masyarakat luas untuk memperoleh informasi tentang Universitas CIC, pendaftaran, beasiswa, Sistem Informasi Manajemen Akademik (SIMAK), perpustakaan, kegiatan olahraga, iptek, seni budaya, penelitian dan informasi lainnya.

Berdirinya Universitas CIC dimulai dengan berdirinya Lembaga Pendidikan Kursus dan Pelatihan CIC (dahulu Cirebon Institute of Computer) pada tanggal 13 Januari 1984, yang artinya telah lebih dari 30 tahun konsisten dan berkomitmen berpartisipasi dalam dunia pendidikan.

Pada tahun 1999 Lembaga Pendidikan CIC mengembangkan diri dengan mendirikan Sekolah Tinggi Manajemen Informatika dan Komputer Catur Insan Cendekia (STMIK CIC) dengan izin operasional resmi dari Menteri Pendidikan Nasional nomor 123/D/O/1999 dan pada tanggal 21 Oktober 2019 STMIK CIC berubah status menjadi Universitas CIC yang telah mendapat persetujuan dari Kementerian Riset, Teknologi dan Pendidikan Tinggi.

Konsistensi Universitas CIC sebagai SEKOLAH IT (Information Technology) diharapkan mampu memberikan kontribusi positif berupa pengetahuan berbasis IT kepada dunia usaha dan industri serta mendukung langkah-langkah pemerintah daerah di seluruh karesidenan Cirebon menuju Good Corporate Governance.

Sejak tahun 2005, Universitas CIC telah mendapat akreditasi dari BAN-PT (Badan Akreditasi Nasional Perguruan Tinggi) untuk 4 (empat) program studi di dalam STMIK CIC, yaitu Program Studi Sistem Informasi, Program Studi Teknik Informatika, Program Studi Manajemen Informatika dan Program Studi Komputerisasi Akuntansi, sehingga STMIK CIC merupakan satu-satunya Sekolah Tinggi Komputer yang seluruh program studinya terakreditasi BAN-PT dan proaktif melanjutkan re-akreditasi setiap program studi di Universitas CIC.

Universitas CIC juga menjalankan perannya sebagai Knowledge based dengan berkolaborasi dengan dunia usaha dan industri serta pemerintah daerah di seluruh karesidenan Cirebon, baik dalam bentuk studi kurikulum berbasis PBL (Problem Based Learning), pengiriman praktisi untuk mengajar di Universitas CIC maupun menyalurkan mahasiswa untuk praktek kerja lapangan dan menyerap lulusan Universitas CIC serta menjadikan lulusan Universitas CIC menjadi wirausaha yang tangguh di era global.

Insya Allah, Universitas CIC akan menjadi institusi pendidikan tinggi di Cirebon yang mampu menghasilkan sumber daya manusia siap bersaing di pasar global, sesuai dengan Visi dan Misinya. Kami meminta dukungan dari semua pihak. Terima kasih.

Wassalamu'alaikum Wr.Wb.

Rektor Universitas CIC
Assoc. Prof. Dr. Chandra Lukita, SE, MM, M.TI.`,
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
    content: `CIC didirikan pada tahun 1984 sebagai lembaga pendidikan untuk kursus dan pelatihan. Pada tahun 1994, CIC mendirikan Akademi Perdagangan Widya Dharma. Kemudian lembaga pendidikan CIC berkembang dengan mendirikan Sekolah Tinggi Manajemen Informatika dan Komputer Catur Insan Cendekia (STMIK) pada tahun 1999. Pada tahun 2006 Akademi Perdagangan Widya Dharma berubah nama menjadi Akademi Perdagangan CIC.

Universitas Catur Insan Cendekia (UCIC) merupakan hasil penggabungan antara Akademi Perdagangan Catur Insan Cendekia dan Sekolah Tinggi Manajemen Informatika dan Komputer CIC (STMIK) pada tahun 2019, dan disetujui dengan diterbitkannya Keputusan Menteri Riset, Teknologi dan Pendidikan Tinggi Republik Indonesia Nomor 952/KPT/I/2019 tanggal 10 Oktober 2019. UCIC saat ini memiliki 2 Fakultas yaitu Fakultas Ekonomi dan Bisnis serta Fakultas Teknologi Informasi.

Universitas Catur Insan Cendekia (UCIC) sebagai holding untuk unit bisnis dan usaha di bawahnya. UCIC saat ini memiliki ekosistem di bidang pendidikan, kemanusiaan atau sosial, dan unit bisnis yang mendukung pelaksanaan kegiatan Tridharma Perguruan Tinggi dan menjadi pendapatan lain bagi UCIC. Di bidang pendidikan, terdapat Sekolah Internasional Cambridge Pelita Bangsa dari Playgroup hingga SMA dengan status akreditasi A di setiap jenjang yang didirikan pada tahun 2006, sekolah bahasa internasional EF English First Kota Cirebon yang didirikan pada tahun 1997, Enspire School of Digital Art (ESDA) pada tahun 2019, dan Code First yang didirikan pada tahun 2020.

Di bidang Sosial dan Kemasyarakatan terdapat Harapanku Insan Sejahtera yang didirikan pada tahun 2001, yang membantu penyandang disabilitas, serta mendampingi dan melatih kemandirian anak Down Syndrome melalui Griya Karya Harapanku. Di sektor unit bisnis, terdapat Bisnis Properti berupa Perumahan Taman Cipto yang didirikan pada tahun 2006 dan Perumahan Taman Wahidin yang didirikan pada tahun 1996. Usaha lainnya adalah Taman Cipto Sport Center, Taman Wahidin Sport Center, Retail Balmart dan Startup Code First.`,
    images: [
      {
        src: "/img/history/milestonecic.png",
        alt: "Milestone CIC University",
        title: "Milestone Perjalanan CIC University"
      },
      {
        src: "/img/history/ekosistemcic.png", 
        alt: "Ekosistem CIC University",
        title: "Ekosistem CIC University"
      }
    ]
  },
};

export default function AboutUsPage() {
  const { t } = useLanguage();
  const [activeMenu, setActiveMenu] = useState("vision");
  const [expandedItems, setExpandedItems] = useState(["vision"]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isWelcomeExpanded, setIsWelcomeExpanded] = useState(false);
  const [isHistoryExpanded, setIsHistoryExpanded] = useState(false);
  const menuIds = ["welcome", "history", "vision"];

  const toggleExpanded = (id) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getTruncatedContent = (content, percentage = 0.4) => {
    const words = content.split(' ');
    const truncateLength = Math.floor(words.length * percentage);
    return words.slice(0, truncateLength).join(' ');
  };

  const toggleWelcomeReadMore = () => {
    setIsWelcomeExpanded(!isWelcomeExpanded);
  };

  const toggleHistoryReadMore = () => {
    setIsHistoryExpanded(!isHistoryExpanded);
  };

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const MenuItems = ({ className = "" }) => (
    <div className={`${className}`}>
      <div className="p-4">
        <nav className="space-y-3">
          {menuIds.map((id) => (
            <button
              key={id}
              onClick={() => {
                setActiveMenu(id);
              }}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-200 border ${
                activeMenu === id
                  ? "bg-primary text-white font-medium border-primary shadow-lg"
                  : "text-gray-600 hover:bg-gray-50 border-gray-200 hover:border-gray-300"
              }`}
            >
              {t(`about.menu.${id}`)}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );

  const renderContent = () => {
    const currentContent = contentData[activeMenu];

    return (
      <div className="max-w-4xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 uppercase tracking-wide">
            {t(`about.titles.${activeMenu}`)}
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {activeMenu === "welcome" ? (
            <div>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base whitespace-pre-line">
                {isWelcomeExpanded 
                  ? currentContent.content 
                  : getTruncatedContent(currentContent.content)
                }
                {!isWelcomeExpanded && "..."}
              </p>
              <button
                onClick={toggleWelcomeReadMore}
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                {isWelcomeExpanded ? (
                  <>
                    <span>{t('about.readLess')}</span>
                    <ChevronDown className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    <span>{t('about.readMore')}</span>
                    <ChevronRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          ) : activeMenu === "history" ? (
            <div>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base whitespace-pre-line">
                {isHistoryExpanded 
                  ? currentContent.content 
                  : getTruncatedContent(currentContent.content)
                }
                {!isHistoryExpanded && "..."}
              </p>
              <button
                onClick={toggleHistoryReadMore}
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                {isHistoryExpanded ? (
                  <>
                    <span>{t('about.readLess')}</span>
                    <ChevronDown className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    <span>{t('about.readMore')}</span>
                    <ChevronRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          ) : (
            <p className="text-gray-600 leading-relaxed text-sm lg:text-base whitespace-pre-line">
              {currentContent.content}
            </p>
          )}

          {/* History Images - only for history menu */}
          {activeMenu === "history" && currentContent.images && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              {currentContent.images.map((image, index) => (
                <div 
                  key={index} 
                  className="relative rounded-xl shadow-lg overflow-hidden border border-gray-200 cursor-pointer group transition-all duration-300 hover:shadow-xl"
                  onClick={() => openImageModal(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={320}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Title on Image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-bold text-white text-lg lg:text-xl leading-tight">
                      {image.title}
                    </h3>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          )}

          {/* Expandable Sections - only for vision menu */}
          {activeMenu === "vision" && currentContent.expandableItems && (
            <div className="space-y-4">
              {currentContent.expandableItems.map((item) => {
                const isExpanded = expandedItems.includes(item.id);

                return (
                  <div
                    key={item.id}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleExpanded(item.id)}
                      className={`w-full flex items-center justify-between p-4 text-left transition-colors ${
                        isExpanded
                          ? "bg-primary text-white"
                          : "bg-gray-50 hover:bg-gray-100 text-gray-700"
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
                        <span className="font-medium text-sm lg:text-base">
                          {item.title}
                        </span>
                      </div>
                      {isExpanded ? (
                        <ChevronDown className="h-5 w-5" />
                      ) : (
                        <ChevronRight className="h-5 w-5" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="p-6 bg-white border-t">
                        <p className="text-gray-600 leading-relaxed text-sm lg:text-base italic">
                          {item.content}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div id="profil" className="min-h-[65vh] bg-white">
      <div className="text-center py-8">
        <div className="flex items-center justify-center gap-3 mb-2">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
            {t("about.header")}
          </h1>
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

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={closeImageModal}>
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
            >
              <X className="h-6 w-6"/>
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
