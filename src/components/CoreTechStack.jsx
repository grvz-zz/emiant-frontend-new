import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'
import styles from './CoreTechStack.module.css'

const CARDS = [
  {
    id: 'SYS-01',
    name: 'Siphotherm',
    desc: 'Passive thermal management material engineered to spread heat, reduce thermal gradients, and improve pack safety without parasitic power draw.',
    features: ['Zero Operating Power', 'Uniform Temperature Distribution', 'Fire Mitigation'],
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
    name: 'Battery Management System',
    desc: 'High-voltage BMS architecture for real-time monitoring, intelligent protection, and precise pack control across demanding EV and energy storage applications.',
    badge: 'LIVE',
    scanRate: '1000Hz',
    features: ['Hybrid Balancing', 'Modular Scalability','Advanced Safety Features'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    href: '#bmdbms',
  },
  {
    id: 'SYS-03',
    name: 'CellDoc',
    desc: 'Comprehensive cell diagnostics and health documentation platform for tracking performance and degradation over the battery lifecycle.',
    badge: null,
    features: ['Real-Time Insights', 'Real-Time SoH Tracking','Unified Fleet Management','Alerts & Diagnostics','Predictive Analytics'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="4"/>
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
      </svg>
    ),
    href: '#celldoc',
  },
]

export default function CoreTechStack() {
  const headerRef = useScrollAnimation()
  const gridRef   = useStaggerAnimation(100)

  return (
    <section className={styles.section} id="technology">
      <div className={`reveal ${styles.header}`} ref={headerRef}>
        <h2 className={styles.title}>Built as a Unified Battery Stack</h2>
        <div className={styles.titleLine} />
      </div>

      <div className={styles.grid} ref={gridRef}>
        {CARDS.map((card, i) => {
          const Tag = card.href ? 'a' : 'div'
          return (
            <Tag
              key={card.id}
              {...(card.href ? { href: card.href } : {})}
              className={`${styles.card} reveal ${i === 1 ? styles.cardActive : ''} ${!card.href ? styles.cardDisabled : ''}`}
            >
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

              {card.features && (
                <ul className={styles.features}>
                  {card.features.map(f => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              )}
            </Tag>
          )
        })}
      </div>
    </section>
  )
}