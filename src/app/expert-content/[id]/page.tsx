'use client';

import { Suspense, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, notFound } from 'next/navigation';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Play,
  Share2,
  Bookmark,
  Video,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import MaterialContent from '@/components/MaterialContent';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import { expertContent } from '@/lib/mock-data-i18n';
import { useLanguage } from '@/lib/LanguageContext';

function VideoLessonContent() {
  const routeParams = useParams();
  const id = (routeParams?.id as string) || '';
  const { lang } = useLanguage();
  const currentContent = expertContent[lang] || [];
  const item = currentContent.find((c) => c.id === id) || currentContent[0];
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!item && id !== '1') {
    notFound();
  }

  const relatedVideos = currentContent.filter((c) => c.id !== item.id).slice(0, 4);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard?.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f5ef] pb-16">
      <Navbar />

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Link
            href="/expert-content"
            className="inline-flex items-center gap-1.5 text-gray-600 hover:text-[#7a1c1c] font-medium transition-colors"
          >
            <ArrowLeft size={14} /> {lang === 'id' ? 'Kembali ke Video Pembelajaran' : 'Back to Learning Videos'}
          </Link>
          <span>&gt;</span>
          <span className="text-[#7a1c1c] font-semibold">{item.category}</span>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Video & Lesson Content (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Real YouTube Player from item.video_url */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-md">
              <YouTubeEmbed url={item.video_url} title={item.title} />
            </div>

            {/* Video Details & Study Materials */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-xs space-y-6">
              {/* Header Info */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#7a1c1c]/10 text-[#7a1c1c] border border-[#7a1c1c]/20">
                    <Play size={12} className="fill-[#7a1c1c]" /> {item.category}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsBookmarked(!isBookmarked)}
                      className={`p-2 rounded-xl border text-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
                        isBookmarked
                          ? 'bg-[#7a1c1c] text-white border-[#7a1c1c]'
                          : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                      }`}
                      title="Simpan video"
                    >
                      <Bookmark size={14} className={isBookmarked ? 'fill-white' : ''} />
                      <span className="hidden sm:inline">{lang === 'id' ? 'Simpan' : 'Save'}</span>
                    </button>
                    <button
                      onClick={handleShare}
                      className="p-2 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                      title="Bagikan"
                    >
                      <Share2 size={14} />
                      <span className="hidden sm:inline">
                        {copiedLink ? (lang === 'id' ? 'Tersalin!' : 'Copied!') : (lang === 'id' ? 'Bagikan' : 'Share')}
                      </span>
                    </button>
                  </div>
                </div>

                <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 leading-tight">
                  {item.title}
                </h1>

                {/* Speaker Info Card */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100 text-xs text-gray-500">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#7a1c1c]/10 border border-[#7a1c1c]/20 text-[#7a1c1c] font-bold text-sm flex items-center justify-center shrink-0">
                      {item.author[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{item.author}</p>
                      <p className="text-[11px] text-gray-500">{lang === 'id' ? 'Pakar & Dosen Hukum' : 'Legal Scholar & Expert'}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={13} className="text-gray-400" /> {item.published_date}
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={13} className="text-gray-400" /> {item.read_time}
                    </span>
                  </div>
                </div>
              </div>

              {/* Video Study Materials */}
              <div className="pt-2 border-t border-gray-100">
                <MaterialContent body={item.content_body} />
              </div>
            </div>
          </div>

          {/* Right Sidebar (4 Cols) */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Related Videos */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Video size={16} className="text-[#7a1c1c]" />
                  <h3 className="font-serif font-bold text-gray-900 text-sm">
                    {lang === 'id' ? 'Video Pembelajaran Lainnya' : 'Other Learning Videos'}
                  </h3>
                </div>
                <Link
                  href="/expert-content"
                  className="text-xs text-[#7a1c1c] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  {lang === 'id' ? 'Lihat Semua' : 'View All'} <ArrowRight size={12} />
                </Link>
              </div>

              <div className="space-y-3.5">
                {relatedVideos.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/expert-content/${rel.id}`}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-gray-50 border border-gray-100 transition-colors group"
                  >
                    <div className="relative w-20 h-16 rounded-lg overflow-hidden bg-gray-900 shrink-0">
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        sizes="80px"
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-[#7a1c1c] text-white flex items-center justify-center shadow-xs">
                          <Play size={10} className="fill-white translate-x-0.5" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 space-y-1 min-w-0">
                      <span className="text-[10px] uppercase font-semibold text-[#7a1c1c] block truncate">
                        {rel.category}
                      </span>
                      <h4 className="font-serif font-bold text-xs text-gray-900 group-hover:text-[#7a1c1c] transition-colors line-clamp-2 leading-snug">
                        {rel.title}
                      </h4>
                      <p className="text-[10px] text-gray-400 font-mono">{rel.read_time}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Summary / Key Takeaways */}
            <div className="bg-[#fcf8f2] rounded-2xl border border-[#eedec7] p-5 space-y-3.5">
              <div className="flex items-center gap-2 text-[#7a1c1c]">
                <Lightbulb size={18} className="text-[#d4af37]" />
                <h3 className="font-serif font-bold text-gray-900 text-sm">
                  {lang === 'id' ? 'Tips Mengikuti Video' : 'Video Study Tips'}
                </h3>
              </div>

              <ul className="space-y-2.5 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    {lang === 'id'
                      ? 'Catat poin penting dan pasal rujukan yang disebutkan oleh pemateri.'
                      : 'Take notes on referenced statutory articles and core concepts.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    {lang === 'id'
                      ? 'Gunakan garis besar timestamp untuk mengulang materi yang spesifik.'
                      : 'Use timestamp outlines to revisit specific legal explanations.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    {lang === 'id'
                      ? 'Cocokkan materi video dengan bab modul terkait di Ruang Hukum.'
                      : 'Cross-reference with related reading modules on Ruang Hukum.'}
                  </span>
                </li>
              </ul>
            </div>

            {/* All Videos CTA */}
            <Link
              href="/expert-content"
              className="block bg-gradient-to-r from-[#7a1c1c] to-[#912323] text-white p-5 rounded-2xl shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Video size={20} className="text-[#d4af37]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm">
                      {lang === 'id' ? 'Koleksi Video Lengkap' : 'Full Video Collection'}
                    </h4>
                    <p className="text-xs text-white/80 leading-snug">
                      {lang === 'id'
                        ? 'Jelajahi seluruh video pembelajaran hukum dari para pakar.'
                        : 'Explore all legal video masterclasses by top experts.'}
                    </p>
                  </div>
                </div>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform shrink-0" />
              </div>
            </Link>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default function VideoLessonPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f9f5ef]" />}>
      <VideoLessonContent />
    </Suspense>
  );
}
