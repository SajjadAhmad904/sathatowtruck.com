import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import ServiceIcon from '../components/ServiceIcon'
import { PHONE, PHONE_TEL, WHATSAPP, servicePages } from '../data'

export default function ServicesPage() {
  return (
    <>
      <Seo
        title={`خدمات سطحة جدة ${PHONE} | سحب ونقل وهيدروليك`}
        description={`جميع خدمات سطحة جدة: سحب طوارئ، سطحة هيدروليك، سيارات فاخرة، دراجات، أساطيل، ونقل بين المدن. اتصل ${PHONE}`}
        path="/services"
        keywords="خدمات سطحة جدة, سطحة هيدروليك, سحب سيارات جدة, نقل بين المدن"
      />
      <main className="page">
        <section className="page-hero">
          <div className="container">
            <nav className="breadcrumb" aria-label="مسار التنقل">
              <Link to="/">الرئيسية</Link>
              <span>/</span>
              <span>الخدمات</span>
            </nav>
            <h1>خدمات سطحة جدة</h1>
            <p>
              سحب طوارئ، فل بد هيدروليك، سيارات فاخرة، دراجات، أساطيل، ونقل بين المدن — اختر
              الخدمة أو اتصل مباشرة {PHONE}
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href={`tel:${PHONE_TEL}`}>
                اتصل الآن
              </a>
              <a
                className="btn btn-ghost"
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
              >
                واتساب
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="service-cards">
              {servicePages.map((s) => (
                <article key={s.slug} className="service-card">
                  <ServiceIcon name={s.icon} />
                  <h2>
                    <Link to={`/services/${s.slug}`}>{s.title}</Link>
                  </h2>
                  <p>{s.desc}</p>
                  <Link className="text-link" to={`/services/${s.slug}`}>
                    التفاصيل ←
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
