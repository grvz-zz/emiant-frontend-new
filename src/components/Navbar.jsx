import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'Technology', href: '#technology' },
  { label: 'Applications', href: '#applications' },
  { label: 'Products', href: '#products' },
  { label: 'Siphotherm', href: '#siphotherm' },
  { label: 'BMD / BMS', href: '#bmdbms' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#top" className={styles.logo}>
        <img src="/logo.png" alt="Emiant" className={styles.logoImg} />
        Emiant Innovations
      </a>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label}>
            <a href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="btn-outline" style={{ fontSize: '13px' }}>
        Partner with us
      </a>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
