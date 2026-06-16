import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './Contact.module.css'

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18,flexShrink:0}}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18,flexShrink:0}}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.09a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
)

export default function Contact() {
  const headerRef = useScrollAnimation()
  const formRef   = useScrollAnimation({ threshold: 0.1 })
  const infoRef   = useScrollAnimation({ threshold: 0.1 })

  const [form, setForm] = useState({ firstName:'', lastName:'', email:'', company:'', inquiry:'' })
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className={styles.section} id="contact">
      <div className={`reveal ${styles.header}`} ref={headerRef}>
        <div className="section-eyebrow">Contact</div>
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-sub">
          Partner with Emiant Innovations to integrate next-generation energy storage
          into your product line.
        </p>
      </div>

      <div className={styles.grid}>
        {/* FORM */}
        <div className={`reveal-left ${styles.formWrap}`} ref={formRef}>
          {submitted ? (
            <div className={styles.successMsg}>
              <div className={styles.successIcon}>✓</div>
              <h3>Inquiry Received</h3>
              <p>We'll be in touch within 1–2 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="firstName">First Name</label>
                  <input id="firstName" type="text" placeholder="First" value={form.firstName} onChange={update('firstName')} required />
                </div>
                <div className={styles.field}>
                  <label htmlFor="lastName">Last Name</label>
                  <input id="lastName" type="text" placeholder="Last" value={form.lastName} onChange={update('lastName')} required />
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Work Email</label>
                <input id="email" type="email" placeholder="you@company.com" value={form.email} onChange={update('email')} required />
              </div>
              <div className={styles.field}>
                <label htmlFor="company">Company / Organization</label>
                <input id="company" type="text" placeholder="Acme Corp" value={form.company} onChange={update('company')} />
              </div>
              <div className={styles.field}>
                <label htmlFor="inquiry">Inquiry Details</label>
                <textarea id="inquiry" placeholder="Tell us about your project…" value={form.inquiry} onChange={update('inquiry')} rows={5} />
              </div>
              <button type="submit" className={`btn-primary ${styles.submit}`}>
                Submit Inquiry
              </button>
            </form>
          )}
        </div>

        {/* INFO */}
        <div className={`reveal-right ${styles.info}`} ref={infoRef}>
          <div className={styles.infoBlock}>
            <div className={styles.addressRow}>
              <div>
                <h3 className={styles.infoTitle}><LocationIcon /> Office 1</h3>
                <p>Emiant Innovations Pvt Ltd<br/>59-8-38, Turangi, Jagannaickpur<br/>Kakinada(Urban), East-Godavari<br/>Andhra Pradesh - 533002</p>
              </div>
              <div>
                <h3 className={styles.infoTitle}><LocationIcon /> Office 2</h3>
                <p>No. 37, 2nd Floor, Samanvay Status 2<br/>Atladara, Vadodara - 390012<br/>Gujarat<br/>Landmark: Near Jagdish Farsan</p>
              </div>
            </div>
            <a
                href="https://maps.app.goo.gl/GeZQkTWMkEMurXow9"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapEmbed}
              >
                <iframe
                  src="https://maps.google.com/maps?q=Emiant+Innovations+Pvt+Ltd+Nidadavolu&output=embed&z=16"
                  title="Emiant Innovations HQ"
                  loading="lazy"
                  style={{pointerEvents:'none'}}
                />
                <div className={styles.mapOverlay}>View on Google Maps ↗</div>
              </a>
          </div>

          <div className={styles.infoBlock}>
            <h3 className={styles.infoTitle}><PhoneIcon /> Direct Contact</h3>
            <p>
              <a href="mailto:partnerships@emiant.com">partnerships@emiant.com</a>
              <br/>
              <a href="tel:93067 31085">+91 93067 31085</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}