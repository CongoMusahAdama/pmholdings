import { useState } from 'react'
import type { StageVideo } from '../data/videos'

function PlayGlyph({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const box = size === 'sm' ? 'h-11 w-11' : 'h-14 w-14'
  const icon = size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'
  return (
    <span
      className={`flex ${box} items-center justify-center rounded-full bg-gold text-ink shadow-[0_8px_24px_rgba(0,0,0,0.35)] ring-4 ring-white/15 transition-transform duration-300 group-hover:scale-110`}
    >
      <svg viewBox="0 0 24 24" className={`ml-0.5 ${icon} fill-current`} aria-hidden>
        <path d="M8 5.14v13.72L19 12 8 5.14z" />
      </svg>
    </span>
  )
}

export function YouTubeEmbed({ video }: { video: StageVideo }) {
  const [playing, setPlaying] = useState(false)
  if (!video.youtubeId) return null
  const thumb = video.thumbnail ?? `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`

  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-ink shadow-[var(--shadow-soft)]">
      <div className="relative aspect-video overflow-hidden bg-black">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0"
            aria-label={`Play ${video.title}`}
          >
            <img
              src={thumb}
              alt=""
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
            <span className="absolute inset-0 flex items-center justify-center">
              <PlayGlyph />
            </span>
          </button>
        )}
      </div>
      <p className="px-4 py-3 text-sm font-semibold text-white">{video.title}</p>
    </article>
  )
}

export function SocialVideoCard({ video }: { video: StageVideo }) {
  const platform = video.platform === 'tiktok' ? 'TikTok' : 'Instagram'

  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex aspect-[9/14] flex-col justify-end overflow-hidden rounded-2xl border border-line bg-ink shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
    >
      {video.thumbnail ? (
        <img
          src={video.thumbnail}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <span className="absolute inset-0 bg-ink" />
      )}
      <span className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />
      <span className="absolute left-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-gold backdrop-blur-sm">
        {platform}
      </span>
      <span className="absolute inset-0 flex items-center justify-center">
        <PlayGlyph size="sm" />
      </span>
      <div className="relative z-10 p-4 pt-10">
        <p className="text-sm font-semibold leading-snug text-white">{video.title}</p>
        <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/70">
          Watch on {platform}
        </p>
      </div>
    </a>
  )
}
