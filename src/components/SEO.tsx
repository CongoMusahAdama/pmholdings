import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  path?: string
}

export default function SEO({ title, description, path = '' }: SEOProps) {
  const fullTitle = title === 'Home'
    ? 'Nana Quasi Weisa (PM) | Entertainment Consultant & Visionary'
    : `${title} | Nana Quasi Weisa (PM)`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {path && <link rel="canonical" href={path} />}
    </Helmet>
  )
}
