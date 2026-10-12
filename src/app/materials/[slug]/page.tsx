'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import {
  ArrowLeft,
  BookOpen,
  Clock,
  ChevronRight,
  Scale,
  Shield,
  Users,
  Search,
  Briefcase,
  BookMarked,
  CheckCircle2,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import { moduleContent, getLocalizedChapters } from '@/lib/mock-data-i18n';
import { useLanguage } from '@/lib/LanguageContext';

const iconMap: Record<string, React.ElementType> = {
  Scale, BookOpen, Shield, Users, Search, Briefcase,
};

const moduleImages: Record<string, string> = {
  'legal-science': 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1000&q=70',
  'introduction-to-law': 'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=1000&q=70',
  'criminal-law': 'https://images.unsplash.com/photo-1555661530-68c8e98db4e6?w=1000&q=70',
  'legal-clinic': 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1000&q=70',
  'legal-reasoning': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1000&q=70',
  'career-preparation': 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1000&q=70',
};

// Simulated completed chapters
const completedChapterIds = new Set(['ls-1', 'ls-2']);

function ModuleContent() {
  const routeParams = useParams();
  const slug = (routeParams?.slug as string) || '';
  const { t, lang } = useLanguage();
  const currentModule = moduleContent[lang].find((m) => m.slug === slug);
  
  if (!currentModule) notFound();
  
  const chapters = getLocalizedChapters(slug, lang);
  const completedCount = chapters.filter(c => completedChapterIds.has(c.id)).length;
  const progressPercent = chapters.length > 0 ? Math.round((completedCount / chapters.length) * 100) : 0;
  const IconComponent = iconMap[currentModule.icon] || BookOpen;

  return (
    <div className="min-h-screen bg-[#f9f5ef]">
      <Navbar />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb */}
        <Link
          href="/materials"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#7a1c1c] text-sm mb-6 transition-colors"
        >
          <ArrowLeft size={16} />
          {t.chapter.backToMaterials}
        </Link>

        <div className="flex flex-col lg:flex-row gap-6 xl:gap-8 items-start">
          {/* Subjects Sidebar - Horizontal scroll on mobile, vertical card on desktop */}
          <aside className="w-full lg:w-72 shrink-0">
            <h3 className="font-serif font-bold text-gray-800 text-sm mb-3 px-1">
              {lang === 'id' ? 'Mata Kuliah' : 'Subjects'}
            </h3>
            
            {/* Mobile Horizontal Pills (visible < lg) */}
            <div className="flex lg:hidden gap-2 overflow-x-auto pb-2 scrollbar-none mb-4">
              {moduleContent[lang].map((m) => {
                const MIcon = iconMap[m.icon] || BookOpen;
                const isSelected = m.slug === slug;
                return (
                  <Link
                    key={m.id}
                    href={`/materials/${m.slug}`}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border shrink-0 ${
                      isSelected
                        ? 'bg-[#7a1c1c] text-white border-[#7a1c1c] shadow-xs'
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <MIcon size={14} className={isSelected ? 'text-[#d4af37]' : 'text-gray-400'} />
                    <span>{m.title}</span>
                  </Link>
                );
              })}
            </div>

            {/* Desktop Vertical Nav (hidden < lg) */}
            <nav className="hidden lg:block bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs">
              {moduleContent[lang].map((m) => {
                const MIcon = iconMap[m.icon] || BookOpen;
                return (
                  <Link
                    key={m.id}
                    href={`/materials/${m.slug}`}
                    className={`flex items-center justify-between gap-3 px-4 py-3.5 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors ${
                      m.slug === slug ? 'bg-[#7a1c1c]/10 text-[#7a1c1c]' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <MIcon
                        size={16}
                        className={m.slug === slug ? 'text-[#7a1c1c]' : 'text-gray-400'}
                      />
                      <div>
                        <p className={`text-sm font-semibold leading-tight ${m.slug === slug ? 'text-[#7a1c1c]' : 'text-gray-700'}`}>
                          {m.title}
                        </p>
                        <p className="text-xs text-gray-400">{m.total_chapters} {t.chapter.chapters}</p>
                      </div>
                    </div>
                    <ChevronRight size={14} className={m.slug === slug ? 'text-[#7a1c1c]' : 'text-gray-300'} />
                  </Link>
                );
              })}
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Module Header Banner */}
            <div
              className="relative rounded-2xl overflow-hidden mb-6"
              style={{ background: 'linear-gradient(135deg, #4a0e0e 0%, #7a1c1c 100%)' }}
            >
              <div
                className="absolute inset-0 opacity-20 bg-cover bg-right"
                style={{ backgroundImage: `url('${moduleImages[slug] || moduleImages['legal-science']}')` }}
              />
              <div className="relative z-10 p-6 flex items-center gap-5">
                <div className="w-16 h-16 rounded-full border-2 border-white/30 bg-white/10 flex items-center justify-center shrink-0">
                  <IconComponent size={28} className="text-white" />
                </div>
                <div>
                  <p className="text-[#d4af37] text-xs font-semibold tracking-widest uppercase mb-1">
                    {lang === 'id' ? 'MATERI HUKUM' : 'LEGAL MATERIALS'}
                  </p>
                  <h1 className="text-white font-serif font-bold text-2xl md:text-3xl mb-2">{currentModule.title}</h1>
                  <p className="text-white/70 text-sm max-w-xl">{currentModule.description}</p>
                  <div className="flex items-center gap-5 mt-3">
                    <div className="flex items-center gap-1.5 text-white/70 text-xs">
                      <BookMarked size={13} />
                      <span>{currentModule.total_chapters} {t.chapter.chapters}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-white/70 text-xs">
                      <Clock size={13} />
                      <span>{lang === 'id' ? 'Estimasi' : 'Estimated'} {currentModule.estimated_duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chapters Section */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              {/* Chapter header with progress */}
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-serif font-bold text-xl text-gray-900">{t.chapter.chapters}</h2>
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 text-sm">{t.quiz.yourProgress}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-gray-100 rounded-full">
                      <div
                        className="h-full bg-[#7a1c1c] rounded-full transition-all"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                    <span className="text-gray-600 text-sm font-medium">
                      {completedCount} / {chapters.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Chapter list */}
              <div className="space-y-3">
                {chapters.map((chapter) => {
                  const isCompleted = completedChapterIds.has(chapter.id);
                  return (
                    <div
                      key={chapter.id}
                      className="flex items-center justify-between gap-4 p-4 border border-gray-100 rounded-xl hover:border-[#7a1c1c]/20 hover:bg-[#7a1c1c]/5 transition-all"
                    >
                      {/* Chapter number */}
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-sm ${
                          isCompleted
                            ? 'bg-[#7a1c1c] text-white'
                            : 'bg-[#d4af37]/20 text-[#7a1c1c]'
                        }`}
                      >
                        {chapter.chapter_number}
                      </div>

                      {/* Chapter info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif font-bold text-gray-900 text-sm mb-1 leading-tight">
                          {t.chapter.chapter} {chapter.chapter_number} — {chapter.title}
                        </h4>
                        <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                          {chapter.description}
                        </p>
                      </div>

                      {/* Duration */}
                      <div className="flex items-center gap-1.5 text-gray-400 text-xs shrink-0">
                        <BookMarked size={12} />
                        <span>{chapter.duration}</span>
                      </div>

                      {/* Status / Button */}
                      <div className="shrink-0">
                        {isCompleted ? (
                          <div className="flex items-center gap-1.5 text-green-600 text-xs font-medium">
                            <CheckCircle2 size={16} />
                            <span className="hidden sm:block">{t.chapter.completed}</span>
                          </div>
                        ) : (
                          <Link
                            href={`/materials/${slug}/chapter/${chapter.id}`}
                            id={`start-chapter-${chapter.id}`}
                            className="bg-[#7a1c1c] hover:bg-[#6b1414] text-white font-medium px-4 py-2 rounded-lg transition-colors text-xs flex items-center gap-1.5"
                          >
                            {lang === 'id' ? 'Mulai Bab' : 'Start Chapter'} <ChevronRight size={12} />
                          </Link>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ModulePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f9f5ef]" />}>
      <ModuleContent />
    </Suspense>
  );
}
