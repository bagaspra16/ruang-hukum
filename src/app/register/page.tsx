'use client';

import { useState, useEffect, useTransition } from 'react';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff, User, Globe, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import BrandLogo from '@/components/BrandLogo';
import { register } from '@/app/auth/actions';

const copy = {
  en: {
    tagline: 'Learn Law. Understand More.',
    subTagline:
      'Join thousands of law students and beginners discovering a smarter way to learn Indonesian law.',
    createAccount: 'Create your account',
    createSub: 'Start your legal learning journey today.',
    fullNamePlaceholder: 'Full name',
    emailPlaceholder: 'Email address',
    passwordPlaceholder: 'Password (min. 6 characters)',
    confirmPasswordPlaceholder: 'Confirm password',
    registerBtn: 'CREATE ACCOUNT',
    registering: 'Creating account...',
    alreadyHaveAccount: 'Already have an account?',
    signIn: 'Sign in',
    errorRequired: 'Please fill in all fields.',
    errorPasswordMismatch: 'Passwords do not match.',
    errorPasswordLength: 'Password must be at least 6 characters.',
    passwordStrength: 'Password strength',
    weak: 'Weak',
    fair: 'Fair',
    strong: 'Strong',
    termsText: 'By creating an account, you agree to our',
    termsLink: 'Terms of Service',
    andText: 'and',
    privacyLink: 'Privacy Policy',
  },
  id: {
    tagline: 'Pelajari Hukum. Pahami Lebih Jauh.',
    subTagline:
      'Bergabunglah dengan ribuan mahasiswa hukum dan pemula yang menemukan cara lebih cerdas untuk belajar hukum.',
    createAccount: 'Buat akun Anda',
    createSub: 'Mulai perjalanan belajar hukum Anda hari ini.',
    fullNamePlaceholder: 'Nama lengkap',
    emailPlaceholder: 'Alamat email',
    passwordPlaceholder: 'Kata sandi (min. 6 karakter)',
    confirmPasswordPlaceholder: 'Konfirmasi kata sandi',
    registerBtn: 'BUAT AKUN',
    registering: 'Membuat akun...',
    alreadyHaveAccount: 'Sudah punya akun?',
    signIn: 'Masuk',
    errorRequired: 'Harap isi semua kolom.',
    errorPasswordMismatch: 'Kata sandi tidak cocok.',
    errorPasswordLength: 'Kata sandi minimal 6 karakter.',
    passwordStrength: 'Kekuatan kata sandi',
    weak: 'Lemah',
    fair: 'Sedang',
    strong: 'Kuat',
    termsText: 'Dengan membuat akun, Anda menyetujui',
    termsLink: 'Syarat Layanan',
    andText: 'dan',
    privacyLink: 'Kebijakan Privasi',
  },
};

function getPasswordStrength(password: string): { score: number; label: string } {
  if (!password) return { score: 0, label: '' };
  let score = 0;
  if (password.length >= 6) score++;
  if (password.length >= 10) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return { score, label: score <= 2 ? 'weak' : score <= 3 ? 'fair' : 'strong' };
}

