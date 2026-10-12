'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FileText,
  Play,
  Users,
  Briefcase,
  Scale,
  Star,
  Flame,
  Clock,
  UserCheck,
  Mail,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import { expertContent } from '@/lib/mock-data-i18n';
import { useLanguage } from '@/lib/LanguageContext';

export default function ExpertContentPage() {
  const { lang } = useLanguage();
  const [selectedKey, setSelectedKey] = useState('ALL');
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const categories = [
    { key: 'ALL', label: lang === 'id' ? 'Semua' : 'All', icon: null },
    { key: 'Articles', label: lang === 'id' ? 'Artikel' : 'Articles', icon: FileText },
    { key: 'Videos', label: lang === 'id' ? 'Video' : 'Videos', icon: Play },
    { key: 'Expert Talks', label: lang === 'id' ? 'Bincang Ahli' : 'Expert Talks', icon: Users },
    { key: 'Career & Industry', label: lang === 'id' ? 'Karier & Industri' : 'Career & Industry', icon: Briefcase },
    { key: 'Case Studies', label: lang === 'id' ? 'Studi Kasus' : 'Case Studies', icon: Scale },
  ];

  const contentList = expertContent[lang];

  const filteredContent =
    selectedKey === 'ALL'
      ? contentList
      : contentList.filter((item) => {
          if (selectedKey === 'Articles') return item.id === '1' || item.id === '4';
          if (selectedKey === 'Videos') return item.id === '2';
          if (selectedKey === 'Expert Talks') return item.id === '3' || item.id === '6';
          if (selectedKey === 'Career & Industry') return item.id === '6' || item.id === '3';
          if (selectedKey === 'Case Studies') return item.id === '5';
          return true;
        });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setEmailSubscribed(true);
      setEmailInput('');
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f5ef] pb-16">
      <Navbar />

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Hero Banner */}
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#7a1c1c] via-[#8b2323] to-[#5a1414] text-white p-6 md:p-8 shadow-lg">
          <div
            className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none"
            style={{ backgroundImage: `url('/wallpapers/wallpaper-2.jpg')` }}
          />
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-15 pointer-events-none hidden md:block">
            <svg viewBox="0 0 200 200" className="w-full h-full fill-white">
              <path d="M100 15 L120 70 L180 70 L130 110 L150 170 L100 130 L50 170 L70 110 L20 70 L80 70 Z" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-16 h-16 rounded-full border-2 border-[#d4af37]/60 bg-[#d4af37]/15 flex items-center justify-center shrink-0">
              <Users className="w-8 h-8 text-[#d4af37]" />
            </div>

            <div className="space-y-1.5 max-w-2xl">
              <p className="text-xs uppercase tracking-widest font-semibold text-[#d4af37]">
                {lang === 'id' ? 'KONTEN AHLI' : 'EXPERT CONTENT'}
              </p>
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-white">
                {lang === 'id' ? 'Belajar dari Para Ahli' : 'Learn from the Experts'}
              </h1>
              <p className="text-sm text-white/80 leading-relaxed">
                {lang === 'id'
                  ? 'Dapatkan wawasan mendalam dari praktisi hukum, akademisi, dan pakar melalui artikel, video, dan perspektif profesional.'
                  : 'Gain deeper insights from legal practitioners, academics, and experts through articles, videos, and professional perspectives.'}
              </p>
            </div>
          </div>
        </section>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedKey === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedKey(cat.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#7a1c1c] text-white shadow-sm'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {Icon && <Icon size={14} className={isActive ? 'text-white' : 'text-gray-500'} />}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Layout: Main Grid (3 cols) + Right Sidebar (1 col) - matches reference/9.jpg */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          {/* Main 3-column Grid (cols 1-9) */}
          <div className="xl:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4.5">
              {filteredContent.map((item) => {
                const isVideo = item.category === 'Videos' || item.category === 'Video';
                const BadgeIcon = isVideo ? Play : FileText;

                return (
                  <article
                    key={item.id}
                    className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group"
                  >
                    {/* Thumbnail */}
                    <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                      {/* Badge pill */}
                      <div className="absolute bottom-3 left-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/95 text-gray-800 shadow-xs backdrop-blur-xs">
                          <BadgeIcon size={12} className="text-[#7a1c1c]" />
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4.5 flex-1 flex flex-col justify-between space-y-3">
                      <div className="space-y-1.5">
                        <h2 className="font-serif font-bold text-gray-900 text-base leading-snug line-clamp-2 group-hover:text-[#7a1c1c] transition-colors">
                          <Link href={`/expert-content/${item.id}`}>{item.title}</Link>
                        </h2>
                        <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                          {item.content_body.replace(/##.*/g, '').replace(/#.*/g, '').trim()}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-1.5 truncate max-w-[65%]">
                          <div className="w-5 h-5 rounded-full bg-[#7a1c1c]/10 text-[#7a1c1c] font-bold text-[10px] flex items-center justify-center shrink-0">
                            {item.author[0]}
                          </div>
                          <span className="truncate">{item.author}</span>
                          <span className="text-gray-300">•</span>
                          <span className="shrink-0">{item.published_date}</span>
                        </div>

                        <Link
                          href={`/expert-content/${item.id}`}
                          className="inline-flex items-center gap-1 text-[#7a1c1c] font-semibold hover:underline shrink-0"
                        >
                          {lang === 'id' ? 'Baca Selengkapnya' : 'Read More'} <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Right Sidebar (col 10-12) */}
          <aside className="xl:col-span-3 space-y-6">
            {/* Featured Content Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-xs space-y-4">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
                <h3 className="font-serif font-bold text-gray-900 text-sm">
                  {lang === 'id' ? 'Konten Unggulan' : 'Featured Content'}
                </h3>
              </div>

              {/* Video Preview Card */}
              <div className="rounded-xl overflow-hidden border border-gray-100 bg-gray-50">
                <div className="relative h-36 bg-gray-900 flex items-center justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80"
                    alt="Featured Video"
                    fill
                    sizes="(max-width: 1024px) 100vw, 350px"
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="relative w-11 h-11 rounded-full bg-[#7a1c1c] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                    <Play size={18} className="fill-white translate-x-0.5" />
                  </div>
                </div>

                <div className="p-3.5 space-y-1">
                  <span className="text-[11px] font-semibold text-[#7a1c1c] flex items-center gap-1">
                    <Play size={10} className="fill-[#7a1c1c]" /> {lang === 'id' ? 'Video' : 'Video'}
                  </span>
                  <h4 className="font-serif font-bold text-gray-900 text-xs leading-snug">
                    {lang === 'id' ? 'Apa Saja Peran Pengacara Korporasi?' : 'What Does a Corporate Lawyer Do?'}
                  </h4>
                  <p className="text-[11px] text-gray-500 leading-tight">
                    {lang === 'id'
                      ? 'Keseharian seorang lawyer perusahaan dan keahlian yang Anda butuhkan.'
                      : 'A day in the life of a corporate lawyer and the skills you need.'}
                  </p>
                  <p className="text-[10px] text-gray-400 pt-1">2.4K views • {lang === 'id' ? '10 mnt' : '10 min'}</p>
                </div>
              </div>

              {/* Quick Navigation Links */}
              <div className="space-y-1.5 pt-1">
                <button
                  onClick={() => setSelectedKey('ALL')}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-50 text-xs text-gray-700 transition-colors text-left cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <Flame size={15} className="text-amber-600" />
                    <span className="font-medium">{lang === 'id' ? 'Paling Populer' : 'Most Popular'}</span>
                  </span>
                  <ChevronRight size={14} className="text-gray-400" />
                </button>

                <button
                  onClick={() => setSelectedKey('ALL')}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-50 text-xs text-gray-700 transition-colors text-left cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <Clock size={15} className="text-blue-600" />
                    <span className="font-medium">{lang === 'id' ? 'Baru Ditambahkan' : 'Recently Added'}</span>
                  </span>
                  <ChevronRight size={14} className="text-gray-400" />
                </button>

                <button
                  onClick={() => setSelectedKey('ALL')}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-50 text-xs text-gray-700 transition-colors text-left cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <UserCheck size={15} className="text-emerald-600" />
                    <span className="font-medium">{lang === 'id' ? 'Rekomendasi untuk Anda' : 'Recommended for You'}</span>
                  </span>
                  <ChevronRight size={14} className="text-gray-400" />
                </button>
              </div>
            </div>

            {/* Stay Updated / Newsletter Card */}
            <div className="bg-[#fcf8f2] rounded-2xl border border-[#eedec7] p-5 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#7a1c1c]/10 text-[#7a1c1c] flex items-center justify-center">
                  <Mail size={16} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-gray-900 text-sm">
                    {lang === 'id' ? 'Tetap Terinformasi' : 'Stay Updated'}
                  </h3>
                  <p className="text-[11px] text-gray-600 leading-tight">
                    {lang === 'id'
                      ? 'Dapatkan konten pakar, analisis hukum, dan tips belajar terbaru langsung di email Anda.'
                      : 'Get the latest expert content, legal insights, and learning tips directly to your inbox.'}
                  </p>
                </div>
              </div>

              {emailSubscribed ? (
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>
                    {lang === 'id'
                      ? 'Terima kasih telah berlangganan! Kami akan terus memberi kabar.'
                      : "Thank you for subscribing! We'll keep you posted."}
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder={lang === 'id' ? 'Masukkan alamat email Anda' : 'Enter your email address'}
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="flex-1 px-3.5 py-2 bg-white rounded-xl border border-gray-200 text-xs placeholder:text-gray-400 focus:outline-hidden focus:border-[#7a1c1c] focus:ring-1 focus:ring-[#7a1c1c]"
                  />
                  <button
                    type="submit"
                    className="py-2 px-4 bg-[#7a1c1c] hover:bg-[#661616] text-white rounded-xl text-xs font-semibold shadow-xs transition-colors shrink-0 cursor-pointer"
                  >
                    {lang === 'id' ? 'Langganan' : 'Subscribe'}
                  </button>
                </form>
              )}
            </div>

            {/* Motivational Legal Quote (Separate card as in reference/9.jpg) */}
            <div className="bg-[#fcf8f2] rounded-2xl border border-[#eedec7] p-5 text-center space-y-1">
              <p className="font-serif italic text-sm text-[#7a1c1c] font-medium leading-relaxed">
                {lang === 'id'
                  ? '“Pengetahuan lebih baik, pemikiran hukum lebih kokoh.”'
                  : '“Better knowledge, stronger legal minds.”'}
              </p>
              <p className="text-[10px] tracking-widest uppercase text-gray-500 pt-1">
                — RUANG HUKUM —
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
