import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'
import styles from './Industries.module.css'

const CARDS = [
  {
    title: 'Electric Vehicles (EV)',
    body: 'Extend range and reduce charging times to accelerate the transition to sustainable mobility.',
    img: '/ev.png',
  },
  {
    title: 'Battery Energy Storage Systems (BESS)',
    body: 'Enhance grid stability and renewable energy integration with high-density, durable storage.',
    img: '/bess.png',
  },
  {
    title: 'Solar PV',
    body: 'Optimised for heat extraction in photovoltaic systems, maximising energy yield and panel longevity.',
    img: '/solar.png',
  },
  {
    title: 'Medical Devices',
    body: 'Powering critical medical applications where reliability, safety, and precision are non-negotiable.',
    img: '/medical.png',
  },
  {
    title: 'Drones \& Aerospace',
    body: 'Enable longer flight times and heavier payloads for commercial and defense applications.',
    img: '/drones.png',
  },
  {
    title: 'Industrial \& Heavy Machinery',
    body: 'Power robust, high-demand equipment with reliable and safe next-generation batteries.',
    img: '/industrial.png',
  },
]

export default function Industries() {
  const headerRef = useScrollAnimation()
  const gridRef   = useStaggerAnimation(100)

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
        {CARDS.map(({ title, body, img }) => (
          <div key={title} className={`${styles.card} reveal`}>
            <div className={styles.imgWrap}>
              <img src={img} alt={title} className={styles.cardImg} loading="lazy"
                onError={e => { e.target.style.display = 'none' }}
              />
            </div>
            <div className={styles.cardText}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{body}</p>
            </div>
            <div className={styles.cardLine} />
          </div>
        ))}
      </div>
    </section>
  )
}