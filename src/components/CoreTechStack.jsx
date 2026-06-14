import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'
import styles from './CoreTechStack.module.css'

const CARDS = [
  {
    id: 'SYS-01',
    name: 'Siphotherm',
    desc: 'Passive thermal management utilizing advanced phase-change materials for zero-energy cooling.',
    features: ['Zero Parasitic Load', 'Uniform Temperature Dist.'],
    badge: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a5 5 0 0 1 5 5c0 5-5 13-5 13S7 12 7 7a5 5 0 0 1 5-5z"/>
        <path d="M12 2v4M8.5 4.5l2.8 2.8M15.5 4.5l-2.8 2.8"/>
      </svg>
    ),
    href: '#siphotherm',
  },
  {
    id: 'SYS-02',
    name: 'BMD (Monitoring)',
    desc: 'High-fidelity Battery Monitoring Diagnostics. Real-time telemetry at the cellular level.',
    badge: 'LIVE',
    scanRate: '1000Hz',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    href: '#bmdbms',
  },
  {
    id: 'SYS-03',
    name: 'BMS (Control)',
    desc: 'Intelligent Battery Management System. Predictive algorithms for optimized lifecycle and safety.',
    features: ['Active Balancing', 'AI Predictive Maintenance'],
    badge: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="4"/>
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
      </svg>
    ),
    href: '#bmdbms',
  },
]

export default function CoreTechStack() {
  const headerRef = useScrollAnimation()
  const gridRef   = useStaggerAnimation(100)

  return (
    <section className={styles.section} id="products">
      <div className={`reveal ${styles.header}`} ref={headerRef}>
        <h2 className={styles.title}>Core Technology Stack</h2>
        <div className={styles.titleLine} />
      </div>

      <div className={styles.grid} ref={gridRef}>
        {CARDS.map((card, i) => (
          <a key={card.id} href={card.href} className={`${styles.card} reveal ${i === 1 ? styles.cardActive : ''}`}>
            <div className={styles.cardTop}>
              <div className={styles.iconWrap}>{card.icon}</div>
              {card.badge ? (
                <span className={styles.liveBadge}>
                  <span className={styles.liveDot} />
                  {card.badge}
                </span>
              ) : (
                <span className={styles.sysId}>{card.id}</span>
              )}
            </div>

            <h3 className={styles.cardName}>{card.name}</h3>
            <p className={styles.cardDesc}>{card.desc}</p>

            {card.scanRate && (
              <div className={styles.scanBlock}>
                <div className={styles.scanDivider} />
                <div className={styles.scanRow}>
                  <span className={styles.scanLabel}>Scan Rate</span>
                  <span className={styles.scanValue}>{card.scanRate}</span>
                </div>
                <div className={styles.scanBar}>
                  <div className={styles.scanFill} />
                </div>
              </div>
            )}

            {card.features && (
              <ul className={styles.features}>
                {card.features.map(f => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            )}
          </a>
        ))}
      </div>
    </section>
  )
}
