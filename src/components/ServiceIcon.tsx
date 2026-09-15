import type { ReactElement } from 'react'

const icons: Record<string, ReactElement> = {
  hydraulic: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="6" y="22" width="28" height="10" rx="1" stroke="currentColor" strokeWidth="2" />
      <path d="M34 24h6l4 8H34V24z" stroke="currentColor" strokeWidth="2" />
      <circle cx="14" cy="36" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="36" cy="36" r="4" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  accident: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 8l16 28H8L24 8z" stroke="currentColor" strokeWidth="2" />
      <path d="M24 20v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="34" r="1.5" fill="currentColor" />
    </svg>
  ),
  intercity: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M8 32c8-12 24-12 32 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="34" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="36" cy="34" r="3" stroke="currentColor" strokeWidth="2" />
      <path d="M24 10v14M18 16h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  winch: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="20" r="8" stroke="currentColor" strokeWidth="2" />
      <path d="M24 28v10M18 38h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  breakdown: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="10" y="18" width="28" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="34" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="32" cy="34" r="3" stroke="currentColor" strokeWidth="2" />
      <path d="M18 18l4-6h8l4 6" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  agency: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M8 36V16l16-8 16 8v20" stroke="currentColor" strokeWidth="2" />
      <rect x="20" y="24" width="8" height="12" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
}

export default function ServiceIcon({ name }: { name: string }) {
  return <div className="service-icon">{icons[name] ?? icons.hydraulic}</div>
}
