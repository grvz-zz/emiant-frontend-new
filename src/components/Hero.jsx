import { useEffect, useRef } from 'react'
import { useParallax } from '../hooks/useScrollAnimation'
import styles from './Hero.module.css'

export default function Hero() {
  const contentRef = useRef(null)
  const bgRef = useParallax(0.25)

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

  return (
    <section className={styles.hero} id="top">
      <div className={styles.bgImg} ref={bgRef} />
      <div className={styles.bgOverlay} />
      <div className={styles.gridOverlay} />

      <div className={styles.content} ref={contentRef}>
        <div className={styles.tag}>
          <span className={styles.tagDot} />
          Advanced Silicon Technology
        </div>

        <h1>
          Next-Generation<br />
          <em>Battery</em> Technology
        </h1>

        <p className={styles.sub}>
          Revolutionizing energy storage with advanced Silicon-dominant anodes
          for electric vehicles, aerospace, and beyond.
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
