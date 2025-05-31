"use client"

import type React from "react"

import { useState } from "react"
import { CreditCard, DollarSign } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Checkbox } from "@/components/ui/checkbox"

interface DonationFormProps {
  type: "one-time" | "monthly" | "annual"
}

export default function DonationForm({ type }: DonationFormProps) {
  const [amount, setAmount] = useState<string>("50")
  const [customAmount, setCustomAmount] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    program: "general",
    message: "",
    isAnonymous: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const finalAmount = amount === "custom" ? customAmount : amount

      const response = await fetch("/api/donation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          amount: finalAmount,
          paymentMethod: "credit_card",
        }),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Thank you for your donation!",
          description: `Your ${type} donation of $${finalAmount} has been processed.`,
        })
        setFormData({
          name: "",
          email: "",
          program: "general",
          message: "",
          isAnonymous: false,
        })
        setAmount("50")
        setCustomAmount("")
      } else {
        toast({
          title: "Donation failed",
          description: data.message || "There was an error processing your donation. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Donation error:", error)
      toast({
        title: "Donation failed",
        description: "There was an error processing your donation. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleAmountChange = (value: string) => {
    setAmount(value)
    if (value !== "custom") {
      setCustomAmount("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label className="text-base">Select Amount</Label>
        <RadioGroup value={amount} onValueChange={handleAmountChange} className="grid grid-cols-3 gap-4 mt-2">
          <Label
            htmlFor="amount-25"
            className={`flex cursor-pointer items-center justify-center rounded-md border-2 p-4 ${
              amount === "25" ? "border-primary bg-primary/10" : "border-muted"
            }`}
          >
            <RadioGroupItem value="25" id="amount-25" className="sr-only" />
            <span className="text-lg font-medium">$25</span>
          </Label>
          <Label
            htmlFor="amount-50"
            className={`flex cursor-pointer items-center justify-center rounded-md border-2 p-4 ${
              amount === "50" ? "border-primary bg-primary/10" : "border-muted"
            }`}
          >
            <RadioGroupItem value="50" id="amount-50" className="sr-only" />
            <span className="text-lg font-medium">$50</span>
          </Label>
          <Label
            htmlFor="amount-100"
            className={`flex cursor-pointer items-center justify-center rounded-md border-2 p-4 ${
              amount === "100" ? "border-primary bg-primary/10" : "border-muted"
            }`}
          >
            <RadioGroupItem value="100" id="amount-100" className="sr-only" />
            <span className="text-lg font-medium">$100</span>
          </Label>
          <Label
            htmlFor="amount-250"
            className={`flex cursor-pointer items-center justify-center rounded-md border-2 p-4 ${
              amount === "250" ? "border-primary bg-primary/10" : "border-muted"
            }`}
          >
            <RadioGroupItem value="250" id="amount-250" className="sr-only" />
            <span className="text-lg font-medium">$250</span>
          </Label>
          <Label
            htmlFor="amount-500"
            className={`flex cursor-pointer items-center justify-center rounded-md border-2 p-4 ${
              amount === "500" ? "border-primary bg-primary/10" : "border-muted"
            }`}
          >
            <RadioGroupItem value="500" id="amount-500" className="sr-only" />
            <span className="text-lg font-medium">$500</span>
          </Label>
          <Label
            htmlFor="amount-custom"
            className={`flex cursor-pointer items-center justify-center rounded-md border-2 p-4 ${
              amount === "custom" ? "border-primary bg-primary/10" : "border-muted"
            }`}
          >
            <RadioGroupItem value="custom" id="amount-custom" className="sr-only" />
            <span className="text-lg font-medium">Custom</span>
          </Label>
        </RadioGroup>
      </div>

      {amount === "custom" && (
        <div>
          <Label htmlFor="custom-amount">Enter Custom Amount</Label>
          <div className="relative mt-1">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <Input
              id="custom-amount"
              type="number"
              min="1"
              step="1"
              className="pl-10"
              placeholder="Enter amount"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              required={amount === "custom"}
            />
          </div>
        </div>
      )}

      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Smith"
          required={!formData.isAnonymous}
          disabled={formData.isAnonymous}
        />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          required
        />
      </div>

      <div className="flex items-center space-x-2 mb-4">
        <Checkbox
          id="isAnonymous"
          checked={formData.isAnonymous}
          onCheckedChange={(checked) =>
            setFormData((prev) => ({ ...prev, isAnonymous: checked === true, name: checked === true ? "" : prev.name }))
          }
        />
        <label
          htmlFor="isAnonymous"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Make this donation anonymous
        </label>
      </div>

      <div>
        <Label htmlFor="program">Designate Your Gift</Label>
        <select
          id="program"
          name="program"
          value={formData.program}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
        >
          <option value="general">Where Needed Most</option>
          <option value="education">Education Programs</option>
          <option value="healthcare">Healthcare Initiatives</option>
          <option value="women">Women Empowerment</option>
          <option value="community">Community Development</option>
        </select>
      </div>

      <div>
        <Label htmlFor="message">Message (Optional)</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Share why you're supporting our foundation"
          className="mt-1"
        />
      </div>

      <Card className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <CreditCard className="h-5 w-5 text-muted-foreground" />
          <h3 className="font-semibold">Payment Information</h3>
        </div>
        <div className="space-y-4">
          <div>
            <Label htmlFor="card-name">Name on Card</Label>
            <Input id="card-name" placeholder="John Smith" className="mt-1" required />
          </div>
          <div>
            <Label htmlFor="card-number">Card Number</Label>
            <Input id="card-number" placeholder="1234 5678 9012 3456" className="mt-1" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiry">Expiry Date</Label>
              <Input id="expiry" placeholder="MM/YY" className="mt-1" required />
            </div>
            <div>
              <Label htmlFor="cvc">CVC</Label>
              <Input id="cvc" placeholder="123" className="mt-1" required />
            </div>
          </div>
        </div>
      </Card>

      <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
        {isSubmitting
          ? "Processing..."
          : `${type === "one-time" ? "Donate" : "Subscribe"} ${amount === "custom" ? `$${customAmount}` : `$${amount}`} ${type !== "one-time" ? `${type}` : ""}`}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Your donation is secure and encrypted. By donating, you agree to our{" "}
        <a href="/terms" className="underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="/privacy" className="underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  )
}
