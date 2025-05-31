"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface DonationProgressProps {
  goal: number
  current: number
  campaignName: string
  campaignEndDate?: string
  className?: string
}

export function DonationProgress({ goal, current, campaignName, campaignEndDate, className }: DonationProgressProps) {
  const [animatedCurrent, setAnimatedCurrent] = useState(0)
  const percentage = Math.min(Math.round((current / goal) * 100), 100)
  const [animatedPercentage, setAnimatedPercentage] = useState(0)

  useEffect(() => {
    // Animate the progress bar
    const duration = 1500
    const startTime = Date.now()

    const animateProgress = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      setAnimatedCurrent(Math.round(progress * current))
      setAnimatedPercentage(Math.round(progress * percentage))

      if (progress < 1) {
        requestAnimationFrame(animateProgress)
      }
    }

    requestAnimationFrame(animateProgress)
  }, [current, percentage])

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  // Calculate days remaining if end date is provided
  const daysRemaining = campaignEndDate ? calculateDaysRemaining(campaignEndDate) : null

  function calculateDaysRemaining(endDate: string): number {
    const end = new Date(endDate)
    const now = new Date()
    const diffTime = end.getTime() - now.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays > 0 ? diffDays : 0
  }

  return (
    <div className={cn("bg-white rounded-lg shadow-md p-6", className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900">{campaignName}</h3>
        {daysRemaining !== null && (
          <span className="bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full">
            {daysRemaining} days left
          </span>
        )}
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="font-medium text-gray-700">Raised: {formatCurrency(animatedCurrent)}</span>
          <span className="font-medium text-gray-700">Goal: {formatCurrency(goal)}</span>
        </div>
        <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${animatedPercentage}%` }}
          />
        </div>
        <div className="mt-1 text-right">
          <span className="text-sm font-medium text-emerald-600">{animatedPercentage}%</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button asChild className="flex-1 bg-emerald-600 hover:bg-emerald-700">
          <Link href="/donate">
            <Heart className="mr-2 h-4 w-4" /> Donate Now
          </Link>
        </Button>
        <Button asChild variant="outline" className="flex-1">
          <Link href="/programs">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
