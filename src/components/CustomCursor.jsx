import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 99999,
        transform: 'translate(-4px, -28px) rotate(-35deg)',
        fontSize: '28px',
        userSelect: 'none',
        transition: 'left 0.04s linear, top 0.04s linear',
      }}
    >
      🖌️
    </div>
  )
}
