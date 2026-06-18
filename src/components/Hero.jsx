import { useEffect, useRef, useState } from 'react'
import { useParallax } from '../hooks/useScrollAnimation'
import styles from './Hero.module.css'

const ROTATING_WORDS = [
  'Battery Technology',
  'Battery Management',
  'Thermal Management',
  'Battery Analytics',
]

export default function Hero() {
  const contentRef = useRef(null)
  const bgRef = useParallax(0.25)
  const [displayText, setDisplayText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    // GSAP stagger entrance on mount
    const loadGSAP = async () => {
      const { gsap } = await import('gsap')
      const el = contentRef.current
      if (!el) return

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo(
        el.querySelector(`.${styles.tag}`),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 }
      )
      .fromTo(
        el.querySelector('h1'),
        { opacity: 0, y: 40, skewY: 2 },
        { opacity: 1, y: 0, skewY: 0, duration: 0.9 },
        '-=0.4'
      )
      .fromTo(
        el.querySelector(`.${styles.sub}`),
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.5'
      )
      .fromTo(
        el.querySelector(`.${styles.actions}`),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      )
    }
    loadGSAP()
  }, [])

  // Typewriter effect
  useEffect(() => {
    const word = ROTATING_WORDS[wordIndex]
    const typeSpeed = isDeleting ? 90 : 50
    const pauseBeforeDelete = 2000
    const pauseBeforeType = 200

    if (!isDeleting && displayText === word) {
      const t = setTimeout(() => setIsDeleting(true), pauseBeforeDelete)
      return () => clearTimeout(t)
    }
    if (isDeleting && displayText === '') {
      const t = setTimeout(() => {
        setIsDeleting(false)
        setWordIndex(i => (i + 1) % ROTATING_WORDS.length)
      }, pauseBeforeType)
      return () => clearTimeout(t)
    }

    const t = setTimeout(() => {
      setDisplayText(isDeleting
        ? word.slice(0, displayText.length - 1)
        : word.slice(0, displayText.length + 1)
      )
    }, typeSpeed)
    return () => clearTimeout(t)
  }, [displayText, isDeleting, wordIndex])

  return (
    <section className={styles.hero} id="top">
      <div className={styles.bgImg} ref={bgRef} />
      <div className={styles.bgOverlay} />
      <div className={styles.gridOverlay} />

      <div className={styles.content} ref={contentRef}>
        <div className={styles.tag}>
          <span className={styles.tagDot} />
          Advanced Battery Technology
        </div>

        <h1>
          Next-Generation<br />
          <em className={styles.rotatingWord}>
            {displayText.slice(0, -1)}
            <span style={{ whiteSpace: 'nowrap' }}>
              {displayText.slice(-1)}<span className={styles.cursor}>|</span>
            </span>
          </em>
        </h1>

        <p className={styles.sub}>
          Revolutionizing energy storage with advanced thermal and 
          battery management for EVs, BESS, Aerospace and beyond...
        </p>

        <div className={styles.actions}>
          <a href="#technology" className={styles.btnHeroPrimary}>
            Explore Technology
          </a>
          <a href="#applications" className={styles.btnHeroOutline}>
            Our Applications
          </a>
        </div>
      </div>

      <div className={styles.scrollCue}>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}