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
  const animationId = useRef<number | null>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return
    let ticking = false

    const updateParallax = () => {
      const scrolled = window.pageYOffset
      const rect = element.getBoundingClientRect()
      const elementTop = rect.top + scrolled
      const elementHeight = rect.height
      const windowHeight = window.innerHeight

      // Only apply parallax when element is in viewport with buffer
      const buffer = windowHeight * 0.1 // 10% buffer
      if (scrolled + windowHeight + buffer > elementTop && 
          scrolled - buffer < elementTop + elementHeight) {
        const yPos = -(scrolled - elementTop) * speed
        // Use transform3d for hardware acceleration and will-change
        element.style.transform = `translate3d(0, ${yPos}px, 0)`
        element.style.willChange = 'transform'
      } else {
        element.style.willChange = 'auto' // Remove will-change when not needed
      }
      
      ticking = false
    }

    const handleScroll = () => {
      
      if (!ticking) {
        animationId.current = requestAnimationFrame(updateParallax)
        ticking = true
      }
    }

    // Throttle scroll events for better performance
    let scrollTimeout: NodeJS.Timeout
    const throttledScroll = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(handleScroll, 8) // ~120fps max
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    updateParallax() // Initial call

    return () => {
      window.removeEventListener('scroll', throttledScroll)
      if (animationId.current) {
        cancelAnimationFrame(animationId.current)
      }
      clearTimeout(scrollTimeout)
    }
  }, [speed])

  return (
    <div 
      ref={elementRef} 
      className={`pt-16 ${className}`}
      style={{ 
        willChange: 'transform',
        backfaceVisibility: 'hidden', // Prevent flickering
        perspective: '1000px' // Enable 3D acceleration
      }}
    >
      {children}
    </div>
  )
}
