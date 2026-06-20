import { Fragment, useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'Applications',   href: '/#applications' },
  { label: 'Technology',  href: '/#technology' },
  { label: 'Team',        href: '/#team' },
  { label: 'About',       href: '/#about' },
  { label: 'Contact',     href: '/#contact' },
]

const PRODUCT_LINKS = [
  { label: 'Siphotherm', href: '/#siphotherm' },
  { label: 'Battery Management Systems',  href: '/#bmdbms' },
  { label: 'Cell Doc',   href: '/#celldoc' },
]

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
  const [scrolled, setScrolled]       = useState(false)
  const [menuOpen, setMenuOpen]       = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const { pathname, hash }            = useLocation()
  const navigate                      = useNavigate()
  const dropdownRef                   = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [pathname])

  // After navigation, scroll to hash
  useEffect(() => {
    if (hash) scrollToHash(hash)
  }, [pathname, hash])

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProductsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  const handleHashLink = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    setProductsOpen(false)
    const [path, hashPart] = href.split('#')
    const targetPath = path || '/'
    if (pathname === targetPath || pathname === '/') {
      scrollToHash('#' + hashPart)
    } else {
      navigate(targetPath + '#' + hashPart)
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
        {NAV_LINKS.map(({ label, href, exact }, idx) => (
          <Fragment key={label}>
            <li>
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
            {idx === 1 && (
              <li key="products" className={styles.dropdown} ref={dropdownRef}>
                <button
                  type="button"
                  className={styles.dropdownToggle}
                  onClick={() => setProductsOpen(v => !v)}
                  aria-expanded={productsOpen}
                >
                  Products
                </button>
                <ul className={`${styles.dropdownMenu} ${productsOpen ? styles.dropdownOpen : ''}`}>
                  {PRODUCT_LINKS.map(({ label, href }) => (
                    <li key={label}>
                      {href ? (
                        <a href={href} onClick={(e) => handleHashLink(e, href)}>
                          {label}
                        </a>
                      ) : (
                        <span className={styles.dropdownDisabled}>{label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            )}
          </Fragment>
        ))}
        <li className={styles.getStartedMobile}>
          <a href="/#contact" onClick={(e) => handleHashLink(e, '/#contact')} className="btn-primary" style={{margin:'8px 24px',display:'block',textAlign:'center'}}>
            Get Started
          </a>
        </li>
      </ul>

      <a href="/#contact" onClick={(e) => handleHashLink(e, '/#contact')} className={`btn-outline ${styles.getStartedDesktop}`} style={{ fontSize: '13px', whiteSpace: 'nowrap' }}>
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