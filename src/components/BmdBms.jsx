import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'
import styles from './BmdBms.module.css'

const BMD_FEATURES = [
  {
    title: 'Advanced State Estimation',
    desc: 'High-accuracy SoC and SoH estimation for better battery utilization, performance, and lifecycle management.',
    wide: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    title: 'Scalable Master-Slave Architecture',
    desc: 'Master–slave topology that scales from EV packs to containerized energy storage systems without redesign.',
    wide: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
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

const COMMS = [
  { label: 'CAN Bus 2.0B', active: true },
  { label: 'IsoSPI',       active: true },
  { label: 'Ethernet (Optional)', active: false },
]

const SYSTEM_SPECS = [
  { param: 'Voltage Range', bmd: '0 – 80V (Per Module)',       bms: 'Up to 2800V (Per-String)' },
  { param: 'Accuracy',      bmd: '±1.5 mV',                    bms: 'System Level Aggregation' },
  { param: 'Isolation',     bmd: 'Optical',                    bms: 'High Voltage Barrier' },
]

export default function BmdBms() {
  const heroRef   = useScrollAnimation({ threshold: 0.1 })
  const bmdRef    = useStaggerAnimation(80)
  const bmsRef    = useScrollAnimation({ threshold: 0.1 })
  const specsRef  = useScrollAnimation({ threshold: 0.1 })

  return (
    <section className={styles.section} id="bmdbms">

      {/* ── HERO ── */}
      <div className={`reveal ${styles.hero}`} ref={heroRef}>
        <div className={styles.heroBadge}>
          <span className={styles.heroDot} />
          SYSTEMS ONLINE
        </div>
        <h2 className={styles.heroTitle}>
          High-Voltage BMS: Precise. Scalable. Flexible.
        </h2>
        <p className={styles.heroDesc}>
          Engineered for electric mobility and energy storage applications, 
          with real-time monitoring, intelligent protection, and 
          reliable pack control in a scalable architecture.
        </p>
      </div>

      <div className={styles.divider} />

      {/* ── BMD ── */}
      <div className={styles.subsection}>
        <div className={`${styles.bmdGrid} stagger`} ref={bmdRef}>
          {BMD_FEATURES.map(({ title, desc, icon, wide }) => (
            <div key={title} className={`${styles.featCard} ${wide ? styles.featCardWide : ''} reveal`}>
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

      {/* ── BMS ── */}
      <div className={styles.subsection}>
        <div className={`reveal ${styles.bmsGrid}`} ref={bmsRef}>
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
                <span>Safely orchestrates string voltages up to 2800V DC per-string.</span>
              </li>
              <li>
                <strong>Contactor Control</strong>
                <span>Precision timing for pre-charge and main contactor sequencing.</span>
              </li>
              <li>
                <strong>Fault Handling & Pack level Decision Making</strong>
                <span>Identifies critical faults and triggers pack-level responses to protect the battery system.</span>
              </li>
            </ul>
          </div>

          {/* Slave Node */}
          <div className={styles.bmsCard}>
            <div className={styles.bmsCardLabel}>Slave Monitoring Units</div>
            <div className={styles.balanceRing}>
              <svg viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="32" fill="none" stroke="rgba(57,255,110,0.1)" strokeWidth="6"/>
                <circle cx="40" cy="40" r="32" fill="none" stroke="var(--green)" strokeWidth="6"
                  strokeDasharray="201" strokeDashoffset="20"
                  strokeLinecap="round" transform="rotate(-90 40 40)"/>
                <text x="40" y="45" textAnchor="middle" fill="var(--green)"
                  fontSize="16" fontFamily="Syne,sans-serif" fontWeight="700">98%</text>
              </svg>
            </div>
            <div className={styles.balanceLabel}>Active Cell Balancing</div>
          </div>

          {/* Communications */}
          <div className={styles.bmsCard}>
            <div className={styles.bmsCardLabel}>COMMUNICATIONS</div>
            <div className={styles.commsList}>
              {COMMS.map(({ label, active }) => (
                <div key={label} className={styles.commsRow}>
                  <span className={styles.commsLabel}>{label}</span>
                  <span className={`${styles.commsIndicator} ${active ? styles.commsActive : styles.commsIdle}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── System Specs ── */}
      <div className={`reveal ${styles.specsSection}`} ref={specsRef}>
        <h3 className={styles.specsTitle}>System Specifications</h3>
        <div className={styles.specsTable}>
          <div className={styles.specsHead}>
            <span>Parameter</span>
            <span className={styles.headBmd}>BMD</span>
            <span className={styles.headBms}>BMS</span>
          </div>
          {SYSTEM_SPECS.map(({ param, bmd, bms }) => (
            <div key={param} className={styles.specsRow}>
              <span className={styles.specsParam}>{param}</span>
              <span className={styles.specsBmd}>{bmd}</span>
              <span className={styles.specsBms}>{bms}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}