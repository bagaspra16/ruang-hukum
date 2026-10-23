'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  Clock,
  HelpCircle,
  Award,
  Settings,
  Download,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Trophy,
  Scale,
  BookOpen,
  Star,
  Flame,
  Compass,
  Users,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useUser } from '@/lib/useUser';
import { useLanguage } from '@/lib/LanguageContext';
import { moduleContent } from '@/lib/mock-data-i18n';
import { Lang } from '@/lib/translations';

const certificatesByLang: Record<Lang, Array<{
  id: string;
  subject: string;
  completedDate: string;
  code: string;
}>> = {
  en: [
    {
      id: 'cert-1',
      subject: 'Legal Science',
      completedDate: '12 Apr 2025',
      code: 'RH-CERT-2025-081',
    },
    {
      id: 'cert-2',
      subject: 'Introduction to Law',
      completedDate: '10 Apr 2025',
      code: 'RH-CERT-2025-074',
    },
    {
      id: 'cert-3',
      subject: 'Criminal Law',
      completedDate: '8 Apr 2025',
      code: 'RH-CERT-2025-062',
    },
  ],
  id: [
    {
      id: 'cert-1',
      subject: 'Ilmu Hukum',
      completedDate: '12 Apr 2025',
      code: 'RH-CERT-2025-081',
    },
    {
      id: 'cert-2',
      subject: 'Pengantar Hukum',
      completedDate: '10 Apr 2025',
      code: 'RH-CERT-2025-074',
    },
    {
      id: 'cert-3',
      subject: 'Hukum Pidana',
      completedDate: '8 Apr 2025',
      code: 'RH-CERT-2025-062',
    },
  ],
};

const achievementIcons = [BookOpen, Star, Flame, Compass, Users, Trophy];
const achievementBg = [
  'bg-amber-500',
  'bg-[#7a1c1c]',
  'bg-emerald-600',
  'bg-indigo-600',
  'bg-purple-600',
  'bg-amber-600',
];

const achievementsByLang: Record<Lang, Array<{
  id: string;
  name: string;
  description: string;
  date: string;
}>> = {
  en: [
    { id: '1', name: 'First Chapter Completed', description: 'Completed Chapter 1', date: '12 Apr 2025' },
    { id: '2', name: 'Quiz Master', description: 'Scored 80%+', date: '10 Apr 2025' },
    { id: '3', name: 'Learning Streak', description: '3 Days in a row', date: '8 Apr 2025' },
    { id: '4', name: 'Legal Explorer', description: 'Completed 3 Courses', date: '5 Apr 2025' },
    { id: '5', name: 'Knowledge Seeker', description: '5 Chapters read', date: '3 Apr 2025' },
    { id: '6', name: 'Consistent Learner', description: '7 Days learning', date: '1 Apr 2025' },
  ],
  id: [
    { id: '1', name: 'Bab Pertama Selesai', description: 'Menyelesaikan Bab 1', date: '12 Apr 2025' },
    { id: '2', name: 'Juara Kuis', description: 'Meraih skor 80%+', date: '10 Apr 2025' },
    { id: '3', name: 'Beruntun Belajar', description: '3 hari berturut-turut', date: '8 Apr 2025' },
    { id: '4', name: 'Penjelajah Hukum', description: 'Menyelesaikan 3 Kursus', date: '5 Apr 2025' },
    { id: '5', name: 'Pencari Ilmu', description: '5 Bab terbaca', date: '3 Apr 2025' },
    { id: '6', name: 'Pembelajar Konsisten', description: '7 Hari belajar aktif', date: '1 Apr 2025' },
  ],
};

