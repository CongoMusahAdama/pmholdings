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
  handle: '@pmthefinestmc',
  holdings: 'PM Holdings',
  logo: '/logos/pm.jpg',
}

export const ventures: Venture[] = [
  {
    id: 'foundation',
    name: 'PM Foundation',
    shortName: 'PM Foundation',
    tagline: 'Service to Humanity',
    description:
      'Award-winning NGO founded on PM’s 30th birthday — scholarships, Dine With The Street, blood drives, Love Trip outreaches, youth empowerment, and campaigns against skin bleaching.',
    path: '/pm-foundation',
    category: 'Philanthropy',
    logo: '/logos/foundation.png',
  },
  {
    id: 'entertainment',
    name: 'PM Entertainment Consult',
    shortName: 'PM Entertainment Consult',
    tagline: 'Events · PR · Branding',
    description:
      'An events, PR, advertising and product activations, talent management, voice-overs, videography, photography and branding company based in Takoradi.',
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
    name: 'Cyto GH',
    shortName: 'Cyto GH',
    tagline: 'Talent Rules, Passion Conquers',
    description:
      'Nurture, groom, and polish talents to become the best version of every gift they carry. 35+ presenters, MCs, hypemen, dancers, bloggers, artistes, musicians, models, beauty pageant, public speakers, and content creators — current beneficiary, Bluk.',
    path: '/cyto',
    category: 'Talent',
    logo: '/logos/cyto.jpg',
  },
  {
    id: 'blacklaa',
    name: 'Blaklaaa Movement',
    shortName: 'Blaklaaa',
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
    pathname.startsWith('/about') ||
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
  { name: 'Instagram', href: 'https://www.instagram.com/pmthefinestmc', label: '@pmthefinestmc' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@pmthefinestmc', label: '@pmthefinestmc' },
  { name: 'YouTube', href: 'https://www.youtube.com/@pmthefinestmc', label: '@pmthefinestmc' },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nana-quasi-wusu-pm-%F0%9F%87%AC%F0%9F%87%AD-9529b2102',
    label: 'Nana Quasi-Wusu (PM)',
  },
  { name: 'Facebook', href: 'https://www.facebook.com/TheFinestMc', label: '@PMTheFinestMc' },
  { name: 'X', href: 'https://x.com/pmthefinestmc', label: '@pmthefinestmc' },
]

const linkedInHref = socialLinks.find((link) => link.name === 'LinkedIn')!.href
const tikTok = socialLinks.find((link) => link.name === 'TikTok')!
const youTube = socialLinks.find((link) => link.name === 'YouTube')!

/** Per-venture socials — navbar switches these by current page */
export const ventureSocials: Record<string, SocialLink[]> = {
  '/pm-foundation': [
    { name: 'Instagram', href: 'https://www.instagram.com/pm__foundation', label: '@pm__foundation' },
    tikTok,
    youTube,
    { name: 'LinkedIn', href: linkedInHref, label: 'PM Foundation' },
    { name: 'Facebook', href: 'https://www.facebook.com/pmfoundation', label: '@pm__foundation' },
    { name: 'X', href: 'https://x.com/pm__foundation', label: '@pm__foundation' },
  ],
  '/pm-entertainment': socialLinks,
  '/nantegh': [
    { name: 'Instagram', href: 'https://www.instagram.com/nante_shoes', label: '@nante_shoes' },
    tikTok,
    youTube,
    { name: 'LinkedIn', href: linkedInHref, label: 'Nantegh' },
    { name: 'Facebook', href: 'https://www.facebook.com/NanteShoes', label: 'Nante Shoes' },
  ],
  '/cyto': [
    { name: 'Instagram', href: 'https://www.instagram.com/cyto_talent', label: '@cyto_talent' },
    tikTok,
    youTube,
    { name: 'LinkedIn', href: linkedInHref, label: 'Cyto GH' },
    { name: 'Facebook', href: 'https://www.facebook.com/TheFinestMc', label: '@PMTheFinestMc' },
    { name: 'X', href: 'https://x.com/pmthefinestmc', label: '@pmthefinestmc' },
  ],
  '/blacklaa': [
    { name: 'Instagram', href: 'https://www.instagram.com/blaklaaa', label: '@blaklaaa' },
    tikTok,
    youTube,
    { name: 'LinkedIn', href: linkedInHref, label: 'Blaklaaa Movement' },
    { name: 'Facebook', href: 'https://www.facebook.com/TheFinestMc', label: '@PMTheFinestMc' },
    { name: 'X', href: 'https://x.com/blaklaaa', label: '@blaklaaa' },
  ],
  '/modeling': socialLinks,
}

export function getSocialsForPath(pathname: string): SocialLink[] {
  return ventureSocials[pathname] ?? socialLinks
}

export const contactInfo = {
  email: 'thefinestmc1@gmail.com',
  booking: 'thefinestmc1@gmail.com',
  foundation: 'thefinestmc1@gmail.com',
  phone: '0242903049',
  phoneAlt: '0245995333',
  location: 'Takoradi, Western Region, Ghana',
  nanteEmail: 'thefinestmc1@gmail.com',
  nanteInstagram: 'https://www.instagram.com/nante_shoes',
  foundationHandle: '@pm__foundation',
  bank: {
    name: '',
    accountName: 'PM Foundation',
    accountNumber: '',
    branch: '',
  },
}

function ghanaWhatsAppNumber(phone: string) {
  const digits = phone.replace(/\D/g, '')
  const national = digits.startsWith('0') ? digits.slice(1) : digits
  return digits.startsWith('233') ? digits : `233${national}`
}

export function whatsappHref(message: string) {
  return `https://wa.me/${ghanaWhatsAppNumber(contactInfo.phone)}?text=${encodeURIComponent(message)}`
}

export const bookMcHref = whatsappHref(
  'Hello PM,\n\nI want to book you as MC / Hypeman.\n\nPlease share availability and rates.',
)

export const notableEvents = [
  'MTN Stands in Worship',
  'FIFA World Cup Launch',
  'British American Tobacco Awards',
  'Takoradi Mall Event Centre Opening',
  'AdansiTravels Grand Launch',
  'MTN MoMo at 15 Launch',
  'Food Lovers Grand Opening',
  'Bhim Festival',
  'TGMA Xperience',
  'Made In Taadi Concert',
  'Aso At 20 Concert',
  'Dynamic Praise',
  'Indomie Fest',
  'Asabaako Festival',
  'Tullow End of Year Party',
  'Chemsolv End of Year Party',
  'Mastercard Foundation End of Year Party',
]
