'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  Clock,
  HelpCircle,
  Settings,
  BookOpen,
  Target,
  Star,
  Flame,
  CheckCircle2,
  ChevronRight,
  Coins,
  Crown,
  Scale,
  Shield,
  Users,
  Search,
  Briefcase,
  ArrowRight,
  Check,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import { progressContent, achievementsContent } from '@/lib/mock-data-i18n';
import { useLanguage } from '@/lib/LanguageContext';
import { useUser } from '@/lib/useUser';

const subjectIcons: Record<string, React.ElementType> = {
  'legal-science': Scale,
  'introduction-to-law': BookOpen,
  'criminal-law': Shield,
  'legal-clinic': Users,
  'legal-reasoning': Search,
  'career-preparation': Briefcase,
};

export default function ProgressPage() {
  const { lang, t } = useLanguage();
  const { firstName, loading } = useUser();
  const [goalEditing, setGoalEditing] = useState(false);
  const [goalText, setGoalText] = useState(
    lang === 'id'
      ? 'Selesaikan semua materi dan kuis untuk menjadi profesional hukum yang unggul.'
      : 'Complete all materials and quizzes to become a better legal professional.'
  );

  const currentProgress = progressContent[lang];
  const currentAchievements = achievementsContent[lang];

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
            {t.nav.dashboard}
          </Link>
          <Link
            href="/progress"
            className="px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap bg-[#7a1c1c] text-white shadow-xs shrink-0"
          >
            {t.dashboard.myLearning}
          </Link>
          <Link
            href="/quiz"
            className="px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap bg-white text-gray-700 border border-gray-200 shrink-0"
          >
            {t.nav.quiz}
          </Link>
          <Link
            href="/settings"
            className="px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap bg-white text-gray-700 border border-gray-200 shrink-0"
          >
            {lang === 'id' ? 'Pengaturan' : 'Settings'}
          </Link>
        </div>

        {/* Main 3-column / sidebar layout */}
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
                  <p className="text-xs font-semibold text-gray-800 group-hover:text-[#7a1c1c]">{t.nav.dashboard}</p>
                  <p className="text-[10px] text-gray-400">
                    {lang === 'id' ? 'Ikhtisar belajar Anda' : 'Your learning overview'}
                  </p>
                </div>
              </Link>

              <Link
                href="/progress"
                className="flex items-start gap-2.5 p-2.5 rounded-xl text-left bg-[#7a1c1c]/10 text-[#7a1c1c] transition-colors"
              >
                <Clock size={16} className="mt-0.5 text-[#7a1c1c] shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-[#7a1c1c]">{t.dashboard.myLearning}</p>
                  <p className="text-[10px] text-[#7a1c1c]/70">
                    {lang === 'id' ? 'Pantau progres Anda' : 'Track your progress'}
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
                    {lang === 'id' ? 'Lihat hasil kuis Anda' : 'View your quiz results'}
                  </p>
                </div>
              </Link>

              <Link
                href="/settings"
                className="flex items-start gap-2.5 p-2.5 rounded-xl text-left hover:bg-gray-50 transition-colors group"
              >
                <Settings size={16} className="mt-0.5 text-gray-500 group-hover:text-[#7a1c1c] shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-gray-800 group-hover:text-[#7a1c1c]">
                    {lang === 'id' ? 'Pengaturan' : 'Settings'}
                  </p>
                  <p className="text-[10px] text-gray-400">
                    {lang === 'id' ? 'Preferensi akun' : 'Account preferences'}
                  </p>
                </div>
              </Link>
            </div>
          </aside>

          {/* Center Main Content (cols 3-8) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Greeting Header */}
            <div className="bg-gradient-to-r from-white via-white to-amber-50/50 rounded-2xl border border-gray-100 p-6 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
                  {loading
                    ? (lang === 'id' ? 'Selamat Datang!' : 'Welcome!')
                    : (lang === 'id' ? `Selamat Datang, ${firstName}!` : `Welcome, ${firstName}!`)}
                </h1>
                <p className="text-xs md:text-sm text-gray-600">
                  {lang === 'id'
                    ? 'Teruslah belajar! Dedikasi Anda dalam mempelajari hukum membuat perbedaan nyata.'
                    : 'Keep going! Your dedication to learning law is making a difference.'}
                </p>
              </div>

              <div className="text-right hidden md:block max-w-xs border-l border-amber-200/60 pl-4">
                <p className="text-xs font-serif italic text-amber-900/80 leading-relaxed">
                  {lang === 'id'
                    ? '“Langkah kecil dalam belajar membawa perubahan besar bagi masa depan Anda.”'
                    : '“Small steps in learning lead to big changes in your future.”'}
                </p>
              </div>
            </div>

            {/* Overall Learning Progress Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-xs space-y-6">
              <h2 className="font-serif font-bold text-gray-900 text-base">
                {lang === 'id' ? 'Kemajuan Belajar Keseluruhan' : 'Overall Learning Progress'}
              </h2>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                {/* Circular Percentage Ring */}
                <div className="relative w-32 h-32 shrink-0 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="stroke-gray-100"
                      strokeWidth="10"
                      fill="transparent"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="stroke-[#7a1c1c]"
                      strokeWidth="10"
                      strokeDasharray={251.2}
                      strokeDashoffset={251.2 * (1 - currentProgress.overall_percentage / 100)}
                      strokeLinecap="round"
                      fill="transparent"
                    />
                  </svg>
                  <div className="absolute text-center">
                    <span className="text-2xl font-serif font-bold text-gray-900">
                      {currentProgress.overall_percentage}%
                    </span>
                    <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">
                      {lang === 'id' ? 'Selesai' : 'Completed'}
                    </p>
                  </div>
                </div>

                {/* Progress Details */}
                <div className="flex-1 space-y-3 w-full">
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      {lang === 'id'
                        ? `Anda telah menyelesaikan ${currentProgress.completed_chapters} dari ${currentProgress.total_chapters} bab`
                        : `You've completed ${currentProgress.completed_chapters} of ${currentProgress.total_chapters} chapters`}
                    </p>
                    <p className="text-xs text-gray-500">
                      {lang === 'id'
                        ? 'Terus lanjutkan untuk mencapai target belajar Anda!'
                        : 'Keep going to reach your learning goal!'}
                    </p>
                  </div>

                  {/* Horizontal Bar */}
                  <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                    <div
                      className="bg-[#7a1c1c] h-full rounded-full transition-all duration-500"
                      style={{ width: `${currentProgress.overall_percentage}%` }}
                    />
                  </div>

                  {/* 4 Stat Badges */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    <div className="p-2.5 bg-gray-50 rounded-xl space-y-0.5">
                      <div className="flex items-center gap-1.5 text-[#7a1c1c]">
                        <BookOpen size={14} />
                        <span className="text-xs font-bold">{currentProgress.completed_chapters}</span>
                      </div>
                      <p className="text-[10px] text-gray-500 leading-tight">
                        {lang === 'id' ? 'Bab Selesai' : 'Chapters Completed'}
                      </p>
                    </div>

                    <div className="p-2.5 bg-gray-50 rounded-xl space-y-0.5">
                      <div className="flex items-center gap-1.5 text-blue-600">
                        <Clock size={14} />
                        <span className="text-xs font-bold">{currentProgress.total_hours}</span>
                      </div>
                      <p className="text-[10px] text-gray-500 leading-tight">
                        {lang === 'id' ? 'Waktu Belajar' : 'Total Learning Time'}
                      </p>
                    </div>

                    <div className="p-2.5 bg-gray-50 rounded-xl space-y-0.5">
                      <div className="flex items-center gap-1.5 text-amber-600">
                        <Target size={14} />
                        <span className="text-xs font-bold">{currentProgress.quizzes_taken}</span>
                      </div>
                      <p className="text-[10px] text-gray-500 leading-tight">
                        {lang === 'id' ? 'Kuis Dikerjakan' : 'Quizzes Taken'}
                      </p>
                    </div>

                    <div className="p-2.5 bg-gray-50 rounded-xl space-y-0.5">
                      <div className="flex items-center gap-1.5 text-emerald-600">
                        <Star size={14} />
                        <span className="text-xs font-bold">{currentProgress.average_score}%</span>
                      </div>
                      <p className="text-[10px] text-gray-500 leading-tight">
                        {lang === 'id' ? 'Skor Rata-Rata' : 'Average Score'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Learning Goal Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#d4af37] flex items-center justify-center">
                    <Target size={16} />
                  </div>
                  <h3 className="font-serif font-bold text-gray-900 text-sm">
                    {lang === 'id' ? 'Target Belajar Anda' : 'Your Learning Goal'}
                  </h3>
                </div>
                <button
                  onClick={() => setGoalEditing(!goalEditing)}
                  className="text-xs font-semibold text-[#7a1c1c] hover:underline cursor-pointer"
                >
                  {goalEditing
                    ? (lang === 'id' ? 'Simpan' : 'Save')
                    : (lang === 'id' ? 'Ubah Target' : 'Edit Goal')}
                </button>
              </div>

              {goalEditing ? (
                <input
                  type="text"
                  value={goalText}
                  onChange={(e) => setGoalText(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl focus:outline-hidden focus:border-[#7a1c1c]"
                />
              ) : (
                <p className="text-xs text-gray-600 leading-relaxed">{goalText}</p>
              )}

              <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-gray-500 font-medium">
                  <span>{lang === 'id' ? 'Kemajuan Target' : 'Goal Progress'}</span>
                  <span>{currentProgress.overall_percentage}%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#7a1c1c] h-full rounded-full"
                    style={{ width: `${currentProgress.overall_percentage}%` }}
                  />
                </div>
              </div>
            </div>

            {/* My Learning Journey Table */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif font-bold text-gray-900 text-sm flex items-center gap-2">
                  <span>{lang === 'id' ? 'Perjalanan Belajar Saya' : 'My Learning Journey'}</span>
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-gray-100 text-gray-400 font-medium pb-2">
                      <th className="pb-3 font-medium">{lang === 'id' ? 'Mata Kuliah' : 'Subject'}</th>
                      <th className="pb-3 font-medium">{lang === 'id' ? 'Kemajuan' : 'Progress'}</th>
                      <th className="pb-3 font-medium">{lang === 'id' ? 'Status' : 'Status'}</th>
                      <th className="pb-3 font-medium">{lang === 'id' ? 'Terakhir Diakses' : 'Last Accessed'}</th>
                      <th className="pb-3 font-medium"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {currentProgress.modules.map((mod) => {
                      const Icon = subjectIcons[mod.slug] || BookOpen;
                      const percent =
                        mod.total > 0 ? Math.round((mod.completed / mod.total) * 100) : 0;
                      return (
                        <tr key={mod.slug} className="hover:bg-gray-50/80 transition-colors">
                          <td className="py-3.5 pr-4">
                            <div className="flex items-center gap-2.5">
                              <div className="w-7 h-7 rounded-lg bg-[#7a1c1c]/10 text-[#7a1c1c] flex items-center justify-center shrink-0">
                                <Icon size={14} />
                              </div>
                              <span className="font-semibold text-gray-900 line-clamp-1">
                                {mod.name}
                              </span>
                            </div>
                          </td>
                          <td className="py-3.5 pr-4 min-w-[120px]">
                            <div className="space-y-1">
                              <span className="text-[11px] text-gray-500">
                                {mod.completed}/{mod.total} {lang === 'id' ? 'bab' : 'chapters'} ({percent}%)
                              </span>
                              <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                                <div
                                  className="bg-[#7a1c1c] h-full rounded-full"
                                  style={{ width: `${percent}%` }}
                                />
                              </div>
                            </div>
                          </td>
                          <td className="py-3.5 pr-4">
                            <span
                              className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${
                                mod.status === 'Completed' || mod.status === 'Selesai'
                                  ? 'bg-emerald-50 text-emerald-700'
                                  : mod.status === 'In Progress' || mod.status === 'Sedang Berjalan'
                                  ? 'bg-amber-50 text-amber-700'
                                  : 'bg-gray-100 text-gray-500'
                              }`}
                            >
                              {(mod.status === 'Completed' || mod.status === 'Selesai') && <CheckCircle2 size={10} />}
                              {mod.status}
                            </span>
                          </td>
                          <td className="py-3.5 pr-4 text-gray-500 whitespace-nowrap">
                            {mod.last_accessed}
                          </td>
                          <td className="py-3.5 text-right">
                            <Link
                              href={`/materials/${mod.slug}`}
                              className="text-gray-400 hover:text-[#7a1c1c] inline-block p-1"
                            >
                              <ChevronRight size={14} />
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column Stats (cols 9-12) */}
          <div className="lg:col-span-3 space-y-6">
            {/* Streak Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-700 flex items-center gap-1.5">
                  <Flame size={15} className="text-orange-500 fill-orange-500" />{' '}
                  {lang === 'id' ? 'Beruntun Belajar' : 'Streak'}
                </span>
                <span className="text-[10px] text-gray-400">
                  {lang === 'id' ? 'Pertahankan!' : 'Keep it alive!'}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-400 text-white flex items-center justify-center shadow-sm">
                  <Flame size={26} className="fill-white" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold text-gray-900">
                    {currentProgress.streak_days} {lang === 'id' ? 'Hari' : 'Days'}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {lang === 'id' ? 'Pertahankan streak belajar Anda!' : 'Keep your streak alive!'}
                  </p>
                </div>
              </div>

              {/* 5 Day Indicators */}
              <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                {[1, 2, 3, 4, 5].map((d) => (
                  <div key={d} className="flex flex-col items-center gap-1">
                    <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-[10px] font-bold">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-[10px] text-gray-400">
                      {lang === 'id' ? 'Hari' : 'Day'} {d}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Points */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-xs flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-[11px] font-medium text-gray-500">
                  {lang === 'id' ? 'Poin Saat Ini' : 'Current Points'}
                </span>
                <div className="flex items-center gap-1.5">
                  <Coins size={18} className="text-[#d4af37]" />
                  <span className="text-lg font-serif font-bold text-gray-900">
                    {currentProgress.points.toLocaleString()}
                  </span>
                </div>
              </div>

              <Link
                href="/subscription"
                className="px-3.5 py-1.5 bg-[#7a1c1c] text-white rounded-xl text-xs font-semibold hover:bg-[#661616] transition-colors"
              >
                {lang === 'id' ? 'Lihat Hadiah' : 'View Rewards'}
              </Link>
            </div>

            {/* Recent Quiz Results */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif font-bold text-gray-900 text-xs">
                  {lang === 'id' ? 'Hasil Kuis Terbaru' : 'Recent Quiz Results'}
                </h3>
                <Link href="/quiz" className="text-[11px] text-[#7a1c1c] font-semibold hover:underline">
                  {lang === 'id' ? 'Lihat Semua >' : 'View All >'}
                </Link>
              </div>

              <div className="space-y-3">
                {currentProgress.recent_quizzes.map((quiz, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 border border-gray-100"
                  >
                    <div className="space-y-0.5 max-w-[70%]">
                      <h4 className="text-xs font-semibold text-gray-900 line-clamp-1">
                        {quiz.chapter}
                      </h4>
                      <p className="text-[10px] text-gray-400">
                        {quiz.module} • {quiz.date}
                      </p>
                    </div>

                    {quiz.score >= 0 ? (
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-lg ${
                          quiz.score >= 80
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {quiz.score}%
                      </span>
                    ) : (
                      <span className="text-[10px] font-medium text-gray-400 bg-gray-200/60 px-2 py-0.5 rounded-lg">
                        {lang === 'id' ? 'Belum Diambil' : 'Not Taken'}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-xs space-y-3.5">
              <div className="flex items-center justify-between">
                <h3 className="font-serif font-bold text-gray-900 text-xs">
                  {lang === 'id' ? 'Lencana Pencapaian' : 'Achievement Badges'}
                </h3>
                <span className="text-[10px] text-gray-400 font-medium">
                  {currentAchievements.length} {lang === 'id' ? 'Lencana' : 'Badges'}
                </span>
              </div>

              <div className="space-y-2.5">
                {currentAchievements.map((ach) => (
                  <div key={ach.id} className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50">
                    <span className="text-xl">{ach.icon}</span>
                    <div className="space-y-0.5 flex-1 min-w-0">
                      <h4 className="text-xs font-semibold text-gray-900 line-clamp-1">
                        {ach.name}
                      </h4>
                      <p className="text-[10px] text-gray-500 line-clamp-1">{ach.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ruang Hukum Card */}
            <div className="bg-gradient-to-br from-[#1e2022] to-[#2d2522] text-white p-5 rounded-2xl space-y-2 relative overflow-hidden">
              <p className="font-serif text-sm font-bold text-[#d4af37]">
                {lang === 'id' ? 'Progres, bukan kesempurnaan.' : 'Progress not perfection.'}
              </p>
              <p className="text-xs text-white/80 leading-relaxed">
                {lang === 'id'
                  ? 'Setiap bab dan setiap kuis membawa Anda lebih dekat ke tujuan hukum Anda.'
                  : 'Every chapter, every quiz, brings you closer to your legal goals.'}
              </p>
              <p className="text-[10px] uppercase tracking-widest text-[#d4af37]/80 pt-2">
                — RUANG HUKUM —
              </p>
            </div>
          </div>
        </div>

        {/* Free Trial Banner */}
        <section className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/70 rounded-2xl p-4 md:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center text-[#997613] shrink-0">
              <Crown size={22} />
            </div>
            <div>
              <h4 className="text-sm font-serif font-bold text-gray-900">
                {t.materials.freeTrial}
              </h4>
              <p className="text-xs text-gray-600">
                {t.materials.freeTrialDesc}
              </p>
            </div>
          </div>

          <Link
            href="/subscription"
            className="px-5 py-2.5 bg-[#7a1c1c] hover:bg-[#661616] text-white rounded-xl text-xs font-semibold shadow-xs flex items-center gap-1.5 shrink-0 transition-colors"
          >
            {lang === 'id' ? 'Tingkatkan Sekarang' : 'Upgrade Now'} <ArrowRight size={13} />
          </Link>
        </section>
      </main>
    </div>
  );
}
