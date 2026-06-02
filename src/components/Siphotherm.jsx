import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'
import styles from './Siphotherm.module.css'

const ADVANTAGES = [
  {
    title: 'Zero Power Draw',
    desc: 'Operates entirely passively via advanced capillary action and phase-change dynamics. Eliminates parasitic power loss in critical systems.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
  {
    title: 'Ultra-Thin Profile',
    desc: 'At just 0.4mm thick, Siphotherm integrates into highly constrained geometries where traditional heat sinks or liquid loops cannot fit.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 12h20"/>
        <circle cx="12" cy="12" r="4"/>
      </svg>
    ),
  },
  {
    title: 'Fail-Safe Operation',
    desc: 'No moving parts, pumps, or fluids under pressure. Inherently robust design ensures continuous operation even under extreme shock or vibration.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
]

const SPECS = [
  { param: 'Effective Thermal Conductivity', value: '> 10,000 W/m·K', highlight: false },
  { param: 'Operating Temperature Range',    value: '-40°C to +150°C',  highlight: false },
  { param: 'Standard Thickness',            value: '0.4mm – 1.2mm',    highlight: false },
  { param: 'Max Heat Flux Capability',       value: '250 W/cm²',        highlight: false },
  { param: 'Flexibility',                   value: 'Conformable (R > 10mm)', highlight: true },
]

const CONDUCTIVITY = [
  { label: 'Aluminum',    value: 205,    max: 10000 },
  { label: 'Copper',      value: 400,    max: 10000 },
  { label: 'Siphotherm™', value: 10000,  max: 10000, highlight: true },
]

export default function Siphotherm() {
  const heroRef    = useScrollAnimation({ threshold: 0.1 })
  const advRef     = useStaggerAnimation(90)
  const specsRef   = useScrollAnimation({ threshold: 0.1 })
  const chartRef   = useScrollAnimation({ threshold: 0.1 })

  return (
    <section className={styles.section} id="siphotherm">

      {/* ── HERO ── */}
      <div className={`reveal ${styles.heroGrid}`} ref={heroRef}>
        <div className={styles.hero}>
          <div className={styles.heroBadge}>
            <span className={styles.heroDot} />
            SYS.ACTIVE
          </div>
          <h2 className={styles.heroTitle}>
            Passive Thermal Control.<br />
            Zero Power.<br />
            Maximum Safety.
          </h2>
          <p className={styles.heroDesc}>
            Siphotherm™ is an advanced, ultra-thin passive thermal management material
            designed to dissipate high-density heat loads in constrained environments
            without reliance on active cooling mechanisms.
          </p>
          <div className={styles.heroActions}>
            <button className="btn-primary">View Datasheet</button>
            <button className="btn-outline">Request Sample</button>
          </div>
        </div>
        <div className={styles.heroImg}>
          <img src="/siphotherm.jpeg" alt="Siphotherm" />
        </div>
      </div>

      {/* ── KEY ADVANTAGES ── */}
      <div className={styles.subsection}>
        <div className={`reveal ${styles.subHeader}`} ref={useScrollAnimation()}>
          <h3 className={styles.subTitle}>KEY ADVANTAGES</h3>
          <div className={styles.subLine} />
        </div>
        <div className={styles.advantageGrid} ref={advRef}>
          {ADVANTAGES.map(({ title, desc, icon }) => (
            <div key={title} className={`${styles.advCard} reveal`}>
              <div className={styles.advIcon}>{icon}</div>
              <h4 className={styles.advTitle}>{title}</h4>
              <p className={styles.advDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── PERFORMANCE SPECS ── */}
      <div className={styles.subsection}>
        <div className={`reveal ${styles.subHeader}`} ref={useScrollAnimation()}>
          <h3 className={styles.subTitle}>PERFORMANCE SPECIFICATIONS</h3>
          <div className={styles.subLine} />
        </div>

        <div className={styles.specsGrid}>
          {/* Table */}
          <div className={`reveal-left ${styles.specsTable}`} ref={specsRef}>
            <div className={styles.tableHead}>
              <span>PARAMETER</span>
              <span>VALUE</span>
            </div>
            {SPECS.map(({ param, value, highlight }) => (
              <div key={param} className={`${styles.tableRow} ${highlight ? styles.tableRowHighlight : ''}`}>
                <span className={styles.tableParam}>{param}</span>
                <span className={`${styles.tableValue} ${highlight ? styles.tableValueHighlight : ''}`}>{value}</span>
              </div>
            ))}
          </div>

          {/* Conductivity chart */}
          <div className={`reveal-right ${styles.chartCard}`} ref={chartRef}>
            <div className={styles.chartHeader}>
              <span className={styles.chartTitle}>CONDUCTIVITY COMPARISON (W/m·K)</span>
              <span className={styles.chartDot} />
            </div>
            {CONDUCTIVITY.map(({ label, value, max, highlight }) => (
              <div key={label} className={styles.chartRow}>
                <div className={styles.chartRowTop}>
                  <span className={`${styles.chartLabel} ${highlight ? styles.chartLabelHighlight : ''}`}>{label}</span>
                  <span className={`${styles.chartNum} ${highlight ? styles.chartNumHighlight : ''}`}>
                    {value >= 10000 ? '>10,000' : value}
                  </span>
                </div>
                <div className={styles.chartBarBg}>
                  <div
                    className={`${styles.chartBarFill} ${highlight ? styles.chartBarHighlight : ''}`}
                    style={{ '--w': `${Math.min((value / max) * 100, 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
