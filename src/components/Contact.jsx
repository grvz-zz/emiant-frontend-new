import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
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

const OFFICES = [
  {
    label: 'Headquarter',
    address: ['Emiant Innovations Pvt Ltd', '59-8-38, Turangi, Jagannaickpur', 'Kakinada(Urban), East-Godavari', 'Andhra Pradesh - 533002'],
    mapSrc: 'https://maps.google.com/maps?q=Kakinada+East+Godavari+Andhra+Pradesh+533002&output=embed&z=15',
    mapHref: 'https://maps.app.goo.gl/GeZQkTWMkEMurXow9',
  },
  {
    label: 'Branch Address',
    address: ['No. 37, 2nd Floor, Samanvay Status 2', 'Atladara, Vadodara - 390012', 'Gujarat', 'Landmark: Near Jagdish Farsan'],
    mapSrc: 'https://maps.google.com/maps?q=Atladara+Vadodara+Gujarat+390012&output=embed&z=15',
    mapHref: 'https://www.google.com/maps/search/Samanvay+Status+2+Atladara+Vadodara',
  },
]

export default function Contact() {
  const headerRef = useScrollAnimation()
  const formRef   = useScrollAnimation({ threshold: 0.1 })
  const infoRef   = useScrollAnimation({ threshold: 0.1 })
  const formEl    = useRef(null)

  const [activeOffice, setActiveOffice] = useState(0)
  const [form, setForm] = useState({ first_name:'', last_name:'', reply_to:'', phone:'', company:'', message:'' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(null)

  const update = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    setError(null)

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formEl.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setSubmitted(true)
      setSending(false)
    })
    .catch(() => {
      setError('Something went wrong. Please try again or email us at emiant.queries@gmail.com')
      setSending(false)
    })
  }

  return (
    <section className={styles.section} id="contact">
      <div className={`reveal ${styles.header}`} ref={headerRef}>
        <div className="section-eyebrow">Contact</div>
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-sub">
          Talk to our team about integrating advanced battery management,
          passive thermal control, and battery intelligence software into your platform.
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
              <button
                className="btn-outline"
                style={{ marginTop: '20px' }}
                onClick={() => {
                  setSubmitted(false)
                  setForm({ first_name:'', last_name:'', reply_to:'', phone:'', company:'', message:'' })
                  setError(null)
                }}
              >
                Submit Another Query
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form} ref={formEl}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="first_name">First Name</label>
                  <input id="first_name" name="first_name" type="text" placeholder="First" value={form.first_name} onChange={update('first_name')} required />
                </div>
                <div className={styles.field}>
                  <label htmlFor="last_name">Last Name</label>
                  <input id="last_name" name="last_name" type="text" placeholder="Last" value={form.last_name} onChange={update('last_name')} required />
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="reply_to">Work Email</label>
                <input id="reply_to" name="reply_to" type="email" placeholder="you@company.com" value={form.reply_to} onChange={update('reply_to')} required />
              </div>
              <div className={styles.field}>
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={update('phone')} />
              </div>
              <div className={styles.field}>
                <label htmlFor="company">Company / Organization</label>
                <input id="company" name="company" type="text" placeholder="Acme Corp" value={form.company} onChange={update('company')} />
              </div>
              <div className={styles.field}>
                <label htmlFor="message">Inquiry Details</label>
                <textarea id="message" name="message" placeholder="Tell us about your project…" value={form.message} onChange={update('message')} rows={5} required />
              </div>
              {error && <p className={styles.errorMsg}>{error}</p>}
              <button type="submit" className={`btn-primary ${styles.submit}`} disabled={sending}>
                {sending ? 'Sending…' : 'Submit Inquiry'}
              </button>
            </form>
          )}
        </div>

        {/* INFO */}
        <div className={`reveal-right ${styles.info}`} ref={infoRef}>
          <div className={styles.infoBlock}>
            <div className={styles.officeTabs}>
              {OFFICES.map((o, i) => (
                <button
                  key={o.label}
                  className={`${styles.officeTab} ${activeOffice === i ? styles.officeTabActive : ''}`}
                  onClick={() => setActiveOffice(i)}
                >
                  <LocationIcon /> {o.label}
                </button>
              ))}
            </div>
            <p className={styles.officeAddress}>
              {OFFICES[activeOffice].address.map((line, i) => (
                <span key={i}>{line}<br/></span>
              ))}
            </p>
            <a
              href={OFFICES[activeOffice].mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapEmbed}
            >
              <iframe
                key={activeOffice}
                src={OFFICES[activeOffice].mapSrc}
                title={OFFICES[activeOffice].label}
                loading="lazy"
                style={{pointerEvents:'none'}}
              />
              <div className={styles.mapOverlay}>View on Google Maps ↗</div>
            </a>
          </div>

          <div className={styles.infoBlock}>
            <h3 className={styles.infoTitle}><PhoneIcon /> Direct Contact</h3>
            <p>
              <a href="mailto:emiant.queries@gmail.com">emiant.queries@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}