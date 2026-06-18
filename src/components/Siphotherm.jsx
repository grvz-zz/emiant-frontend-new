import { useState } from 'react'
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

const COMPARISON = [
  {
    attr: 'Thermal capacity (kJ/kg)',
    siphotherm: '250 kJ/kg',
    pcm: '300 kJ/kg',
    other: 'Very-low (conducts heat like metal)',
    highlight: false,
  },
  {
    attr: 'Thermal conductivity (W/m·K) — Heat dissipation, Anisotropic',
    siphotherm: '16–20 W/m.K (In Plane) · 7–9 W/m.K (Through Plane)',
    pcm: '0.2–0.5 W/m.K',
    other: '3–5 W/m.K',
    highlight: true,
  },
  {
    attr: 'Cost per unit (INR/kg)',
    siphotherm: '₹1300–1800/kg',
    pcm: '₹500–700/kg',
    other: '>₹1500/kg',
    highlight: false,
  },
  {
    attr: 'Operating temperature range (°C)',
    siphotherm: '40–70 °C',
    pcm: '40–70 °C',
    other: 'Up to 100 °C',
    highlight: false,
  },
  {
    attr: 'Safety / Flammability',
    siphotherm: 'Less-flammable / Flame Retardant',
    pcm: 'Flammable',
    other: 'Flammable',
    highlight: true,
  },
  {
    attr: 'Battery pack weight ratio',
    siphotherm: '10–12%',
    pcm: '15%',
    other: '>30%',
    highlight: false,
  },
  {
    attr: 'Leakage / Maintenance',
    siphotherm: 'Low',
    pcm: 'Yes / Moderate',
    other: 'High',
    highlight: true,
  },
]

export default function Siphotherm() {
  const [expanded, setExpanded] = useState(false)
  const heroRef  = useScrollAnimation({ threshold: 0.1 })
  const advRef   = useStaggerAnimation(90)
  const specsRef = useScrollAnimation({ threshold: 0.1 })

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
            <button
              className={`btn-outline ${styles.viewMoreBtn}`}
              onClick={() => setExpanded(v => !v)}
            >
              {expanded ? 'View Less' : 'View More'}
              <svg
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className={`${styles.chevron} ${expanded ? styles.chevronUp : ''}`}
              >
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.heroImg}>
          <img src="/siphotherm.png" alt="Siphotherm" />
        </div>
      </div>

      {/* ── EXPANDABLE CONTENT ── */}
      <div className={`${styles.expandable} ${expanded ? styles.expandableOpen : ''}`}>
        <div className={styles.expandableInner}>

          {/* ── KEY ADVANTAGES ── */}
          <div className={styles.subsection}>
            <div className={styles.subHeader}>
              <h3 className={styles.subTitle}>KEY ADVANTAGES</h3>
              <div className={styles.subLine} />
            </div>
            <div className={styles.advantageGrid} ref={advRef}>
              {ADVANTAGES.map(({ title, desc, icon }) => (
                <div key={title} className={styles.advCard}>
                  <div className={styles.advIcon}>{icon}</div>
                  <h4 className={styles.advTitle}>{title}</h4>
                  <p className={styles.advDesc}>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── PERFORMANCE SPECS ── */}
          <div className={styles.subsection}>
            <div className={styles.subHeader}>
              <h3 className={styles.subTitle}>PERFORMANCE SPECIFICATIONS</h3>
              <div className={styles.subLine} />
            </div>
            <div className={styles.comparisonWrap} ref={specsRef}>
              <div className={styles.comparisonTable}>
                <div className={styles.compHead}>
                  <div className={styles.compColAttr}>Attribute</div>
                  <div className={`${styles.compCol} ${styles.compColSipho}`}>Siphotherm™</div>
                  <div className={styles.compCol}>Commercial PCM</div>
                  <div className={styles.compCol}>Other Passive Cooling</div>
                </div>
                {COMPARISON.map(({ attr, siphotherm, pcm, other, highlight }) => (
                  <div key={attr} className={`${styles.compRow} ${highlight ? styles.compRowHighlight : ''}`}>
                    <div className={styles.compCellAttr}>{attr}</div>
                    <div className={`${styles.compCell} ${styles.compCellSipho}`}>{siphotherm}</div>
                    <div className={styles.compCell}>{pcm}</div>
                    <div className={styles.compCell}>{other}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}