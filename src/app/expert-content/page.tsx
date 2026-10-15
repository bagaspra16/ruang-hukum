'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Play,
  Video,
  Scale,
  Star,
  Flame,
  Clock,
  UserCheck,
  Mail,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Briefcase,
  Gavel,
  ShieldAlert,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import { expertContent } from '@/lib/mock-data-i18n';
import { useLanguage } from '@/lib/LanguageContext';

export default function ExpertContentPage() {
  const { lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const categories = [
    { key: 'ALL', label: lang === 'id' ? 'Semua Video' : 'All Videos', icon: Video },
    { key: lang === 'id' ? 'Teori Hukum' : 'Legal Theory', label: lang === 'id' ? 'Teori & Filsafat Hukum' : 'Legal Theory', icon: BookOpen },
    { key: lang === 'id' ? 'Hukum Pidana' : 'Criminal Law', label: lang === 'id' ? 'Hukum Pidana' : 'Criminal Law', icon: ShieldAlert },
    { key: lang === 'id' ? 'Hukum Korporasi' : 'Corporate Practice', label: lang === 'id' ? 'Hukum Korporasi' : 'Corporate Practice', icon: Briefcase },
    { key: lang === 'id' ? 'Hukum Tata Negara' : 'Constitutional Law', label: lang === 'id' ? 'Hukum Tata Negara' : 'Constitutional Law', icon: Scale },
    { key: lang === 'id' ? 'Hukum Acara Perdata' : 'Civil Procedure', label: lang === 'id' ? 'Acara Perdata' : 'Civil Procedure', icon: Gavel },
    { key: lang === 'id' ? 'Karier Hukum' : 'Legal Careers', label: lang === 'id' ? 'Karier & Legal Tech' : 'Careers & Tech', icon: Star },
  ];

  const contentList = expertContent[lang] || [];

  const filteredContent =
    selectedCategory === 'ALL'
      ? contentList
      : contentList.filter((item) => item.category === selectedCategory);

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
            <div className="w-16 h-16 rounded-2xl border-2 border-[#d4af37]/60 bg-[#d4af37]/15 flex items-center justify-center shrink-0 shadow-inner">
              <Video className="w-8 h-8 text-[#d4af37]" />
            </div>

            <div className="space-y-1.5 max-w-2xl">
              <p className="text-xs uppercase tracking-widest font-semibold text-[#d4af37] flex items-center gap-1.5">
                <Play size={12} className="fill-[#d4af37]" />
                {lang === 'id' ? 'VIDEO PEMBELAJARAN' : 'LEARNING VIDEOS'}
              </p>
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-white">
                {lang === 'id' ? 'Video Pembelajaran Hukum Terpadu' : 'Comprehensive Legal Video Lessons'}
              </h1>
              <p className="text-sm text-white/80 leading-relaxed">
                {lang === 'id'
                  ? 'Tonton rangkaian video pembelajaran berkualitas tinggi yang dibawakan langsung oleh akademisi, hakim, dan konsultan hukum senior untuk memperkuat pemahaman yuridis Anda.'
                  : 'Watch high-quality video lectures delivered directly by leading legal academics, judges, and senior counsel to sharpen your juridical thinking.'}
              </p>
            </div>
          </div>
        </section>

        {/* Video Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all shrink-0 cursor-pointer ${
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

        {/* Content Layout: Main Grid (3 cols) + Right Sidebar (1 col) */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          {/* Main 3-column Video Grid (cols 1-9) */}
          <div className="xl:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filteredContent.map((item) => (
                <article
                  key={item.id}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col group"
                >
                  {/* Video Thumbnail with Play Overlay */}
                  <Link href={`/expert-content/${item.id}`} className="relative h-48 w-full bg-slate-900 overflow-hidden block">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

                    {/* Central Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#7a1c1c]/90 text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-[#7a1c1c] transition-all border border-white/20">
                        <Play size={20} className="fill-white translate-x-0.5" />
                      </div>
                    </div>

                    {/* Category pill */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/60 text-white shadow-xs backdrop-blur-sm border border-white/10">
                        <Video size={11} className="text-[#d4af37]" />
                        {item.category}
                      </span>
                    </div>

                    {/* Duration badge */}
                    <div className="absolute bottom-3 right-3">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-black/75 text-white backdrop-blur-sm">
                        <Clock size={11} className="text-[#d4af37]" />
                        {item.read_time}
                      </span>
                    </div>
                  </Link>

                  {/* Card Content */}
                  <div className="p-4.5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <h2 className="font-serif font-bold text-gray-900 text-base leading-snug line-clamp-2 group-hover:text-[#7a1c1c] transition-colors">
                        <Link href={`/expert-content/${item.id}`}>{item.title}</Link>
                      </h2>
                      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                        {item.content_body.replace(/###.*/g, '').replace(/##.*/g, '').replace(/#.*/g, '').replace(/-\s+/g, '').trim()}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-2 truncate max-w-[65%]">
                        <div className="w-6 h-6 rounded-full bg-[#7a1c1c]/10 text-[#7a1c1c] font-bold text-[11px] flex items-center justify-center shrink-0">
                          {item.author[0]}
                        </div>
                        <span className="truncate font-medium text-gray-700">{item.author}</span>
                      </div>

                      <Link
                        href={`/expert-content/${item.id}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#7a1c1c]/10 hover:bg-[#7a1c1c] text-[#7a1c1c] hover:text-white font-semibold text-xs transition-colors shrink-0"
                      >
                        <Play size={11} className="fill-current" />
                        {lang === 'id' ? 'Tonton' : 'Watch'}
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right Sidebar (col 10-12) */}
          <aside className="xl:col-span-3 space-y-6">
            {/* Featured Video Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-xs space-y-4">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
                <h3 className="font-serif font-bold text-gray-900 text-sm">
                  {lang === 'id' ? 'Video Pilihan Pekan Ini' : 'Featured Video'}
                </h3>
              </div>

              {/* Video Preview Card */}
              <Link href="/expert-content/1" className="block rounded-xl overflow-hidden border border-gray-100 bg-gray-50 hover:shadow-md transition-shadow group">
                <div className="relative h-40 bg-gray-900 flex items-center justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600&q=80"
                    alt="Featured Video"
                    fill
                    sizes="(max-width: 1024px) 100vw, 350px"
                    className="object-cover opacity-80 group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="relative w-12 h-12 rounded-full bg-[#7a1c1c] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play size={20} className="fill-white translate-x-0.5" />
                  </div>
                  <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/70 text-[10px] text-white font-mono">
                    18:24
                  </span>
                </div>

                <div className="p-3.5 space-y-1">
                  <span className="text-[11px] font-semibold text-[#7a1c1c] flex items-center gap-1">
                    <Video size={11} /> {lang === 'id' ? 'Teori Hukum' : 'Legal Theory'}
                  </span>
                  <h4 className="font-serif font-bold text-gray-900 text-xs leading-snug group-hover:text-[#7a1c1c] transition-colors">
                    {lang === 'id' ? 'Fondasi Penalaran Hukum & Cara Berpikir Yuridis' : 'Foundational Legal Reasoning'}
                  </h4>
                  <p className="text-[11px] text-gray-500 leading-tight">
                    Prof. Dr. Sari Winata, S.H., M.H.
                  </p>
                  <p className="text-[10px] text-gray-400 pt-1">3.8K views • Full HD</p>
                </div>
              </Link>

              {/* Quick Navigation Links */}
              <div className="space-y-1.5 pt-1">
                <button
                  onClick={() => setSelectedCategory('ALL')}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-50 text-xs text-gray-700 transition-colors text-left cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <Flame size={15} className="text-amber-600" />
                    <span className="font-medium">{lang === 'id' ? 'Video Paling Populer' : 'Most Popular Videos'}</span>
                  </span>
                  <ChevronRight size={14} className="text-gray-400" />
                </button>

                <button
                  onClick={() => setSelectedCategory('ALL')}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-50 text-xs text-gray-700 transition-colors text-left cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <Clock size={15} className="text-blue-600" />
                    <span className="font-medium">{lang === 'id' ? 'Baru Ditambahkan' : 'Recently Added'}</span>
                  </span>
                  <ChevronRight size={14} className="text-gray-400" />
                </button>

                <button
                  onClick={() => setSelectedCategory('ALL')}
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

            {/* Newsletter Card */}
            <div className="bg-[#fcf8f2] rounded-2xl border border-[#eedec7] p-5 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#7a1c1c]/10 text-[#7a1c1c] flex items-center justify-center">
                  <Mail size={16} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-gray-900 text-sm">
                    {lang === 'id' ? 'Notifikasi Rilis Video' : 'Video Release Alerts'}
                  </h3>
                  <p className="text-[11px] text-gray-600 leading-tight">
                    {lang === 'id'
                      ? 'Dapatkan pemberitahuan setiap ada episode video pembelajaran hukum terbaru langsung ke email Anda.'
                      : 'Get alerted whenever a new legal learning video is released directly in your inbox.'}
                  </p>
                </div>
              </div>

              {emailSubscribed ? (
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>
                    {lang === 'id'
                      ? 'Terima kasih telah mendaftar! Anda akan mendapat update video terbaru.'
                      : "Thank you for subscribing! You'll receive updates on upcoming video releases."}
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder={lang === 'id' ? 'Alamat email Anda' : 'Your email address'}
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

            {/* Motivational Legal Quote */}
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
