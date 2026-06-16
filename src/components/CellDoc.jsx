import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'
import styles from './CellDoc.module.css'

const FEATURES = [
  {
    title: 'Real-Time Insights',
    desc: 'Live battery telemetry, alerts, and performance monitoring delivered straight to your screens for instant visibility into system health.',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    title: 'Fleet Management',
    desc: 'Track vehicles, drivers, routes, and operations across your entire fleet from a single unified dashboard.',
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
    title: 'Data Analytics',
    desc: 'Advanced analytics tools turn raw battery data into actionable insights for smarter, faster decisions.',
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
    title: 'BMS',
    desc: 'Battery Management System',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="2" width="12" height="20" rx="2"/>
        <path d="M10 2v2M14 2v2"/>
        <path d="M9 14l2-3 2 4 2-3"/>
      </svg>
    ),
  },
  {
    title: 'Vehicles',
    desc: 'EVs, E-bikes, E-rickshaws, Buses, Trucks',
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
    title: 'Chargers / Swap Stations',
    desc: 'Charging Points, Battery Swap Stations',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2l-7 11h5l-1 9 7-11h-5l1-9z"/>
      </svg>
    ),
  },
  {
    title: 'IoT Devices',
    desc: 'GPS, Sensors, Telematics & Other Electronics',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="2"/>
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
  },
]

export default function CellDoc() {
  const heroRef = useScrollAnimation({ threshold: 0.1 })
  const featRef = useStaggerAnimation(90)
  const devicesRef = useStaggerAnimation(80)

  return (
    <section className={styles.section} id="celldoc">
      <div className={`reveal ${styles.heroGrid}`} ref={heroRef}>
        <div className={styles.hero}>
          <div className={styles.heroBadge}>
            <span className={styles.heroDot} />
            SOFTWARE PLATFORM
          </div>
          <h2 className={styles.heroTitle}>
            CellDoc
          </h2>
          <p className={styles.heroDesc}>
            A software integration layer for your BMS or other electronic devices.
            CellDoc surfaces real-time battery insights directly on your screens,
            and serves as a unified platform for fleet management and data analytics.
          </p>
        </div>
        <div className={styles.heroImg}>
          <img src="/celldoc-dashboard.png" alt="CellDoc dashboard" />
        </div>
      </div>

      <div className={styles.devicesSection}>
        <div className={styles.devicesLabel}>CONNECT ANY DEVICE</div>
        <div className={styles.devicesGrid} ref={devicesRef}>
          {DEVICES.map(({ title, desc, icon }) => (
            <div key={title} className={`${styles.deviceCard} reveal`}>
              <div className={styles.deviceIcon}>{icon}</div>
              <div>
                <div className={styles.deviceTitle}>{title}</div>
                <p className={styles.deviceDesc}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.featuresSection}>
        <div className={styles.devicesLabel}>FEATURES</div>
        <div className={styles.featureGrid} ref={featRef}>
          {FEATURES.map(({ title, desc, icon }) => (
            <div key={title} className={`${styles.featCard} reveal`}>
              <div className={styles.featIcon}>{icon}</div>
              <h4 className={styles.featTitle}>{title}</h4>
              <p className={styles.featDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}