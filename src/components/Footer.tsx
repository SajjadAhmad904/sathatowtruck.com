import { Link } from 'react-router-dom'
import { PHONE, PHONE_TEL, jeddahAreas, cities, servicePages } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">
            <img src="/images/logo.png" alt="" width={40} height={40} className="footer-logo" />
            سطحة جدة
          </p>
          <p className="footer-desc">
            موقع سطحة جدة الرسمي لنقل السيارات. سطحات هيدروليك حديثة داخل وخارج جدة. رقم
            السطحة: <a href={`tel:${PHONE_TEL}`}>{PHONE}</a>
          </p>
        </div>
        <div>
          <h3>خدمات</h3>
          <ul>
            {servicePages.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`}>{s.shortTitle}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>وجهات</h3>
          <ul>
            {cities.slice(0, 5).map((c) => (
              <li key={c.name}>{c.route}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>روابط</h3>
          <ul>
            <li>
              <Link to="/">الرئيسية</Link>
            </li>
            <li>
              <Link to="/about">من نحن</Link>
            </li>
            <li>
              <Link to="/services">جميع الخدمات</Link>
            </li>
            <li>
              <Link to="/contact">اتصل بنا</Link>
            </li>
            {jeddahAreas.slice(0, 4).map((a) => (
              <li key={a}>سطحة {a}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-keywords container">
        <p>
          كلمات مفتاحية: سطحة جدة، رقم سطحة جدة، سطحات جدة، سطحة هيدروليك جدة، اقرب سطحة من
          موقعي، سطحة لنقل السيارات، سطحة جدة مكة، سطحة جدة الرياض، سحب سيارات جدة، سطحة بين
          المدن.
        </p>
      </div>
      <div className="footer-bottom container">
        <p>
          © {year} سطحة جدة — Satha Tow Truck ·{' '}
          <a href="https://sathatowtruck.com/">sathatowtruck.com</a>
        </p>
      </div>
    </footer>
  )
}
