export interface UpcomingEvent {
  id: string
  month: string
  year: string
  title: string
  org: string
  body: string
  image: string
  to: string
  cta: string
}

/** Annual own-event calendar — month order, January through December. */
export const upcomingEvents: UpcomingEvent[] = [
  {
    id: 'afrin-jan',
    month: 'January',
    year: '2027',
    title: 'Afrin Party',
    org: 'PM Entertainment Consult',
    body: 'The year opens on the floor — a signature night of music, energy, and The Finest MC.',
    image: '/images/ev.jpg',
    to: '/pm-entertainment',
    cta: 'Get Details',
  },
  {
    id: 'pint-mar',
    month: 'March',
    year: '2027',
    title: 'A Pint 4 A Life',
    org: 'PM Foundation',
    body: 'Annual blood donation drive — mobilising communities to give blood and save lives.',
    image: '/images/foundation.jpg',
    to: '/pm-foundation',
    cta: 'Give Blood',
  },
  {
    id: 'blak-trip-may',
    month: 'May',
    year: '2027',
    title: 'Blak Trip',
    org: 'Blaklaaa Movement',
    body: 'First BlakTrip of the year — Ghana’s sites, culture, and heritage. Twice a year, the movement hits the road.',
    image: '/images/blaklass45.jpg',
    to: '/blacklaa',
    cta: 'Join the Movement',
  },
  {
    id: 'finest-sep',
    month: 'September',
    year: '2026',
    title: 'The Finest Experience',
    org: 'PM Entertainment Consult',
    body: 'PM’s signature night — DJs paired with hypemen, music, and excellence on the floor.',
    image: '/images/more/pm-10y-b.jpeg',
    to: '/pm-entertainment',
    cta: 'See the Night',
  },
  {
    id: 'walk-oct',
    month: 'October',
    year: '2026',
    title: 'A Walk With PM',
    org: 'Blaklaaa Movement',
    body: 'Community walk — fitness, awareness, and Blaklaaa pride through the city.',
    image: '/images/event-group.webp',
    to: '/blacklaa',
    cta: 'Walk With Us',
  },
  {
    id: 'blak-trip-nov',
    month: 'November',
    year: '2026',
    title: 'Blak Trip',
    org: 'Blaklaaa Movement',
    body: 'Second BlakTrip of the year — a curated journey to Ghana’s sites, culture, and heritage.',
    image: '/images/blakla1.jpg',
    to: '/blacklaa',
    cta: 'Join the Movement',
  },
  {
    id: 'dine-dec',
    month: 'December',
    year: '2026',
    title: 'Dine With The Street',
    org: 'PM Foundation',
    body: 'Feeding, care, and dignity for communities on the street — the flagship outreach of the year.',
    image: '/images/dine-street/dine-01.jpg',
    to: '/pm-foundation',
    cta: 'Support the Cause',
  },
]

export const foundationLineup = upcomingEvents.filter((e) => e.to === '/pm-foundation')
export const blacklaaLineup = upcomingEvents.filter((e) => e.to === '/blacklaa')
export const entertainmentLineup = upcomingEvents.filter((e) => e.to === '/pm-entertainment')
