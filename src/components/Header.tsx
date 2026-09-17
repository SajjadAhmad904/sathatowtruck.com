import { PHONE, PHONE_TEL, WHATSAPP, servicePages } from '../data'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24 || !isHome)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  const close = () => {
    setOpen(false)
    setServicesOpen(false)
  }

  const solid = scrolled || !isHome

  return (
    <header className={`site-header${solid ? ' is-scrolled' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={close}>
          <img
            src="/images/logo.png"
            alt="سطحة جدة"
            className="brand-logo"
            width={48}
            height={48}
          />
          <span className="brand-text">
            <strong>سطحة جدة</strong>
            <small>Satha Tow Truck</small>
          </span>
        </Link>

        <nav className={`nav${open ? ' is-open' : ''}`} aria-label="القائمة الرئيسية">
          <NavLink to="/" end onClick={close}>
            الرئيسية
          </NavLink>

          <div className={`nav-dropdown${servicesOpen ? ' is-open' : ''}`}>
            <button
              type="button"
              className="nav-dropdown-toggle"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
            >
              الخدمات
              <span aria-hidden="true">▾</span>
            </button>
            <div className="nav-dropdown-menu">
              <NavLink to="/services" onClick={close}>
                جميع الخدمات
              </NavLink>
              {servicePages.map((s) => (
                <NavLink key={s.slug} to={`/services/${s.slug}`} onClick={close}>
                  {s.title}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink to="/about" onClick={close}>
            من نحن
          </NavLink>
          {isHome ? (
            <a href="/#cities" onClick={close}>
              بين المدن
            </a>
          ) : (
            <Link to="/#cities" onClick={close}>
              بين المدن
            </Link>
          )}
          <NavLink to="/contact" onClick={close}>
            اتصل بنا
          </NavLink>
        </nav>

        <div className="header-actions">
          <a className="btn btn-ghost phone-link" href={`tel:${PHONE_TEL}`}>
            {PHONE}
          </a>
          <a
            className="btn btn-primary"
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
          >
            واتساب
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
