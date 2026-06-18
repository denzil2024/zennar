import { Head } from 'vite-react-ssg'

type SeoProps = {
  title: string
  description?: string
  noindex?: boolean
}

const SUFFIX = 'ZENNARA Property & Facility Management'

export default function Seo({ title, description, noindex }: SeoProps) {
  return (
    <Head>
      <title>{title === SUFFIX ? title : `${title} · ${SUFFIX}`}</title>
      {description && <meta name="description" content={description} />}
      {noindex && <meta name="robots" content="noindex" />}
    </Head>
  )
}
