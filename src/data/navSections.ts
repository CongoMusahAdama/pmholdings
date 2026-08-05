export interface NavSection {
  id: string
  label: string
}

export interface NavPage {
  to: string
  label: string
  description: string
  sections: NavSection[]
}

export const navPages: NavPage[] = [
  {
    to: '/',
    label: 'Home',
    description: 'Overview of PM’s brand, ventures, and impact.',
    sections: [
      { id: 'hero', label: 'Welcome Hero' },
      { id: 'features', label: 'Featured Ventures' },
      { id: 'about-teaser', label: 'About PM' },
      { id: 'on-air', label: 'On Air / The DrYve' },
      { id: 'impact', label: 'Impact & Highlights' },
      { id: 'stages', label: 'Signature Stages' },
      { id: 'upcoming', label: 'Upcoming Event' },
      { id: 'talent-spotlight', label: 'Talent Spotlight' },
      { id: 'ventures', label: 'All Ventures' },
      { id: 'gallery-teaser', label: 'Gallery Moments' },
      { id: 'fashion', label: 'Fashion & Modeling' },
      { id: 'connect', label: 'Connect / CTA' },
    ],
  },
  {
    to: '/about',
    label: 'About',
    description: 'Full biography, milestones, and pillars.',
    sections: [
      { id: 'overview', label: 'Overview' },
      { id: 'biography', label: 'Biography' },
      { id: 'at-a-glance', label: 'At a Glance' },
      { id: 'honours', label: 'Selected Honours' },
      { id: 'pillars', label: 'Craft & Impact' },
      { id: 'ventures', label: 'Ventures' },
      { id: 'events', label: 'Events & Stages' },
      { id: 'connect', label: 'Collaborate' },
    ],
  },
  {
    to: '/pm-foundation',
    label: 'Foundation',
    description: 'Scholarships, outreach, and service to humanity.',
    sections: [
      { id: 'mission', label: 'Who We Are' },
      { id: 'focus', label: 'How We Serve' },
      { id: 'impact', label: 'Impact' },
      { id: 'gallery', label: 'In The Field' },
      { id: 'causes', label: 'Our Causes' },
      { id: 'get-involved', label: 'Get Involved' },
      { id: 'connect', label: 'Support the Mission' },
    ],
  },
  {
    to: '/pm-entertainment',
    label: 'Entertainment',
    description: 'MC bookings, consulting, and mentorship.',
    sections: [
      { id: 'overview', label: 'What We Do' },
      { id: 'services', label: 'Capabilities' },
      { id: 'events', label: 'Selected Stages' },
      { id: 'masterclass', label: 'MasterClass' },
      { id: 'connect', label: 'Book The Finest MC' },
    ],
  },
  {
    to: '/nantegh',
    label: 'Nantegh',
    description: 'Made-in-Ghana fashion and handmade craft.',
    sections: [
      { id: 'trending', label: 'Trending' },
      { id: 'lookbook', label: 'Shop the Look' },
      { id: 'story', label: 'Our Mission' },
      { id: 'aesthetic', label: 'The Codes' },
      { id: 'connect', label: 'Brand Inquiry' },
    ],
  },
  {
    to: '/cyto',
    label: 'CYTO',
    description: 'Talent incubation and development.',
    sections: [
      { id: 'pillars', label: 'Groom · Mentor · Train' },
      { id: 'mission', label: 'What Cyto Does' },
      { id: 'process', label: 'The Roadmap' },
      { id: 'focus', label: 'Who We Develop' },
      { id: 'talent', label: 'In the Room' },
      { id: 'connect', label: 'Apply / Inquire' },
    ],
  },
  {
    to: '/blacklaa',
    label: 'Blacklaa',
    description: 'Proud to be Black — culture and community.',
    sections: [
      { id: 'goals', label: 'What We Stand For' },
      { id: 'call', label: 'The Call' },
      { id: 'places', label: 'Places We’ve Been' },
      { id: 'programmes', label: 'In Action' },
      { id: 'gallery', label: 'BlakTrip Moments' },
      { id: 'connect', label: 'Join the Movement' },
    ],
  },
  {
    to: '/modeling',
    label: 'Modeling',
    description: 'Fashion, runway, and brand presence.',
    sections: [
      { id: 'overview', label: 'Presence as Craft' },
      { id: 'categories', label: 'Work Categories' },
      { id: 'portfolio', label: 'Selected Imagery' },
      { id: 'connect', label: 'Booking' },
    ],
  },
  {
    to: '/gallery',
    label: 'Gallery',
    description: 'Photos from radio, stages, outreach, and culture.',
    sections: [
      { id: 'collection', label: 'Photo Collection' },
      { id: 'connect', label: 'Book a Moment' },
    ],
  },
  {
    to: '/contact',
    label: 'Contact',
    description: 'Bookings, partnerships, and inquiries.',
    sections: [
      { id: 'form', label: 'Contact Us' },
      { id: 'business', label: 'Get in Touch' },
      { id: 'social', label: 'Follow Us' },
    ],
  },
]
