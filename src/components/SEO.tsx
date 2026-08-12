import { Helmet } from 'react-helmet-async'
import { brand } from '../data/ventures'

const SITE_URL = 'https://pmholdingsgh.com'
const DEFAULT_IMAGE = `${SITE_URL}/logos/pm.jpg`
const SITE_NAME = 'PM Holdings'

interface SEOProps {
  title: string
  description: string
  path?: string
  image?: string
  type?: 'website' | 'profile' | 'article'
  keywords?: string
  noIndex?: boolean
}

export default function SEO({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  keywords,
  noIndex = false,
}: SEOProps) {
  const isHome = title === 'Home'
  const fullTitle = isHome
    ? `PM Holdings | Nana Quasi-Wusu (PM) — The Finest MC`
    : `${title} | PM Holdings — Nana Quasi-Wusu (PM)`

  const canonical = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
  const ogImage = image.startsWith('http') ? image : `${SITE_URL}${image}`

  const defaultKeywords = [
    'PM Holdings',
    'PM Holdings Ghana',
    'pmholdings',
    'pmholdingsgh',
    'Nana Quasi-Wusu',
    'Nana Quasi Wusu',
    'PM The Finest MC',
    'The Finest MC',
    'PM Foundation',
    'PM Entertainment',
    'Ghana MC',
    'Takoradi MC',
    'Y97.9FM',
    'The DrYve',
    'Cyto Records',
    'Blaklaaa',
    'Nantegh',
  ].join(', ')

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: brand.fullName,
    alternateName: ['PM', 'The Finest MC', 'Nana Quasi Wusu', 'PM Holdings'],
    description,
    url: SITE_URL,
    image: ogImage,
    jobTitle: 'Professional MC, Broadcaster & Entertainment Consultant',
    worksFor: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Takoradi',
      addressCountry: 'GH',
    },
    sameAs: [
      'https://www.facebook.com/TheFinestMc',
      'https://x.com/PmTheFinestMc',
      'https://www.instagram.com/pmdepresenter',
    ],
  }

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    alternateName: ['PM Holdings Ghana', 'pmholdings', 'pmholdingsgh'],
    url: SITE_URL,
    logo: DEFAULT_IMAGE,
    description:
      'PM Holdings is the brand home of Nana Quasi-Wusu (PM) — The Finest MC — covering PM Foundation, PM Entertainment, Cyto Records, Blaklaaa, Nantegh and Modeling.',
    founder: {
      '@type': 'Person',
      name: brand.fullName,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Takoradi',
      addressCountry: 'GH',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    alternateName: ['PM Holdings Ghana', 'Nana Quasi-Wusu PM'],
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <Helmet>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords ?? defaultKeywords} />
      <meta name="author" content={`${brand.fullName} (PM) | ${SITE_NAME}`} />
      <meta
        name="robots"
        content={noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'}
      />
      <link rel="canonical" href={canonical} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:locale" content="en_GH" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {isHome && (
        <>
          <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
          <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
          <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
        </>
      )}
    </Helmet>
  )
}

export { SITE_URL, SITE_NAME }
