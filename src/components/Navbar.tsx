'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Home,
  BookOpen,
  HelpCircle,
  BarChart2,
  Scale,
  User,
  Settings,
  LogOut,
  Crown,
  ChevronDown,
  X,
  Menu,
  Languages,
} from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { Lang } from '@/lib/translations';
import BrandLogo from './BrandLogo';
import { logout } from '@/app/auth/actions';
import { useUser } from '@/lib/useUser';

export default function Navbar() {
  const pathname = usePathname();
  const { lang, t, setLang } = useLanguage();
  const { displayName, initials, email } = useUser();
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    setProfileOpen(false);
    await logout();
  };

  const isActive = (href: string) => {
    if (href === '/dashboard') return pathname === '/dashboard';
    return pathname.startsWith(href);
  };

  const navItems = [
    { label: t.nav.home, href: '/dashboard', icon: Home },
    { label: t.nav.materials, href: '/materials', icon: BookOpen },
    { label: t.nav.quiz, href: '/quiz', icon: HelpCircle },
    { label: t.nav.expertContent, href: '/lex-ai', icon: Scale },
    { label: t.nav.progress, href: '/progress', icon: BarChart2 },
  ];

  const allNavItems = pathname.startsWith('/subscription')
    ? [...navItems, { label: t.nav.subscription, href: '/subscription', icon: Crown }]
    : navItems;

  const languages: { code: Lang; label: string; flag: string; short: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧', short: 'EN' },
    { code: 'id', label: 'Indonesia', flag: '🇮🇩', short: 'ID' },
  ];

  const currentLang = languages.find((l) => l.code === lang) || languages[1];

  return (
    <header className="bg-[#7a1c1c] sticky top-0 z-50 shadow-lg">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <BrandLogo href="/dashboard" size="md" />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {allNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3.5 py-2 rounded-md text-sm font-medium transition-all relative group ${
                  isActive(item.href)
                    ? 'text-white'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#d4af37] rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <div className="relative">
              <button
                id="lang-switcher-btn"
                onClick={() => { setLangOpen(!langOpen); setProfileOpen(false); }}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-white text-xs font-semibold"
                aria-label="Switch language"
              >
                <Languages size={14} className="text-[#d4af37]" />
                <span className="hidden sm:inline">{currentLang.flag}</span>
                <span>{currentLang.short}</span>
                <ChevronDown size={12} className={`transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
              </button>

              {langOpen && (
                <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 z-50 overflow-hidden">
                  <div className="px-3 py-1.5 border-b border-gray-100 mb-1">
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Language / Bahasa</p>
                  </div>
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors cursor-pointer ${
                        lang === l.code
                          ? 'bg-[#7a1c1c]/8 text-[#7a1c1c] font-semibold'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span className="text-base">{l.flag}</span>
                      <span className="flex-1">{l.label}</span>
                      {lang === l.code && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7a1c1c] shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Profile */}
            <div className="relative">
              <button
                id="profile-menu-btn"
                onClick={() => { setProfileOpen(!profileOpen); setLangOpen(false); }}
                className="flex items-center gap-2.5 hover:opacity-90 transition-opacity cursor-pointer"
              >
                <div suppressHydrationWarning className="w-9 h-9 rounded-full bg-white text-[#7a1c1c] font-bold text-xs flex items-center justify-center shadow-xs">
                  <span suppressHydrationWarning>{initials}</span>
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-white text-xs font-semibold leading-tight truncate max-w-[120px]">
                    {displayName}
                  </p>
                  <p className="text-white/60 text-[11px] flex items-center gap-1">
                    {t.nav.profile} <ChevronDown size={12} className={`transition-transform ${profileOpen ? 'rotate-180' : ''}`} />
                  </p>
                </div>
              </button>

              {profileOpen && (
                <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 z-50">
                  {/* User info in dropdown */}
                  <div className="px-3.5 py-2.5 border-b border-gray-100 mb-1">
                    <p className="text-xs font-semibold text-gray-800 truncate">{displayName}</p>
                    <p className="text-[11px] text-gray-400 truncate">{email}</p>
                  </div>
                  <Link
                    href="/profile"
                    onClick={() => setProfileOpen(false)}
                    className="flex items-center gap-2.5 px-3.5 py-2 text-gray-700 hover:bg-gray-50 text-xs font-medium transition-colors"
                  >
                    <User size={14} className="text-gray-500" />
                    <span>{t.nav.profile}</span>
                  </Link>
                  <Link
                    href="/settings"
                    onClick={() => setProfileOpen(false)}
                    className="flex items-center gap-2.5 px-3.5 py-2 text-gray-700 hover:bg-gray-50 text-xs font-medium transition-colors"
                  >
                    <Settings size={14} className="text-gray-500" />
                    <span>{t.nav.accountSettings}</span>
                  </Link>
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <button
                      onClick={handleLogout}
                      disabled={isLoggingOut}
                      className="flex items-center gap-2.5 px-3.5 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 text-xs font-medium transition-colors w-full cursor-pointer disabled:opacity-50"
                    >
                      {isLoggingOut ? (
                        <div className="w-3.5 h-3.5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
                      ) : (
                        <LogOut size={14} className="text-gray-500" />
                      )}
                      <span>{t.nav.logOut}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="lg:hidden pb-5 pt-2 border-t border-white/15 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
            {/* User Quick Info */}
            <div className="flex items-center gap-3 px-3 py-2.5 bg-black/20 rounded-xl">
              <div suppressHydrationWarning className="w-10 h-10 rounded-full bg-white text-[#7a1c1c] font-bold text-sm flex items-center justify-center shrink-0">
                {initials}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-white text-sm font-semibold truncate">{displayName}</p>
                <p className="text-white/60 text-[11px] truncate">{email}</p>
              </div>
              {/* Mobile language switcher */}
              <div className="flex gap-1 shrink-0">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`px-2 py-1 rounded-lg text-[11px] font-bold transition-all ${
                      lang === l.code
                        ? 'bg-[#d4af37] text-[#7a1c1c]'
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    {l.short}
                  </button>
                ))}
              </div>
            </div>

            <nav className="flex flex-col gap-1">
              {allNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive(item.href)
                      ? 'bg-white/20 text-white font-semibold'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={17} />
                    <span>{item.label}</span>
                  </div>
                  {isActive(item.href) && (
                    <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
                  )}
                </Link>
              ))}
            </nav>

            <div className="pt-2 border-t border-white/10 flex gap-2">
              <Link
                href="/profile"
                onClick={() => setMobileOpen(false)}
                className="flex-1 py-2 px-3 text-center rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
              >
                {t.nav.profile}
              </Link>
              <Link
                href="/settings"
                onClick={() => setMobileOpen(false)}
                className="flex-1 py-2 px-3 text-center rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
              >
                {t.nav.accountSettings}
              </Link>
              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="py-2 px-3 rounded-lg bg-red-900/60 hover:bg-red-900 text-red-200 text-xs font-medium transition-colors disabled:opacity-50"
              >
                {t.nav.logOut}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Backdrop for dropdowns */}
      {(profileOpen || langOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => { setProfileOpen(false); setLangOpen(false); }}
        />
      )}
    </header>
  );
}
