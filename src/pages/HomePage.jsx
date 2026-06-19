import Hero          from '../components/Hero'
import StatsStrip    from '../components/StatsStrip'
import Industries    from '../components/Industries'
import CoreTechStack from '../components/CoreTechStack'
import Siphotherm    from '../components/Siphotherm'
import BmdBms        from '../components/BmdBms'
import CellDoc       from '../components/CellDoc'
import Team          from '../components/Team'
import CareersBanner from '../components/CareersBanner'
import Contact       from '../components/Contact'
import styles        from './HomePage.module.css'

const SUPPORTERS = [
  { name: 'thub',     src: '/thub.png',     label: 'AIC T-HUB FOUNDATION' },
  { name: 'arai',     src: '/arai.png',     label: 'ARAI-AMTIF' },
  { name: 'seedfund', src: '/seedfund.png', label: 'STARTUP INDIA SEED FUND' },
  { name: 'acic',     src: '/acic.png',     label: 'ACIC-BMU FOUNDATION' },
]

function AboutSection() {
  return (
    <section id="about" className={styles.about}>

      {/* ── Hero block ── */}
      <div className={styles.aboutHero}>
        <div className={styles.aboutLeft}>
          <div className={styles.aboutBadge}>
            <span className={styles.aboutDot} />
            Our Mission
          </div>
          <h2 className={styles.aboutTitle}>
            Maximizing Battery Safety and Performance
          </h2>
          <p className={styles.aboutDesc}>
            At Emiant, we build technologies that make batteries safer, smarter, and more reliable. 
            From high-voltage BMS and advanced passive thermal management to battery intelligence software, 
            our work is focused on improving safety, performance, and lifecycle visibility across EV, BESS, Aerospace and Beyond...
          </p>
        </div>
        <div className={styles.aboutRight}>
          <img src="/logo.png" alt="Emiant Innovations" className={styles.aboutLogo} />
        </div>
      </div>

      {/* ── Supported By ── */}
      <div className={styles.supportedBy}>
        <div className={styles.supportedHeader}>
          <div className={styles.supportedEyebrow}>BACKED BY LEADING INSTITUTIONS</div>
          <p className={styles.supportedDesc}>
            Trusted by innovation partners accelerating the future of battery technology.
          </p>
        </div>
        <div className={styles.supportedGrid}>
          {SUPPORTERS.map(({ name, src, label }) => (
            <div key={name} className={styles.supportedCard}>
              <img src={src} alt={label} className={styles.supportedLogo} />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Industries />
      <CoreTechStack />
      <Siphotherm />
      <BmdBms />
      <CellDoc />
      <Team />
      <CareersBanner />
      <AboutSection />
      <Contact />
    </>
  )
}