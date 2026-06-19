import { useState } from 'react'
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'
import styles from './CellDoc.module.css'

const FEATURES = [
  {
    title: 'Real-Time Battery Insights',
    desc: 'Streams live battery telemetry, alerts, and health metrics into your dashboards for faster, more confident operational decisions.',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    title: 'Unified Fleet Management',
    desc: 'Gives you a single interface to monitor vehicles, routes, drivers, and battery performance across your entire fleet.',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="6" width="15" height="12" rx="2"/>
        <path d="M16 10h3l3 3v5h-6"/>
        <circle cx="6" cy="18" r="2"/>
        <circle cx="17" cy="18" r="2"/>
      </svg>
    ),
  },
  {
    title: 'Automations and Intelligence',
    desc: 'Advanced analytics and AI-driven insights for proactive battery management. Trigger workflows, maintenance actions, and optimization routines automatically..',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/>
        <path d="M18 17V9M13 17V5M8 17v-3"/>
      </svg>
    ),
  },
]

const DEVICES = [
  {
    title: 'Battery Management Systems',
    desc: 'Integrates with BMS hardware to stream real-time battery data, diagnostics, and alerts into CellDoc.',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="2" width="12" height="20" rx="2"/>
        <path d="M10 2v2M14 2v2"/>
        <path d="M9 14l2-3 2 4 2-3"/>
      </svg>
    ),
  },
  {
    title: 'ElectricVehicles',
    desc: 'Supports EVs, e-bikes, e-rickshaws, buses, and commercial fleets through a unified telemetry layer.',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="6" width="15" height="12" rx="2"/>
        <path d="M16 10h3l3 3v5h-6"/>
        <circle cx="6" cy="18" r="2"/>
        <circle cx="17" cy="18" r="2"/>
      </svg>
    ),
  },
  {
    title: 'Charging & Swap Infrastructure',
    desc: 'Connects with chargers and battery swap stations to extend visibility across energy delivery points.',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2l-7 11h5l-1 9 7-11h-5l1-9z"/>
      </svg>
    ),
  },
  {
    title: 'Battery Energy Storage Systems (BESS)',
    desc: 'Brings monitoring and analytics to stationary storage deployments, including distributed and grid-connected assets.',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
  },
]

export default function CellDoc() {
  const [expanded, setExpanded] = useState(false)
  const heroRef    = useScrollAnimation({ threshold: 0.1 })
  const featRef    = useStaggerAnimation(90)
  const devicesRef = useStaggerAnimation(80)

  return (
    <section className={styles.section} id="celldoc">

      {/* ── HERO ── */}
      <div className={`reveal ${styles.heroGrid}`} ref={heroRef}>
        <div className={styles.hero}>
          <div className={styles.heroBadge}>
            <span className={styles.heroDot} />
            TELEMETRY: LIVE
          </div>
          <h2 className={styles.heroTitle}>CellDoc: Real-Time Battery Intelligence</h2>
          <p className={styles.heroDesc}>
            CellDoc is a software integration layer for your BMS and connected devices. 
            It surfaces real‑time battery insights on any screen and acts as a unified 
            platform for fleet management and data analytics.
          </p>
          <div className={styles.heroActions}>
            <button className="btn-primary">View Datasheet</button>
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
          <img src="/celldoc-dashboard.png" alt="CellDoc dashboard" />
        </div>
      </div>

      {/* ── EXPANDABLE CONTENT ── */}
      <div className={`${styles.expandable} ${expanded ? styles.expandableOpen : ''}`}>
        <div className={styles.expandableInner}>

          {/* Connect Any Device */}
          <div className={styles.devicesSection}>
            <div className={styles.devicesLabel}>COMPATIBLE ACROSS YOUR ECOSYSTEM </div>
            <div className={styles.devicesGrid} ref={devicesRef}>
              {DEVICES.map(({ title, desc, icon }) => (
                <div key={title} className={styles.deviceCard}>
                  <div className={styles.deviceIcon}>{icon}</div>
                  <div>
                    <div className={styles.deviceTitle}>{title}</div>
                    <p className={styles.deviceDesc}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className={styles.featuresSection}>
            <div className={styles.devicesLabel}>BUILT-IN INTELLIGENCE</div>
            <div className={styles.featureGrid} ref={featRef}>
              {FEATURES.map(({ title, desc, icon }) => (
                <div key={title} className={styles.featCard}>
                  <div className={styles.featIcon}>{icon}</div>
                  <h4 className={styles.featTitle}>{title}</h4>
                  <p className={styles.featDesc}>{desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}