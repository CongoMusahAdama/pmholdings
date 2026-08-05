export interface HostedEvent {
  id: string
  name: string
  role: string
  year?: string
  location?: string
  summary: string
  flyer?: string
  category: 'Concert' | 'Awards' | 'Corporate' | 'Culture' | 'Own Event' | 'Tour'
}

/** Notable stages PM has hosted / been invited to — sourced from YFM & press profiles */
export const hostedEvents: HostedEvent[] = [
  {
    id: 'western-content-creators',
    name: 'Western Content Creators Seminar',
    role: 'Organiser / Host',
    year: '2026',
    location: 'Western Region',
    summary:
      'Upcoming #WCCS2026 seminar by PM Entertainment Consult for content creators across the Western Region — sponsorship and partnership enquiries open.',
    flyer: '/images/events/western-content-creators.jpg',
    category: 'Own Event',
  },
  {
    id: 'made-in-taadi-2025',
    name: 'Made In Taadi Concert',
    role: 'Host / MC (4th time)',
    year: '2024',
    location: 'Takoradi Sports Club Park',
    summary:
      'Booked again as host for Kofi Kinaata’s flagship Detty December concert — one of Ghana’s biggest outdoor shows, with 20,000+ patrons.',
    flyer: '/images/press/made-in-taadi-mc-1.jpg',
    category: 'Concert',
  },
  {
    id: 'tgma-xperience',
    name: '26th TGMA Xperience Concert',
    role: 'Host / MC',
    year: '2025',
    location: 'Takoradi Mall',
    summary:
      'Brought unmatched energy to Telecel Ghana Music Awards Xperience in Takoradi — tributes, crowd command, and a night with top Ghanaian acts.',
    flyer: '/images/events/tgma-xperience.jpg',
    category: 'Concert',
  },
  {
    id: 'mtn-worship',
    name: 'MTN Stands In Worship',
    role: 'Host / MC',
    year: '2025',
    location: 'Takoradi',
    summary:
      'Commanded the stage for MTN’s worship celebration — formal presence, precision hosting, and live band energy.',
    flyer: '/images/ev1.jpg',
    category: 'Concert',
  },
  {
    id: 'bhim-festival',
    name: 'Bhim Festival — Beach Edition',
    role: 'Hypeman / MC',
    year: '2024',
    location: 'La Palm Royal Beach Hotel',
    summary:
      'Stonebwoy & BMG’s Bhim Fest Beach Edition — official hypeman/MC billing for one of Ghana’s biggest festival stages.',
    flyer: '/images/events/bhim-festival.jpg',
    category: 'Concert',
  },
  {
    id: 'western-gospel-2024',
    name: 'Western Gospel Awards',
    role: 'Official Host',
    year: '2023, 2024',
    location: 'Word of Life A/G, Anaji–Takoradi',
    summary:
      'Hosted the Western Gospel Awards for consecutive editions — celebrating gospel excellence across the Western Region.',
    flyer: '/images/events/western-gospel.jpg',
    category: 'Awards',
  },
  {
    id: 'finest-experience',
    name: 'The Finest Experience',
    role: 'Creator & Host',
    year: '2024, 2025',
    location: 'Replay / Swagga, Takoradi',
    summary:
      'PM Entertainment Consult’s signature night — DJs paired with hypemen, climaxing his 10- and 15-year celebrations.',
    flyer: '/images/press-portrait-2.jpg',
    category: 'Own Event',
  },
  {
    id: 'finest-masterclass',
    name: 'The Finest MasterClass',
    role: 'Host & Facilitator',
    year: '2025',
    location: 'Takoradi Mall',
    summary:
      'Mentorship for MCs, hypemen, and public speakers — with facilitators including KKD, Kofi Cephas, and MC Kofi Darlington.',
    flyer: '/images/masterclass-1.jpg',
    category: 'Own Event',
  },
  {
    id: 'dreams-vibes',
    name: 'Dreams & Vibes University Tour',
    role: 'Host / Mentor',
    year: '2025',
    location: 'UEW & campuses',
    summary:
      'Campus tour bringing entertainment, motivation, and talent energy to university students nationwide.',
    flyer: '/images/events/dreams-vibes.jpg',
    category: 'Tour',
  },
  {
    id: 'made-in-taadi',
    name: 'Made In Taadi Concert',
    role: 'Host / MC (multiple editions)',
    year: 'Multiple',
    location: 'Takoradi',
    summary:
      'Kofi Kinaata’s hometown Christmas concert — a flagship Western Region stage PM has hosted multiple times, including the 4th booking in 2024.',
    flyer: '/images/press/made-in-taadi-mc-1.jpg',
    category: 'Concert',
  },
  {
    id: 'western-music-awards',
    name: 'Western Music Awards',
    role: 'Host / MC',
    year: 'Multiple',
    location: 'Western Region',
    summary: 'Trusted podium for one of the region’s leading music award nights.',
    flyer: '/images/c5.jpg',
    category: 'Awards',
  },
  {
    id: 'storm-reigns',
    name: 'Storm Reigns Concert',
    role: 'Host / MC',
    location: 'Ghana',
    summary: 'High-energy concert hosting — crowd control and stage craft at full throttle.',
    flyer: '/images/mc3.jpg',
    category: 'Concert',
  },
  {
    id: 'taadi-fashion',
    name: 'Taadi Fashion Weekend',
    role: 'Host / MC',
    location: 'Takoradi',
    summary: 'Fashion runway and style showcase hosting — bridging entertainment and modeling presence.',
    flyer: '/images/mc4.jpg',
    category: 'Culture',
  },
  {
    id: 'tullow',
    name: 'Tullow Ghana End of Year Party',
    role: 'Host / MC',
    location: 'Ghana',
    summary: 'Corporate end-of-year hosting for Tullow Ghana — polish, timing, and executive-room energy.',
    flyer: '/images/ev3.jpg',
    category: 'Corporate',
  },
  {
    id: 'yfm-area-codes',
    name: 'YFM Area Codes Jams',
    role: 'Host / MC',
    year: 'Multiple',
    location: 'YFM network',
    summary: 'Multiple editions of YFM’s Area Codes Jams — radio brand activation on a live stage.',
    flyer: '/images/mc5.jpg',
    category: 'Concert',
  },
  {
    id: 'cowbell',
    name: 'Cowbell Family Funfair',
    role: 'Host / MC',
    year: 'Multiple',
    location: 'Ghana',
    summary: 'Family entertainment hosting — fun, safe energy for brand activations and community crowds.',
    flyer: '/images/mc8.jpg',
    category: 'Corporate',
  },
  {
    id: 'asabaako',
    name: 'Asabaako International Festival',
    role: 'Host / MC',
    year: '2×',
    location: 'Ghana',
    summary: 'International festival hosting — culture, tourism, and global stage craft.',
    flyer: '/images/mc9.jpg',
    category: 'Culture',
  },
  {
    id: 'access-bank',
    name: 'Access Bank End of Year Party',
    role: 'Host / MC',
    location: 'Ghana',
    summary: 'Corporate celebration hosting for Access Bank — refined delivery for brand stakeholders.',
    flyer: '/images/ev4.jpg',
    category: 'Corporate',
  },
  {
    id: 'gold-coast',
    name: 'Gold Coast Carnival',
    role: 'Host / MC',
    location: 'Ghana',
    summary: 'Carnival-scale energy — parade vibes, crowd hyping, and cultural spectacle.',
    flyer: '/images/mc10.jpg',
    category: 'Culture',
  },
  {
    id: 'miss-abstinence',
    name: 'Miss Abstinence Ghana',
    role: 'Host / MC',
    location: 'Ghana',
    summary: 'Pageant hosting that helped open early doors into professional MC work.',
    flyer: '/images/mc11.jpg',
    category: 'Culture',
  },
  {
    id: 'dine-street',
    name: 'Dine With The Street',
    role: 'Founder / Host',
    year: 'Ongoing',
    location: 'Takoradi',
    summary:
      'PM Foundation flagship outreach — feeding, care, and dignity for communities on the street.',
    flyer: '/images/donation-kith.jpg',
    category: 'Own Event',
  },
  {
    id: 'pint-4-life',
    name: 'A Pint 4 A Life',
    role: 'Founder / Lead',
    year: 'Ongoing',
    location: 'Western Region',
    summary:
      'PM Foundation blood donation drive — mobilising communities to give blood and save lives.',
    flyer: '/images/foundation.jpg',
    category: 'Own Event',
  },
  {
    id: 'walk-with-pm',
    name: 'A Walk With PM',
    role: 'Organiser / Face',
    year: '2024',
    location: 'Takoradi Mall route',
    summary:
      'Community walk celebrating 10 years in broadcasting — fitness, awareness, and Blaklaaa pride.',
    flyer: '/images/portrait-broadcast.jpg',
    category: 'Own Event',
  },
]
