import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'
import styles from './Insights.module.css'

const ARTICLES = [
  {
    tag: 'R&D Update',
    title: 'Breakthrough in Silicon Expansion Control',
    body: 'Our latest Testing cycle has verified a 40% reduction in anode swelling during rapid charge cycles using our proprietary buffer matrix.',
    cta: 'Read Full Report',
    img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=700&q=80',
  },
  {
    tag: 'Industry Application',
    title: 'The Future of Fast-Charging EV Infrastructures',
    body: 'How silicon-dominant anodes are rewriting the rules for EV charging station deployment and grid load management.',
    cta: 'Read Article',
    img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=700&q=80',
  },
  {
    tag: 'Engineering Blog',
    title: 'Optimizing Solid-State Electrolyte Interfaces',
    body: 'A deep dive into our methodology for improving ion conductivity between novel silicon anodes and ceramic electrolyte layers.',
    cta: 'Read Tech Insight',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80',
  },
]

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

export default function Insights() {
  const headerRef = useScrollAnimation()
  const gridRef = useStaggerAnimation(100)

  return (
    <section className={styles.section} id="technology">
      <div className={`reveal ${styles.header}`} ref={headerRef}>
        <div className="section-eyebrow">Insights</div>
        <h2 className="section-title">Insights &amp; Technology Updates</h2>
        <p className="section-sub">
          Cutting-edge research and industry developments from our engineering teams.
        </p>
      </div>

      <div className={styles.grid} ref={gridRef}>
        {ARTICLES.map(({ tag, title, body, cta, img }) => (
          <article key={title} className={`${styles.card} reveal`}>
            <div className={styles.imgWrap}>
              <img src={img} alt={title} className={styles.img} loading="lazy" />
            </div>
            <div className={styles.body}>
              <div className={styles.tag}>{tag}</div>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.excerpt}>{body}</p>
              <a href="#" className={styles.readLink}>
                {cta}
                <span className={styles.arrow}><ArrowIcon /></span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
