"use client"

import { useEffect, useRef, useState } from "react"

interface UseAnimateNumberOptions {
  targetNumber: number
  duration?: number // in milliseconds
}

export function useAnimateNumber({ targetNumber, duration = 2000 }: UseAnimateNumberOptions) {
  const [currentNumber, setCurrentNumber] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start animation when element is visible
            startTimeRef.current = performance.now()
            const animate = (currentTime: DOMHighResTimeStamp) => {
              if (!startTimeRef.current) startTimeRef.current = currentTime

              const progress = (currentTime - startTimeRef.current) / duration
              const animatedValue = Math.min(progress, 1) * targetNumber
              setCurrentNumber(Math.floor(animatedValue))

              if (progress < 1) {
                animationFrameRef.current = requestAnimationFrame(animate)
              } else {
                setCurrentNumber(targetNumber) // Ensure it reaches the exact target
              }
            }
            animationFrameRef.current = requestAnimationFrame(animate)
            observer.unobserve(entry.target) // Stop observing once animation starts
          }
        })
      },
      { threshold: 0.5 }, // Trigger when 50% of the element is visible
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [targetNumber, duration])

  return { currentNumber, ref }
}
