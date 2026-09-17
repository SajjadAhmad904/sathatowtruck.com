import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { PHONE, PHONE_TEL, WHATSAPP } from '../data'

export default function AboutPage() {
  return (
    <>
      <Seo
        title={`من نحن | سطحة جدة ${PHONE} — سطحة هيدروليك`}
        description={`سطحة جدة متخصصة في السطحة الهيدروليكية وسحب السيارات في جدة والمنطقة الغربية. اتصل ${PHONE}`}
        path="/about"
        breadcrumbs={[
          { name: 'الرئيسية', path: '/' },
          { name: 'من نحن', path: '/about' },
        ]}
      />
      <main className="page">
        <section className="page-hero">
          <div className="container">
            <nav className="breadcrumb" aria-label="مسار التنقل">
              <Link to="/">الرئيسية</Link>
              <span>/</span>
              <span>من نحن</span>
            </nav>
            <h1>من نحن — سطحة جدة {PHONE}</h1>
            <p>
              شركة متخصصة في خدمات السطحة الهيدروليكية وسحب السيارات في جدة والمنطقة الغربية.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container narrow about-content">
            <p>
              نخدم السائقين والشركات الذين يحتاجون سحبًا واضحًا وآمنًا — من أعطال الليل إلى
              نقلات المعارض المجدولة. نركز على التواصل العربي السريع، التحميل الحذر، والأسعار
              الشفافة قبل تحرك السطحة.
            </p>
            <p>
              جدة هي نقطة انطلاقنا إلى مكة والطائف والمدينة والرياض وباقي مدن المملكة عبر خدمة
              سطحة بين المدن.
            </p>
            <ul className="check-list">
              <li>أسطول سطحات هيدروليك حديثة</li>
              <li>تغطية شمال جدة وجنوب جدة والطرق السريعة</li>
              <li>خدمة 24 ساعة للاتصال والواتساب</li>
              <li>دعم الأفراد والشركات والأساطيل</li>
            </ul>
            <div className="hero-cta" style={{ marginTop: '2rem' }}>
              <a className="btn btn-primary btn-lg" href={`tel:${PHONE_TEL}`}>
                اتصل {PHONE}
              </a>
              <a
                className="btn btn-ghost btn-lg"
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
              >
                واتساب
              </a>
              <Link className="btn btn-ghost btn-lg" to="/services">
                تصفح الخدمات
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
