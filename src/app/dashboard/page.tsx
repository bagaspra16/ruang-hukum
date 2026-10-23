'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  BookOpen,
  HelpCircle,
  Scale,
  Users,
  BarChart2,
  ArrowRight,
  Crown,
  BookMarked,
  Building,
  GraduationCap,
  Target,
  Settings,
  LogOut,
  Edit,
  Check,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import { mockUser } from '@/lib/mock-data';
import { moduleContent } from '@/lib/mock-data-i18n';
import { useLanguage } from '@/lib/LanguageContext';

const moduleImages = [
  'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80',
  'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=400&q=80',
  'https://images.unsplash.com/photo-1555661530-68c8e98db4e6?w=400&q=80',
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80',
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=80',
  'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&q=80',
];

export default function DashboardPage() {
  const { t, lang } = useLanguage();
  const firstName = mockUser.full_name.split(' ')[0];
  const modules = moduleContent[lang] || moduleContent.en;

  const quickMenuItems = [
    { icon: BookOpen, label: t.quickMenu.legalMaterials, description: t.quickMenu.legalMaterialsDesc, href: '/materials' },
    { icon: HelpCircle, label: t.quickMenu.interactiveQuiz, description: t.quickMenu.interactiveQuizDesc, href: '/quiz' },
    { icon: Scale, label: t.quickMenu.expertContent, description: t.quickMenu.expertContentDesc, href: '/lex-ai' },
    { icon: BarChart2, label: t.quickMenu.myProgress, description: t.quickMenu.myProgressDesc, href: '/progress' },
  ];

  return (
    <div className="min-h-screen bg-[#f9f5ef] pb-16">
      <Navbar />

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Main 2-column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left / Center Main Content (lg:col-span-8 or 9) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Hero Welcome Banner */}
            <div
              className="relative h-44 md:h-52 rounded-2xl overflow-hidden shadow-sm flex items-center p-6 md:p-8"
              style={{
                background: 'linear-gradient(135deg, #4a0e0e 0%, #7a1c1c 60%, #8b2020 100%)',
              }}
            >
              {/* Classical legal library bookshelf background */}
              <div
                className="absolute inset-0 opacity-25 bg-cover bg-right"
                style={{
                  backgroundImage: `url('/wallpapers/wallpaper-1.jpg')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#4a0e0e]/90 via-[#7a1c1c]/60 to-transparent" />

              <div className="relative z-10 space-y-1">
                <h1 className="text-white font-serif font-bold text-3xl md:text-4xl leading-tight">
                  {t.dashboard.greeting}, {firstName}!
                </h1>
                <p className="text-white/80 text-sm md:text-base font-sans">
                  {t.dashboard.subtitle}
                </p>
              </div>
            </div>

            {/* Continue Learning Card */}
            <section className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden p-6 space-y-5">
              <div>
                <h2 className="text-gray-900 font-serif font-bold text-lg">{t.dashboard.continueLearning}</h2>
                <p className="text-gray-500 text-xs">
                  {t.dashboard.continueSubtitle}
                </p>
              </div>

              {/* 5 Quick Action Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {quickMenuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="group flex flex-col justify-between p-3.5 bg-gray-50/70 hover:bg-[#7a1c1c]/5 border border-gray-100 hover:border-[#7a1c1c]/20 rounded-xl transition-all h-full"
                    >
                      <div>
                        <div className="w-10 h-10 bg-[#7a1c1c] group-hover:bg-[#6b1414] rounded-xl flex items-center justify-center mb-2.5 transition-colors shadow-xs">
                          <Icon size={18} className="text-white" />
                        </div>
                        <h3 className="font-serif font-bold text-gray-900 text-xs mb-1 leading-snug">
                          {item.label}
                        </h3>
                        <p className="text-gray-500 text-[11px] leading-tight line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                      <div className="pt-3">
                        <ArrowRight
                          size={13}
                          className="text-[#7a1c1c] group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Inner 5-Day Free Trial Banner */}
              <div
                className="rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-white"
                style={{
                  background: 'linear-gradient(135deg, #7a1c1c 0%, #9e2a2a 100%)',
                }}
              >
                <div className="flex items-center gap-3">
                  <Crown size={24} className="text-[#d4af37] shrink-0" />
                  <div>
                    <h3 className="font-serif font-bold text-sm text-white">{t.dashboard.freeTrial}</h3>
                    <p className="text-white/80 text-xs">
                      {t.dashboard.freeTrialDesc}
                    </p>
                  </div>
                </div>
                <Link
                  href="/subscription"
                  className="bg-white hover:bg-gray-100 text-[#7a1c1c] font-semibold text-xs px-4 py-2 rounded-xl transition-colors shrink-0 shadow-xs"
                >
                  {t.dashboard.startFreeTrial}
                </Link>
              </div>
            </section>

            {/* Featured Learning Resources */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookMarked size={18} className="text-[#7a1c1c]" />
                  <h2 className="text-gray-900 font-serif font-bold text-base">
                    {t.dashboard.featuredResources}
                  </h2>
                </div>
                <Link
                  href="/materials"
                  className="inline-flex items-center gap-1 text-[#7a1c1c] text-xs font-semibold hover:underline"
                >
                  {t.dashboard.viewAll} <ArrowRight size={12} />
                </Link>
              </div>

              {/* 6 Core Chapter Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
                {modules.map((module, index) => (
                  <Link
                    key={module.id}
                    href={`/materials/${module.slug}`}
                    className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Thumbnail Image */}
                      <div className="relative h-28 w-full overflow-hidden bg-gray-900">
                        <Image
                          src={moduleImages[index]}
                          alt={module.title}
                          fill
                          sizes="(max-width: 768px) 50vw, 200px"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>

                      {/* Card Content */}
                      <div className="p-3 space-y-1">
                        <h3 className="font-serif font-bold text-gray-900 text-xs leading-snug line-clamp-1 group-hover:text-[#7a1c1c] transition-colors">
                          {module.title}
                        </h3>
                        <p className="text-gray-500 text-[10px] line-clamp-2 leading-relaxed">
                          {module.description}
                        </p>
                        <div className="flex items-center gap-1 text-gray-400 text-[10px] pt-1">
                          <BookMarked size={11} />
                          <span>{module.total_chapters} {t.dashboard.chapters}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 pt-0">
                      {/* Styled as a button but semantic span to avoid hydration error */}
                      <span className="block text-center w-full bg-[#7a1c1c] group-hover:bg-[#6b1414] text-white text-[11px] font-semibold py-1.5 rounded-lg transition-colors shadow-2xs">
                        {t.dashboard.explore}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column / Sidebar (lg:col-span-4) as per reference/2.jpg */}
          <aside className="lg:col-span-4 space-y-6">
            {/* My Profile Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-xs space-y-4">
              <h3 className="font-serif font-bold text-gray-900 text-sm">{t.dashboard.myProfile}</h3>

              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#8c6239] text-white font-serif font-bold text-base flex items-center justify-center shadow-xs">
                    KM
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-gray-900 text-sm leading-tight">
                      {mockUser.full_name.split(' ').slice(0, 2).join(' ')}
                    </h4>
                    <p className="text-gray-400 text-xs">{mockUser.email}</p>
                  </div>
                </div>

                <Link
                  href="/profile"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 text-[11px] font-semibold transition-colors"
                >
                  <Edit size={11} /> {t.dashboard.editProfile}
                </Link>
              </div>

              {/* Profile Details List */}
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-gray-500 text-[11px]">
                    <Building size={13} className="text-[#7a1c1c]" /> {t.dashboard.university}
                  </span>
                  <span className="font-semibold text-gray-900">{mockUser.university}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-gray-500 text-[11px]">
                    <GraduationCap size={13} className="text-[#7a1c1c]" /> {t.dashboard.programMajor}
                  </span>
                  <span className="font-semibold text-gray-900">{mockUser.major}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-gray-500 text-[11px]">
                    <Target size={13} className="text-[#7a1c1c]" /> {t.dashboard.learningGoal}
                  </span>
                  <span className="font-semibold text-gray-900">{mockUser.learning_goal}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-gray-500 text-[11px]">
                    <Crown size={13} className="text-[#d4af37]" /> {t.dashboard.subscriptionStatus}
                  </span>
                  <span className="text-amber-700 font-semibold flex items-center gap-1">
                    👑 {t.dashboard.freeTrial}{' '}
                    <span className="text-[10px] text-gray-400 font-normal">{t.dashboard.freeTrialDaysLeft}</span>
                  </span>
                </div>
              </div>

              {/* Quick Profile Links */}
              <div className="pt-2 border-t border-gray-100 space-y-1 text-xs">
                <Link
                  href="/settings"
                  className="flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 text-gray-700 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Settings size={14} className="text-gray-400" />
                    <span>{t.dashboard.accountSettings}</span>
                  </span>
                  <span className="text-gray-400">&gt;</span>
                </Link>

                <Link
                  href="/"
                  className="flex items-center justify-between p-2 rounded-xl hover:bg-red-50 text-red-600 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <LogOut size={14} />
                    <span>{t.dashboard.logOut}</span>
                  </span>
                  <span className="text-red-400">&gt;</span>
                </Link>
              </div>
            </div>

            {/* 5-Day Free Trial Sidebar Card (matches reference/2.jpg bottom right) */}
            <div className="bg-gradient-to-br from-[#4a0e0e] via-[#631313] to-[#7a1c1c] text-white rounded-2xl p-6 shadow-md space-y-4 relative overflow-hidden">
              <div className="flex items-center gap-2 text-[#d4af37]">
                <Crown size={22} />
              </div>

              <div className="space-y-1">
                <h3 className="font-serif font-bold text-white text-lg">{t.dashboard.freeTrial}</h3>
                <p className="text-white/80 text-xs leading-relaxed">
                  {t.dashboard.freeTrialDesc}
                </p>
              </div>

              {/* 5 Checkmarks */}
              <ul className="space-y-2 text-xs text-white/90 pt-1">
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-[#d4af37] shrink-0" strokeWidth={3} />
                  <span>{t.dashboard.unlockAllMaterials}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-[#d4af37] shrink-0" strokeWidth={3} />
                  <span>{t.dashboard.unlockQuizzes}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-[#d4af37] shrink-0" strokeWidth={3} />
                  <span>{t.dashboard.unlockExpert}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-[#d4af37] shrink-0" strokeWidth={3} />
                  <span>{t.dashboard.unlockProgress}</span>
                </li>
              </ul>

              <Link
                href="/subscription"
                className="block text-center w-full py-2.5 px-4 bg-[#fae1be] hover:bg-[#f3d4a8] text-[#7a1c1c] font-bold rounded-xl text-xs transition-colors shadow-xs"
              >
                {t.dashboard.startFreeTrialArrow}
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
