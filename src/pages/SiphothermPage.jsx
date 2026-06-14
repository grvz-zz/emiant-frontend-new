import { useEffect, useRef } from 'react'
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'
import styles from './SiphothermPage.module.css'

/* ── Feature cards ── */
const FEATURES = [
  {
    id: 'CORE-THERM-01',
    title: 'Phase-Change Dynamics',
    desc: 'Utilizing proprietary encapsulated phase-change materials (ePCM) to absorb heat spikes without mechanical fans.',
    metric: '-40°C // +85°C',
    metricLabel: 'OPERATING RANGE',
    badge: 'STABLE',
    badgeGreen: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
      </svg>
    ),
  },
  {
    id: 'REL-VI-9',
    title: 'Passive Safety',
    desc: 'No moving parts. No external power. No point of failure. Designed for 25-year lifecycle in remote node deployments.',
    metric: null,
    metricLabel: null,
    badge: null,
    badgeGreen: false,
    showBar: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    id: 'COMP-01',
    title: 'Compliance',
    desc: 'Meets ISO-27001 and industrial aerospace standards for thermal emission masking and durability.',
    metric: null,
    metricLabel: null,
    badge: null,
    pill: 'ENCRYPTION PROTOCOL: AES-256-X',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
  },
]

/* ── Tech specs ── */
const SPECS = [
  { label: 'THERMAL RESISTANCE',  value: '0.023 K/W @ 400W' },
  { label: 'HEAT SINK DENSITY',   value: '245 FINS / LINEAR METRE' },
  { label: 'MATERIAL CORE',       value: 'AL-SI-CARBIDE COMPOSITE' },
  { label: 'ACOUSTIC PROFILE',    value: '0.0 DB (TRUE PASSIVE)' },
  { label: 'DIMENSIONAL FOOTPRINT', value: '482.6MM × 44.45MM (1U)' },
  { label: 'POWER REQUIREMENT',   value: '0.0W (SELF-REGULATING)' },
  { label: 'MTBF (MEAN TIME)',    value: '> 1,200,000 HOURS' },
  { label: 'WEIGHT CLASS',        value: '4.2 KG (ULTRA-LITE SERIES)' },
]

/* ── Thermal stats ── */
const THERMAL_STATS = [
  { value: '40%',   label: 'EFFICIENCY GAIN' },
  { value: '-12°C', label: 'AMBIENT DELTA' },
  { value: '100%',  label: 'PASSIVE SAFETY' },
]

