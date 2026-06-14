import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './CareersBanner.module.css'

export default function CareersBanner() {
  const ref = useScrollAnimation({ threshold: 0.2 })

  return (
    <section className={styles.section} id="careers">
      <div className={`reveal ${styles.inner}`} ref={ref}>
        <div className={styles.left}>
          <div className="section-eyebrow">Join Us</div>
          <h2 className={`section-title ${styles.heading}`}>
            Help Us Engineer<br />the Future
          </h2>
          <p className={styles.body}>
            We are actively seeking exceptional electrochemists, materials
            scientists, and mechanical engineers to join our San Jose
            headquarters. If you are passionate about scalable clean
            technology, we want to hear from you.
          </p>
        </div>
        <div className={styles.right}>
          <a href="#contact" className={`btn-primary ${styles.cta}`}>
            View Open Roles
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14}}>
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
