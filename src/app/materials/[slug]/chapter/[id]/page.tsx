'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import {
  ArrowLeft,
  BookOpen,
  Clock,
  ChevronLeft,
  ChevronRight,
  Scale,
  Shield,
  Users,
  Search,
  Briefcase,
  CheckCircle2,
  Lock,
  Download,
  FileText,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import MaterialContent from '@/components/MaterialContent';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import { moduleContent, getLocalizedChapters } from '@/lib/mock-data-i18n';
import { useLanguage } from '@/lib/LanguageContext';

const iconMap: Record<string, React.ElementType> = {
  Scale, BookOpen, Shield, Users, Search, Briefcase,
};

function ChapterContent() {
  const routeParams = useParams();
  const slug = (routeParams?.slug as string) || '';
  const id = (routeParams?.id as string) || '';
  const { t, lang } = useLanguage();
  
  const currentModule = moduleContent[lang].find((m) => m.slug === slug);
  const chapters = getLocalizedChapters(slug, lang);
  const chapterIndex = chapters.findIndex((c) => c.id === id);
  
  if (!currentModule || chapterIndex === -1) notFound();
  
  const chapter = chapters[chapterIndex];
  const prevChapter = chapters[chapterIndex - 1];
  const nextChapter = chapters[chapterIndex + 1];
  const IconComponent = iconMap[currentModule.icon] || BookOpen;

  const downloadableAssets = lang === 'id' ? [
    { name: `Bab ${chapter.chapter_number} - ${chapter.title} (PDF)`, type: 'PDF', size: '1.2 MB', icon: FileText },
    { name: 'Ringkasan & Poin Kunci (PPT)', type: 'PPT', size: '850 KB', icon: FileText },
    { name: 'Bacaan Tambahan', type: 'DOC', size: '420 KB', icon: FileText },
  ] : [
    { name: `Chapter ${chapter.chapter_number} - ${chapter.title} (PDF)`, type: 'PDF', size: '1.2 MB', icon: FileText },
    { name: 'Summary & Key Points (PPT)', type: 'PPT', size: '850 KB', icon: FileText },
    { name: 'Additional Reading', type: 'DOC', size: '420 KB', icon: FileText },
  ];

  const learningObjectives = lang === 'id' ? [
    `Memahami konsep ${chapter.title.toLowerCase()}.`,
    `Mengidentifikasi jenis-jenis dan asas utama ${chapter.title.toLowerCase()}.`,
    `Menerapkan pemahaman ${chapter.title.toLowerCase()} dalam permasalahan hukum praktis.`,
  ] : [
    `Understand the concept of ${chapter.title.toLowerCase()}.`,
    `Identify the main types and principles of ${chapter.title.toLowerCase()}.`,
    `Apply ${chapter.title.toLowerCase()} in practical legal problems.`,
  ];

  return (
    <div className="min-h-screen bg-[#f9f5ef]">
      <Navbar />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb */}
        <Link
          href={`/materials/${slug}`}
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#7a1c1c] text-sm mb-6 transition-colors"
        >
          <ArrowLeft size={16} />
          {t.chapter.backToMaterials}
        </Link>

        {/* Mobile Chapter Switcher (visible < lg) */}
        <div className="lg:hidden mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-700">{currentModule.title}</span>
            <span className="text-[11px] text-gray-500">{chapters.length}/5 {t.chapter.chapters}</span>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {chapters.map((c, idx) => {
              const isActive = c.id === id;
              const isCompleted = idx < chapterIndex;
              return (
                <Link
                  key={c.id}
                  href={`/materials/${slug}/chapter/${c.id}`}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border shrink-0 ${
                    isActive
                      ? 'bg-[#7a1c1c] text-white border-[#7a1c1c] shadow-xs'
                      : isCompleted
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      : 'bg-white text-gray-700 border-gray-200'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    isActive ? 'bg-white text-[#7a1c1c]' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {c.chapter_number}
                  </span>
                  <span>{lang === 'id' ? 'Bab' : 'Ch.'} {c.chapter_number}</span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 xl:gap-8 items-start">
          {/* Left Sidebar - Chapter Navigation (hidden on mobile, shown on desktop) */}
          <aside className="hidden lg:block lg:w-64 xl:w-72 shrink-0">
            {/* Module info */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden mb-4">
              <div
                className="p-4 flex items-center gap-3"
                style={{ background: 'linear-gradient(135deg, #4a0e0e 0%, #7a1c1c 100%)' }}
              >
                <IconComponent size={18} className="text-[#d4af37]" />
                <div>
                  <p className="text-white font-semibold text-sm">{currentModule.title}</p>
                  <p className="text-white/60 text-xs">{chapters.length}/5 {t.chapter.chapters}</p>
                </div>
              </div>

              {/* Chapter list */}
              <div className="divide-y divide-gray-100">
                {chapters.map((c, idx) => {
                  const isActive = c.id === id;
                  const isCompleted = idx < chapterIndex;
                  return (
                    <Link
                      key={c.id}
                      href={`/materials/${slug}/chapter/${c.id}`}
                      className={`flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50 transition-colors ${
                        isActive ? 'bg-[#7a1c1c]/10 text-[#7a1c1c]' : ''
                      }`}
                    >
                      {/* Number circle */}
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                          isActive
                            ? 'bg-[#7a1c1c] text-white'
                            : isCompleted
                            ? 'bg-[#7a1c1c]/10 text-[#7a1c1c]'
                            : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        {c.chapter_number}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className={`text-xs font-medium leading-tight line-clamp-2 ${
                            isActive ? 'text-[#7a1c1c]' : 'text-gray-700'
                          }`}
                        >
                          {c.title}
                        </p>
                        {isActive && (
                          <p className="text-[#7a1c1c]/60 text-xs mt-0.5">
                            {lang === 'id' ? 'Bab Saat Ini' : 'Current Chapter'}
                          </p>
                        )}
                      </div>
                      {isCompleted && <CheckCircle2 size={14} className="text-green-500 shrink-0" />}
                      {c.is_locked && <Lock size={14} className="text-gray-300 shrink-0" />}
                    </Link>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Chapter Header Banner */}
            <div
              className="relative rounded-2xl overflow-hidden mb-6"
              style={{ background: 'linear-gradient(135deg, #4a0e0e 0%, #7a1c1c 100%)' }}
            >
              <div
                className="absolute inset-0 opacity-25 bg-cover bg-right"
                style={{ backgroundImage: `url('/wallpapers/wallpaper-1.jpg')` }}
              />
              <div className="relative z-10 p-6">
                <p className="text-[#d4af37] text-xs font-semibold tracking-widest uppercase mb-2">
                  {currentModule.title.toUpperCase()}
                </p>
                <h1 className="text-white font-bold text-2xl md:text-3xl mb-2">
                  {t.chapter.chapter} {chapter.chapter_number} — {chapter.title}
                </h1>
                <p className="text-white/70 text-sm mb-4">{chapter.description}</p>
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-1.5 text-white/70 text-xs">
                    <BookOpen size={13} />
                    <span>{t.chapter.chapter} {chapter.chapter_number} {t.chapter.of} {chapters.length}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/70 text-xs">
                    <Clock size={13} />
                    <span>{lang === 'id' ? 'Estimasi waktu' : 'Estimated time'}: {chapter.duration}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left Column (Introduction text + Video player) */}
              <div className="flex-1 space-y-6">
                {/* Introduction Text Card */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-xs p-6 space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                    <h3 className="font-serif font-bold text-gray-900 text-base flex items-center gap-2">
                      <FileText size={18} className="text-[#7a1c1c]" />
                      <span>{lang === 'id' ? 'Pengantar' : 'Introduction'}</span>
                    </h3>
                    <div className="flex items-center gap-2.5">
                      <span className="text-gray-400 text-xs">{t.quiz.yourProgress}</span>
                      <div className="w-20 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full w-0 bg-[#7a1c1c] rounded-full" />
                      </div>
                      <span className="text-gray-600 text-xs font-semibold">0%</span>
                    </div>
                  </div>
                  
                  <MaterialContent body={chapter.content_body} />
                </div>

                {/* Video Player — real YouTube embed from chapter.video_url */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden">
                  <YouTubeEmbed url={chapter.video_url} title={chapter.title} />
                </div>
              </div>

              {/* Right Column (Learning Objectives + Materials + Navigation) */}
              <div className="lg:w-80 space-y-5">
                {/* Learning Objectives */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-xs p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <FileText size={16} className="text-[#7a1c1c]" />
                    <h3 className="font-serif font-bold text-gray-900 text-sm">
                      {lang === 'id' ? 'Tujuan Pembelajaran' : 'Learning Objectives'}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-xs">
                    {lang === 'id' ? 'Setelah menyelesaikan bab ini, Anda akan dapat:' : 'After completing this chapter, you will be able to:'}
                  </p>
                  <ul className="space-y-2.5 pt-1">
                    {learningObjectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-gray-700 leading-snug">
                        <CheckCircle2 size={14} className="text-[#7a1c1c] mt-0.5 shrink-0" strokeWidth={2.5} />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Downloadable Materials */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-xs p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} className="text-[#7a1c1c]" />
                    <h3 className="font-serif font-bold text-gray-900 text-sm">
                      {lang === 'id' ? 'Materi Pembelajaran' : 'Materials'}
                    </h3>
                  </div>
                  <div className="space-y-2.5 pt-1">
                    {downloadableAssets.map((asset) => (
                      <div
                        key={asset.name}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-50 border border-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                              asset.type === 'PDF' ? 'bg-red-50 text-red-600' : asset.type === 'PPT' ? 'bg-orange-50 text-orange-600' : 'bg-blue-50 text-blue-600'
                            }`}
                          >
                            <span className="text-[10px] font-bold">{asset.type}</span>
                          </div>
                          <div className="min-w-0">
                            <p className="text-gray-800 text-xs font-semibold truncate">{asset.name}</p>
                            <p className="text-gray-400 text-[10px]">{lang === 'id' ? 'Unduh' : 'Download'} • {asset.size}</p>
                          </div>
                        </div>
                        <button
                          className="text-gray-400 hover:text-[#7a1c1c] transition-colors p-1"
                          title="Download Asset"
                        >
                          <Download size={15} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons (matches reference/7.jpg under Materials) */}
                <div className="flex items-center gap-3 pt-2">
                  {prevChapter ? (
                    <Link
                      href={`/materials/${slug}/chapter/${prevChapter.id}`}
                      className="flex-1 flex items-center justify-center gap-1.5 border border-[#7a1c1c] text-[#7a1c1c] hover:bg-[#7a1c1c]/5 font-semibold py-2.5 px-3 rounded-xl text-xs transition-colors"
                    >
                      <ChevronLeft size={14} />
                      <span>{lang === 'id' ? 'Bab Sebelumnya' : 'Previous Chapter'}</span>
                    </Link>
                  ) : (
                    <div className="flex-1" />
                  )}

                  {nextChapter ? (
                    <Link
                      href={`/materials/${slug}/chapter/${nextChapter.id}`}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-[#7a1c1c] hover:bg-[#6b1414] text-white font-semibold py-2.5 px-3 rounded-xl text-xs transition-colors shadow-xs"
                    >
                      <span>{lang === 'id' ? 'Bab Selanjutnya' : 'Next Chapter'}</span>
                      <ChevronRight size={14} />
                    </Link>
                  ) : (
                    <Link
                      href={`/materials/${slug}`}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-green-700 hover:bg-green-800 text-white font-semibold py-2.5 px-3 rounded-xl text-xs transition-colors shadow-xs"
                    >
                      <span>{lang === 'id' ? 'Selesaikan Modul' : 'Complete Module'}</span>
                      <CheckCircle2 size={14} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ChapterPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f9f5ef]" />}>
      <ChapterContent />
    </Suspense>
  );
}
