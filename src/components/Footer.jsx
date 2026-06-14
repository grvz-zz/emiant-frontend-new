import styles from './Footer.module.css'

const NAV_LINKS = ['Privacy', 'Terms', 'Patents', 'Press']

const SOCIALS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/people/Emiant-Innovations/100064099650887/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/emiant_innovations?utm_source=qr&igsh=MWVlZmRjNGZjcHNyNA==',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/emiant-innovations-pvt-ltd/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>Emiant Innovations</div>

      <nav className={styles.links}>
        {NAV_LINKS.map(l => <a key={l} href="#">{l}</a>)}
      </nav>

      <div className={styles.socials}>
        {SOCIALS.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label={label}
          >
            {icon}
          </a>
        ))}
      </div>

      <p className={styles.copy}>© 2024 Emiant Innovations. All rights reserved.</p>
    </footer>
  )
}