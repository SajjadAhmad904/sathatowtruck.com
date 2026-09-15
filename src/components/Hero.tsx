import { PHONE, PHONE_TEL, WHATSAPP } from '../data'

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-brand">
      <div className="hero-media" aria-hidden="true">
        <img
          src="/images/satha-4.png"
          alt=""
          className="hero-img"
          fetchPriority="high"
          width={1200}
          height={800}
        />
        <div className="hero-veil" />
      </div>

      <div className="container hero-content">
        <p id="hero-brand" className="hero-brand">
          سطحة جدة
        </p>
        <h1 className="hero-title">
          سطحة هيدروليك جدة
          <span className="hero-phone"> {PHONE}</span>
        </h1>
        <p className="hero-lead">
          نقل وسحب السيارات داخل جدة وبين المدن — متاحون على مدار الساعة.
        </p>
        <div className="hero-cta">
          <a className="btn btn-primary btn-lg" href={`tel:${PHONE_TEL}`}>
            اتصل الآن
          </a>
          <a
            className="btn btn-outline btn-lg"
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
          >
            طلب عبر واتساب
          </a>
        </div>
      </div>
    </section>
  )
}
