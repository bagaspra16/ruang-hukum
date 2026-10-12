'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Scale, BookOpen, Shield, Users, Search, Briefcase, ArrowRight, BookMarked, Crown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { moduleContent } from '@/lib/mock-data-i18n';
import { useLanguage } from '@/lib/LanguageContext';

const iconMap: Record<string, React.ElementType> = {
  Scale,
  BookOpen,
  Shield,
  Users,
  Search,
  Briefcase,
};

const moduleImages = [
  'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&q=80',
  'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=300&q=80',
  'https://images.unsplash.com/photo-1555661530-68c8e98db4e6?w=300&q=80',
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&q=80',
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&q=80',
  'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&q=80',
];

export default function MaterialsPage() {
  const { t, lang } = useLanguage();
  return (
    <div className="min-h-screen bg-[#f9f5ef]">
      <Navbar />

      {/* Hero Banner */}
      <div
        className="relative overflow-hidden h-48 md:h-56"
        style={{ background: 'linear-gradient(135deg, #4a0e0e 0%, #7a1c1c 60%, #8b2020 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-right"
          style={{ backgroundImage: `url('/wallpapers/wallpaper-1.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#4a0e0e]/80 to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <p className="text-[#d4af37] text-xs font-semibold tracking-widest uppercase mb-1">
              {t.materials.exploreOur}
            </p>
            <h1 className="text-white font-serif font-bold text-3xl md:text-4xl mb-2">
              {t.materials.heroTitle}
            </h1>
            <p className="text-white/80 text-sm md:text-base max-w-xl">
              {t.materials.heroDesc}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-1">
          <BookMarked size={20} className="text-[#7a1c1c]" />
          <h2 className="text-gray-900 font-serif font-bold text-lg md:text-xl">
            {t.materials.subjectCategories}
          </h2>
        </div>
        <p className="text-gray-500 text-xs mb-6">{t.materials.chooseSubject}</p>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mb-10">
          {moduleContent[lang].map((module, index) => {
            const IconComponent = iconMap[module.icon] || BookOpen;
            return (
              <div
                key={module.id}
                id={`material-card-${module.slug}`}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group"
              >
                {/* Card inner */}
                <div className="p-5 flex gap-4">
                  {/* Left content */}
                  <div className="flex-1 min-w-0">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-[#7a1c1c] rounded-xl flex items-center justify-center mb-4 shadow-sm">
                      <IconComponent size={22} className="text-white" />
                    </div>
                    
                    <h3 className="font-serif font-bold text-gray-900 text-base mb-2 leading-tight">{module.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{module.description}</p>
                    
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-4">
                      <BookMarked size={13} />
                      <span>{module.total_chapters} {t.materials.chapters}</span>
                    </div>
                    
                    <Link
                      href={`/materials/${module.slug}`}
                      className="inline-flex items-center gap-2 bg-[#7a1c1c] hover:bg-[#6b1414] text-white font-medium px-5 py-2.5 rounded-xl transition-colors text-sm"
                    >
                      {t.materials.viewMaterials} <ArrowRight size={14} />
                    </Link>
                  </div>

                  {/* Right image */}
                  <div className="relative w-28 h-28 rounded-xl overflow-hidden shrink-0 self-start">
                    <Image
                      src={moduleImages[index]}
                      alt={module.title}
                      fill
                      sizes="112px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Free Trial Banner */}
          <div className="bg-[#fef3c7] border border-[#d4af37]/30 rounded-2xl p-5 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4">
            <Crown size={24} className="text-[#d4af37] shrink-0" />
            <div>
              <h3 className="font-bold text-[#7a1c1c]">{t.materials.freeTrial}</h3>
              <p className="text-[#7a1c1c]/70 text-sm">{t.materials.freeTrialDesc}</p>
            </div>
          </div>
          <Link
            href="/subscription"
            className="shrink-0 bg-[#d4af37] hover:bg-[#c4a030] text-[#7a1c1c] font-bold px-5 py-2.5 rounded-xl transition-colors text-sm flex items-center gap-2"
          >
            {t.materials.startFreeTrial} <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
