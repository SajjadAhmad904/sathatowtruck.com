import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { SITE_URL } from '../data'
import BreadcrumbJsonLd, { type Crumb } from './BreadcrumbJsonLd'

type Props = {
  title: string
  description: string
  path?: string
  image?: string
  breadcrumbs?: Crumb[]
}

export default function Seo({
  title,
  description,
  path = '/',
  image = `${SITE_URL}/images/satha-4.png`,
  breadcrumbs,
}: Props) {
  const url = `${SITE_URL}${path === '/' ? '/' : path}`

  useEffect(() => {
    document.documentElement.lang = 'ar'
    document.documentElement.dir = 'rtl'
  }, [])

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar_SA" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:alt" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
      {breadcrumbs && breadcrumbs.length > 0 ? (
        <BreadcrumbJsonLd items={breadcrumbs} />
      ) : null}
    </>
  )
}
