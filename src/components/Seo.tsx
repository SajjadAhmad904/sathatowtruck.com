import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { SITE_URL } from '../data'

type Props = {
  title: string
  description: string
  path?: string
  keywords?: string
  image?: string
}

export default function Seo({
  title,
  description,
  path = '/',
  keywords,
  image = `${SITE_URL}/images/satha-4.png`,
}: Props) {
  const url = `${SITE_URL}${path}`

  useEffect(() => {
    document.documentElement.lang = 'ar'
    document.documentElement.dir = 'rtl'
  }, [])

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ar_SA" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
