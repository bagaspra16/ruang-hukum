'use client';

import Link from 'next/link';
import {
  Crown,
  Check,
  Gift,
  ArrowRight,
  BookOpen,
  BarChart2,
  Award,
  Star,
  Briefcase,
  Scale,
  Calendar,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/lib/LanguageContext';

export default function SubscriptionPage() {
  const { lang, t } = useLanguage();

  const daysRemaining = 4;
  const trialEndDate = lang === 'en' ? '16 Apr 2025' : '16 Apr 2025';

  const content = {
    en: {
      badge: 'PREMIUM ACCESS',
      heroTitle: 'Unlock Your Full Learning Potential',
      heroDesc:
        'Get unlimited access to all premium features, advanced materials, and exclusive content from legal experts.',
      trialTitle: 'You are currently on a Free Trial',
      trialDesc: `Enjoy full access to premium features until ${trialEndDate} (${daysRemaining} days remaining).`,
      viewTrial: 'View Trial Details',
      choosePlan: 'Choose Your Plan',
      choosePlanSub: 'Select the best plan for your learning journey.',
      freePlan: 'Free Plan',
      freeDesc: 'Get started with essential features.',
      currentPlan: 'Current Plan',
      freeFeatures: [
        'Access to basic materials',
        'Limited quiz access',
        'Learning progress tracking',
        'Community support',
      ],
      monthlyPlan: 'Premium Monthly',
      mostPopular: 'Most Popular',
      monthlyDesc: 'Full access for a better learning experience.',
      monthlyFeatures: [
        'Unlimited access to all materials',
        'All quiz features & detailed results',
        'Downloadable certificates',
        'Expert content & career resources',
        'Priority customer support',
      ],
      yearlyPlan: 'Premium Yearly',
      yearlyDesc: 'Save more, learn further.',
      save25: 'Save 25%',
      upgradeNow: 'Upgrade Now',
      perMonth: '/month',
      perYear: '/year',
      yearlyFeatures: [
        'Everything in Premium Monthly',
        'Additional career resources',
        'Exclusive webinar access',
        'Early access to new content',
        'Priority customer support',
      ],
      whyTitle: 'Why Upgrade to Premium?',
      whySub: 'Invest in your legal education and build a stronger future.',
      whyItems: [
        { icon: BookOpen, title: 'More Learning Opportunities', desc: 'Access to exclusive materials and expert content' },
        { icon: Check, title: 'Better Learning Experience', desc: 'Personalized learning path and advanced features' },
        { icon: Briefcase, title: 'Build Your Career', desc: 'Gain valuable skills and industry insights' },
        { icon: Award, title: 'Get Recognized', desc: 'Earn certificates and showcase your achievements' },
      ],
      sidebarTrial: 'Your Free Trial',
      daysLeft: `${daysRemaining} days remaining`,
      endsOn: `Ends on ${trialEndDate}`,
      premiumFeaturesTitle: 'Premium Features',
      premiumFeatures: [
        { icon: BookOpen, title: 'Unlimited Learning Materials', desc: 'Access all chapters, articles, and videos' },
        { icon: BarChart2, title: 'Advanced Quiz & Analytics', desc: 'Track your progress in detail' },
        { icon: Award, title: 'Certificates & Achievements', desc: 'Download certificates and unlock badges' },
        { icon: Star, title: 'Expert Content', desc: 'Learn from legal professionals' },
        { icon: Briefcase, title: 'Career & Industry Resources', desc: 'Get career tips and industry insights' },
      ],
      futureTitle: 'Your Future in Law',
      futureDesc: 'Start learning today with premium access and take the next step in your legal journey.',
    },
    id: {
      badge: 'AKSES PREMIUM',
      heroTitle: 'Buka Potensi Penuh Belajar Anda',
      heroDesc:
        'Dapatkan akses tanpa batas ke semua fitur premium, materi tingkat lanjut, dan konten eksklusif dari praktisi hukum.',
      trialTitle: 'Anda sedang menikmati Uji Coba Gratis',
      trialDesc: `Nikmati akses penuh ke seluruh fitur premium hingga ${trialEndDate} (tersisa ${daysRemaining} hari).`,
      viewTrial: 'Lihat Detail Uji Coba',
      choosePlan: 'Pilih Paket Belajar Anda',
      choosePlanSub: 'Pilih paket yang paling sesuai untuk perjalanan belajar Anda.',
      freePlan: 'Paket Gratis',
      freeDesc: 'Mulai belajar dengan fitur-fitur esensial.',
      currentPlan: 'Paket Saat Ini',
      freeFeatures: [
        'Akses ke materi pengantar',
        'Akses kuis terbatas',
        'Pelacakan progres belajar',
        'Dukungan komunitas',
      ],
      monthlyPlan: 'Premium Bulanan',
      mostPopular: 'Paling Populer',
      monthlyDesc: 'Akses penuh untuk pengalaman belajar yang optimal.',
      monthlyFeatures: [
        'Akses tanpa batas ke seluruh modul',
        'Fitur kuis komprehensif & analisis skor',
        'Sertifikat resmi yang dapat diunduh',
        'Konten ahli & panduan karier hukum',
        'Dukungan prioritas pelanggan',
      ],
      yearlyPlan: 'Premium Tahunan',
      yearlyDesc: 'Hemat lebih banyak, belajar lebih leluasa.',
      save25: 'Hemat 25%',
      upgradeNow: 'Tingkatkan Sekarang',
      perMonth: '/bulan',
      perYear: '/tahun',
      yearlyFeatures: [
        'Semua fitur dalam Premium Bulanan',
        'Materi persiapan karier tambahan',
        'Akses webinar hukum eksklusif',
        'Akses lebih awal ke materi baru',
        'Dukungan pelanggan prioritas 24/7',
      ],
      whyTitle: 'Mengapa Berlangganan Premium?',
      whySub: 'Investasikan pendidikan hukum Anda dan bangun masa depan yang kokoh.',
      whyItems: [
        { icon: BookOpen, title: 'Peluang Belajar Lebih Luas', desc: 'Akses materi eksklusif dan panduan praktisi' },
        { icon: Check, title: 'Pengalaman Belajar Lebih Baik', desc: 'Jalur pembelajaran terarah dan fitur interaktif' },
        { icon: Briefcase, title: 'Bangun Karier Hukum Anda', desc: 'Kembangkan keterampilan praktis bernilai tinggi' },
        { icon: Award, title: 'Pengakuan Kompetensi', desc: 'Raih sertifikat resmi untuk portofolio Anda' },
      ],
      sidebarTrial: 'Uji Coba Gratis Anda',
      daysLeft: `Tersisa ${daysRemaining} hari`,
      endsOn: `Berakhir pada ${trialEndDate}`,
      premiumFeaturesTitle: 'Fitur-Fitur Premium',
      premiumFeatures: [
        { icon: BookOpen, title: 'Materi Belajar Tanpa Batas', desc: 'Akses seluruh bab, bacaan, dan modul studi' },
        { icon: BarChart2, title: 'Kuis & Analitik Lengkap', desc: 'Pantau kemajuan skor secara detail' },
        { icon: Award, title: 'Sertifikat & Lencana', desc: 'Unduh sertifikat resmi penyelesaian modul' },
        { icon: Star, title: 'Wawasan Ahli Hukum', desc: 'Belajar langsung dari praktisi profesional' },
        { icon: Briefcase, title: 'Sumber Daya Karier Hukum', desc: 'Tips wawancara & wawasan industri hukum' },
      ],
      futureTitle: 'Masa Depan Anda di Bidang Hukum',
      futureDesc: 'Mulai belajar hari ini dengan akses premium dan raih langkah selanjutnya.',
    },
  }[lang];

  return (
    <div className="min-h-screen bg-[#f9f5ef]">
      <Navbar />

      {/* Hero Banner */}
      <div
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #4a0e0e 0%, #7a1c1c 100%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center"
          style={{
            backgroundImage: `url('/wallpapers/wallpaper-4.jpg')`,
          }}
        />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 flex items-center gap-6">
          <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center shrink-0">
            <Crown size={32} className="text-white" />
          </div>
          <div>
            <p className="text-[#d4af37] text-xs font-semibold tracking-widest uppercase mb-1">
              {content.badge}
            </p>
            <h1 className="text-white font-serif font-bold text-3xl md:text-4xl mb-2">
              {content.heroTitle}
            </h1>
            <p className="text-white/70 text-sm md:text-base max-w-xl">
              {content.heroDesc}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {/* Trial Status Banner */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Gift size={20} className="text-amber-600" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-gray-900">{content.trialTitle}</h3>
                  <p className="text-gray-600 text-sm">{content.trialDesc}</p>
                </div>
              </div>
              <Link
                href="#plans"
                className="shrink-0 bg-[#7a1c1c] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#6b1414] transition-colors text-sm flex items-center gap-2"
              >
                {content.viewTrial} <ArrowRight size={14} />
              </Link>
            </div>

            {/* Plans */}
            <div id="plans">
              <h2 className="font-serif font-bold text-2xl text-gray-900 mb-1">{content.choosePlan}</h2>
              <p className="text-gray-500 mb-6">{content.choosePlanSub}</p>

              <div className="grid md:grid-cols-3 gap-5">
                {/* Free Plan */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 relative">
                  <h3 className="font-serif font-bold text-xl text-gray-900 mb-1">{content.freePlan}</h3>
                  <p className="text-gray-500 text-sm mb-4">{content.freeDesc}</p>
                  <div className="mb-5">
                    <span className="text-3xl font-bold text-gray-900">Rp 0</span>
                    <span className="text-gray-500 text-sm ml-1">{content.perMonth}</span>
                  </div>
                  <button
                    disabled
                    className="w-full border border-gray-300 text-gray-500 font-medium py-3 rounded-xl mb-5 cursor-default"
                  >
                    {content.currentPlan}
                  </button>
                  <ul className="space-y-2.5">
                    {content.freeFeatures.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-gray-500 text-sm">
                        <div className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center">
                          <Check size={10} className="text-gray-400" />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Premium Monthly - Featured */}
                <div className="bg-white rounded-2xl border-2 border-[#7a1c1c] p-6 relative shadow-lg">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#7a1c1c] text-white text-xs font-semibold px-4 py-1 rounded-full">
                    {content.mostPopular}
                  </div>
                  <h3 className="font-serif font-bold text-xl text-gray-900 mb-1">{content.monthlyPlan}</h3>
                  <p className="text-gray-500 text-sm mb-4">{content.monthlyDesc}</p>
                  <div className="mb-5">
                    <span className="text-3xl font-bold text-gray-900">Rp 99.000</span>
                    <span className="text-gray-500 text-sm ml-1">{content.perMonth}</span>
                  </div>
                  <button
                    id="upgrade-monthly-btn"
                    className="w-full bg-[#7a1c1c] hover:bg-[#6b1414] text-white font-semibold py-3 rounded-xl mb-5 transition-colors cursor-pointer"
                  >
                    {content.upgradeNow}
                  </button>
                  <ul className="space-y-2.5">
                    {content.monthlyFeatures.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-gray-700 text-sm">
                        <div className="w-4 h-4 rounded-full bg-[#7a1c1c] flex items-center justify-center">
                          <Check size={10} className="text-white" />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Premium Yearly */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 relative">
                  <h3 className="font-serif font-bold text-xl text-gray-900 mb-1">{content.yearlyPlan}</h3>
                  <p className="text-gray-500 text-sm mb-4">{content.yearlyDesc}</p>
                  <div className="mb-1 flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-gray-900">Rp 899.000</span>
                    <span className="text-gray-500 text-sm">{content.perYear}</span>
                  </div>
                  <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold px-2.5 py-0.5 rounded-full mb-4">
                    {content.save25}
                  </span>
                  <button
                    id="upgrade-yearly-btn"
                    className="w-full border-2 border-[#7a1c1c] text-[#7a1c1c] hover:bg-[#7a1c1c]/5 font-semibold py-3 rounded-xl mb-5 transition-colors cursor-pointer"
                  >
                    {content.upgradeNow}
                  </button>
                  <ul className="space-y-2.5">
                    {content.yearlyFeatures.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-gray-700 text-sm">
                        <div className="w-4 h-4 rounded-full bg-[#7a1c1c] flex items-center justify-center">
                          <Check size={10} className="text-white" />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Why Upgrade */}
            <div>
              <h2 className="font-serif font-bold text-xl text-gray-900 mb-1">{content.whyTitle}</h2>
              <p className="text-gray-500 text-sm mb-5">{content.whySub}</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {content.whyItems.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl border border-gray-100 p-4">
                    <item.icon size={20} className="text-[#7a1c1c] mb-2" />
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:w-80 shrink-0 space-y-5">
            {/* Trial Status Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <Crown size={18} className="text-[#d4af37]" />
                <h3 className="font-serif font-bold text-gray-900">{content.sidebarTrial}</h3>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-3">{content.daysLeft}</p>

              {/* Progress bar */}
              <div className="h-2 bg-gray-100 rounded-full mb-2">
                <div
                  className="h-full bg-[#7a1c1c] rounded-full"
                  style={{ width: `${(daysRemaining / 5) * 100}%` }}
                />
              </div>

              <div className="flex items-center gap-2 text-gray-500 text-xs mb-5">
                <Calendar size={12} />
                <span>{content.endsOn}</span>
              </div>

              <button className="w-full bg-[#7a1c1c] hover:bg-[#6b1414] text-white font-semibold py-2.5 rounded-xl transition-colors text-sm flex items-center justify-center gap-2 cursor-pointer">
                {content.upgradeNow} <ArrowRight size={14} />
              </button>
            </div>

            {/* Premium Features */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Star size={18} className="text-[#d4af37]" />
                <h3 className="font-serif font-bold text-gray-900">{content.premiumFeaturesTitle}</h3>
              </div>
              <ul className="space-y-3">
                {content.premiumFeatures.map((feature) => (
                  <li key={feature.title}>
                    <Link href="#" className="flex items-center justify-between gap-3 group py-1">
                      <div className="flex items-center gap-3">
                        <feature.icon size={16} className="text-[#7a1c1c] shrink-0" />
                        <div>
                          <p className="text-gray-800 text-sm font-medium leading-tight">{feature.title}</p>
                          <p className="text-gray-400 text-xs">{feature.desc}</p>
                        </div>
                      </div>
                      <ArrowRight size={14} className="text-gray-300 group-hover:text-[#7a1c1c] transition-colors shrink-0" />
                    </Link>
                    <div className="h-px bg-gray-100 mt-2" />
                  </li>
                ))}
              </ul>
            </div>

            {/* Future in Law Card */}
            <div
              className="rounded-2xl p-5 flex items-center gap-3"
              style={{ background: 'linear-gradient(135deg, #4a0e0e 0%, #7a1c1c 100%)' }}
            >
              <Scale size={28} className="text-[#d4af37] shrink-0" />
              <div>
                <h4 className="text-white font-serif font-bold text-sm">{content.futureTitle}</h4>
                <p className="text-white/60 text-xs mt-0.5">{content.futureDesc}</p>
              </div>
              <ArrowRight size={16} className="text-white/60 shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
