import type { GalleryItem } from './gallery'

export interface WeddingPhoto {
  id: string
  src: string
  alt: string
  title: string
}

export interface WeddingChapter {
  id: string
  title: string
  photos: WeddingPhoto[]
}

/** #Blaklaaav22 — 7th May 2022. */
export const weddingChapters: WeddingChapter[] = [
  {
    id: 'pre-wedding',
    title: 'Pre-Wedding Pictures',
    photos: [
      {
        id: 'wedding-pre-01',
        src: '/images/wedding/pre-01.jpg',
        alt: 'Pre-wedding portrait of Nana Quasi-Wusu (PM) and his partner, 7th May 2022',
        title: 'Pre-Wedding',
      },
      {
        id: 'wedding-pre-02',
        src: '/images/wedding/pre-02.jpg',
        alt: 'Pre-wedding studio portrait, #Blaklaaav22',
        title: 'Pre-Wedding',
      },
    ],
  },
  {
    id: 'traditional',
    title: 'Traditional Marriage',
    photos: [
      {
        id: 'wedding-traditional-01',
        src: '/images/wedding/traditional-01.jpg',
        alt: 'Traditional marriage ceremony, #Blaklaaav22, 7th May 2022',
        title: 'Traditional Marriage',
      },
      {
        id: 'wedding-traditional-02',
        src: '/images/wedding/traditional-02.jpg',
        alt: 'Traditional marriage portrait in kente, #Blaklaaav22',
        title: 'Traditional Marriage',
      },
    ],
  },
  {
    id: 'church',
    title: 'Church Wedding',
    photos: [
      {
        id: 'wedding-church-01',
        src: '/images/wedding/church-01.jpg',
        alt: 'Church wedding of Nana Quasi-Wusu (PM), #Blaklaaav22, 7th May 2022',
        title: 'Church Wedding',
      },
    ],
  },
  {
    id: 'reception',
    title: 'Reception',
    photos: [],
  },
]

export const weddingPhotos = weddingChapters.flatMap((chapter) => chapter.photos)

export const weddingGalleryItems: GalleryItem[] = weddingPhotos.map((photo) => ({
  id: photo.id,
  src: photo.src,
  alt: photo.alt,
  title: photo.title,
  category: 'Wedding',
}))
