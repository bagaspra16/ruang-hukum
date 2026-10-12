'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  HelpCircle,
  BookOpen,
  Headphones,
  AlertCircle,
  Search,
  ChevronDown,
  Mail,
  Clock,
  MessageSquare,
  ArrowRight,
  User,
  GraduationCap,
  Award,
  Flame,
  Crown,
  Settings,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/lib/LanguageContext';
import { Lang } from '@/lib/translations';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  items: FaqItem[];
}

const faqDataByLang: Record<Lang, FaqCategory[]> = {
  en: [
    {
      id: 'account',
      name: 'Account & Registration',
      icon: User,
      items: [
        {
          question: 'How do I create an account on RUANG HUKUM?',
          answer:
            'You can create an account by clicking the "Start Learning Now" button on the home page. Enter your full name, email, password, university, and major to activate your account and 5-day free trial immediately.',
        },
        {
          question: 'I forgot my password, how do I recover it?',
          answer:
            'Click the "Forgot password?" button on the login screen. Enter your registered email address, and our system will instantly send a password reset link to your email.',
        },
        {
          question: 'Can I use one account on multiple devices?',
          answer:
            'Yes, you can log in to your RUANG HUKUM account on laptops, tablets, and smartphones. However, for quiz integrity, quiz sessions can only be taken on one active session at a time.',
        },
        {
          question: 'How do I update my profile details?',
          answer:
            'Go to the Settings or Profile menu from the top navigation bar. There you can update your avatar, phone number, university, and legal career goals.',
        },
      ],
    },
    {
      id: 'materials',
      name: 'Learning Materials',
      icon: BookOpen,
      items: [
        {
          question: 'How do I access learning materials?',
          answer:
            'Select the "Materials" menu in the main navigation. You can choose from 6 core modules: Legal Science, Introduction to Law, Criminal Law, Legal Clinic, Legal Reasoning, and Career Preparation.',
        },
        {
          question: 'Can the materials be downloaded for offline study?',
          answer:
            'Yes! In each chapter, a "Downloadable Assets" section provides PDF summaries, presentation slides, and reading materials available for download.',
        },
        {
          question: 'How long do I have access to the materials?',
          answer:
            'During your 5-day free trial or while on a Premium subscription, all materials are accessible with no time restrictions 24/7.',
        },
        {
          question: 'Are there materials suited for beginners?',
          answer:
            'Absolutely. All modules are designed progressively from basic legal terminology to practical legal analysis simulations, perfect for first-year law students and beginners.',
        },
      ],
    },
    {
      id: 'quiz',
      name: 'Quiz & Assessment',
      icon: Award,
      items: [
        {
          question: 'How does the quiz grading system work?',
          answer:
            'Each correct answer grants 25 points and adds to your learning streak. Quizzes can be retaken at any time to reinforce your conceptual understanding.',
        },
        {
          question: 'What is the passing score to earn a certificate?',
          answer:
            'The minimum passing score is 75% for each module in order to generate an official completion certificate.',
        },
      ],
    },
    {
      id: 'streak',
      name: 'Progress & Streak',
      icon: Flame,
      items: [
        {
          question: 'How do I maintain my daily learning streak?',
          answer:
            'Complete at least 1 chapter or take 1 quiz every day before 23:59 WIB to maintain and grow your streak.',
        },
      ],
    },
    {
      id: 'subscription',
      name: 'Subscription & Free Trial',
      icon: Crown,
      items: [
        {
          question: 'What benefits are included in the Premium plan?',
          answer:
            'Unlimited access to all modules, exclusive articles and videos from legal experts, verified certificates of completion, and full downloadable module assets.',
        },
      ],
    },
    {
      id: 'technical',
      name: 'Technical & Support',
      icon: Settings,
      items: [
        {
          question: 'The video material is not playing, what should I do?',
          answer:
            'Make sure your internet connection is stable and check if an ad-blocker extension is blocking the embedded video player.',
        },
      ],
    },
  ],
  id: [
    {
      id: 'account',
      name: 'Akun & Pendaftaran',
      icon: User,
      items: [
        {
          question: 'Bagaimana cara membuat akun di RUANG HUKUM?',
          answer:
            'Anda dapat membuat akun dengan mengklik tombol "Mulai Belajar Sekarang" di halaman utama. Isi nama lengkap, email, password, serta asal universitas dan jurusan Anda untuk mengaktifkan akun dan free trial 5 hari secara langsung.',
        },
        {
          question: 'Saya lupa password, bagaimana cara mengatasinya?',
          answer:
            'Klik tombol "Forgot password?" pada layar login. Masukkan email Anda yang terdaftar, lalu sistem kami akan mengirimkan tautan reset password secara instan ke email Anda.',
        },
        {
          question: 'Apakah saya bisa menggunakan satu akun di beberapa perangkat?',
          answer:
            'Ya, Anda dapat masuk ke akun RUANG HUKUM di laptop, tablet, dan smartphone Anda. Namun untuk integritas kuis, pengerjaan kuis hanya dapat dilakukan pada satu sesi aktif.',
        },
        {
          question: 'Bagaimana cara mengubah data profil saya?',
          answer:
            'Buka menu Settings atau Profile melalui menu navigasi atas. Di halaman tersebut Anda dapat memperbarui foto profil, nomor telepon, universitas, maupun minat karier hukum Anda.',
        },
      ],
    },
    {
      id: 'materials',
      name: 'Materi Pembelajaran',
      icon: BookOpen,
      items: [
        {
          question: 'Bagaimana cara mengakses materi pembelajaran?',
          answer:
            'Pilih menu "Materials" pada navigasi utama. Anda dapat memilih salah satu dari 6 modul utama: Legal Science, Introduction to Law, Criminal Law, Legal Clinic, Legal Reasoning, dan Career Preparation.',
        },
        {
          question: 'Apakah materi dapat diunduh?',
          answer:
            'Ya! Pada setiap chapter, tersedia bagian "Downloadable Assets" yang menyediakan ringkasan PDF, slide presentasi PPT, dan dokumen bahan bacaan tambahan yang dapat diunduh untuk belajar luring.',
        },
        {
          question: 'Berapa lama saya bisa mengakses materi?',
          answer:
            'Selama periode free trial 5 hari atau selama Anda berlangganan paket Premium, seluruh materi dapat diakses tanpa batasan waktu 24/7.',
        },
        {
          question: 'Apakah ada materi untuk tingkat pemula?',
          answer:
            'Tentu. Seluruh modul didesain secara berjenjang mulai dari pengenalan istilah hukum dasar hingga simulasi penalaran hukum praktis, sangat cocok untuk mahasiswa hukum tahun pertama maupun pemula.',
        },
      ],
    },
    {
      id: 'quiz',
      name: 'Quiz & Penilaian',
      icon: Award,
      items: [
        {
          question: 'Bagaimana sistem penilaian quiz bekerja?',
          answer:
            'Setiap jawaban benar memberikan 25 poin dan menambah streak belajar Anda. Kuis dapat diulang untuk memperkuat pemahaman konsep materi.',
        },
        {
          question: 'Berapa skor minimum untuk mendapatkan sertifikat?',
          answer:
            'Skor kelulusan minimum adalah 75% untuk setiap modul agar sertifikat kelulusan dapat diterbitkan.',
        },
      ],
    },
    {
      id: 'streak',
      name: 'Progress & Streak',
      icon: Flame,
      items: [
        {
          question: 'Bagaimana cara mempertahankan streak belajar?',
          answer:
            'Selesaikan minimal 1 bab atau ikuti 1 quiz setiap hari sebelum pukul 23.59 WIB untuk mempertahankan streak Anda.',
        },
      ],
    },
    {
      id: 'subscription',
      name: 'Langganan & Trial',
      icon: Crown,
      items: [
        {
          question: 'Apa saja keuntungan berlangganan paket Premium?',
          answer:
            'Akses tanpa batas ke seluruh modul, artikel eksklusif dari praktisi hukum terkemuka, sertifikat resmi kelulusan, dan unduhan modul lengkap.',
        },
      ],
    },
    {
      id: 'technical',
      name: 'Teknis & Lainnya',
      icon: Settings,
      items: [
        {
          question: 'Video materi tidak dapat diputar, apa solusinya?',
          answer:
            'Pastikan koneksi internet Anda stabil dan nonaktifkan ekstensi pemblokir iklan (ad-blocker) yang mungkin memblokir pemutar video.',
        },
      ],
    },
  ],
};

