import { cities, PHONE, PHONE_TEL } from '../data'

export default function Cities() {
  return (
    <section id="cities" className="section cities" aria-labelledby="cities-title">
      <div className="cities-bg" aria-hidden="true" />
      <div className="container cities-inner">
        <header className="section-head light">
          <h2 id="cities-title">سطحة من جدة إلى كل المدن</h2>
          <p>
            جدة هي نقطة انطلاقنا — نوفر سطحة بين المدن بأسعار منافسة إلى أهم مدن المملكة.
          </p>
        </header>
        <ul className="city-list">
          {cities.map((c) => (
            <li key={c.name}>
              <a href={`tel:${PHONE_TEL}`} className="city-chip">
                <span className="city-name">{c.name}</span>
                <span className="city-route">{c.route}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="cities-note">
          سطحة هيدروليك جدة الرياض · سطحة جدة مكة · سطحة جدة الطائف — اتصل{' '}
          <a href={`tel:${PHONE_TEL}`}>{PHONE}</a>
        </p>
      </div>
    </section>
  )
}
