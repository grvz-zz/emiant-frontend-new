import { useStaggerAnimation } from '../hooks/useScrollAnimation'
import styles from './StatsStrip.module.css'

const STATS = [
  { num: '30-40%', label: 'Longer Battery Cycle Life' },
  { num: '4×',  label: 'Longer to Thermal Runaway' },
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