export default function HelpCenterPage() {
  const { lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    account: true,
    materials: true,
  });
  const [openFaqs, setOpenFaqs] = useState<Record<string, boolean>>({
    'account-0': true,
  });
  const [activeSidebarTab, setActiveSidebarTab] = useState('faq');

  const faqData = faqDataByLang[lang] || faqDataByLang.en;

  const toggleCategory = (catId: string) => {
    setOpenCategories((prev) => ({ ...prev, [catId]: !prev[catId] }));
  };

  const toggleFaq = (key: string) => {
    setOpenFaqs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Filter items by search query
  const filteredFaqs = faqData
    .map((category) => {
      const filteredItems = category.items.filter(
        (item) =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return { ...category, items: filteredItems };
    })
    .filter((cat) => cat.items.length > 0);

  const text = {
    en: {
      badge: 'HELP CENTER & FAQ',
      heroTitle: 'How can we help you?',
      heroDesc: 'Find answers to your questions, read user guides, or contact the RUANG HUKUM support team.',
      heroQuote: '“We are here to support your legal learning journey.”',
      faqTitle: 'Frequently Asked Questions',
      faqDesc: 'Find answers to the most common questions from RUANG HUKUM learners.',
      searchPlaceholder: 'Search questions...',
      sidebar: {
        faq: 'FAQ',
        faqSub: 'Frequently asked questions',
        guides: 'User Guides',
        guidesSub: 'Learn how to use the platform',
        contact: 'Contact Support',
        contactSub: 'Get in touch with our team',
        issue: 'Report an Issue',
        issueSub: 'Report any problems encountered',
      },
      guidesCard: {
        title: 'Quick Guides',
        items: [
          { title: 'How to Take a Quiz', desc: 'Step-by-step walkthrough', href: '/quiz' },
          { title: 'How to Access Materials', desc: 'Complete module guide', href: '/materials' },
          { title: 'How to Track Progress', desc: 'Monitor your learning metrics', href: '/progress' },
          { title: 'Full FAQ', desc: 'Browse all answered questions', href: '/help' },
        ],
      },
      supportCard: {
        title: 'Need More Help?',
        sub: 'Our team is ready to assist you.',
        desc: 'Feel free to reach out to our dedicated support team via email or live chat.',
        button: 'Contact Support Team',
        email: 'support@ruanghukum.id',
        hours: 'Monday – Friday, 08:00 – 17:00 WIB',
        response: 'Usually responds within 24 hours',
        quote: '“Every question is a step towards learning further.”',
      },
    },
    id: {
      badge: 'HELP CENTER & FAQ',
      heroTitle: 'Bagaimana kami dapat membantu Anda?',
      heroDesc: 'Temukan jawaban untuk pertanyaan Anda, baca panduan penggunaan, atau hubungi tim bantuan RUANG HUKUM.',
      heroQuote: '“Kami di sini untuk mendukung perjalanan belajar hukum Anda.”',
      faqTitle: 'Pertanyaan yang Sering Diajukan',
      faqDesc: 'Cari jawaban dari pertanyaan yang paling sering diajukan oleh pengguna RUANG HUKUM.',
      searchPlaceholder: 'Cari pertanyaan...',
      sidebar: {
        faq: 'FAQ',
        faqSub: 'Pertanyaan yang sering diajukan',
        guides: 'Panduan Penggunaan',
        guidesSub: 'Pelajari cara menggunakan website',
        contact: 'Kontak Bantuan',
        contactSub: 'Hubungi tim support kami',
        issue: 'Laporan Masalah',
        issueSub: 'Laporkan kendala yang Anda temui',
      },
      guidesCard: {
        title: 'Panduan Cepat',
        items: [
          { title: 'Cara Mengikuti Quiz', desc: 'Pelajari langkah-langkahnya', href: '/quiz' },
          { title: 'Cara Mengakses Materi', desc: 'Panduan lengkap penggunaan', href: '/materials' },
          { title: 'Cara Melihat Progress', desc: 'Pantau perkembangan belajar Anda', href: '/progress' },
          { title: 'FAQ Lengkap', desc: 'Lihat semua pertanyaan yang diajukan', href: '/help' },
        ],
      },
      supportCard: {
        title: 'Butuh Bantuan Lebih Lanjut?',
        sub: 'Tim kami siap membantu Anda.',
        desc: 'Jangan ragu untuk menghubungi tim support kami melalui email atau live chat.',
        button: 'Hubungi Tim Support',
        email: 'support@ruanghukum.id',
        hours: 'Senin – Jumat, 08.00 – 17.00 WIB',
        response: 'Respon biasanya dalam 1x24 jam',
        quote: '“Karena setiap pertanyaan adalah langkah untuk belajar lebih jauh.”',
      },
    },
  }[lang];

  return (
    <div className="min-h-screen bg-[#f9f5ef] pb-16">
      <Navbar />

      <main className="max-w-screen-xl mx-auto px-4 md:px-6 py-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Mini Sidebar (cols 1-3) */}
          <aside className="lg:col-span-3 space-y-2">
            <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-xs space-y-1">
              <button
                onClick={() => setActiveSidebarTab('faq')}
                className={`w-full flex items-start gap-3 p-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                  activeSidebarTab === 'faq'
                    ? 'bg-[#7a1c1c]/10 text-[#7a1c1c]'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <HelpCircle size={16} className="mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold">{text.sidebar.faq}</p>
                  <p className="text-[10px] text-gray-400">{text.sidebar.faqSub}</p>
                </div>
              </button>

              <button
                onClick={() => setActiveSidebarTab('guides')}
                className={`w-full flex items-start gap-3 p-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                  activeSidebarTab === 'guides'
                    ? 'bg-[#7a1c1c]/10 text-[#7a1c1c]'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <BookOpen size={16} className="mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold">{text.sidebar.guides}</p>
                  <p className="text-[10px] text-gray-400">{text.sidebar.guidesSub}</p>
                </div>
              </button>

              <button
                onClick={() => setActiveSidebarTab('contact')}
                className={`w-full flex items-start gap-3 p-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                  activeSidebarTab === 'contact'
                    ? 'bg-[#7a1c1c]/10 text-[#7a1c1c]'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Headphones size={16} className="mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold">{text.sidebar.contact}</p>
                  <p className="text-[10px] text-gray-400">{text.sidebar.contactSub}</p>
                </div>
              </button>

              <button
                onClick={() => setActiveSidebarTab('issue')}
                className={`w-full flex items-start gap-3 p-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                  activeSidebarTab === 'issue'
                    ? 'bg-[#7a1c1c]/10 text-[#7a1c1c]'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <AlertCircle size={16} className="mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold">{text.sidebar.issue}</p>
                  <p className="text-[10px] text-gray-400">{text.sidebar.issueSub}</p>
                </div>
              </button>
            </div>
          </aside>

          {/* Center Main Area (cols 4-8) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Header Banner */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#7a1c1c] via-[#8c2222] to-[#5a1414] text-white p-6 md:p-8 shadow-md">
              <div
                className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none"
                style={{ backgroundImage: `url('/wallpapers/wallpaper-2.jpg')` }}
              />
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full border-2 border-[#d4af37]/60 bg-[#d4af37]/20 flex items-center justify-center shrink-0">
                    <Headphones className="w-7 h-7 text-[#d4af37]" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[11px] uppercase tracking-wider font-semibold text-[#d4af37]">
                      {text.badge}
                    </p>
                    <h1 className="text-2xl font-serif font-bold text-white">
                      {text.heroTitle}
                    </h1>
                    <p className="text-xs text-white/80 max-w-md">
                      {text.heroDesc}
                    </p>
                  </div>
                </div>

                <div className="hidden md:block max-w-[180px] text-right border-l border-white/20 pl-4">
                  <p className="font-serif italic text-xs text-white/80 leading-relaxed">
                    {text.heroQuote}
                  </p>
                </div>
              </div>
            </div>

            {/* Main FAQ Container */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-xs space-y-6">
              <div>
                <h2 className="font-serif font-bold text-gray-900 text-base">
                  {text.faqTitle}
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  {text.faqDesc}
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search size={16} className="absolute left-3.5 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder={text.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs focus:bg-white focus:outline-hidden focus:border-[#7a1c1c] placeholder:text-gray-400"
                />
              </div>

              {/* Accordion Categories */}
              <div className="space-y-4">
                {filteredFaqs.map((category) => {
                  const Icon = category.icon;
                  const isCatOpen = openCategories[category.id] !== false;

                  return (
                    <div
                      key={category.id}
                      className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-2xs"
                    >
                      {/* Category Header */}
                      <button
                        onClick={() => toggleCategory(category.id)}
                        className="w-full flex items-center justify-between p-3.5 bg-gray-50/70 hover:bg-gray-100/70 transition-colors text-left cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-[#7a1c1c]/10 text-[#7a1c1c] flex items-center justify-center shrink-0">
                            <Icon size={14} />
                          </div>
                          <h3 className="font-serif font-bold text-gray-900 text-xs">
                            {category.name}
                          </h3>
                        </div>
                        <ChevronDown
                          size={15}
                          className={`text-gray-400 transition-transform ${
                            isCatOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {/* Items */}
                      {isCatOpen && (
                        <div className="divide-y divide-gray-100 px-3 py-1">
                          {category.items.map((item, idx) => {
                            const itemKey = `${category.id}-${idx}`;
                            const isFaqOpen = openFaqs[itemKey] || false;

                            return (
                              <div key={idx} className="py-2.5">
                                <button
                                  onClick={() => toggleFaq(itemKey)}
                                  className="w-full flex items-center justify-between text-left text-xs font-semibold text-gray-800 hover:text-[#7a1c1c] transition-colors cursor-pointer py-1"
                                >
                                  <span>{item.question}</span>
                                  <ChevronDown
                                    size={13}
                                    className={`text-gray-400 shrink-0 ml-2 transition-transform ${
                                      isFaqOpen ? 'rotate-180' : ''
                                    }`}
                                  />
                                </button>
                                {isFaqOpen && (
                                  <p className="text-xs text-gray-600 mt-1.5 leading-relaxed bg-amber-50/30 p-2.5 rounded-xl border border-amber-100/50">
                                    {item.answer}
                                  </p>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column (cols 9-12) */}
          <div className="lg:col-span-3 space-y-6">
            {/* Quick Guides Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-xs space-y-3.5">
              <div className="flex items-center gap-2 text-gray-900">
                <GraduationCap size={16} className="text-[#d4af37]" />
                <h3 className="font-serif font-bold text-xs">{text.guidesCard.title}</h3>
              </div>

              <div className="space-y-1.5">
                {text.guidesCard.items.map((guide, i) => (
                  <Link
                    key={i}
                    href={guide.href}
                    className="flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div>
                      <p className="text-xs font-semibold text-gray-800 group-hover:text-[#7a1c1c] transition-colors">
                        {guide.title}
                      </p>
                      <p className="text-[10px] text-gray-400">{guide.desc}</p>
                    </div>
                    <ArrowRight size={13} className="text-gray-400 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Need More Help Card */}
            <div className="bg-[#fcf8f2] rounded-2xl border border-[#eedec7] p-5 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#7a1c1c]/10 text-[#7a1c1c] flex items-center justify-center shrink-0">
                  <Headphones size={18} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-gray-900 text-xs">
                    {text.supportCard.title}
                  </h3>
                  <p className="text-[10px] text-gray-500">{text.supportCard.sub}</p>
                </div>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed">
                {text.supportCard.desc}
              </p>

              <a
                href={`mailto:${text.supportCard.email}`}
                className="w-full py-2.5 px-3 bg-[#7a1c1c] hover:bg-[#661616] text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <Mail size={13} />
                <span>{text.supportCard.button}</span>
              </a>

              <div className="space-y-2 pt-2 border-t border-[#eedec7]/80 text-[11px] text-gray-600">
                <div className="flex items-center gap-2">
                  <Mail size={12} className="text-gray-400 shrink-0" />
                  <span>{text.supportCard.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={12} className="text-gray-400 shrink-0" />
                  <span>{text.supportCard.hours}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-[10px]">
                  <MessageSquare size={12} className="text-gray-400 shrink-0" />
                  <span>{text.supportCard.response}</span>
                </div>
              </div>

              {/* Quote */}
              <div className="pt-2 text-center">
                <p className="font-serif italic text-xs text-[#7a1c1c] font-medium leading-snug">
                  {text.supportCard.quote}
                </p>
                <p className="text-[9px] uppercase tracking-widest text-gray-400 mt-1">
                  — RUANG HUKUM —
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
