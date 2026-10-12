'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Scale } from 'lucide-react';

interface BrandLogoProps {
  /** 'horizontal' for Navbar & inline, 'stacked' for Hero/Login */
  variant?: 'horizontal' | 'stacked';
  /** Size preset */
  size?: 'sm' | 'md' | 'lg';
  /** Optional link destination. Pass null or empty string to disable link */
  href?: string | null;
  /** Custom className for the container */
  className?: string;
  /** Whether to show text or icon only */
  showText?: boolean;
}

export default function BrandLogo({
  variant = 'horizontal',
  size = 'md',
  href = '/dashboard',
  className = '',
  showText = true,
}: BrandLogoProps) {
  // Brand font style with guaranteed serif hierarchy (Cinzel -> Playfair -> Georgia)
  const brandFontStyle = {
    fontFamily:
      'var(--font-cinzel), var(--font-playfair), "Cinzel", "Playfair Display", Georgia, serif',
  };

  // Size configurations
  const config = {
    sm: {
      iconH: 'h-8 sm:h-9',
      iconW: 24,
      iconPxH: 36,
      ruangText: 'text-[11px] sm:text-[12px] tracking-[0.22em]',
      hukumText: 'text-[15px] sm:text-[16px] tracking-[0.06em]',
      scaleSize: 13,
      gap: 'gap-2.5',
      textOffset: 'translate-y-[2px]',
    },
    md: {
      // Navbar standard size — enlarged text & vertically aligned with pillar icon
      iconH: 'h-10 sm:h-11',
      iconW: 30,
      iconPxH: 44,
      ruangText: 'text-[12.5px] sm:text-[13.5px] tracking-[0.22em]',
      hukumText: 'text-[18.5px] sm:text-[20px] tracking-[0.05em]',
      scaleSize: 15,
      gap: 'gap-3',
      textOffset: 'translate-y-[2.5px] sm:translate-y-[3px]',
    },
    lg: {
      // Login hero stacked size
      iconH: 'h-20 sm:h-22',
      iconW: 55,
      iconPxH: 84,
      ruangText: 'text-sm sm:text-base tracking-[0.26em]',
      hukumText: 'text-2xl sm:text-3xl tracking-[0.08em]',
      scaleSize: 20,
      gap: 'gap-3',
      textOffset: 'translate-y-0',
    },
  }[size];

  const content = variant === 'stacked' ? (
    <div className={`flex flex-col items-start ${className}`}>
      {/* Neoclassical Pillar Icon */}
      <div className="relative mb-2.5">
        <Image
          src="/rh-icon.png"
          alt="Ruang Hukum Logo"
          width={config.iconW}
          height={config.iconPxH}
          priority
          className={`${config.iconH} w-auto object-contain drop-shadow-md`}
        />
      </div>

      {showText && (
        <div
          className="flex flex-col leading-none select-none"
          style={brandFontStyle}
        >
          {/* RUANG */}
          <span
            className={`font-bold text-[#f5be58] uppercase ${config.ruangText}`}
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
          >
            RUANG
          </span>
          {/* HUK⚖M */}
          <span
            className={`font-extrabold text-[#f5be58] uppercase flex items-baseline gap-0.5 mt-1 ${config.hukumText}`}
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
          >
            <span>HUK</span>
            <Scale
              size={config.scaleSize}
              strokeWidth={2.4}
              className="text-[#f5be58] inline-block mb-0.5 shrink-0"
            />
            <span>M</span>
          </span>
        </div>
      )}
    </div>
  ) : (
    <div className={`flex items-center ${config.gap} shrink-0 ${className}`}>
      {/* Neoclassical Pillar Icon */}
      <Image
        src="/rh-icon.png"
        alt="Ruang Hukum Logo"
        width={config.iconW}
        height={config.iconPxH}
        priority
        className={`${config.iconH} w-auto object-contain drop-shadow-sm`}
      />

      {showText && (
        <div
          className={`flex flex-col justify-center leading-none select-none ${config.textOffset}`}
          style={brandFontStyle}
        >
          {/* RUANG */}
          <span
            className={`font-bold text-[#f5be58] uppercase ${config.ruangText}`}
            style={{ textShadow: '0 1px 1px rgba(0,0,0,0.2)' }}
          >
            RUANG
          </span>
          {/* HUK⚖M */}
          <span
            className={`font-extrabold text-[#f5be58] uppercase flex items-baseline gap-0.5 mt-0.5 ${config.hukumText}`}
            style={{ textShadow: '0 1px 1px rgba(0,0,0,0.2)' }}
          >
            <span>HUK</span>
            <Scale
              size={config.scaleSize}
              strokeWidth={2.4}
              className="text-[#f5be58] inline-block mb-0.5 shrink-0"
            />
            <span>M</span>
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center hover:opacity-95 transition-opacity">
        {content}
      </Link>
    );
  }

  return content;
}
