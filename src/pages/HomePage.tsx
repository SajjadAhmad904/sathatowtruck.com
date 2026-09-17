import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Services from '../components/Services'
import Cities from '../components/Cities'
import Areas from '../components/Areas'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'
import Contact from '../components/Contact'
import { homeSeo } from '../routes'

export default function HomePage() {
  const seo = homeSeo()
  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        path="/"
        breadcrumbs={[{ name: 'الرئيسية', path: '/' }]}
      />
      <main>
        <Hero />
        <Features />
        <Services />
        <Cities />
        <Areas />
        <Gallery />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
    </>
  )
}
