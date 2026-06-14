import { useEffect, useRef } from 'react'
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'
import styles from './AboutPage.module.css'

const SUPPORTERS = [
  { name: 'thub',     src: '/thub.png',     label: 'AIC T-HUB FOUNDATION' },
  { name: 'arai',     src: '/arai.png',     label: 'ARAI-AMTIF' },
  { name: 'seedfund', src: '/seedfund.png', label: 'STARTUP INDIA SEED FUND' },
  { name: 'acic',     src: '/acic.png',     label: 'ACIC-BMU FOUNDATION' },
]

/* ── Animated globe ── */
function Globe() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let frame = 0

    const draw = () => {
      const W = canvas.width = canvas.offsetWidth
      const H = canvas.height = canvas.offsetHeight
      const cx = W / 2, cy = H / 2
      const R = Math.min(W, H) * 0.38

      ctx.clearRect(0, 0, W, H)

      for (let lat = -80; lat <= 80; lat += 20) {
        const y = cy + R * Math.sin(lat * Math.PI / 180)
        const rx = R * Math.cos(lat * Math.PI / 180)
        ctx.beginPath()
        ctx.ellipse(cx, y, rx, rx * 0.18, 0, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(57,255,110,0.1)'
        ctx.lineWidth = 1
        ctx.stroke()
      }

      for (let lng = 0; lng < 180; lng += 30) {
        const angle = (lng + frame * 0.15) * Math.PI / 180
        ctx.beginPath()
        ctx.ellipse(cx, cy, R * Math.abs(Math.cos(angle)), R, 0, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(57,255,110,${Math.abs(Math.cos(angle)) * 0.12})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      const grad = ctx.createRadialGradient(cx, cy, R * 0.7, cx, cy, R * 1.1)
      grad.addColorStop(0, 'transparent')
      grad.addColorStop(1, 'rgba(57,255,110,0.04)')
      ctx.beginPath()
      ctx.arc(cx, cy, R * 1.1, 0, Math.PI * 2)
      ctx.fillStyle = grad
      ctx.fill()

      const nodes = [
        [20, 40], [-10, -30], [50, 80], [30, -60], [-20, 100], [40, -100],
      ]
      nodes.forEach(([lat, lng]) => {
        const angle = (lng + frame * 0.15) * Math.PI / 180
        if (Math.cos(angle) < 0) return
        const x = cx + R * Math.cos(lat * Math.PI / 180) * Math.sin(angle)
        const y = cy - R * Math.sin(lat * Math.PI / 180)
        ctx.beginPath()
        ctx.arc(x, y, 3, 0, Math.PI * 2)
        ctx.fillStyle = 'var(--green, #39ff6e)'
        ctx.fill()
        ctx.beginPath()
        ctx.arc(x, y, 6 + Math.sin(frame * 0.05) * 2, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(57,255,110,0.3)'
        ctx.lineWidth = 1
        ctx.stroke()
      })

      frame++
      requestAnimationFrame(draw)
    }

    const raf = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(raf)
  }, [])

  return <canvas ref={canvasRef} className={styles.globeCanvas} />
}

export default function AboutPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])
  const heroRef     = useScrollAnimation({ threshold: 0.05 })
  const valuesRef   = useScrollAnimation({ threshold: 0.1 })
  const networkRef  = useScrollAnimation({ threshold: 0.1 })
  const partnersRef = useStaggerAnimation(60)
  const globeRef    = useScrollAnimation({ threshold: 0.1 })
  const ctaRef      = useScrollAnimation({ threshold: 0.2 })

  return (
    <div className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={`reveal ${styles.heroLeft}`} ref={heroRef}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeDot} />
            MISSION PROTOCOL 01
          </div>
          <h1 className={styles.heroTitle}>
            Committed to a Sustainable Energy Future.
          </h1>
          <p className={styles.heroDesc}>
            At Emiant, we're committed to a sustainable future. As a pioneering force
            in the green energy sector, we've been at the forefront of the transition
            to clean, renewable power sources. Our mission is simple yet profound —
            to create a world where energy is not only abundant but also environmentally
            responsible. We believe that by harnessing the power of nature, we can
            power the world and protect it simultaneously.
          </p>
        </div>
        <div className={`reveal-right ${styles.heroRight}`} ref={useScrollAnimation()}>
          <div className={styles.productImgWrap}>
            <div className={styles.logoDisplay}>
              <img src="/logo.png" alt="Emiant Innovations" className={styles.heroLogo} />
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES GRID ── */}
      <section className={styles.values}>
        <div className={`reveal ${styles.valuesGrid}`} ref={valuesRef}>

          <div className={`${styles.valueCard} ${styles.valueCardWide}`}>
            <div className={styles.valueCardId}>© VISION_01</div>
            <h3 className={styles.valueCardTitle}>Our Mission</h3>
            <p className={styles.valueCardDesc}>
              Emiant Innovations is engineering the next generation of battery management
              and thermal control systems. We bridge the gap between advanced materials
              science and high-frequency data analytics to deliver unparalleled battery
              performance and safety — making clean energy safer, smarter, and more reliable.
            </p>
          </div>

          <div className={`${styles.valueCard} ${styles.valueCardDark}`}>
            <div className={styles.valueCardEyebrow}>GREEN ENERGY</div>
            <div className={styles.cryptoIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <p className={styles.valueCardDesc}>
              Pioneering the transition to clean, renewable power sources for a sustainable world.
            </p>
          </div>

          <div className={`${styles.valueCard} ${styles.valueCardNode}`}>
            <div className={styles.nodeLabel}>DEEP_TECH</div>
            <div className={styles.nodeHeader}>
              <h3 className={styles.nodeTitle}>Deep-Tech Innovation</h3>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18,color:'var(--green)'}}>
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <p className={styles.nodeDesc}>
              High-frequency precision engineering for next-gen power storage and thermal management.
            </p>
          </div>

          <div className={`${styles.valueCard} ${styles.valueCardTrust}`}>
            <div className={styles.trustHeader}>
              <div className={styles.trustIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div className={styles.trustLabel}>INSTITUTIONAL BACKING</div>
            </div>
            <p className={styles.trustDesc}>
              Supported by T-Hub, ARAI-AMTIF, Startup India Seed Fund and ACIC-BMU Foundation.
            </p>
          </div>

        </div>
      </section>

      {/* ── SUPPORTED BY ── */}
      <section className={styles.network}>
        <div className={`reveal ${styles.networkHeader}`} ref={networkRef}>
          <div>
            <div className={styles.networkEyebrow}>SUPPORTED BY</div>
            <p className={styles.networkDesc}>
              Backed by leading institutions driving innovation in deep-tech and clean energy.
            </p>
          </div>
        </div>

        <div className={styles.partnerGrid} ref={partnersRef}>
          {SUPPORTERS.map(({ name, src, label }) => (
            <div key={name} className={`${styles.partnerCard} reveal`}>
              <div className={styles.partnerInner}>
                <img src={src} alt={label} className={styles.partnerLogo} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── GLOBE SECTION ── */}
      <section className={styles.globeSection}>
        <div className={`reveal ${styles.globeInner}`} ref={globeRef}>
          <Globe />
          <div className={styles.globeOverlay}>
            <h2 className={styles.globeTitle}>
              Our Operations are Global.<br />Our Standards are Absolute.
            </h2>
            <p className={styles.globeDesc}>
              Deploying solutions across 5 continents, specialized for high-stakes environments.
            </p>
            <div className={styles.globeStatus}>
              <span className={styles.globeStatusDot} />
              NETWORK LIVE · ALL NODES STABLE
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={`reveal ${styles.ctaInner}`} ref={ctaRef}>
          <h2 className={styles.ctaTitle}>Begin the Protocol</h2>
          <p className={styles.ctaDesc}>
            Ready to implement industrial-grade digital innovation? Connect with our
            engineering directors for a tactical consultation.
          </p>
          <div className={styles.ctaActions}>
            <a href="/contact" className={styles.btnSolid}>CONSULT_EXPERT</a>
            <a href="/siphotherm#specs" className={styles.btnGhost}>VIEW_TECHNICAL_SPECS</a>
          </div>
        </div>
      </section>

    </div>
  )
}