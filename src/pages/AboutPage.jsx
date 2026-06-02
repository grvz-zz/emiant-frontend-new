import { useEffect, useRef } from 'react'
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'
import styles from './AboutPage.module.css'

const PARTNERS = [
  { label: 'ISO' }, { label: 'IEC' }, { label: 'IEEE' },
  { label: 'NIST' }, { label: 'FISMA' }, { label: 'NATO' },
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

      // Latitude lines
      for (let lat = -80; lat <= 80; lat += 20) {
        const y = cy + R * Math.sin(lat * Math.PI / 180)
        const rx = R * Math.cos(lat * Math.PI / 180)
        ctx.beginPath()
        ctx.ellipse(cx, y, rx, rx * 0.18, 0, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(57,255,110,0.1)'
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Longitude lines
      for (let lng = 0; lng < 180; lng += 30) {
        const angle = (lng + frame * 0.15) * Math.PI / 180
        ctx.beginPath()
        ctx.ellipse(cx, cy, R * Math.abs(Math.cos(angle)), R, 0, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(57,255,110,${Math.abs(Math.cos(angle)) * 0.12})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Outer glow ring
      const grad = ctx.createRadialGradient(cx, cy, R * 0.7, cx, cy, R * 1.1)
      grad.addColorStop(0, 'transparent')
      grad.addColorStop(1, 'rgba(57,255,110,0.04)')
      ctx.beginPath()
      ctx.arc(cx, cy, R * 1.1, 0, Math.PI * 2)
      ctx.fillStyle = grad
      ctx.fill()

      // Nodes on globe
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
  const heroRef      = useScrollAnimation({ threshold: 0.05 })
  const valuesRef    = useScrollAnimation({ threshold: 0.1 })
  const nodesRef     = useStaggerAnimation(80)
  const networkRef   = useScrollAnimation({ threshold: 0.1 })
  const partnersRef  = useStaggerAnimation(60)
  const globeRef     = useScrollAnimation({ threshold: 0.1 })
  const ctaRef       = useScrollAnimation({ threshold: 0.2 })

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
            Engineering the foundations of a smarter, more resilient global infrastructure.
          </h1>
          <p className={styles.heroDesc}>
            At EMIANTS INNOVATIONS, we don't just build systems: we architect legacies.
            Our mission is to bridge the gap between high-end industrial engineering and
            premium digital craftsmanship, delivering precision instruments for the
            world's most critical sectors.
          </p>
        </div>
        <div className={`reveal-right ${styles.heroRight}`} ref={useScrollAnimation()}>
          <div className={styles.productImgWrap}>
            <img
              src="https://images.unsplash.com/photo-1535813547-99c456a41d4a?w=500&q=80"
              alt="Emiant Product"
              className={styles.productImg}
            />
            <div className={styles.imgSpecId}>SPEC_05-X12 / VISUAL</div>
            <div className={styles.imgCornerTL} />
            <div className={styles.imgCornerBR} />
          </div>
        </div>
      </section>

      {/* ── VALUES GRID ── */}
      <section className={styles.values}>
        <div className={`reveal ${styles.valuesGrid}`} ref={valuesRef}>

          {/* Integrity Standard — wide */}
          <div className={`${styles.valueCard} ${styles.valueCardWide}`}>
            <div className={styles.valueCardId}>© VISION_01</div>
            <h3 className={styles.valueCardTitle}>The Integrity Standard</h3>
            <p className={styles.valueCardDesc}>
              We operate on the principle of absolute technical clarity. Every solution
              we deploy is subjected to rigorous stress tests and compliance protocols,
              ensuring that 'innovation' is synonymous with 'reliability'.
            </p>
          </div>

          {/* Advanced Cryptography */}
          <div className={`${styles.valueCard} ${styles.valueCardDark}`}>
            <div className={styles.valueCardEyebrow}>ADVANCED CRYPTOGRAPHY</div>
            <div className={styles.cryptoIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <p className={styles.valueCardDesc}>
              Military-grade protection for critical industrial data flows.
            </p>
          </div>

          {/* Global Nodes */}
          <div className={`${styles.valueCard} ${styles.valueCardNode}`}>
            <div className={styles.nodeLabel}>NODE_DISTRIBUTION</div>
            <div className={styles.nodeHeader}>
              <h3 className={styles.nodeTitle}>Global Nodes</h3>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18,color:'var(--green)'}}>
                <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/>
                <path d="M12 2a14.5 14.5 0 0 1 0 20A14.5 14.5 0 0 1 12 2z"/>
                <path d="M2 12h20"/>
              </svg>
            </div>
            <p className={styles.nodeDesc}>
              Decentralized processing units across 14 sovereign jurisdictions.
            </p>
          </div>

          {/* Institutional Trust */}
          <div className={`${styles.valueCard} ${styles.valueCardTrust}`}>
            <div className={styles.trustHeader}>
              <div className={styles.trustIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div className={styles.trustLabel}>INSTITUTIONAL TRUST</div>
            </div>
            <p className={styles.trustDesc}>
              Trusted by 40+ Tier-1 engineering firms and governmental agencies to
              secure and optimize high-value operational assets.
            </p>
          </div>

        </div>
      </section>

      {/* ── STRATEGIC NETWORK ── */}
      <section className={styles.network}>
        <div className={`reveal ${styles.networkHeader}`} ref={networkRef}>
          <div>
            <div className={styles.networkEyebrow}>STRATEGIC NETWORK</div>
            <p className={styles.networkDesc}>
              Our ecosystem comprises the most rigorous technological institutions globally.
            </p>
          </div>
          <div className={styles.certBadges}>
            <span className={styles.certBadge}>CERTIFIED ISO-27001</span>
            <span className={styles.certBadge}>FISMA COMPLIANT</span>
          </div>
        </div>

        <div className={styles.partnerGrid} ref={partnersRef}>
          {PARTNERS.map(({ label }) => (
            <div key={label} className={`${styles.partnerCard} reveal`}>
              <div className={styles.partnerInner}>
                <span className={styles.partnerLabel}>{label}</span>
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
