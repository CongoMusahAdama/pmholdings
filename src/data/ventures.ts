export interface Venture {
  id: string
  name: string
  shortName: string
  tagline: string
  description: string
  path: string
  category: string
  logo: string
}

export const brand = {
  fullName: 'Nana Quasi-Wusu',
  stageName: 'PM',
  title: 'The Finest MC',
  slogan: 'Excellence is My Hallmark',
  location: 'Takoradi, Ghana',
  radio: 'Host of The DrYve of Your Lyfe — weekdays 3–7 PM on Y97.9FM Takoradi',
  handle: '@PmTheFinestMc',
  holdings: 'PM Holdings',
  logo: '/logos/pm.jpg',
}

export const ventures: Venture[] = [
  {
    id: 'foundation',
    name: 'PM Foundation',
    shortName: 'Foundation',
    tagline: 'Service to Humanity',
    description:
      'Award-winning NGO founded on PM’s 30th birthday — scholarships, Dine With The Street, blood drives, Love Trip outreaches, youth empowerment, and campaigns against skin bleaching.',
    path: '/pm-foundation',
    category: 'Philanthropy',
    logo: '/logos/foundation.png',
  },
  {
    id: 'entertainment',
    name: 'PM Entertainment',
    shortName: 'Entertainment',
    tagline: 'Consult, MC, Mentorship',
    description:
      'PM Entertainment Consult — elite MC/hypeman bookings, event coordination, talent management, BlakTrip experiences, and The Finest MasterClass for aspiring communicators.',
    path: '/pm-entertainment',
    category: 'Entertainment',
    logo: '/logos/pm-entertainment.jpg',
  },
  {
    id: 'nantegh',
    name: 'Nantegh',
    shortName: 'Nantegh',
    tagline: 'Handmade, Made in Ghana',
    description:
      'Fashion rooted in Ghanaian craft — handmade footwear and style under the Nante / Nantegh vision: look smart, walk in comfort, proudly Made in Ghana.',
    path: '/nantegh',
    category: 'Fashion',
    logo: '/logos/nantegh.svg',
  },
  {
    id: 'cyto',
    name: 'Cyto Records',
    shortName: 'CYTO',
    tagline: 'Talent Rules, Passion Conquers',
    description:
      'Music-first talent house — we groom, mentor, and train singers and music artistes into career-ready craft. Purposeful development for music, not MC work.',
    path: '/cyto',
    category: 'Music',
    logo: '/logos/cyto.jpg',
  },
  {
    id: 'blacklaa',
    name: 'Blaklaaa Movement',
    shortName: 'Blacklaa',
    tagline: 'Proud to Be Black',
    description:
      'Pan-African movement promoting Black pride, African history and culture, Made-in-Africa goods, youth as legal hustlers, and campaigns against skin bleaching.',
    path: '/blacklaa',
    category: 'Culture',
    logo: '/logos/blacklaa.jpg',
  },
  {
    id: 'modeling',
    name: 'Modeling',
    shortName: 'Modeling',
    tagline: 'Fashion & Presence',
    description:
      'Fashion modeling and on-camera presence — runway, editorial energy, and brand appearances that carry the same excellence PM brings to every stage.',
    path: '/modeling',
    category: 'Modeling',
    logo: '/logos/pm.jpg',
  },
]

export function getLogoForPath(pathname: string): string {
  if (
    pathname === '/' ||
    pathname === '/about' ||
    pathname === '/contact' ||
    pathname === '/gallery'
  ) {
    return brand.logo
  }
  return ventures.find((v) => v.path === pathname)?.logo ?? brand.logo
}

export interface SocialLink {
  name: string
  href: string
  label?: string
}

/** Default / personal PM socials */
export const socialLinks: SocialLink[] = [
  { name: 'Facebook', href: 'https://www.facebook.com/TheFinestMc', label: '@TheFinestMc' },
  { name: 'X', href: 'https://x.com/PmTheFinestMc', label: '@PmTheFinestMc' },
  { name: 'Instagram', href: 'https://www.instagram.com/pmdepresenter', label: '@pmdepresenter' },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nana-quasi-wusu-pm-%F0%9F%87%AC%F0%9F%87%AD-9529b2102',
    label: 'Nana Quasi-Wusu (PM)',
  },
]

