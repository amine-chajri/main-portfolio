import React from 'react'
import { useInView } from '../hooks/useInView'

export default function AnimateIn({ children, delay = 0, className = '' }) {
  const [ref, visible] = useInView()

  return (
    <div
      ref={ref}
      className={`animate-in${visible ? ' visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
