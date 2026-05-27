import { useStaggerAnimation } from '../hooks/useScrollAnimation'
import styles from './StatsStrip.module.css'

const STATS = [
  { num: '40%', label: 'Reduction in anode swelling' },
  { num: '3×',  label: 'Energy density gain' },
  { num: '500+',label: 'Charge cycles tested' },
  { num: '6',   label: 'Industry verticals' },
]

export default function StatsStrip() {
  const ref = useStaggerAnimation(100)

  return (
    <div className={styles.strip}>
      <div className={`${styles.grid} stagger`} ref={ref}>
        {STATS.map(({ num, label }) => (
          <div key={label} className={`${styles.item} reveal`}>
            <div className={styles.num}>{num}</div>
            <div className={styles.label}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
