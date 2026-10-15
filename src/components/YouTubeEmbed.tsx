'use client';

import React from 'react';

// Extract an 11-char video id from any common YouTube URL shape
export function extractYouTubeId(url: string): string {
  const m = url?.match(/(?:youtube(?:-nocookie)?\.com\/(?:embed\/|watch\?v=|shorts\/)|youtu\.be\/)([\w-]{11})/);
  return m?.[1] ?? '';
}

export default function YouTubeEmbed({
  url,
  title,
  className = '',
}: {
  url: string;
  title: string;
  className?: string;
}) {
  const videoId = extractYouTubeId(url);

  return (
    <div className={`relative w-full aspect-video bg-gray-950 ${className}`}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        className="absolute inset-0 w-full h-full border-0"
      />
    </div>
  );
}
