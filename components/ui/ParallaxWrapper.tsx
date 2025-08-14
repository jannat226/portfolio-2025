'use client'
import { useEffect, useRef, ReactNode } from 'react'

interface ParallaxWrapperProps {
  children: ReactNode
  speed?: number
  className?: string
}

export default function ParallaxWrapper({ 
  children, 
  speed = 0.5, 
  className = "" 
}: ParallaxWrapperProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const rect = element.getBoundingClientRect()
      const elementTop = rect.top + scrolled
      const elementHeight = rect.height
      const windowHeight = window.innerHeight

      // Only apply parallax when element is in viewport
      if (scrolled + windowHeight > elementTop && scrolled < elementTop + elementHeight) {
        const yPos = -(scrolled - elementTop) * speed
        element.style.transform = `translate3d(0, ${yPos}px, 0)`
      }
    }

    // Use requestAnimationFrame for smooth performance
    let ticking = false
    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(handleScroll)
        ticking = true
        setTimeout(() => { ticking = false }, 16) // ~60fps
      }
    }

    window.addEventListener('scroll', requestTick, { passive: true })
    handleScroll() // Initial call

    return () => {
      window.removeEventListener('scroll', requestTick)
    }
  }, [speed])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}
