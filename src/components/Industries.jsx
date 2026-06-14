import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'
import styles from './Industries.module.css'

const CARDS = [
  {
    title: 'Electric Vehicles (EV)',
    body: 'Extend range and reduce charging times to accelerate the transition to sustainable mobility.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2"/>
        <path d="M16 8h3l3 3v5h-6V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    title: 'Battery Energy Storage Systems (BESS)',
    body: 'Enhance grid stability and renewable energy integration with high-density, durable storage.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
  {
    title: 'Drones & Aerospace',
    body: 'Enable longer flight times and heavier payloads for commercial and defense applications.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L8 8H3l4 4-2 6 7-4 7 4-2-6 4-4h-5L12 2z"/>
      </svg>
    ),
  },
  {
    title: 'Industrial & Heavy Machinery',
    body: 'Power robust, high-demand equipment with reliable and safe next-generation batteries.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M8 14h8M8 10h8"/>
      </svg>
    ),
  },
]

export default function Industries() {
  const headerRef = useScrollAnimation()
  const gridRef = useStaggerAnimation(90)

  return (
    <section className={styles.section} id="applications">
      <div className={`reveal ${styles.header}`} ref={headerRef}>
        <div className="section-eyebrow">Applications</div>
        <h2 className="section-title">
          Transforming Industries with<br />Advanced Energy
        </h2>
        <p className="section-sub">
          Our scalable silicon anode technology unlocks unprecedented performance
          across diverse applications, enabling the next wave of electrification.
        </p>
      </div>

      <div className={styles.grid} ref={gridRef}>
        {CARDS.map(({ title, body, icon }) => (
          <div key={title} className={`${styles.card} reveal`}>
            <div className={styles.iconWrap}>{icon}</div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardBody}>{body}</p>
            <div className={styles.cardLine} />
          </div>
        ))}
      </div>
    </section>
  )
}
