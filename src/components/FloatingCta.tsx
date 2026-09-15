import { PHONE_TEL, WHATSAPP } from '../data'

export default function FloatingCta() {
  return (
    <div className="floating-cta" role="group" aria-label="اتصال سريع">
      <a className="fab call" href={`tel:${PHONE_TEL}`} aria-label="اتصال الآن">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
        </svg>
      </a>
      <a
        className="fab wa"
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="واتساب"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.4 1.3 4.9L2 22l5.3-1.3C8.7 21.5 10.3 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm5.6 14.3c-.2.6-1.2 1.1-1.9 1.2-.5.1-1.1.1-1.8-.1-1.1-.3-2.5-.9-3.9-2-2.1-1.7-3.5-3.9-3.7-4.1-.2-.2-1.5-2-1.5-3.8s1-2.7 1.3-3c.3-.3.7-.4 1-.4h.7c.2 0 .5 0 .7.6.2.6.8 2.1.9 2.2.1.2.1.3 0 .5l-.5.8c-.1.2-.3.3-.1.6.2.3.7 1.2 1.6 1.9 1.1.9 2 1.2 2.3 1.3.3.1.5.1.7-.1l.9-1.1c.2-.2.4-.2.6-.1.2.1 1.7.8 2 .9.3.1.5.2.6.3.1.2.1.9-.1 1.5z" />
        </svg>
      </a>
    </div>
  )
}
