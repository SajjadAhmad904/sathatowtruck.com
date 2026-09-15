import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Contact from '../components/Contact'
import { PHONE } from '../data'

export default function ContactPage() {
  return (
    <>
      <Seo
        title={`اتصل بنا | سطحة جدة ${PHONE}`}
        description={`تواصل مع سطحة جدة على ${PHONE} للاتصال أو واتساب. خدمة سطحة هيدروليك 24/7.`}
        path="/contact"
        keywords={`اتصل سطحة جدة, رقم سطحة جدة ${PHONE}, واتساب سطحة`}
      />
      <main className="page">
        <section className="page-hero">
          <div className="container">
            <nav className="breadcrumb" aria-label="مسار التنقل">
              <Link to="/">الرئيسية</Link>
              <span>/</span>
              <span>اتصل بنا</span>
            </nav>
            <h1>اتصل بنا — {PHONE}</h1>
            <p>نحن هنا لمساعدتك. اطلب سطحة في جدة أو نقل بين المدن بضغطة واحدة.</p>
          </div>
        </section>
        <Contact />
      </main>
    </>
  )
}