/** Per-venture socials — navbar switches these by current page */
export const ventureSocials: Record<string, SocialLink[]> = {
  '/pm-foundation': [
    { name: 'Facebook', href: 'https://www.facebook.com/pmfoundation', label: '@pm__foundation' },
    { name: 'X', href: 'https://x.com/pm__foundation', label: '@pm__foundation' },
    { name: 'Instagram', href: 'https://www.instagram.com/pm__foundation', label: '@pm__foundation' },
    { name: 'LinkedIn', href: socialLinks[3].href, label: 'PM Foundation' },
  ],
  '/pm-entertainment': [
    { name: 'Facebook', href: 'https://www.facebook.com/TheFinestMc', label: '@TheFinestMc' },
    { name: 'X', href: 'https://x.com/PmTheFinestMc', label: '@PmTheFinestMc' },
    { name: 'Instagram', href: 'https://www.instagram.com/pmdepresenter', label: '@pmdepresenter' },
    { name: 'LinkedIn', href: socialLinks[3].href, label: 'PM Entertainment' },
  ],
  '/nantegh': [
    { name: 'Facebook', href: 'https://www.facebook.com/NanteShoes', label: 'Nante Shoes' },
    { name: 'Instagram', href: 'https://www.instagram.com/nante_shoes', label: '@nante_shoes' },
    { name: 'LinkedIn', href: socialLinks[3].href, label: 'Nantegh' },
  ],
  '/cyto': [
    { name: 'Facebook', href: 'https://www.facebook.com/TheFinestMc', label: '@TheFinestMc' },
    { name: 'X', href: 'https://x.com/PmTheFinestMc', label: '@PmTheFinestMc' },
    { name: 'Instagram', href: 'https://www.instagram.com/cyto_talent', label: '@cyto_talent' },
    { name: 'LinkedIn', href: socialLinks[3].href, label: 'CYTO' },
  ],
  '/blacklaa': [
    { name: 'Facebook', href: 'https://www.facebook.com/TheFinestMc', label: '@TheFinestMc' },
    { name: 'X', href: 'https://x.com/blaklaaa', label: '@blaklaaa' },
    { name: 'Instagram', href: 'https://www.instagram.com/blaklaaa', label: '@blaklaaa' },
    { name: 'LinkedIn', href: socialLinks[3].href, label: 'Blaklaaa Movement' },
  ],
  '/modeling': [
    { name: 'Facebook', href: 'https://www.facebook.com/TheFinestMc', label: '@TheFinestMc' },
    { name: 'X', href: 'https://x.com/PmTheFinestMc', label: '@PmTheFinestMc' },
    { name: 'Instagram', href: 'https://www.instagram.com/pmdepresenter', label: '@pmdepresenter' },
    { name: 'LinkedIn', href: socialLinks[3].href, label: 'Modeling' },
  ],
}

export function getSocialsForPath(pathname: string): SocialLink[] {
  return ventureSocials[pathname] ?? socialLinks
}

export const contactInfo = {
  email: 'inquiries@pmofficial.com',
  booking: 'booking@pmofficial.com',
  foundation: 'pmfoundation@pmofficial.com',
  phone: '0242903049',
  phoneAlt: '0245995333',
  location: 'Takoradi, Western Region, Ghana',
  nanteEmail: 'nanteshoes1@gmail.com',
  nanteInstagram: 'https://www.instagram.com/nante_shoes',
  foundationHandle: '@pm__foundation',
}

export const notableEvents = [
  'TGMA Xperience Concert',
  'Bhim Festival',
  'Made In Taadi Concert',
  'Storm Reigns Concert',
  'Western Music Awards',
  'Taadi Fashion Weekend',
  'Western Gospel Awards',
  'MTN Stands In Worship',
  'Tullow Ghana End of Year Party',
  'Access Bank End of Year Party',
  'Cowbell Family Funfair',
  'YFM Area Codes Jam',
]

export const awards = [
  'National Communications Awards 2020 — Radio Personality of the Year (first outside Greater Accra)',
  'G-Park Awards 2014/2015 — Special Honour (Broadcaster/MC)',
  'Sekondi-Takoradi Radio Awards 2015 — Best Reggae Show Host',
  'Fontomfrom Amandze Awards — Volunteer Group of the Year (PM Foundation)',
  'Ghana Lifestyle Awards 2019 — Best Event MC nominee',
  'TTU SRC Awards 2023 — Special Honour to Alumnus MC/Broadcaster',
]
