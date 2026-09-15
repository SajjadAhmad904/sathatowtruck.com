import { testimonials } from '../data'

export default function Testimonials() {
  return (
    <section className="section testimonials" aria-labelledby="reviews-title">
      <div className="container">
        <header className="section-head">
          <h2 id="reviews-title">آراء عملائنا</h2>
          <p>ثقة العملاء هي أفضل تقييم لخدمة سطحة جدة.</p>
        </header>
        <div className="review-grid">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="review">
              <div className="stars" aria-label="تقييم 5 من 5">
                ★★★★★
              </div>
              <p>{t.text}</p>
              <footer>— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
