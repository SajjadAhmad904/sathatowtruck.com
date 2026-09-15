import { PHONE, PHONE_TEL, WHATSAPP } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div className="contact-copy">
          <header className="section-head left">
            <h2 id="contact-title">اتصل بنا الآن</h2>
            <p>
              نحن هنا لمساعدتك. اطلب سطحة هيدروليك في جدة أو نقل بين المدن بضغطة واحدة.
            </p>
          </header>
          <ul className="contact-list">
            <li>
              <span>الجوال</span>
              <a href={`tel:${PHONE_TEL}`}>{PHONE}</a>
            </li>
            <li>
              <span>واتساب</span>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                {PHONE}
              </a>
            </li>
            <li>
              <span>الموقع</span>
              <strong>جدة، المملكة العربية السعودية</strong>
            </li>
            <li>
              <span>ساعات العمل</span>
              <strong>24 ساعة / 7 أيام</strong>
            </li>
          </ul>
        </div>

        <div className="contact-panel">
          <img
            src="/images/satha-3.png"
            alt="سطحة جدة لنقل السيارات وقت الغروب"
            loading="lazy"
            width={640}
            height={800}
          />
          <div className="contact-panel-cta">
            <a className="btn btn-primary btn-lg" href={`tel:${PHONE_TEL}`}>
              اتصال مباشر {PHONE}
            </a>
            <a
              className="btn btn-outline btn-lg"
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
            >
              رسالة واتساب
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
