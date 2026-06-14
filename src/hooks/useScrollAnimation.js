import { useEffect, useRef } from 'react'

/**
 * useScrollAnimation
 * Attaches an IntersectionObserver to a ref and adds `.visible`
 * when the element enters the viewport.
 *
 * @param {object} options
 * @param {number} options.threshold  - 0–1, default 0.15
 * @param {string} options.rootMargin - CSS margin, default '0px 0px -60px 0px'
 * @param {boolean} options.once     - only trigger once (default true)
 */
export function useScrollAnimation({
  threshold = 0.15,
  rootMargin = '0px 0px -60px 0px',
  once = true,
} = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          if (once) observer.unobserve(el)
        } else if (!once) {
          el.classList.remove('visible')
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return ref
}

/**
 * useStaggerAnimation
 * Observes a container, then staggers `.visible` onto each direct child.
 *
 * @param {number} staggerMs - ms between each child, default 80
 */
export function useStaggerAnimation(staggerMs = 80) {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const children = Array.from(container.children)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child, i) => {
            setTimeout(() => child.classList.add('visible'), i * staggerMs)
          })
          observer.unobserve(container)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [staggerMs])

  return ref
}

/**
 * useParallax
 * Lightweight parallax effect on a ref element.
 * @param {number} speed - multiplier, e.g. 0.3 means 30% of scroll offset
 */
export function useParallax(speed = 0.3) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const center = rect.top + rect.height / 2 - window.innerHeight / 2
      el.style.transform = `translateY(${center * speed}px)`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed])

  return ref
}
