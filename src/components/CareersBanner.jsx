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
            Build the Future of Battery Intelligence.
          </h2>
          <p className={styles.body}>
            We’re building advanced battery systems across 
            BMS, thermal management, and software intelligence. 
            If you want to work on hard engineering problems with real-world 
            impact in EV and energy storage, we’d love to hear from you.
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
