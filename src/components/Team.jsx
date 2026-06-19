import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'
import styles from './Team.module.css'

const MEMBERS = [
  {
    name: 'Akshay Kumar',
    title: 'CEO',
    linkedin: 'https://in.linkedin.com/in/akshay-kumar-678515106',
    img: '/Ak.png',
  },
  {
    name: 'Naveen Chitturi',
    title: 'COO',
    linkedin: 'https://in.linkedin.com/in/naveen-chitturi-b07012119',
    img: '/Naveen.png',
  },
  {
    name: 'Chirag Jingar',
    title: 'CTO',
    linkedin: 'https://in.linkedin.com/in/chirag-jingar-65b97114',
    img: '/chirag.png',
  },
]

export default function Team() {
  const headerRef = useScrollAnimation()
  const gridRef   = useStaggerAnimation(70)

  return (
    <section className={styles.section} id="team">
      <div className={`reveal ${styles.header}`} ref={headerRef}>
        <div className="section-eyebrow">Leadership</div>
        <h2 className="section-title">Our Team</h2>
      </div>

      <div className={styles.grid} ref={gridRef}>
        {MEMBERS.map(({ name, title, linkedin, img }) => (
          <div key={name} className={`${styles.card} reveal`}>
            <div className={styles.avatarWrap}>
              <img src={img} alt={name} className={styles.avatar} loading="lazy"
                onError={e => { e.target.style.display = 'none' }}
              />
            </div>
            <div className={styles.info}>
              <div className={styles.name}>{name}</div>
              <div className={styles.title}>{title}</div>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedin}
              >
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}