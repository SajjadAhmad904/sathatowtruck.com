import { Link, Navigate, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import {
  PHONE,
  PHONE_TEL,
  WHATSAPP,
  getServiceBySlug,
  servicePages,
} from '../data'

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const others = servicePages.filter((s) => s.slug !== service.slug)

  return (
    <>
      <Seo
        title={service.seoTitle}
        description={service.seoDescription}
        path={`/services/${service.slug}`}
        image={`https://sathatowtruck.com${service.heroImage}`}
        breadcrumbs={[
          { name: 'الرئيسية', path: '/' },
          { name: 'الخدمات', path: '/services' },
          { name: service.shortTitle, path: `/services/${service.slug}` },
        ]}
      />
      <main className="page">
        <section className="page-hero page-hero-media">
          <img
            src={service.heroImage}
            alt={`${service.title} — سطحة جدة ${PHONE}`}
            className="page-hero-img"
          />
          <div className="page-hero-veil" />
          <div className="container page-hero-content">
            <nav className="breadcrumb light" aria-label="مسار التنقل">
              <Link to="/">الرئيسية</Link>
              <span>/</span>
              <Link to="/services">الخدمات</Link>
              <span>/</span>
              <span>{service.shortTitle}</span>
            </nav>
            <h1>
              {service.title}
              <span className="hero-phone"> {PHONE}</span>
            </h1>
            <p>{service.lead}</p>
            <div className="hero-cta">
              <a className="btn btn-primary btn-lg" href={`tel:${PHONE_TEL}`}>
                اطلب الخدمة الآن
              </a>
              <a
                className="btn btn-outline btn-lg"
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
              >
                واتساب {PHONE}
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container service-detail-grid">
            <div className="service-detail-main">
              <h2>تفاصيل الخدمة</h2>
              {service.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}

              <h2>ماذا يشمل؟</h2>
              <ul className="check-list">
                {service.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              {service.faqs.length > 0 ? (
                <>
                  <h2>أسئلة شائعة</h2>
                  <div className="faq-list">
                    {service.faqs.map((item) => (
                      <details key={item.q} className="faq-item">
                        <summary>{item.q}</summary>
                        <p>{item.a}</p>
                      </details>
                    ))}
                  </div>
                </>
              ) : null}
            </div>

            <aside className="service-aside">
              <div className="aside-box">
                <h3>اطلب الآن</h3>
                <p>متاحون 24/7 داخل جدة وبين المدن.</p>
                <a className="btn btn-primary" href={`tel:${PHONE_TEL}`}>
                  {PHONE}
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
              <div className="aside-box">
                <h3>خدمات أخرى</h3>
                <ul className="aside-links">
                  {others.map((s) => (
                    <li key={s.slug}>
                      <Link to={`/services/${s.slug}`}>{s.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  )
}
