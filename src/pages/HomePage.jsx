import Hero          from '../components/Hero'
import StatsStrip    from '../components/StatsStrip'
import Industries    from '../components/Industries'
import CoreTechStack from '../components/CoreTechStack'
import Siphotherm    from '../components/Siphotherm'
import BmdBms        from '../components/BmdBms'
import Team          from '../components/Team'
import Insights      from '../components/Insights'
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
            MISSION PROTOCOL 01
          </div>
          <h2 className={styles.aboutTitle}>
            Committed to a Sustainable Energy Future.
          </h2>
          <p className={styles.aboutDesc}>
            At Emiant, we're committed to a sustainable future. As a pioneering force
            in the green energy sector, we've been at the forefront of the transition
            to clean, renewable power sources. Our mission is simple yet profound —
            to create a world where energy is not only abundant but also environmentally
            responsible. We believe that by harnessing the power of nature, we can
            power the world and protect it simultaneously.
          </p>
        </div>
        <div className={styles.aboutRight}>
          <img src="/logo.png" alt="Emiant Innovations" className={styles.aboutLogo} />
        </div>
      </div>

      {/* ── Supported By ── */}
      <div className={styles.supportedBy}>
        <div className={styles.supportedHeader}>
          <div className={styles.supportedEyebrow}>SUPPORTED BY</div>
          <p className={styles.supportedDesc}>
            Backed by leading institutions driving innovation in deep-tech and clean energy.
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
      <Team />
      <Insights />
      <CareersBanner />
      <AboutSection />
      <Contact />
    </>
  )
}