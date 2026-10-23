'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  User,
  Sliders,
  Bell,
  Shield,
  HelpCircle,
  Camera,
  Check,
  ChevronRight,
  BookOpen,
  HelpCircle as QuizIcon,
  Clock,
  Star,
  Scale,
  Lock,
  Smartphone,
  Laptop,
  Play,
  FileText,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useUser } from '@/lib/useUser';
import { useLanguage } from '@/lib/LanguageContext';

export default function SettingsPage() {
  const { lang, setLang } = useLanguage();
  const { displayName, email, university, major, initials, loading, updateProfile } = useUser();
  const [activeTab, setActiveTab] = useState<'account' | 'learning' | 'notifications' | 'security'>('account');
  const [profileData, setProfileData] = useState({
    fullName: '',
    email: '',
    studentId: '',
    phone: '',
    institution: '',
    major: '',
  });
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  // Pre-fill form once user data loads
  useEffect(() => {
    if (!loading) {
      setProfileData((prev) => ({
        ...prev,
        fullName: displayName || '',
        email: email || '',
        institution: university || '',
        major: major || '',
      }));
    }
  }, [loading, displayName, email, university, major]);


  // Learning preferences
  const [learningPace, setLearningPace] = useState<'slow' | 'moderate' | 'fast'>('moderate');
  const [studyMode, setStudyMode] = useState<'video' | 'read'>('video');

  // Notifications
  const [notifications, setNotifications] = useState({
    newMaterials: true,
    quizReminders: true,
    progressUpdates: true,
    newsAnnouncements: true,
    marketing: false,
  });

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSaveError(null);

    const { error } = await updateProfile({
      full_name: profileData.fullName,
      university: profileData.institution,
      major: profileData.major,
    });

    setSaving(false);

    if (error) {
      setSaveError(error.message || 'Gagal menyimpan perubahan profil');
    } else {
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 3500);
    }
  };

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-[#f9f5ef] pb-16">
      <Navbar />

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Mobile Settings Navigation Pills (< lg) */}
        <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveTab('account')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
              activeTab === 'account'
                ? 'bg-[#7a1c1c] text-white shadow-xs'
                : 'bg-white text-gray-700 border border-gray-200'
            }`}
          >
            Account Information
          </button>
          <button
            onClick={() => setActiveTab('learning')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
              activeTab === 'learning'
                ? 'bg-[#7a1c1c] text-white shadow-xs'
                : 'bg-white text-gray-700 border border-gray-200'
            }`}
          >
            Learning Preferences
          </button>
          <button
            onClick={() => setActiveTab('notifications')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
              activeTab === 'notifications'
                ? 'bg-[#7a1c1c] text-white shadow-xs'
                : 'bg-white text-gray-700 border border-gray-200'
            }`}
          >
            Notifications
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
              activeTab === 'security'
                ? 'bg-[#7a1c1c] text-white shadow-xs'
                : 'bg-white text-gray-700 border border-gray-200'
            }`}
          >
            Security
          </button>
          <Link
            href="/help"
            className="px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 bg-white text-gray-700 border border-gray-200"
          >
            Help &amp; Support
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Settings Sidebar Navigation (hidden < lg, shown on desktop) */}
          <aside className="hidden lg:block lg:col-span-3 space-y-2">
            <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-xs space-y-2">
              <div className="pb-2 border-b border-gray-100">
                <h2 className="font-serif font-bold text-gray-900 text-sm">Settings</h2>
                <p className="text-[11px] text-gray-400">Manage your account and preferences</p>
              </div>

              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab('account')}
                  className={`w-full flex items-start gap-3 p-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                    activeTab === 'account'
                      ? 'bg-[#7a1c1c]/10 text-[#7a1c1c]'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <User size={16} className="mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold">Account Information</p>
                    <p className="text-[10px] text-gray-400">Update your profile details</p>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('learning')}
                  className={`w-full flex items-start gap-3 p-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                    activeTab === 'learning'
                      ? 'bg-[#7a1c1c]/10 text-[#7a1c1c]'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Sliders size={16} className="mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold">Learning Preferences</p>
                    <p className="text-[10px] text-gray-400">Customize your learning experience</p>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('notifications')}
                  className={`w-full flex items-start gap-3 p-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                    activeTab === 'notifications'
                      ? 'bg-[#7a1c1c]/10 text-[#7a1c1c]'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Bell size={16} className="mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold">Notifications</p>
                    <p className="text-[10px] text-gray-400">Manage your notifications</p>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('security')}
                  className={`w-full flex items-start gap-3 p-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                    activeTab === 'security'
                      ? 'bg-[#7a1c1c]/10 text-[#7a1c1c]'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Shield size={16} className="mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold">Security</p>
                    <p className="text-[10px] text-gray-400">Password and account security</p>
                  </div>
                </button>

                <div className="pt-2 border-t border-gray-100">
                  <Link
                    href="/help"
                    className="flex items-start gap-3 p-2.5 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <HelpCircle size={16} className="mt-0.5 shrink-0 text-gray-400" />
                    <div>
                      <p className="text-xs font-semibold">Help &amp; Support</p>
                      <p className="text-[10px] text-gray-400">Get help when you need it</p>
                    </div>
                  </Link>
                </div>
              </nav>
            </div>
          </aside>

          {/* Center Main Area (cols 4-8) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Header Banner */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#7a1c1c] via-[#8c2222] to-[#5a1414] text-white p-6 shadow-md">
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="relative w-16 h-16 rounded-full bg-[#d4af37]/20 border-2 border-[#d4af37]/60 flex items-center justify-center shrink-0">
                  <span className="text-[#d4af37] font-serif font-bold text-xl">
                    {loading ? '…' : initials}
                  </span>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white text-gray-700 flex items-center justify-center shadow-xs">
                    <Camera size={12} />
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-[#d4af37]">
                    ACCOUNT SETTINGS
                  </p>
                  <h1 className="text-xl md:text-2xl font-serif font-bold text-white">
                    {loading ? 'Hello…' : `Hello, ${displayName}`}
                  </h1>
                  <p className="text-xs text-white/80">
                    Manage your profile, preferences, and account security from here.
                  </p>
                </div>
              </div>
            </div>

            {/* Profile Information Form */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-xs space-y-6">
              <div>
                <h3 className="font-serif font-bold text-gray-900 text-base">
                  Profile Information
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Keep your information up to date so we can provide you with a better learning
                  experience.
                </p>
              </div>

              {/* Avatar Row */}
              <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
                <div className="w-16 h-16 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center relative">
                  <span className="font-serif font-bold text-gray-700 text-lg">
                    {loading ? '…' : initials}
                  </span>
                </div>
                <div>
                  <button
                    type="button"
                    className="px-3.5 py-1.5 border border-gray-300 hover:bg-gray-50 rounded-xl text-xs font-semibold text-gray-700 transition-colors"
                  >
                    Change Photo
                  </button>
                  <p className="text-[10px] text-gray-400 mt-1">JPG, GIF or PNG. Max size 2MB</p>
                </div>
              </div>

              {savedSuccess && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center gap-2">
                  <Check size={16} className="text-emerald-600 shrink-0" />
                  <span>Profil berhasil diperbarui dan tersimpan!</span>
                </div>
              )}

              {saveError && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-800 rounded-xl text-xs flex items-center gap-2">
                  <span>{saveError}</span>
                </div>
              )}

              {/* Form Grid */}
              <form onSubmit={handleSaveProfile} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700">Full Name</label>
                    <input
                      type="text"
                      value={profileData.fullName}
                      onChange={(e) =>
                        setProfileData({ ...profileData, fullName: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-gray-50/60 rounded-xl border border-gray-200 text-xs focus:bg-white focus:outline-hidden focus:border-[#7a1c1c]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700">Email Address</label>
                    <input
                      type="email"
                      value={profileData.email}
                      disabled
                      className="w-full px-3.5 py-2.5 bg-gray-100 rounded-xl border border-gray-200 text-xs text-gray-500 cursor-not-allowed"
                    />
                    <p className="text-[10px] text-gray-400">Email terikat dengan akun Supabase</p>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700">
                      Student ID (Optional)
                    </label>
                    <input
                      type="text"
                      value={profileData.studentId}
                      onChange={(e) =>
                        setProfileData({ ...profileData, studentId: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-gray-50/60 rounded-xl border border-gray-200 text-xs focus:bg-white focus:outline-hidden focus:border-[#7a1c1c]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700">Phone Number</label>
                    <input
                      type="text"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50/60 rounded-xl border border-gray-200 text-xs focus:bg-white focus:outline-hidden focus:border-[#7a1c1c]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700">Institution / University</label>
                    <input
                      type="text"
                      list="universities-list"
                      placeholder="e.g. Universitas Indonesia"
                      value={profileData.institution}
                      onChange={(e) =>
                        setProfileData({ ...profileData, institution: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-gray-50/60 rounded-xl border border-gray-200 text-xs focus:bg-white focus:outline-hidden focus:border-[#7a1c1c]"
                    />
                    <datalist id="universities-list">
                      <option value="Universitas Indonesia" />
                      <option value="Universitas Gadjah Mada" />
                      <option value="Universitas Padjadjaran" />
                      <option value="Universitas Diponegoro" />
                      <option value="Universitas Airlangga" />
                      <option value="President University" />
                      <option value="Universitas Brawijaya" />
                      <option value="Universitas Trisakti" />
                    </datalist>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700">Program / Major</label>
                    <input
                      type="text"
                      list="majors-list"
                      placeholder="e.g. Ilmu Hukum, Corporate Lawyer"
                      value={profileData.major}
                      onChange={(e) => setProfileData({ ...profileData, major: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50/60 rounded-xl border border-gray-200 text-xs focus:bg-white focus:outline-hidden focus:border-[#7a1c1c]"
                    />
                    <datalist id="majors-list">
                      <option value="Ilmu Hukum" />
                      <option value="Corporate Lawyer" />
                      <option value="Criminal Law" />
                      <option value="Constitutional Law" />
                      <option value="International Law" />
                      <option value="Civil Law" />
                    </datalist>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-6 py-2.5 bg-[#7a1c1c] hover:bg-[#661616] disabled:opacity-50 text-white rounded-xl text-xs font-semibold transition-colors shadow-xs cursor-pointer flex items-center gap-2"
                  >
                    {saving && <span className="animate-spin inline-block w-3 h-3 border-2 border-white border-t-transparent rounded-full" />}
                    <span>{saving ? 'Saving...' : 'Save Changes'}</span>
                  </button>
                </div>
              </form>
            </div>

            {/* My Learning Overview Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-xs space-y-4">
              <div>
                <h3 className="font-serif font-bold text-gray-900 text-sm flex items-center gap-2">
                  <BookOpen size={16} className="text-[#7a1c1c]" /> My Learning Overview
                </h3>
                <p className="text-[11px] text-gray-400 mt-0.5">
                  Here&apos;s a quick look at your learning journey.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 bg-gray-50 rounded-xl space-y-1">
                  <div className="flex items-center gap-1.5 text-gray-600 text-xs">
                    <BookOpen size={14} className="text-[#7a1c1c]" />
                    <span className="font-medium text-[11px]">Completed Materials</span>
                  </div>
                  <p className="text-lg font-serif font-bold text-gray-900">5</p>
                  <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
                    <div className="bg-[#7a1c1c] h-full w-[41%]" />
                  </div>
                  <p className="text-[9px] text-gray-400">of 12</p>
                </div>

                <div className="p-3 bg-gray-50 rounded-xl space-y-1">
                  <div className="flex items-center gap-1.5 text-gray-600 text-xs">
                    <QuizIcon size={14} className="text-amber-600" />
                    <span className="font-medium text-[11px]">Average Score</span>
                  </div>
                  <p className="text-lg font-serif font-bold text-gray-900">80%</p>
                  <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
                    <div className="bg-amber-600 h-full w-[80%]" />
                  </div>
                  <p className="text-[9px] text-gray-400">of 100%</p>
                </div>

                <div className="p-3 bg-gray-50 rounded-xl space-y-1">
                  <div className="flex items-center gap-1.5 text-gray-600 text-xs">
                    <Clock size={14} className="text-blue-600" />
                    <span className="font-medium text-[11px]">Total Time</span>
                  </div>
                  <p className="text-lg font-serif font-bold text-gray-900">12h 30m</p>
                  <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full w-[62%]" />
                  </div>
                  <p className="text-[9px] text-gray-400">of 20h</p>
                </div>

                <div className="p-3 bg-gray-50 rounded-xl space-y-1">
                  <div className="flex items-center gap-1.5 text-gray-600 text-xs">
                    <Star size={14} className="text-emerald-600" />
                    <span className="font-medium text-[11px]">Achievements</span>
                  </div>
                  <p className="text-lg font-serif font-bold text-gray-900">4</p>
                  <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
                    <div className="bg-emerald-600 h-full w-[50%]" />
                  </div>
                  <p className="text-[9px] text-gray-400">of 8</p>
                </div>
              </div>
            </div>

            {/* Motivational Legal Quote */}
            <div className="bg-[#fcf8f2] rounded-2xl border border-[#eedec7] p-4 text-center space-y-1">
              <Scale size={16} className="text-[#7a1c1c] mx-auto" />
              <p className="font-serif italic text-xs text-[#7a1c1c] font-medium">
                &ldquo;The more you practice, the more confident you become.&rdquo;
              </p>
              <p className="text-[10px] uppercase tracking-widest text-gray-500">— RUANG HUKUM —</p>
            </div>
          </div>

          {/* Right Column Preferences & Security (cols 9-12) */}
          <div className="lg:col-span-3 space-y-6">
            {/* Learning Preferences Widget */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-xs space-y-4">
              <div>
                <h3 className="font-serif font-bold text-gray-900 text-xs flex items-center gap-2">
                  <BookOpen size={14} className="text-[#7a1c1c]" /> Learning Preferences
                </h3>
                <p className="text-[10px] text-gray-400 mt-0.5">
                  Adjust your learning experience to fit your needs.
                </p>
              </div>

              {/* Preferred Pace */}
              <div className="space-y-2">
                <label className="text-[11px] font-semibold text-gray-700">
                  Preferred Learning Pace
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {(['slow', 'moderate', 'fast'] as const).map((pace) => (
                    <button
                      key={pace}
                      type="button"
                      onClick={() => setLearningPace(pace)}
                      className={`py-1.5 text-[11px] font-semibold rounded-xl capitalize transition-colors ${
                        learningPace === pace
                          ? 'bg-[#7a1c1c] text-white shadow-xs'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {pace}
                    </button>
                  ))}
                </div>
              </div>

              {/* Language */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold text-gray-700">Content Language</label>
                <select
                  value={lang === 'en' ? 'English' : 'Bahasa Indonesia'}
                  onChange={(e) => setLang(e.target.value === 'English' ? 'en' : 'id')}
                  className="w-full px-3 py-2 bg-gray-50 rounded-xl border border-gray-200 text-xs focus:bg-white focus:outline-hidden"
                >
                  <option value="English">🇬🇧 English</option>
                  <option value="Bahasa Indonesia">🇮🇩 Bahasa Indonesia</option>
                </select>
              </div>

              {/* Default Study Mode */}
              <div className="space-y-2">
                <label className="text-[11px] font-semibold text-gray-700">
                  Default Study Mode
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setStudyMode('video')}
                    className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl text-xs font-semibold transition-colors ${
                      studyMode === 'video'
                        ? 'border-2 border-[#7a1c1c] text-[#7a1c1c] bg-[#7a1c1c]/5'
                        : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Play size={12} className={studyMode === 'video' ? 'fill-[#7a1c1c]' : ''} />
                    <span>Video First</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStudyMode('read')}
                    className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl text-xs font-semibold transition-colors ${
                      studyMode === 'read'
                        ? 'border-2 border-[#7a1c1c] text-[#7a1c1c] bg-[#7a1c1c]/5'
                        : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <FileText size={12} />
                    <span>Read First</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Notification Settings Widget */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-xs space-y-4">
              <div>
                <h3 className="font-serif font-bold text-gray-900 text-xs flex items-center gap-2">
                  <Bell size={14} className="text-[#7a1c1c]" /> Notification Settings
                </h3>
                <p className="text-[10px] text-gray-400 mt-0.5">
                  Stay updated with your progress and new content.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  {
                    key: 'newMaterials' as const,
                    label: 'New Materials & Courses',
                    desc: 'Weekly updates',
                  },
                  {
                    key: 'quizReminders' as const,
                    label: 'Quiz Reminders',
                    desc: 'Daily study nudge',
                  },
                  {
                    key: 'progressUpdates' as const,
                    label: 'Learning Progress Updates',
                    desc: 'Milestones & badges',
                  },
                  {
                    key: 'newsAnnouncements' as const,
                    label: 'News & Announcements',
                    desc: 'Platform features',
                  },
                  {
                    key: 'marketing' as const,
                    label: 'Marketing Notifications',
                    desc: 'Promos & offers',
                  },
                ].map((item) => (
                  <div key={item.key} className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-gray-800">{item.label}</p>
                      <p className="text-[10px] text-gray-400">{item.desc}</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleNotification(item.key)}
                      className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                        notifications[item.key] ? 'bg-[#7a1c1c]' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 ease-in-out ${
                          notifications[item.key] ? 'translate-x-4' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Account Security Widget */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-xs space-y-3.5">
              <div>
                <h3 className="font-serif font-bold text-gray-900 text-xs flex items-center gap-2">
                  <Shield size={14} className="text-[#7a1c1c]" /> Account Security
                </h3>
                <p className="text-[10px] text-gray-400 mt-0.5">Keep your account safe and secure.</p>
              </div>

              <div className="space-y-1.5">
                <button
                  type="button"
                  onClick={() => alert('Change password modal')}
                  className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 text-left transition-colors"
                >
                  <span className="flex items-center gap-2 text-xs text-gray-700">
                    <Lock size={14} className="text-gray-400" />
                    <span>Change Password</span>
                  </span>
                  <ChevronRight size={13} className="text-gray-400" />
                </button>

                <button
                  type="button"
                  onClick={() => alert('2FA Setup')}
                  className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 text-left transition-colors"
                >
                  <span className="flex items-center gap-2 text-xs text-gray-700">
                    <Smartphone size={14} className="text-gray-400" />
                    <span>Two-Factor Authentication</span>
                  </span>
                  <span className="text-[10px] text-gray-400">Not Enabled &gt;</span>
                </button>

                <button
                  type="button"
                  onClick={() => alert('Active Sessions')}
                  className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 text-left transition-colors"
                >
                  <span className="flex items-center gap-2 text-xs text-gray-700">
                    <Laptop size={14} className="text-gray-400" />
                    <span>Active Sessions</span>
                  </span>
                  <span className="text-[10px] text-gray-400">1 device &gt;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
