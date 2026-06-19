import { useState } from 'react'
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'
import styles from './BmdBms.module.css'

const BMD_FEATURES = [
  {
    title: 'Advanced State Estimation',
    desc: 'High-accuracy SoC and SoH algorithms for better range prediction, utilization, and lifecycle planning.',
    wide: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    title: 'Scalable High-Voltage Architecture',
    desc: 'Master–slave topology that scales from EV packs to containerized energy storage systems without redesign.',
    wide: false,
    icon: (
   <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
   >
    <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M14 15H9v-5" />
    <path d="M16 3h5v5" />
    <path d="M21 3 9 15" />
  </svg>
    ),
  },
  {
    title: 'Diagnostics and Event Logging',
    desc: 'On-board fault logging and telemetry to support faster debugging, remote monitoring, and field service.',
    wide: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    title: 'System Integration Ready',
    desc: 'Standard communication interfaces and configurable I/O for seamless integration with chargers, vehicle controllers, and EMS/SCADA.',
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
  { param: 'Voltage Range', bms: '12 – 80V (Per Module)',  remarks: 'Up to 2800V (Per Rack)' },
  { param: 'Accuracy',      bms: '±1.5 mV',   remarks: 'System Level Aggregation' },
  { param: 'Isolation',     bms: 'Optical',      remarks: 'High Voltage Barrier' },
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
            BMS: ACTIVE 
          </div>
          <h2 className={styles.heroTitle}>
            High-Voltage BMS:<br/>Precise. Scalable. Flexible.
          </h2>
          <p className={styles.heroDesc}>
            Engineered for electric mobility and energy storage applications, 
            with real-time monitoring, intelligent protection, and reliable pack control in a scalable architecture.
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
                    <span>Safely orchestrates string voltages up to 2800V DC per-rack</span>
                  </li>
                  <li>
                    <strong>Contactor Control</strong>
                    <span>Precision timing for pre-charge and main contactor sequencing to prevent inrush damage.</span>
                  </li>
                  <li>
                    <strong>Fault Handling & pack-level Decision</strong>
                    <span>Identifies critical faults and triggers pack-level responses to protect the battery system.</span>
                  </li>
                </ul>
              </div>

              {/* Slave Node */}
              <div className={styles.bmsCard}>
                <div className={styles.bmsCardHeader}>
                  <span className={styles.bmsCardTitle}>Slave Nodes</span>
                </div>
                <ul className={styles.bmsList}>
                  <li>
                    <strong>Voltage & Temperature Sensing</strong>
                    <span>Real-time per-cell Voltage and temp sensing across the battery pack.</span>
                  </li>
                  <li>
                    <strong>Cell Balancing</strong>
                    <span>Maintains voltage uniformity across cells to improve pack performance, efficiency, and battery life.</span>
                  </li>
                  <li>
                    <strong>Edge Processing & Module Communication </strong>
                    <span>SoC of each cell and other operational data processed locally before transmission.</span>
                  </li>
                </ul>
              </div>

              {/* Communications */}
              <div className={styles.bmsCard}>
                <div className={styles.bmsCardHeader}>
                  <span className={styles.bmsCardTitle}>High-Speed Communication</span>
                </div>
                <ul className={styles.bmsList}>
                  <li>
                    <strong>System Bus Interfaces</strong>
                    <span>CAN Bus 2.0B and Modbus‑TCP to connect with controllers, PCS, and industrial systems.</span>
                  </li>
                  <li>
                    <strong>Module Networking</strong>
                    <span>IsoSPI-based isolated daisy-chain communication for robust high-voltage module data transfer.</span>
                  </li>
                  <li>
                    <strong>Connected Telemetry</strong>
                    <span>BLE for local commissioning, and diagnostics, Firmware Updates, GSM/Ethernet for cloud connectivity.</span>
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