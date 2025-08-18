"use client"

import Image from "next/image"
import { useState } from "react"

const initialPosts = [
  {
    id: 1,
    title:
      "Semangat Kemerdekaan dalam Balutan Gagak Mataraman di Upacara HUT Ke-80 RI di UCIC",
    img: "https://ugm.ac.id/wp-content/uploads/2025/08/80-RI.jpg",
    author: "humas",
    date: "August 17, 2025",
  },
  {
    id: 2,
    title:
      "Mutiara Widiawati: Menjahit Mimpi lewat Catur dan Tata Busana",
    img: "https://ugm.ac.id/wp-content/uploads/2025/08/MM-UGM.webp",
    author: "humas",
    date: "August 17, 2025",
  },
  {
    id: 3,
    title:
      "UCIC Susun Modul Pembelajaran untuk Wujudkan Kampus Inklusif",
    img: "https://ugm.ac.id/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-16-at-12.04.25.jpeg",
    author: "humas",
    date: "August 16, 2025",
  },
  {
    id: 4,
    title:
      "Pembekalan Advokasi Diri dan Resolusi Konflik Untuk Mahasiswa Disabilitas UCIC",
    img: "https://ugm.ac.id/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-16-at-12.04.25.jpeg",
    author: "humas",
    date: "August 16, 2025",
  },
  {
    id: 5,
    title:
      "Dari Pagar Puding ke Yogyakarta: Perjalanan M. Khairul Afdal, Penerima KIPK Prodi Pendidikan Sejarah",
    img: "https://ugm.ac.id/wp-content/uploads/2025/08/MM-UGM.webp",
    author: "humas",
    date: "August 15, 2025",
  },
  {
    id: 6,
    title:
      "Tingkatkan Profesionalisme Pendidik, Lokakarya Penyusunan Modul Ajar Bersama Pakar",
    img: "https://ugm.ac.id/wp-content/uploads/2025/08/80-RI.jpg",
    author: "humas",
    date: "August 14, 2025",
  },
]

function Card({ post }) {
  return (
    <article className="overflow-hidden rounded-xl bg-white ring-1 ring-gray-200 shadow-sm hover:shadow-md transition-shadow hover:cursor-pointer">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={post.img}
          alt={post.title}
          fill
          sizes="(min-width:1024px) 420px, (min-width:640px) 50vw, 100vw"
          className="object-cover"
          priority={false}
        />
      </div>

      <div className="p-4">
        <h3 className="text-gray-800 font-semibold text-sm sm:text-base leading-snug min-h-[2.75rem]">
          {post.title}
        </h3>

        <div className="mt-3 flex items-center gap-3 text-gray-500 text-xs border-t border-gray-100 pt-3">
          <span>by {post.author}</span>
          <span className="inline-block h-1 w-1 rounded-full bg-gray-400" />
          <time>{post.date}</time>
        </div>
      </div>
    </article>
  )
}

function SkeletonCard() {
  return (
    <article className="overflow-hidden rounded-xl bg-white ring-1 ring-gray-200 shadow-sm">
      <div className="relative w-full aspect-[16/9] bg-gray-200 animate-pulse" />
      <div className="p-4">
        <div className="h-4 bg-gray-200 rounded animate-pulse w-11/12 mb-2" />
        <div className="h-4 bg-gray-200 rounded animate-pulse w-8/12" />
        <div className="mt-4 flex items-center gap-3 pt-3 border-t border-gray-100">
          <div className="h-3 w-20 bg-gray-200 rounded animate-pulse" />
          <span className="inline-block h-1 w-1 rounded-full bg-gray-300" />
          <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    </article>
  )
}

export default function PageInformation() {
  const [items, setItems] = useState(initialPosts)
  const [loading, setLoading] = useState(false)

  const handleLoadMore = () => {
    if (loading) return
    setLoading(true)
    setTimeout(() => {
      const nextBaseId = items.length
      const more = initialPosts.slice(0, 3).map((p, idx) => ({
        ...p,
        id: nextBaseId + idx + 1
      }))
      setItems((prev) => [...prev, ...more])
      setLoading(false)
    }, 1200)
  }

  return (
    <section id="berita" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative mb-8 sm:mb-12">
          <h2 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
            Berita
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {items.map((p) => (
            <Card key={p.id} post={p} />
          ))}

          {/* Skeleton when loading */}
          {loading &&
            Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={`s-${i}`} />)}
        </div>

        {/* Footer button */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <button
            onClick={handleLoadMore}
            disabled={loading}
            className={`rounded-lg border border-primary px-6 py-3 font-medium transition-colors ${
              loading
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'text-primary hover:bg-primary hover:text-white'
            }`}
          >
            {loading ? 'MEMUAT...' : 'BERITA LAINNYA'}
          </button>
        </div>
      </div>
    </section>
  )
}