function ThermalViz() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let frame = 0

    const draw = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      const W = canvas.width, H = canvas.height

      ctx.clearRect(0, 0, W, H)

      // Grid lines
      ctx.strokeStyle = 'rgba(57,255,110,0.06)'
      ctx.lineWidth = 1
      for (let x = 0; x < W; x += 40) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke()
      }
      for (let y = 0; y < H; y += 40) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke()
      }

      // Heat wave lines
      for (let i = 0; i < 4; i++) {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(57,255,110,${0.12 + i * 0.08})`
        ctx.lineWidth = 1.5
        for (let x = 0; x <= W; x += 3) {
          const y = H / 2 + Math.sin((x / W) * Math.PI * 3 + frame * 0.02 + i) * (20 + i * 8)
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.stroke()
      }

      frame++
      requestAnimationFrame(draw)
    }

    const raf = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(raf)
  }, [])

  return <canvas ref={canvasRef} className={styles.thermalCanvas} />
}

export default function SiphothermPage() {
  const heroRef    = useScrollAnimation({ threshold: 0.05 })
  const cardsRef   = useStaggerAnimation(100)
  const specsRef   = useScrollAnimation({ threshold: 0.1 })
  const thermalRef = useScrollAnimation({ threshold: 0.1 })

  return (
    <div className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={`reveal ${styles.heroLeft}`} ref={heroRef}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeDot} />
            SIPHOTHERM SERIES-X
          </div>
          <h1 className={styles.heroTitle}>
            Passive Cooling.<br />Industrial Precision.
          </h1>
          <p className={styles.heroDesc}>
            Engineered for high-density environments where failure is not an option.
            Siphotherm leverages advanced thermodynamics to deliver silent,
            maintenance-free thermal regulation for mission-critical infrastructure.
          </p>
          <div className={styles.heroActions}>
            <a href="#specs" className={styles.btnSolid}>TECHNICAL SPECIFICATIONS</a>
            <a href="#thermal" className={styles.btnGhost}>VIRTUAL DEMO</a>
          </div>
        </div>
        <div className={`reveal-right ${styles.heroRight}`} ref={useScrollAnimation()}>
          <div className={styles.productImgWrap}>
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80"
              alt="Siphotherm Series-X"
              className={styles.productImg}
            />
            <div className={styles.imgCornerTL} />
            <div className={styles.imgCornerBR} />
            <div className={styles.imgLabel}>SPEC_05-X12 / VISUAL</div>
          </div>
        </div>
      </section>

      {/* ── FEATURE CARDS ── */}
      <section className={styles.cards}>
        <div className={styles.cardsGrid} ref={cardsRef}>
          {FEATURES.map((f) => (
            <div key={f.id} className={`${styles.card} reveal`}>
              <div className={styles.cardIcon}>{f.icon}</div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
              <div className={styles.cardFooter}>
                {f.metric && (
                  <div>
                    <div className={styles.cardMetricLabel}>{f.metricLabel}</div>
                    <div className={styles.cardMetric}>{f.metric}</div>
                  </div>
                )}
                {f.badge && (
                  <span className={`${styles.cardBadge} ${f.badgeGreen ? styles.cardBadgeGreen : ''}`}>
                    {f.badge}
                  </span>
                )}
                {f.showBar && (
                  <div className={styles.statusBar}>
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={styles.statusBarSegment} />
                    ))}
                  </div>
                )}
                {f.pill && (
                  <span className={styles.cardPill}>{f.pill}</span>
                )}
                <span className={styles.cardId}>{f.id}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TECH SPEC SHEET ── */}
      <section className={styles.specsSection} id="specs">
        <div className={`reveal ${styles.specsHeader}`} ref={specsRef}>
          <div>
            <h2 className={styles.specsTitle}>Technical Specification Sheet</h2>
            <div className={styles.specsProductId}>PRODUCT_ID: SIPHOTHERM_X12_REV_4</div>
          </div>
          <button className={styles.downloadBtn} title="Download PDF">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </button>
        </div>
        <div className={styles.specsGrid}>
          {SPECS.map(({ label, value }) => (
            <div key={label} className={`reveal ${styles.specRow}`}>
              <span className={styles.specLabel}>{label}</span>
              <span className={styles.specValue}>{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── THERMAL VISUALIZATION ── */}
      <section className={styles.thermalSection} id="thermal">
        <div className={`reveal ${styles.thermalInner}`} ref={thermalRef}>
          <ThermalViz />
          <div className={styles.thermalOverlay}>
            <div className={styles.thermalLabels}>
              <span className={styles.thermalLabelL}>CHANNEL 2</span>
              <span className={styles.thermalLabelC}>9 DAYS 11HRS 44MIN 5</span>
              <span className={styles.thermalLabelR}>VIS-GATE-9</span>
            </div>
            <div className={styles.thermalContent}>
              <h2 className={styles.thermalTitle}>
                Real-time Thermal Distribution Visualization
              </h2>
              <p className={styles.thermalDesc}>
                Deploying Siphotherm units allows for 40% higher rack density without
                increasing facility HVAC loads. Monitor heat migration across your entire
                node ecosystem through our API-first integration.
              </p>
              <div className={styles.thermalStats}>
                {THERMAL_STATS.map(({ value, label }) => (
                  <div key={label} className={styles.thermalStat}>
                    <div className={styles.thermalStatValue}>{value}</div>
                    <div className={styles.thermalStatLabel}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
