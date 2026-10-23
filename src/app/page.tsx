'use client';

import { useState, useEffect, useTransition } from 'react';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff, Crown, Globe, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import BrandLogo from '@/components/BrandLogo';
import { login } from '@/app/auth/actions';

// All text in both languages
const copy = {
  en: {
    tagline: 'Learn Law. Understand More.',
    subTagline:
      'Ruang Hukum exists to make legal education accessible, especially for those just getting started.',
    welcomeBack: 'Welcome back',
    welcomeSub: 'Log in to continue your learning journey.',
    emailPlaceholder: 'Email address',
    passwordPlaceholder: 'Password',
    forgotPassword: 'Forgot password?',
    loginBtn: 'LOGIN',
    loggingIn: 'Logging in...',
    dontHaveAccount: "Don't have an account?",
    createAccount: 'Create an account',
    freeTrialBtn: '5-Day Free Trial',
    errorRequired: 'Please enter your email and password.',
    errorInvalid: 'Invalid email or password. Please try again.',
  },
  id: {
    tagline: 'Pelajari Hukum. Pahami Lebih Jauh.',
    subTagline:
      'Ruang Hukum hadir untuk membuat pendidikan hukum lebih mudah diakses, terutama bagi kamu yang baru memulai.',
    welcomeBack: 'Selamat datang kembali',
    welcomeSub: 'Masuk untuk melanjutkan perjalanan belajar Anda.',
    emailPlaceholder: 'Alamat email',
    passwordPlaceholder: 'Kata sandi',
    forgotPassword: 'Lupa kata sandi?',
    loginBtn: 'MASUK',
    loggingIn: 'Sedang masuk...',
    dontHaveAccount: 'Belum punya akun?',
    createAccount: 'Buat akun baru',
    freeTrialBtn: 'Uji Coba Gratis 5 Hari',
    errorRequired: 'Silakan masukkan email dan kata sandi Anda.',
    errorInvalid: 'Email atau kata sandi salah. Silakan coba lagi.',
  },
};

export default function LoginPage() {
  const { lang, setLang } = useLanguage();

  // Prevent SSR mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const t = mounted ? copy[lang] : copy['id'];

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
      setError(t.errorRequired);
      return;
    }

    startTransition(async () => {
      const result = await login(formData);
      if (result?.error) {
        setError(t.errorInvalid);
      }
    });
  };

  return (
    <div
      className="min-h-screen w-full relative flex items-center justify-center lg:justify-between px-6 lg:px-20 py-10 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #3d0a0a 0%, #5e1111 40%, #7a1c1c 80%, #4a0e0e 100%)',
      }}
      suppressHydrationWarning
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" suppressHydrationWarning>
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-35"
          style={{ backgroundImage: `url('/wallpapers/wallpaper-4.jpg')` }}
          suppressHydrationWarning
        />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 bg-gradient-to-l from-black/60 to-transparent" suppressHydrationWarning />
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl" suppressHydrationWarning />
        <div className="absolute right-20 top-20 w-80 h-80 bg-[#7a1c1c]/30 rounded-full blur-3xl" suppressHydrationWarning />
      </div>

      {/* Language Switcher */}
      {mounted && (
        <div className="absolute top-6 right-6 z-20">
          <button
            onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-xs"
            title="Switch Language"
          >
            <Globe size={13} className="text-[#d4af37]" />
            <span>{lang === 'en' ? '🇬🇧 English' : '🇮🇩 Indonesia'}</span>
          </button>
        </div>
      )}

      {/* Left Side — Brand */}
      <div className="relative z-10 hidden lg:flex flex-col justify-between max-w-lg h-full py-6">
        <div>
          <div className="mb-10">
            <BrandLogo variant="stacked" size="lg" href={null} />
          </div>
          <div className="space-y-3">
            <h1 className="text-white font-cinzel font-bold text-4xl xl:text-5xl tracking-wide leading-tight">
              RUANG HUKUM
            </h1>
            <h2 className="text-white font-serif font-medium text-2xl xl:text-3xl">
              {t.tagline}
            </h2>
            <p className="text-white/80 text-sm md:text-base leading-relaxed pt-2 max-w-md">
              {t.subTagline}
            </p>
          </div>
        </div>
        <div className="pt-20">
          <p className="text-white/40 text-xs">© 2025 Ruang Hukum. All rights reserved.</p>
        </div>
      </div>

      {/* Right Side — Login Card */}
      <div className="relative z-10 w-full max-w-[420px] bg-white rounded-3xl shadow-2xl p-8 border border-white/20" suppressHydrationWarning>
        {/* Mobile Logo */}
        <div className="mb-6 lg:hidden">
          <BrandLogo variant="horizontal" size="sm" href={null} />
        </div>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#3e0b0b] mb-1">
            {t.welcomeBack}
          </h2>
          <p className="text-gray-500 text-xs md:text-sm">
            {t.welcomeSub}
          </p>
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-xs flex items-start gap-2">
            <AlertCircle size={14} className="mt-0.5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div className="relative">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
              <Mail size={17} />
            </div>
            <input
              id="email-input"
              name="email"
              type="email"
              placeholder={t.emailPlaceholder}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-400 text-sm focus:outline-none focus:border-[#7a1c1c] focus:ring-2 focus:ring-[#7a1c1c]/10 transition-all bg-gray-50/50 focus:bg-white"
              required
              autoComplete="email"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
              <Lock size={17} />
            </div>
            <input
              id="password-input"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder={t.passwordPlaceholder}
              className="w-full pl-10 pr-11 py-3 border border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-400 text-sm focus:outline-none focus:border-[#7a1c1c] focus:ring-2 focus:ring-[#7a1c1c]/10 transition-all bg-gray-50/50 focus:bg-white"
              required
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>

          {/* Forgot password */}
          <div className="flex justify-end pt-0.5">
            <Link
              href="#"
              className="text-[#7a1c1c] text-xs font-medium hover:underline transition-colors"
            >
              {t.forgotPassword}
            </Link>
          </div>

          {/* Login button */}
          <button
            id="login-btn"
            type="submit"
            disabled={isPending}
            className="w-full bg-[#7a1c1c] hover:bg-[#631414] active:bg-[#520f0f] text-white font-semibold py-3 rounded-xl transition-all shadow-md text-xs tracking-wider uppercase disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
          >
            {isPending ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                {t.loggingIn}
              </>
            ) : (
              t.loginBtn
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="my-5 flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-gray-400 text-xs">{t.dontHaveAccount}</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Create account */}
        <Link
          href="/register"
          id="create-account-btn"
          className="block w-full border border-[#7a1c1c] text-[#7a1c1c] font-medium py-2.5 rounded-xl text-center hover:bg-[#7a1c1c]/5 transition-all text-xs"
          suppressHydrationWarning
        >
          {t.createAccount}
        </Link>

        {/* Free trial button */}
        <Link
          href="/register"
          id="free-trial-btn"
          className="mt-3 w-full bg-[#faeccb] hover:bg-[#f5e2b8] text-[#8a5d1b] font-semibold py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 text-xs shadow-xs cursor-pointer"
        >
          <Crown size={15} className="text-[#c5932b] fill-[#c5932b]" />
          {t.freeTrialBtn}
        </Link>
      </div>
    </div>
  );
}
