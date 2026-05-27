import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'
import styles from './Team.module.css'

const MEMBERS = [
  { name: 'Drake',   title: 'CEO',            img: '/drake.jpg' },
  { name: 'Dr. Honey Singh', title: 'CTO',            img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
  { name: 'King', title: 'VP Engineering', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&q=80' },
  { name: 'J Star',       title: 'Head of R&D',    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80' },
  { name: 'Raftaar',    title: 'Lead Engineer',  img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&q=80' },
  { name: 'John Cena',    title: 'Ops Director',   img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
]

export default function Team() {
  const headerRef = useScrollAnimation()
  const gridRef   = useStaggerAnimation(70)

  return (
    <section className={styles.section} id="team">
      <div className={`reveal ${styles.header}`} ref={headerRef}>
        <div className="section-eyebrow">Leadership</div>
        <h2 className="section-title">Leadership &amp; Engineering Team</h2>
        <p className="section-sub">
          Pioneers in electrochemistry, materials science, and large-scale energy systems.
        </p>
      </div>

      <div className={styles.grid} ref={gridRef}>
        {MEMBERS.map(({ name, title, img }) => (
          <div key={name} className={`${styles.card} reveal`}>
            <div className={styles.avatarWrap}>
              <img src={img} alt={name} className={styles.avatar} loading="lazy" />
              <div className={styles.avatarOverlay} />
            </div>
            <div className={styles.info}>
              <div className={styles.name}>{name}</div>
              <div className={styles.title}>{title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
