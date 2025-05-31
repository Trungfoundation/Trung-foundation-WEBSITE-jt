"use client"

import type React from "react"

import { useState } from "react"
import { Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Subscription successful!",
          description: "Thank you for subscribing to our newsletter.",
        })
        setEmail("")
      } else {
        setError(data.message || "Failed to subscribe. Please try again.")
        toast({
          title: "Subscription failed",
          description: data.message || "Failed to subscribe. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      setError("An error occurred. Please try again.")
      toast({
        title: "Subscription failed",
        description: "An error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <div className="relative flex-1">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
        <Input
          type="email"
          placeholder="Your email address"
          className="pl-10 bg-primary-foreground text-primary"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <Button type="submit" variant="secondary" disabled={isSubmitting}>
        {isSubmitting ? "Subscribing..." : "Subscribe"}
      </Button>
      {error && <p className="text-sm text-destructive mt-2">{error}</p>}
    </form>
  )
}
