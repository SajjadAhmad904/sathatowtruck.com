import { Link } from 'react-router-dom'
import { services } from '../data'
import ServiceIcon from './ServiceIcon'

export default function Services() {
  return (
    <section id="services" className="section services" aria-labelledby="services-title">
      <div className="container">
        <header className="section-head">
          <h2 id="services-title">خدمات سطحة جدة</h2>
          <p>سطحة هيدروليك، سحب طوارئ، سيارات فاخرة، دراجات، أساطيل، ونقل بين المدن.</p>
        </header>
        <div className="service-grid">
          {services.map((s) => (
            <article key={s.id} className="service-item">
              <ServiceIcon name={s.icon} />
              <h3>
                <Link to={`/services/${s.slug}`}>{s.title}</Link>
              </h3>
              <p>{s.desc}</p>
              <Link className="text-link" to={`/services/${s.slug}`}>
                التفاصيل ←
              </Link>
            </article>
          ))}
        </div>
        <p className="section-more">
          <Link className="btn btn-ghost" to="/services">
            عرض جميع الخدمات
          </Link>
        </p>
      </div>
    </section>
  )
}
