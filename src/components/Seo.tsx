import { Head } from 'vite-react-ssg'
import { useLocation } from 'react-router-dom'
import { SITE } from '../data/content'

type SeoProps = {
  title: string
  description?: string
  noindex?: boolean
  jsonLd?: object
}

const SUFFIX = 'ZENNARA Property & Facility Management'

export default function Seo({ title, description, noindex, jsonLd }: SeoProps) {
  const { pathname } = useLocation()
  const fullTitle = title === SUFFIX ? title : `${title} · ${SUFFIX}`
  const url = SITE.url + (pathname === '/' ? '' : pathname)

  return (
    <Head>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={url} />

      <meta property="og:site_name" content={SUFFIX} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      {SITE.ogImage && (
        <meta property="og:image" content={SITE.url + SITE.ogImage} />
      )}
      <meta
        name="twitter:card"
        content={SITE.ogImage ? 'summary_large_image' : 'summary'}
      />

      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Head>
  )
}