export default function RegisterPage() {
  const { lang, setLang } = useLanguage();

  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const t = mounted ? copy[lang] : copy['id'];

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isPending, startTransition] = useTransition();

  const strength = getPasswordStrength(password);
  const strengthColors = ['', 'bg-red-500', 'bg-orange-400', 'bg-yellow-400', 'bg-green-400', 'bg-green-600'];
  const strengthLabels: Record<string, string> = { weak: t.weak, fair: t.fair, strong: t.strong };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    const formData = new FormData(e.currentTarget);
    const fullName = formData.get('full_name') as string;
    const email = formData.get('email') as string;
    const pwd = formData.get('password') as string;
    const confirmPwd = formData.get('confirm_password') as string;

    if (!fullName || !email || !pwd || !confirmPwd) {
      setError(t.errorRequired);
      return;
    }
    if (pwd.length < 6) {
      setError(t.errorPasswordLength);
      return;
    }
    if (pwd !== confirmPwd) {
      setError(t.errorPasswordMismatch);
      return;
    }

    startTransition(async () => {
      const result = await register(formData);
      if (result?.error) {
        setError(result.error);
      } else if (result?.success) {
        setSuccessMsg(result.success);
      }
      // If no result, redirect happened server-side
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
      {/* Background */}
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

          {/* Feature bullets */}
          <div className="mt-8 space-y-3">
            {[
              lang === 'en' ? '📚 Structured legal learning materials' : '📚 Materi hukum terstruktur',
              lang === 'en' ? '🧠 Interactive quizzes & assessments' : '🧠 Kuis & penilaian interaktif',
              lang === 'en' ? '🎥 Content from legal experts' : '🎥 Konten dari pakar hukum',
              lang === 'en' ? '📊 Track your learning progress' : '📊 Pantau kemajuan belajar Anda',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-white/70 text-sm">
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-10">
          <p className="text-white/40 text-xs">© 2025 Ruang Hukum. All rights reserved.</p>
        </div>
      </div>

      {/* Right Side — Register Card */}
      <div className="relative z-10 w-full max-w-[420px] bg-white rounded-3xl shadow-2xl p-8 border border-white/20" suppressHydrationWarning>
        {/* Mobile Logo */}
        <div className="mb-5 lg:hidden">
          <BrandLogo variant="horizontal" size="sm" href={null} />
        </div>

        {/* Header */}
        <div className="mb-5">
          <h2 className="text-2xl font-serif font-bold text-[#3e0b0b] mb-1">
            {t.createAccount}
          </h2>
          <p className="text-gray-500 text-xs md:text-sm">{t.createSub}</p>
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-xs flex items-start gap-2">
            <AlertCircle size={14} className="mt-0.5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Success message */}
        {successMsg && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-xl text-green-700 text-xs flex items-start gap-2">
            <CheckCircle2 size={14} className="mt-0.5 shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-3.5">
          {/* Full Name */}
          <div className="relative">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
              <User size={17} />
            </div>
            <input
              id="fullname-input"
              name="full_name"
              type="text"
              placeholder={t.fullNamePlaceholder}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-400 text-sm focus:outline-none focus:border-[#7a1c1c] focus:ring-2 focus:ring-[#7a1c1c]/10 transition-all bg-gray-50/50 focus:bg-white"
              required
              autoComplete="name"
            />
          </div>

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
          <div>
            <div className="relative">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                <Lock size={17} />
              </div>
              <input
                id="password-input"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder={t.passwordPlaceholder}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-11 py-3 border border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-400 text-sm focus:outline-none focus:border-[#7a1c1c] focus:ring-2 focus:ring-[#7a1c1c]/10 transition-all bg-gray-50/50 focus:bg-white"
                required
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>

            {/* Password Strength Bar */}
            {password && (
              <div className="mt-2 space-y-1">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                        i <= strength.score ? strengthColors[strength.score] : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-[11px] text-gray-400">
                  {t.passwordStrength}:{' '}
                  <span className={`font-semibold ${
                    strength.label === 'weak' ? 'text-red-500' :
                    strength.label === 'fair' ? 'text-yellow-500' :
                    'text-green-600'
                  }`}>
                    {strengthLabels[strength.label] || ''}
                  </span>
                </p>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
              <Lock size={17} />
            </div>
            <input
              id="confirm-password-input"
              name="confirm_password"
              type={showConfirm ? 'text' : 'password'}
              placeholder={t.confirmPasswordPlaceholder}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`w-full pl-10 pr-11 py-3 border rounded-xl text-gray-800 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 transition-all bg-gray-50/50 focus:bg-white ${
                confirmPassword && confirmPassword !== password
                  ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
                  : confirmPassword && confirmPassword === password
                  ? 'border-green-300 focus:border-green-400 focus:ring-green-100'
                  : 'border-gray-200 focus:border-[#7a1c1c] focus:ring-[#7a1c1c]/10'
              }`}
              required
              autoComplete="new-password"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showConfirm ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
            {/* Match indicator */}
            {confirmPassword && (
              <div className="absolute right-10 top-1/2 -translate-y-1/2">
                {confirmPassword === password ? (
                  <CheckCircle2 size={15} className="text-green-500" />
                ) : (
                  <AlertCircle size={15} className="text-red-400" />
                )}
              </div>
            )}
          </div>

          {/* Terms */}
          <p className="text-[11px] text-gray-400 leading-relaxed">
            {t.termsText}{' '}
            <Link href="#" className="text-[#7a1c1c] hover:underline font-medium">{t.termsLink}</Link>
            {' '}{t.andText}{' '}
            <Link href="#" className="text-[#7a1c1c] hover:underline font-medium">{t.privacyLink}</Link>.
          </p>

          {/* Register button */}
          <button
            id="register-btn"
            type="submit"
            disabled={isPending}
            className="w-full bg-[#7a1c1c] hover:bg-[#631414] active:bg-[#520f0f] text-white font-semibold py-3 rounded-xl transition-all shadow-md text-xs tracking-wider uppercase disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
          >
            {isPending ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                {t.registering}
              </>
            ) : (
              t.registerBtn
            )}
          </button>
        </form>

        {/* Sign in link */}
        <div className="mt-5 text-center">
          <span className="text-gray-400 text-xs">{t.alreadyHaveAccount} </span>
          <Link
            href="/"
            id="signin-link"
            className="text-[#7a1c1c] text-xs font-semibold hover:underline transition-colors"
          >
            {t.signIn}
          </Link>
        </div>
      </div>
    </div>
  );
}
