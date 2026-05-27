import styles from './Footer.module.css'

const LINKS = ['Privacy', 'Terms', 'Patents', 'Press']

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>Emiant Innovations</div>
      <nav className={styles.links}>
        {LINKS.map(l => <a key={l} href="#">{l}</a>)}
      </nav>
      <p className={styles.copy}>© 2026 Emiant Innovations. All rights reserved.</p>
    </footer>
  )
}
