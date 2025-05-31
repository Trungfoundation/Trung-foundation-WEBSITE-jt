"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

interface ImpactCounterProps {
  number: number
  label: string
}

export default function ImpactCounter({ number, label }: ImpactCounterProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      let start = 0
      const duration = 2000 // ms
      const step = Math.floor(duration / number)

      const timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start >= number) {
          clearInterval(timer)
        }
      }, step)

      return () => clearInterval(timer)
    }
  }, [inView, number])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{inView ? count.toLocaleString() : "0"}</div>
      <div className="text-lg text-muted-foreground">{label}</div>
    </div>
  )
}
