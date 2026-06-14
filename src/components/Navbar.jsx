import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'Solutions',   href: '/#applications' },
  { label: 'Technology',  href: '/#technology' },
  { label: 'Siphotherm',  href: '/#siphotherm' },
  { label: 'BMS / BMD',   href: '/#bmdbms' },
  { label: 'About',       href: '/#about' },
  { label: 'Contact',     href: '/#contact' },
]

// Scrolls to a hash anchor, retrying until the element exists in the DOM
function scrollToHash(hash) {
  const id = hash.replace('#', '')
  const attempt = (tries = 0) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else if (tries < 10) {
      setTimeout(() => attempt(tries + 1), 50)
    }
  }
  attempt()
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [pathname])

  // After any navigation, if there's a hash, scroll to it
  useEffect(() => {
    if (hash) scrollToHash(hash)
  }, [pathname, hash])

  const handleHashLink = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const [path, hash] = href.split('#')
    const targetPath = path || '/'
    if (pathname === targetPath || pathname === '/') {
      // Already on the right page — just scroll
      scrollToHash('#' + hash)
    } else {
      // Navigate to homepage first, hash scroll happens via the useEffect above
      navigate(targetPath + '#' + hash)
    }
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={styles.logo}>
        <img src="/logo.png" alt="Emiant" className={styles.logoImg}
          onError={e => { e.target.style.display='none' }}
        />
        <span className={styles.brandName}>Emiant Innovations</span>
      </Link>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {NAV_LINKS.map(({ label, href, exact }) => (
          <li key={label}>
            {href.includes('#') ? (
              <a href={href} onClick={(e) => handleHashLink(e, href)}>{label}</a>
            ) : (
              <NavLink
                to={href}
                className={({ isActive }) => isActive ? styles.activeLink : ''}
                end={exact}
              >
                {label}
              </NavLink>
            )}
          </li>
        ))}
      </ul>

      <a href="/#contact" onClick={(e) => handleHashLink(e, '/#contact')} className="btn-outline" style={{ fontSize: '13px', whiteSpace: 'nowrap' }}>
        Get Started
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