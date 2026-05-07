import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const hide = () => setVisible(false)
    const show = () => setVisible(true)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseleave', hide)
    window.addEventListener('mouseenter', show)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseleave', hide)
      window.removeEventListener('mouseenter', show)
    }
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        left: pos.x,
        top: pos.y,
        pointerEvents: 'none',
        zIndex: 999999,
        transform: 'translate(-4px, -30px) rotate(-30deg)',
        fontSize: '26px',
        userSelect: 'none',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.2s',
      }}
    >
      🖌️
    </div>
  )
}