export default function CertificatesPage() {
  const { lang, t } = useLanguage();
  const { displayName } = useUser();
  const [activeTab, setActiveTab] = useState<'certificates' | 'achievements'>('certificates');
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const certificates = certificatesByLang[lang] || certificatesByLang.en;
  const achievements = achievementsByLang[lang] || achievementsByLang.en;
  const modules = moduleContent[lang] || moduleContent.en;

  const handleDownload = (certId: string) => {
    setDownloadingId(certId);
    setTimeout(() => {
      setDownloadingId(null);
      alert(lang === 'en' ? 'Certificate downloaded successfully!' : 'Sertifikat berhasil diunduh!');
    }, 1000);
  };

  const copy = {
    en: {
      badge: 'CERTIFICATES & ACHIEVEMENTS',
      heroTitle: 'Your Journey, Recognized',
      heroDesc: 'Earn certificates and unlock achievements as you progress in your legal learning journey.',
      tabCertificates: 'Certificates',
      tabAchievements: 'Achievements',
      myCertificates: 'My Certificates',
      earnedCount: '3 of 6 Earned',
      certTitle: 'Certificate of Completion',
      certCertifies: 'This certifies that',
      certCompleted: 'has successfully completed the course.',
      downloadBtn: 'Download Certificate',
      downloading: 'Downloading...',
      keepLearningTitle: 'Keep Learning, Keep Earning!',
      keepLearningDesc: 'Complete more chapters, pass quizzes, and unlock new certificates.',
      exploreMaterials: 'Explore Materials',
      unlockedBadges: 'Unlocked Badges',
      myAchievements: 'My Achievements',
      completedMaterials: 'Completed Materials',
      viewAll: 'View All >',
      quote: '“Progress, not perfection.”',
    },
    id: {
      badge: 'SERTIFIKAT & PENCAPAIAN',
      heroTitle: 'Perjalanan Anda, Diakui',
      heroDesc: 'Raih sertifikat dan buka pencapaian seiring kemajuan perjalanan belajar hukum Anda.',
      tabCertificates: 'Sertifikat',
      tabAchievements: 'Pencapaian',
      myCertificates: 'Sertifikat Saya',
      earnedCount: '3 dari 6 Diraih',
      certTitle: 'Sertifikat Kelulusan',
      certCertifies: 'Menyatakan bahwa',
      certCompleted: 'telah berhasil menyelesaikan kursus pembelajaran.',
      downloadBtn: 'Unduh Sertifikat',
      downloading: 'Mengunduh...',
      keepLearningTitle: 'Terus Belajar, Raih Prestasi!',
      keepLearningDesc: 'Selesaikan lebih banyak bab, lulus kuis, dan raih sertifikat baru.',
      exploreMaterials: 'Jelajahi Materi',
      unlockedBadges: 'Lencana yang Terbuka',
      myAchievements: 'Pencapaian Saya',
      completedMaterials: 'Materi Selesai',
      viewAll: 'Lihat Semua >',
      quote: '“Kemajuan, bukan kesempurnaan.”',
    },
  }[lang];

  return (
    <div className="min-h-screen bg-[#f9f5ef] pb-16">
      <Navbar />

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Mobile Navigation Pills (< lg) */}
        <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          <Link
            href="/dashboard"
            className="px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap bg-white text-gray-700 border border-gray-200 shrink-0"
          >
            Dashboard
          </Link>
          <Link
            href="/progress"
            className="px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap bg-white text-gray-700 border border-gray-200 shrink-0"
          >
            {t.nav.progress}
          </Link>
          <Link
            href="/quiz"
            className="px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap bg-white text-gray-700 border border-gray-200 shrink-0"
          >
            {t.nav.quiz}
          </Link>
          <Link
            href="/certificates"
            className="px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap bg-[#7a1c1c] text-white shadow-xs shrink-0"
          >
            {copy.tabCertificates}
          </Link>
          <Link
            href="/settings"
            className="px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap bg-white text-gray-700 border border-gray-200 shrink-0"
          >
            {t.nav.accountSettings}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Mini-Sidebar (cols 1-2) */}
          <aside className="lg:col-span-2 hidden lg:block space-y-2">
            <div className="bg-white rounded-2xl border border-gray-100 p-2 shadow-xs space-y-1">
              <Link
                href="/dashboard"
                className="flex items-start gap-2.5 p-2.5 rounded-xl text-left hover:bg-gray-50 transition-colors group"
              >
                <LayoutDashboard size={16} className="mt-0.5 text-gray-500 group-hover:text-[#7a1c1c] shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-gray-800 group-hover:text-[#7a1c1c]">Dashboard</p>
                  <p className="text-[10px] text-gray-400">
                    {lang === 'en' ? 'Your learning overview' : 'Ikhtisar belajar Anda'}
                  </p>
                </div>
              </Link>

              <Link
                href="/progress"
                className="flex items-start gap-2.5 p-2.5 rounded-xl text-left hover:bg-gray-50 transition-colors group"
              >
                <Clock size={16} className="mt-0.5 text-gray-500 group-hover:text-[#7a1c1c] shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-gray-800 group-hover:text-[#7a1c1c]">{t.nav.progress}</p>
                  <p className="text-[10px] text-gray-400">
                    {lang === 'en' ? 'Track your progress' : 'Pantau perkembangan Anda'}
                  </p>
                </div>
              </Link>

              <Link
                href="/quiz"
                className="flex items-start gap-2.5 p-2.5 rounded-xl text-left hover:bg-gray-50 transition-colors group"
              >
                <HelpCircle size={16} className="mt-0.5 text-gray-500 group-hover:text-[#7a1c1c] shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-gray-800 group-hover:text-[#7a1c1c]">{t.nav.quiz}</p>
                  <p className="text-[10px] text-gray-400">
                    {lang === 'en' ? 'View quiz results' : 'Lihat hasil kuis Anda'}
                  </p>
                </div>
              </Link>

              <Link
                href="/certificates"
                className="flex items-start gap-2.5 p-2.5 rounded-xl text-left bg-[#7a1c1c]/10 text-[#7a1c1c] transition-colors"
              >
                <Award size={16} className="mt-0.5 text-[#7a1c1c] shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-[#7a1c1c]">{copy.tabCertificates}</p>
                  <p className="text-[10px] text-[#7a1c1c]/70">
                    {lang === 'en' ? 'Your achievements' : 'Pencapaian Anda'}
                  </p>
                </div>
              </Link>

              <Link
                href="/settings"
                className="flex items-start gap-2.5 p-2.5 rounded-xl text-left hover:bg-gray-50 transition-colors group"
              >
                <Settings size={16} className="mt-0.5 text-gray-500 group-hover:text-[#7a1c1c] shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-gray-800 group-hover:text-[#7a1c1c]">{t.nav.accountSettings}</p>
                  <p className="text-[10px] text-gray-400">
                    {lang === 'en' ? 'Account preferences' : 'Preferensi akun'}
                  </p>
                </div>
              </Link>
            </div>
          </aside>

          {/* Center Main Content (cols 3-8) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Header Banner */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#7a1c1c] via-[#8c2222] to-[#5a1414] text-white p-6 md:p-8 shadow-md">
              <div
                className="absolute inset-0 opacity-20 bg-cover bg-right pointer-events-none"
                style={{ backgroundImage: `url('/wallpapers/wallpaper-4.jpg')` }}
              />
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className="w-16 h-16 rounded-full border-2 border-[#d4af37]/60 bg-[#d4af37]/20 flex items-center justify-center shrink-0">
                  <Award className="w-8 h-8 text-[#d4af37]" />
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-[#d4af37]">
                    {copy.badge}
                  </p>
                  <h1 className="text-2xl md:text-3xl font-serif font-bold text-white">
                    {copy.heroTitle}
                  </h1>
                  <p className="text-xs md:text-sm text-white/80 max-w-xl">
                    {copy.heroDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* View Switcher Tabs */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('certificates')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'certificates'
                    ? 'bg-[#7a1c1c] text-white shadow-xs'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {copy.tabCertificates}
              </button>
              <button
                onClick={() => setActiveTab('achievements')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'achievements'
                    ? 'bg-[#7a1c1c] text-white shadow-xs'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {copy.tabAchievements}
              </button>
            </div>

            {/* My Certificates Section */}
            {activeTab === 'certificates' ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-serif font-bold text-gray-900 text-base">{copy.myCertificates}</h2>
                  <span className="text-xs text-gray-400">{copy.earnedCount}</span>
                </div>

                {/* 3 Certificate Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {certificates.map((cert) => (
                    <div
                      key={cert.id}
                      className="bg-white rounded-2xl border border-gray-200/80 p-3 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-3"
                    >
                      {/* Realistic Certificate Frame */}
                      <div className="bg-[#fefdfb] border-2 border-[#d4af37]/60 rounded-xl p-3.5 text-center relative overflow-hidden shadow-inner flex flex-col justify-between min-h-[220px]">
                        {/* Corner Accents */}
                        <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-[#d4af37]" />
                        <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[#d4af37]" />
                        <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-[#d4af37]" />
                        <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-[#d4af37]" />

                        {/* Certificate Header */}
                        <div>
                          <p className="text-[8px] font-bold tracking-widest text-[#7a1c1c] uppercase">
                            RUANG HUKUM ⚖
                          </p>
                          <h3 className="font-serif font-bold text-gray-900 text-[11px] mt-1 leading-tight">
                            {copy.certTitle}
                          </h3>
                          <p className="text-[10px] font-semibold text-[#7a1c1c]">{cert.subject}</p>
                        </div>

                        {/* Recipient */}
                        <div className="py-2">
                          <p className="text-[8px] text-gray-400">{copy.certCertifies}</p>
                          <p className="font-serif font-bold italic text-gray-900 text-xs mt-0.5">
                            {displayName || 'Pelajar Ruang Hukum'}
                          </p>
                          <p className="text-[8px] text-gray-500 mt-0.5">
                            {copy.certCompleted}
                          </p>
                        </div>

                        {/* Seal and Signatures */}
                        <div className="flex items-center justify-between pt-1 border-t border-amber-100/80 text-[8px] text-gray-400">
                          <span>{cert.completedDate}</span>
                          {/* Gold Seal Medallion */}
                          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 border border-yellow-600 shadow-xs flex items-center justify-center text-[7px] font-bold text-amber-950">
                            ★
                          </div>
                          <span className="font-serif italic text-gray-600">Ruang Hukum</span>
                        </div>
                      </div>

                      {/* Info & Download Action */}
                      <div className="space-y-2 pt-1 text-center">
                        <h4 className="font-serif font-bold text-gray-900 text-xs">
                          {cert.subject}
                        </h4>
                        <p className="text-[10px] text-gray-400">
                          {lang === 'en' ? `Completed on ${cert.completedDate}` : `Selesai pada ${cert.completedDate}`}
                        </p>

                        <button
                          onClick={() => handleDownload(cert.id)}
                          disabled={downloadingId === cert.id}
                          className="w-full py-2 px-3 border border-[#7a1c1c] text-[#7a1c1c] hover:bg-[#7a1c1c] hover:text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Download size={13} />
                          {downloadingId === cert.id ? copy.downloading : copy.downloadBtn}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Keep Learning CTA Banner */}
                <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#d4af37] flex items-center justify-center shrink-0">
                      <Trophy size={20} />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-gray-900 text-sm">
                        {copy.keepLearningTitle}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {copy.keepLearningDesc}
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/materials"
                    className="px-4 py-2 bg-[#7a1c1c] hover:bg-[#661616] text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-colors"
                  >
                    {copy.exploreMaterials} <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ) : (
              /* Achievements Tab */
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-xs space-y-4">
                <h2 className="font-serif font-bold text-gray-900 text-base">{copy.unlockedBadges}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {achievements.map((ach, idx) => {
                    const Icon = achievementIcons[idx % achievementIcons.length];
                    const bg = achievementBg[idx % achievementBg.length];
                    return (
                      <div
                        key={ach.id}
                        className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 flex flex-col items-center text-center space-y-2 hover:bg-white hover:shadow-xs transition-all"
                      >
                        <div
                          className={`w-12 h-12 rounded-2xl ${bg} text-white flex items-center justify-center shadow-xs`}
                        >
                          <Icon size={22} />
                        </div>
                        <div>
                          <h4 className="font-serif font-bold text-gray-900 text-xs leading-tight">
                            {ach.name}
                          </h4>
                          <p className="text-[10px] text-gray-500 mt-0.5">{ach.description}</p>
                          <span className="text-[9px] text-[#7a1c1c] font-semibold mt-1 inline-block">
                            {ach.date}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Column Stats (cols 9-12) */}
          <div className="lg:col-span-3 space-y-6">
            {/* My Achievements Grid Widget */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif font-bold text-gray-900 text-xs">{copy.myAchievements}</h3>
                <span className="text-[10px] text-[#7a1c1c] font-semibold">{copy.viewAll}</span>
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                {achievements.map((ach, idx) => {
                  const Icon = achievementIcons[idx % achievementIcons.length];
                  const bg = achievementBg[idx % achievementBg.length];
                  return (
                    <div
                      key={ach.id}
                      className="flex flex-col items-center text-center p-2 rounded-xl bg-gray-50 hover:bg-amber-50/60 transition-colors group"
                      title={`${ach.name} - ${ach.date}`}
                    >
                      <div
                        className={`w-9 h-9 rounded-xl ${bg} text-white flex items-center justify-center shadow-xs mb-1`}
                      >
                        <Icon size={16} />
                      </div>
                      <span className="text-[9px] font-semibold text-gray-800 line-clamp-1">
                        {ach.name}
                      </span>
                      <span className="text-[8px] text-gray-400">{ach.date}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Completed Materials Checklist */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-xs space-y-3.5">
              <div className="flex items-center justify-between">
                <h3 className="font-serif font-bold text-gray-900 text-xs">{copy.completedMaterials}</h3>
                <Link
                  href="/materials"
                  className="text-[10px] text-[#7a1c1c] font-semibold hover:underline"
                >
                  {copy.viewAll}
                </Link>
              </div>

              <div className="space-y-2">
                {modules.map((mat) => (
                  <Link
                    key={mat.id}
                    href={`/materials/${mat.slug}`}
                    className="flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <CheckCircle2 size={14} className="text-[#7a1c1c] shrink-0" />
                      <div className="truncate">
                        <p className="text-xs font-semibold text-gray-800 truncate group-hover:text-[#7a1c1c] transition-colors">
                          {mat.title}
                        </p>
                        <p className="text-[9px] text-gray-400">{mat.estimated_duration}</p>
                      </div>
                    </div>
                    <ChevronRight size={13} className="text-gray-400 shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Ruang Hukum Quote */}
            <div className="bg-[#fcf8f2] rounded-2xl border border-[#eedec7] p-5 text-center space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#7a1c1c]/10 text-[#7a1c1c] flex items-center justify-center mx-auto">
                <Scale size={16} />
              </div>
              <p className="font-serif italic text-xs text-[#7a1c1c] font-medium">
                {copy.quote}
              </p>
              <p className="text-[10px] uppercase tracking-widest text-gray-500">
                — RUANG HUKUM —
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
