import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

type Pos = { left: number; top: number; width: number; maxHeight: number }

// On-brand custom dropdown. Renders its list in a portal on <body> so it is never
// clipped by an ancestor's overflow, and flips upward when there is no room below.
// Carries its value in a hidden input so a normal <form> reads it via FormData.
export default function Select({
  name,
  options,
  placeholder = 'Select',
}: {
  name: string
  options: string[]
  placeholder?: string
}) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const [pos, setPos] = useState<Pos | null>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)

  function place() {
    const b = btnRef.current
    if (!b) return
    const r = b.getBoundingClientRect()
    const wanted = Math.min(248, options.length * 42 + 12)
    const below = window.innerHeight - r.bottom - 12
    const above = r.top - 12
    const flipUp = below < wanted && above > below
    const maxHeight = Math.min(wanted, flipUp ? above : below)
    setPos({
      left: r.left,
      width: r.width,
      top: flipUp ? r.top - maxHeight - 6 : r.bottom + 6,
      maxHeight,
    })
  }

  useEffect(() => {
    if (!open) return
    place()
    function onDoc(e: MouseEvent) {
      const t = e.target as Node
      if (wrapRef.current?.contains(t) || listRef.current?.contains(t)) return
      setOpen(false)
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    function onMove() {
      setOpen(false) // scroll/resize: close rather than drift out of place
    }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    window.addEventListener('scroll', onMove, true)
    window.addEventListener('resize', onMove)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('scroll', onMove, true)
      window.removeEventListener('resize', onMove)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  return (
    <div className={`zsel${open ? ' open' : ''}`} ref={wrapRef}>
      <input type="hidden" name={name} value={value} readOnly />
      <button
        type="button"
        ref={btnRef}
        className="zsel-btn"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={value ? undefined : 'zsel-ph'}>{value || placeholder}</span>
        <span className="zsel-chev" aria-hidden="true">
          ▾
        </span>
      </button>
      {open &&
        pos &&
        createPortal(
          <ul
            className="zsel-list"
            role="listbox"
            ref={listRef}
            style={{
              position: 'fixed',
              left: pos.left,
              top: pos.top,
              width: pos.width,
              maxHeight: pos.maxHeight,
            }}
          >
            {options.map((o) => (
              <li
                key={o}
                role="option"
                aria-selected={value === o}
                className={`zsel-opt${value === o ? ' on' : ''}`}
                onClick={() => {
                  setValue(o)
                  setOpen(false)
                }}
              >
                {o}
              </li>
            ))}
          </ul>,
          document.body,
        )}
    </div>
  )
}
