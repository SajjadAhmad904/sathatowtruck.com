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
import { PHONE } from '../data'

export default function HomePage() {
  return (
    <>
      <Seo
        title={`سطحة جدة ${PHONE} | سطحة هيدروليك جدة لنقل السيارات`}
        description={`سطحة جدة رقم ${PHONE} — خدمة سطحة هيدروليك على مدار 24 ساعة. نقل وسحب السيارات داخل جدة وبين المدن.`}
        path="/"
        keywords="سطحة جدة, رقم سطحة جدة, سطحة هيدروليك جدة, سطحات جدة, اقرب سطحة من موقعي"
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
