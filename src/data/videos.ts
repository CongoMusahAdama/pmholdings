export type VideoPlatform = 'youtube' | 'tiktok' | 'instagram'

export interface StageVideo {
  id: string
  platform: VideoPlatform
  url: string
  title: string
  youtubeId?: string
  thumbnail?: string
  group: 'radio' | 'stage'
}

export const radioVideos: StageVideo[] = [
  {
    id: 'radio-intro',
    platform: 'youtube',
    url: 'https://youtu.be/gvYflM-KKnU',
    youtubeId: 'gvYflM-KKnU',
    title: 'Best Radio Intro',
    thumbnail: '/images/video-thumbs/yt-gvYflM-KKnU.jpg',
    group: 'radio',
  },
  {
    id: 'kinaata',
    platform: 'youtube',
    url: 'https://youtu.be/cWxyI31gaCM',
    youtubeId: 'cWxyI31gaCM',
    title: 'Kofi Kinaata interview',
    thumbnail: '/images/video-thumbs/yt-cWxyI31gaCM.jpg',
    group: 'radio',
  },
  {
    id: 'manifest',
    platform: 'youtube',
    url: 'https://youtu.be/YjEn5QKzz2o',
    youtubeId: 'YjEn5QKzz2o',
    title: 'M.anifest interview',
    thumbnail: '/images/video-thumbs/yt-YjEn5QKzz2o.jpg',
    group: 'radio',
  },
  {
    id: 'lasmid',
    platform: 'youtube',
    url: 'https://youtu.be/w3SlezPh0aY',
    youtubeId: 'w3SlezPh0aY',
    title: 'Lasmid',
    thumbnail: '/images/video-thumbs/yt-w3SlezPh0aY.jpg',
    group: 'radio',
  },
  {
    id: 'wendy-shay',
    platform: 'youtube',
    url: 'https://youtu.be/1cmlvVvi5wQ',
    youtubeId: '1cmlvVvi5wQ',
    title: 'Wendy Shay',
    thumbnail: '/images/video-thumbs/yt-1cmlvVvi5wQ.jpg',
    group: 'radio',
  },
]

export const stageVideos: StageVideo[] = [
  {
    id: 'tt-1',
    platform: 'tiktok',
    url: 'https://vt.tiktok.com/ZSX8oBbT2/',
    title: 'DrYve — Wonderful Worship Wednesday',
    thumbnail: '/images/video-thumbs/tt-01.jpg',
    group: 'stage',
  },
  {
    id: 'tt-2',
    platform: 'tiktok',
    url: 'https://vt.tiktok.com/ZSX8oWLVT/',
    title: 'Aso At 20 Concert',
    thumbnail: '/images/video-thumbs/tt-02.jpg',
    group: 'stage',
  },
  {
    id: 'tt-3',
    platform: 'tiktok',
    url: 'https://vt.tiktok.com/ZSXLJvrWG/',
    title: 'Made In Taadi Concert',
    thumbnail: '/images/video-thumbs/tt-03.jpg',
    group: 'stage',
  },
  {
    id: 'tt-4',
    platform: 'tiktok',
    url: 'https://vt.tiktok.com/ZSXLdRDX6/',
    title: 'Career-defining host moment',
    thumbnail: '/images/video-thumbs/tt-04.jpg',
    group: 'stage',
  },
  {
    id: 'tt-5',
    platform: 'tiktok',
    url: 'https://vt.tiktok.com/ZSX8EgnNN/',
    title: 'Interactive parties',
    thumbnail: '/images/video-thumbs/tt-05.jpg',
    group: 'stage',
  },
  {
    id: 'tt-6',
    platform: 'tiktok',
    url: 'https://vt.tiktok.com/ZSX8oLpLA/',
    title: 'When Energygod takes over',
    thumbnail: '/images/video-thumbs/tt-06.jpg',
    group: 'stage',
  },
  {
    id: 'ig-1',
    platform: 'instagram',
    url: 'https://www.instagram.com/reel/DGLBqUlos0X/',
    title: 'BAT Distributors Awards',
    thumbnail: '/images/mc.jpg',
    group: 'stage',
  },
  {
    id: 'ig-2',
    platform: 'instagram',
    url: 'https://www.instagram.com/reel/C_N6UMeoGzj/',
    title: 'Takoradi Mall Event Centre',
    thumbnail: '/images/event-group.webp',
    group: 'stage',
  },
  {
    id: 'ig-3',
    platform: 'instagram',
    url: 'https://www.instagram.com/reel/C-a0IatolzD/',
    title: 'MTN MoMo at 15 Launch',
    thumbnail: '/images/pm-15-years.webp',
    group: 'stage',
  },
  {
    id: 'ig-4',
    platform: 'instagram',
    url: 'https://www.instagram.com/reel/CtY96XzoIGk/',
    title: 'AdansiTravels Grand Opening',
    thumbnail: '/images/mc1.jpg',
    group: 'stage',
  },
  {
    id: 'ig-5',
    platform: 'instagram',
    url: 'https://www.instagram.com/reel/DLlFdQAI7fb/',
    title: 'Food Lovers Grand Opening',
    thumbnail: '/images/event-team.webp',
    group: 'stage',
  },
  {
    id: 'tt-7',
    platform: 'tiktok',
    url: 'https://vt.tiktok.com/ZSX8E6ptV/',
    title: 'FIFA World Cup 2026 Launch',
    thumbnail: '/images/video-thumbs/tt-07.jpg',
    group: 'stage',
  },
  {
    id: 'tt-8',
    platform: 'tiktok',
    url: 'https://vt.tiktok.com/ZSX8EDR17/',
    title: 'MTN Stands in Worship',
    thumbnail: '/images/video-thumbs/tt-08.jpg',
    group: 'stage',
  },
]

export const workLists = [
  {
    id: 'corporate',
    label: 'Corporate Events',
    items: [
      'MTN Stands in Worship',
      'FIFA World Cup Launch',
      'British American Tobacco Awards',
      'Opening of Takoradi Mall Event Centre',
      'Grand Launching of AdansiTravels',
      'MTN MoMo at 15 Launch',
      'Grand Opening of Food Lovers',
    ],
  },
  {
    id: 'concerts',
    label: 'Concerts and Festivals',
    items: [
      'Bhim Festival',
      'TGMA Xperience',
      'Made In Taadi Concert',
      'Aso At 20 Concert',
      'Dynamic Praise',
      'Indomie Fest',
      'Asabaako Festival',
    ],
  },
  {
    id: 'eoy',
    label: 'End of Year Parties',
    items: ['Tullow', 'Chemsolv', 'Mastercard Foundation'],
  },
]
