import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    let rx = 0, ry = 0, mx = 0, my = 0
    let raf

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      dot.style.left = mx - 5 + 'px'
      dot.style.top  = my - 5 + 'px'
    }
    const animate = () => {
      rx += (mx - rx - 16) * 0.15
      ry += (my - ry - 16) * 0.15
      ring.style.left = rx + 'px'
      ring.style.top  = ry + 'px'
      raf = requestAnimationFrame(animate)
    }

    const grow = () => {
      dot.style.transform  = 'scale(2)'
      ring.style.width  = '48px'
      ring.style.height = '48px'
    }
    const shrink = () => {
      dot.style.transform  = 'scale(1)'
      ring.style.width  = '32px'
      ring.style.height = '32px'
    }

    document.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(animate)

    const addListeners = () => {
      document.querySelectorAll('a, button, .btn').forEach(el => {
        el.addEventListener('mouseenter', grow)
        el.addEventListener('mouseleave', shrink)
      })
    }
    addListeners()
    const mo = new MutationObserver(addListeners)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      mo.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  style={styles.dot} />
      <div ref={ringRef} style={styles.ring} />
    </>
  )
}

const styles = {
  dot: {
    position: 'fixed', width: 10, height: 10,
    background: 'var(--accent2)', borderRadius: '50%',
    pointerEvents: 'none', zIndex: 9999,
    transition: 'transform 0.1s', mixBlendMode: 'screen',
  },
  ring: {
    position: 'fixed', width: 32, height: 32,
    border: '1.5px solid var(--accent1)', borderRadius: '50%',
    pointerEvents: 'none', zIndex: 9998,
    transition: 'width 0.2s, height 0.2s',
  },
}
