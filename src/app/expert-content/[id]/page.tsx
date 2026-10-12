'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, notFound } from 'next/navigation';
import {
  ArrowLeft,
  FileText,
  Calendar,
  Clock,
  User,
  Lightbulb,
  CheckCircle,
  BookOpen,
  ArrowRight,
  Play,
  Share2,
  Bookmark,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import { expertContent } from '@/lib/mock-data-i18n';
import { useLanguage } from '@/lib/LanguageContext';

function ArticleContent() {
  const routeParams = useParams();
  const id = (routeParams?.id as string) || '';
  const { lang } = useLanguage();
  const currentContent = expertContent[lang];
  const item = currentContent.find((c) => c.id === id) || currentContent[0];

  if (!item && id !== '1') {
    notFound();
  }

  const relatedItems = currentContent.filter((c) => c.id !== item.id).slice(0, 3);

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
            <ArrowLeft size={14} /> {lang === 'id' ? 'Kembali ke Konten Ahli' : 'Back to Expert Content'}
          </Link>
          <span>&gt;</span>
          <span className="text-[#7a1c1c] font-semibold">{item.category}</span>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Article Content (2 Cols) */}
          <article className="lg:col-span-2 space-y-6 bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-xs">
            {/* Header */}
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-[#7a1c1c] border border-amber-200/60">
                <FileText size={13} /> {item.category}
              </span>

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-tight">
                {item.title}
              </h1>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Exploring how legal reasoning shapes fair and just decisions in today&apos;s
                society.
              </p>

              {/* Meta row */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-gray-100 text-xs text-gray-500">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="inline-flex items-center gap-1.5 font-medium text-gray-700">
                    <User size={14} className="text-[#7a1c1c]" /> {item.author}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={14} className="text-gray-400" /> {item.published_date}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={14} className="text-gray-400" /> {item.read_time}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors" title="Bookmark">
                    <Bookmark size={15} />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors" title="Share">
                    <Share2 size={15} />
                  </button>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-64 md:h-88 w-full rounded-xl overflow-hidden bg-gray-900 shadow-inner">
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>

            {/* Article Body */}
            <div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
              {item.content_body.split('\n\n').map((block, idx) => {
                if (block.startsWith('## ')) {
                  return (
                    <h2 key={idx} className="text-xl font-serif font-bold text-gray-900 pt-2">
                      {block.replace('## ', '')}
                    </h2>
                  );
                }
                if (block.includes('\n1. ') || block.startsWith('1. ')) {
                  const lines = block.split('\n');
                  return (
                    <div key={idx} className="space-y-3">
                      {lines.map((line, liIdx) => {
                        const match = line.match(/^(\d+)\.\s+\*\*(.*?)\*\*\s+–\s+(.*)$/);
                        if (match) {
                          return (
                            <div key={liIdx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                              <span className="w-6 h-6 rounded-full bg-[#7a1c1c] text-white font-bold text-xs flex items-center justify-center shrink-0">
                                {match[1]}
                              </span>
                              <div>
                                <h3 className="font-semibold text-gray-900 text-sm">{match[2]}</h3>
                                <p className="text-xs text-gray-600 mt-0.5">{match[3]}</p>
                              </div>
                            </div>
                          );
                        }
                        return <p key={liIdx}>{line}</p>;
                      })}
                    </div>
                  );
                }
                return <p key={idx}>{block}</p>;
              })}
            </div>
          </article>

          {/* Right Sidebar */}
          <aside className="space-y-6">
            {/* Related Content */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen size={16} className="text-[#7a1c1c]" />
                  <h3 className="font-serif font-bold text-gray-900 text-sm">
                    {lang === 'id' ? 'Konten Terkait' : 'Related Content'}
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
                {relatedItems.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/expert-content/${rel.id}`}
                    className="flex items-start gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-900 shrink-0">
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                      {(rel.category === 'Videos' || rel.category === 'Video') && (
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <Play size={12} className="fill-white text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 space-y-1 min-w-0">
                      <span className="text-[10px] uppercase font-semibold text-[#7a1c1c]">
                        {rel.category}
                      </span>
                      <h4 className="font-serif font-bold text-xs text-gray-900 group-hover:text-[#7a1c1c] transition-colors line-clamp-2 leading-snug">
                        {rel.title}
                      </h4>
                      <p className="text-[10px] text-gray-400">{rel.read_time}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="bg-[#fcf8f2] rounded-2xl border border-[#eedec7] p-5 space-y-3.5">
              <div className="flex items-center gap-2 text-[#7a1c1c]">
                <Lightbulb size={18} className="text-[#d4af37]" />
                <h3 className="font-serif font-bold text-gray-900 text-sm">
                  {lang === 'id' ? 'Poin Utama' : 'Key Takeaways'}
                </h3>
              </div>

              <ul className="space-y-2.5 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    {lang === 'id'
                      ? 'Penalaran hukum sangat penting untuk keputusan yang adil dan konsisten.'
                      : 'Legal reasoning is essential for fair and consistent decisions.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    {lang === 'id'
                      ? 'Melibatkan analisis aturan hukum, fakta, dan prinsip secara sistematis.'
                      : 'It involves analyzing laws, facts, and legal principles systematically.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    {lang === 'id'
                      ? 'Berbagai jenis penalaran digunakan dalam analisis hukum yang mendalam.'
                      : 'Different types of reasoning are used in rigorous legal analysis.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    {lang === 'id'
                      ? 'Membantu sistem hukum beradaptasi secara dinamis dengan tantangan modern.'
                      : 'It helps the legal system adapt dynamically to modern challenges.'}
                  </span>
                </li>
              </ul>
            </div>

            {/* Keep Learning Card */}
            <Link
              href="/expert-content"
              className="block bg-gradient-to-r from-[#7a1c1c] to-[#912323] text-white p-5 rounded-2xl shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <BookOpen size={20} className="text-[#d4af37]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm">
                      {lang === 'id' ? 'Terus Belajar' : 'Keep Learning'}
                    </h4>
                    <p className="text-xs text-white/80 leading-snug">
                      {lang === 'id'
                        ? 'Jelajahi lebih banyak konten ahli dan perdalam pengetahuan hukum Anda.'
                        : 'Explore more expert content and deepen your legal knowledge.'}
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

export default function ArticleReaderPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f9f5ef]" />}>
      <ArticleContent />
    </Suspense>
  );
}
