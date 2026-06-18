import { useState } from 'react'
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'
import styles from './BmdBms.module.css'

const BMD_FEATURES = [
  {
    title: 'Advanced State Estimation',
    desc: 'High-precision SOC (State of Charge) and SOH (State of Health) algorithms ensuring optimal cell utilization and lifecycle extension.',
    wide: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    title: 'Cloud Integration',
    desc: 'Real-time telemetry streaming to secure cloud infrastructure for predictive maintenance and fleet analytics.',
    wide: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    ),
  },
  {
    title: 'Edge Processing',
    desc: 'Local diagnostic capabilities with sub-millisecond response times for critical safety events.',
    wide: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    title: 'Multi-Sensor Array',
    desc: 'Simultaneous thermal, voltage, and current monitoring across hundreds of distributed nodes.',
    wide: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/>
        <path d="M12 7v4M12 11l-5.5 6.5M12 11l5.5 6.5"/>
      </svg>
    ),
  },
]

const SYSTEM_SPECS = [
  { param: 'Voltage Range', bms: '0 – 80V (Per Module)',  remarks: 'Up to 1500V (System)' },
  { param: 'Accuracy',      bms: '±1 mV',                 remarks: 'System Level Aggregation' },
  { param: 'Isolation',     bms: 'Galvanic (IsoSPI)',      remarks: 'High Voltage Barrier' },
]

export default function BmdBms() {
  const [expanded, setExpanded] = useState(false)
  const heroRef  = useScrollAnimation({ threshold: 0.1 })

  return (
    <section className={styles.section} id="bmdbms">

      {/* ── HERO ── */}
      <div className={`reveal ${styles.heroGrid}`} ref={heroRef}>
        <div className={styles.heroImg}>
          <img src="/bms.png" alt="BMS Board" onError={e => { e.target.style.display = 'none' }} />
        </div>
        <div className={styles.hero}>
          <div className={styles.heroBadge}>
            <span className={styles.heroDot} />
            SYSTEMS ONLINE
          </div>
          <h2 className={styles.heroTitle}>
            BMS: Advanced Battery Management System
          </h2>
          <p className={styles.heroDesc}>
            Next-generation Intelligent Battery Monitoring (BMD) and Advanced Battery
            Control (BMS) for high-frequency applications.
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
      </div>

      {/* ── EXPANDABLE CONTENT ── */}
      <div className={`${styles.expandable} ${expanded ? styles.expandableOpen : ''}`}>
        <div className={styles.expandableInner}>

          <div className={styles.divider} />

          {/* ── BMD FEATURES ── */}
          <div className={styles.subsection}>
            <div className={styles.bmdGrid}>
              {BMD_FEATURES.map(({ title, desc, icon, wide }) => (
                <div key={title} className={`${styles.featCard} ${wide ? styles.featCardWide : ''}`}>
                  <div className={styles.featIcon}>{icon}</div>
                  <h4 className={styles.featTitle}>{title}</h4>
                  <p className={styles.featDesc}>{desc}</p>
                  {wide && (
                    <div className={styles.chartMini}>
                      {[30, 45, 35, 55, 42, 60, 50, 68, 58, 72, 65, 80].map((h, i) => (
                        <div key={i} className={styles.chartBar} style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.divider} />

          {/* ── BMS TILES ── */}
          <div className={styles.subsection}>
            <div className={styles.bmsGrid}>
              {/* Master Controller */}
              <div className={`${styles.bmsCard} ${styles.bmsCardActive}`}>
                <div className={styles.bmsCardHeader}>
                  <span className={styles.bmsCardTitle}>Master Controller</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18,color:'var(--green)'}}>
                    <rect x="2" y="2" width="20" height="20" rx="4"/>
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
                  </svg>
                </div>
                <ul className={styles.bmsList}>
                  <li>
                    <strong>High-Voltage Handling</strong>
                    <span>Safely orchestrates string voltages up to 1500V DC across multi-module packs.</span>
                  </li>
                  <li>
                    <strong>Contactor Control</strong>
                    <span>Precision timing for pre-charge and main contactor sequencing to prevent inrush damage.</span>
                  </li>
                  <li>
                    <strong>Thermal Oversight</strong>
                    <span>Continuous pack-level temperature monitoring with automatic load derating on threshold breach.</span>
                  </li>
                </ul>
              </div>

              {/* Slave Node */}
              <div className={styles.bmsCard}>
                <div className={styles.bmsCardHeader}>
                  <span className={styles.bmsCardTitle}>Slave Node Alpha</span>
                </div>
                <ul className={styles.bmsList}>
                  <li>
                    <strong>Active Cell Balancing</strong>
                    <span>Maintains cell voltage uniformity across all nodes for extended pack life.</span>
                  </li>
                  <li>
                    <strong>Distributed Monitoring</strong>
                    <span>Real-time per-cell voltage and temperature sensing across the entire string.</span>
                  </li>
                  <li>
                    <strong>Fault Isolation</strong>
                    <span>Instantly isolates faulty cells to prevent cascade failure and ensure safety.</span>
                  </li>
                </ul>
              </div>

              {/* Communications */}
              <div className={styles.bmsCard}>
                <div className={styles.bmsCardHeader}>
                  <span className={styles.bmsCardTitle}>Communications</span>
                </div>
                <ul className={styles.bmsList}>
                  <li>
                    <strong>CAN Bus 2.0B</strong>
                    <span>Industry-standard vehicular protocol for robust, real-time data exchange with ECUs.</span>
                  </li>
                  <li>
                    <strong>IsoSPI</strong>
                    <span>Galvanically isolated daisy-chain interface for safe inter-module communication up to 1500V.</span>
                  </li>
                  <li>
                    <strong>Ethernet (Optional)</strong>
                    <span>High-bandwidth connectivity for cloud telemetry, OTA firmware updates, and fleet diagnostics.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ── System Specs ── */}
          <div className={styles.specsSection}>
            <h3 className={styles.specsTitle}>System Specifications</h3>
            <div className={styles.specsTable}>
              <div className={styles.specsHead}>
                <span>Parameter</span>
                <span className={styles.headBmd}>BMS</span>
                <span className={styles.headBms}>Remarks</span>
              </div>
              {SYSTEM_SPECS.map(({ param, bms, remarks }) => (
                <div key={param} className={styles.specsRow}>
                  <span className={styles.specsParam}>{param}</span>
                  <span className={styles.specsBmd}>{bms}</span>
                  <span className={styles.specsBms}>{remarks}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}