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
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
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
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 10v4" />
    <path d="M14 10v4" />
    <path d="M22 14v-4" />
    <path d="M6 10v4" />
    <rect x="2" y="6" width="16" height="12" rx="2" />
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
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 13a3 3 0 1 1 2.83-4H14a2 2 0 0 1 0 4z" />
    <path d="M12 17v4" />
    <path d="M8 21h8" />
    <rect x="2" y="3" width="20" height="14" rx="2" />
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