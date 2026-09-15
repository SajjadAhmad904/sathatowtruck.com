import { features } from '../data'

export default function Features() {
  return (
    <section className="section features" aria-labelledby="features-title">
      <div className="container">
        <header className="section-head">
          <h2 id="features-title">ما الذي يميزنا؟</h2>
          <p>خدمة سطحة موثوقة بأسعار منافسة ووصول سريع في كل أحياء جدة.</p>
        </header>
        <ul className="feature-grid">
          {features.map((f, i) => (
            <li key={f.title} className="feature-item" style={{ animationDelay: `${i * 80}ms` }}>
              <span className="feature-index" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
