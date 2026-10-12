'use client';

import Link from 'next/link';
import {
  User,
  Mail,
  Building2,
  BookOpen,
  Target,
  Crown,
  Settings,
  LogOut,
  ChevronRight,
  Pencil,
  BarChart2,
  HelpCircle,
  Shield,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import { mockUser } from '@/lib/mock-data';
import { useLanguage } from '@/lib/LanguageContext';

export default function ProfilePage() {
  const { lang, t } = useLanguage();

  const initials = mockUser.full_name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('');

  const text = {
    en: {
      profile: 'Profile',
      accountSettings: 'Account Settings',
      logOut: 'Log Out',
      personalInfo: 'Personal Information',
      name: 'Name',
      programMajor: 'Program / Major',
      email: 'Email',
      learningGoal: 'Learning Goal',
      university: 'University',
      subscriptionStatus: 'Subscription Status',
      freeTrialText: '👑 5-Day Free Trial',
      daysRemaining: '(4 days remaining)',
      editProfile: 'Edit Profile',
      accountInfo: 'Account Information',
      freeTrialBannerTitle: '5-Day Free Trial',
      freeTrialBannerDesc:
        "You're currently on a 5-day free trial. Enjoy full access to all learning materials, quizzes, and features.",
      upgradePlan: 'Upgrade Plan',
      learningProgress: 'Learning Progress',
      learningProgressDesc: 'Track your progress and see your achievements.',
      viewStats: 'View Statistics',
      viewStatsDesc: 'See your learning activity and performance.',
      needHelp: 'Need Help?',
      needHelpDesc: 'Contact our support team if you have any questions.',
    },
    id: {
      profile: 'Profil',
      accountSettings: 'Pengaturan Akun',
      logOut: 'Keluar',
      personalInfo: 'Informasi Pribadi',
      name: 'Nama',
      programMajor: 'Program / Jurusan',
      email: 'Email',
      learningGoal: 'Tujuan Belajar',
      university: 'Universitas',
      subscriptionStatus: 'Status Langganan',
      freeTrialText: '👑 Uji Coba Gratis 5 Hari',
      daysRemaining: '(tersisa 4 hari)',
      editProfile: 'Edit Profil',
      accountInfo: 'Informasi Akun',
      freeTrialBannerTitle: 'Uji Coba Gratis 5 Hari',
      freeTrialBannerDesc:
        'Anda saat ini sedang menikmati uji coba gratis 5 hari. Nikmati akses penuh ke semua materi, kuis, dan fitur pembelajaran.',
      upgradePlan: 'Tingkatkan Paket',
      learningProgress: 'Progres Belajar',
      learningProgressDesc: 'Pantau perkembangan belajar dan pencapaian Anda.',
      viewStats: 'Lihat Statistik',
      viewStatsDesc: 'Pantau aktivitas belajar dan performa Anda.',
      needHelp: 'Butuh Bantuan?',
      needHelpDesc: 'Hubungi tim bantuan kami jika Anda memiliki pertanyaan.',
    },
  }[lang];

  return (
    <div className="min-h-screen bg-[#f9f5ef]">
      <Navbar />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Mini Sidebar */}
          <aside className="lg:w-56 shrink-0">
            <nav className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs p-2">
              <div className="flex lg:flex-col gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
                <Link
                  href="/profile"
                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-[#7a1c1c]/10 text-[#7a1c1c] transition-colors whitespace-nowrap"
                >
                  <User size={15} />
                  <span>{text.profile}</span>
                </Link>
                <Link
                  href="/settings"
                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors whitespace-nowrap"
                >
                  <Settings size={15} />
                  <span>{text.accountSettings}</span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors whitespace-nowrap"
                >
                  <LogOut size={15} />
                  <span>{text.logOut}</span>
                </Link>
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Profile Banner */}
            <div
              className="rounded-2xl p-6 md:p-8 flex items-center gap-6 relative overflow-hidden shadow-sm"
              style={{
                background: 'linear-gradient(135deg, #420b0b 0%, #681414 40%, #7a1c1c 80%, #520f0f 100%)',
              }}
            >
              <div
                className="absolute inset-0 opacity-25 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/wallpapers/wallpaper-2.jpg')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#420b0b]/90 via-[#681414]/70 to-transparent" />

              <div className="relative z-10 flex items-center gap-5">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#8c6b53] border-4 border-white/30 flex items-center justify-center text-white font-serif font-bold text-2xl md:text-3xl shadow-md shrink-0">
                  <span>{initials}</span>
                </div>
                <div>
                  <h1 className="text-white font-serif font-bold text-2xl md:text-3xl leading-tight">
                    {mockUser.full_name}
                  </h1>
                  <p className="text-white/80 text-sm mt-0.5">{mockUser.email}</p>
                </div>
              </div>
            </div>

            {/* Personal Information Section */}
            <div className="space-y-3">
              <h2 className="font-serif font-bold text-lg text-gray-900">{text.personalInfo}</h2>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-xs p-6 flex flex-col xl:flex-row gap-8 justify-between items-start">
                {/* 2-Column Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 flex-1 w-full">
                  {/* Name */}
                  <div className="flex items-start gap-3">
                    <User size={16} className="text-gray-400 mt-1 shrink-0" />
                    <div>
                      <p className="text-[11px] text-gray-400 font-medium">{text.name}</p>
                      <p className="text-gray-900 font-semibold text-sm">{mockUser.full_name}</p>
                    </div>
                  </div>

                  {/* Program / Major */}
                  <div className="flex items-start gap-3">
                    <Building2 size={16} className="text-gray-400 mt-1 shrink-0" />
                    <div>
                      <p className="text-[11px] text-gray-400 font-medium">{text.programMajor}</p>
                      <p className="text-gray-900 font-semibold text-sm">{mockUser.major}</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <Mail size={16} className="text-gray-400 mt-1 shrink-0" />
                    <div>
                      <p className="text-[11px] text-gray-400 font-medium">{text.email}</p>
                      <p className="text-gray-900 font-semibold text-sm">{mockUser.email}</p>
                    </div>
                  </div>

                  {/* Learning Goal */}
                  <div className="flex items-start gap-3">
                    <Target size={16} className="text-gray-400 mt-1 shrink-0" />
                    <div>
                      <p className="text-[11px] text-gray-400 font-medium">{text.learningGoal}</p>
                      <p className="text-gray-900 font-semibold text-sm">{mockUser.learning_goal}</p>
                    </div>
                  </div>

                  {/* University */}
                  <div className="flex items-start gap-3">
                    <Building2 size={16} className="text-gray-400 mt-1 shrink-0" />
                    <div>
                      <p className="text-[11px] text-gray-400 font-medium">{text.university}</p>
                      <p className="text-gray-900 font-semibold text-sm">{mockUser.university}</p>
                    </div>
                  </div>

                  {/* Subscription Status */}
                  <div className="flex items-start gap-3">
                    <Crown size={16} className="text-[#d4af37] mt-1 shrink-0" />
                    <div>
                      <p className="text-[11px] text-gray-400 font-medium">{text.subscriptionStatus}</p>
                      <p className="text-amber-700 font-semibold text-sm flex items-center gap-1.5 flex-wrap">
                        <span>{text.freeTrialText}</span>
                        <span className="text-gray-400 text-xs font-normal">{text.daysRemaining}</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Action Buttons */}
                <div className="flex flex-col gap-2.5 w-full xl:w-56 shrink-0 pt-2 xl:pt-0 border-t xl:border-t-0 border-gray-100">
                  <button className="w-full flex items-center justify-center gap-2 bg-[#7a1c1c] hover:bg-[#6b1414] text-white font-semibold py-2.5 px-4 rounded-xl text-xs transition-colors shadow-xs cursor-pointer">
                    <Pencil size={14} />
                    <span>{text.editProfile}</span>
                  </button>

                  <Link
                    href="/settings"
                    className="w-full flex items-center justify-center gap-2 border border-[#7a1c1c] text-[#7a1c1c] hover:bg-[#7a1c1c]/5 font-semibold py-2.5 px-4 rounded-xl text-xs transition-colors"
                  >
                    <Settings size={14} />
                    <span>{text.accountSettings}</span>
                  </Link>

                  <Link
                    href="/"
                    className="w-full flex items-center justify-center gap-2 border border-[#7a1c1c] text-[#7a1c1c] hover:bg-red-50 font-semibold py-2.5 px-4 rounded-xl text-xs transition-colors"
                  >
                    <LogOut size={14} />
                    <span>{text.logOut}</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Account Information Section */}
            <div className="space-y-3">
              <h2 className="font-serif font-bold text-lg text-gray-900">{text.accountInfo}</h2>

              {/* 5-Day Free Trial Bar */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-xs p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 bg-[#8c6b53] rounded-full flex items-center justify-center text-white shrink-0 shadow-xs">
                    <Shield size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{text.freeTrialBannerTitle}</h3>
                    <p className="text-gray-500 text-xs">{text.freeTrialBannerDesc}</p>
                  </div>
                </div>
                <Link
                  href="/subscription"
                  className="shrink-0 bg-[#7a1c1c] hover:bg-[#6b1414] text-white font-semibold px-4 py-2 rounded-xl text-xs transition-colors"
                >
                  {text.upgradePlan}
                </Link>
              </div>

              {/* 3 Quick Navigation Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link
                  href="/progress"
                  className="bg-white rounded-2xl border border-gray-100 shadow-xs p-4 flex items-center justify-between gap-3 hover:border-[#7a1c1c]/20 hover:bg-[#7a1c1c]/5 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <BookOpen size={18} className="text-[#7a1c1c] shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-xs">{text.learningProgress}</h4>
                      <p className="text-gray-400 text-[11px] leading-tight">{text.learningProgressDesc}</p>
                    </div>
                  </div>
                  <ChevronRight size={14} className="text-gray-400 group-hover:text-[#7a1c1c] transition-colors shrink-0" />
                </Link>

                <Link
                  href="/progress"
                  className="bg-white rounded-2xl border border-gray-100 shadow-xs p-4 flex items-center justify-between gap-3 hover:border-[#7a1c1c]/20 hover:bg-[#7a1c1c]/5 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <BarChart2 size={18} className="text-[#7a1c1c] shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-xs">{text.viewStats}</h4>
                      <p className="text-gray-400 text-[11px] leading-tight">{text.viewStatsDesc}</p>
                    </div>
                  </div>
                  <ChevronRight size={14} className="text-gray-400 group-hover:text-[#7a1c1c] transition-colors shrink-0" />
                </Link>

                <Link
                  href="/help"
                  className="bg-white rounded-2xl border border-gray-100 shadow-xs p-4 flex items-center justify-between gap-3 hover:border-[#7a1c1c]/20 hover:bg-[#7a1c1c]/5 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-[#7a1c1c] shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-xs">{text.needHelp}</h4>
                      <p className="text-gray-400 text-[11px] leading-tight">{text.needHelpDesc}</p>
                    </div>
                  </div>
                  <ChevronRight size={14} className="text-gray-400 group-hover:text-[#7a1c1c] transition-colors shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
