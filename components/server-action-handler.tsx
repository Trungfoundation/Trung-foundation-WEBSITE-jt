"use client"

import type React from "react"

import { useState } from "react"
import { toast } from "@/components/ui/use-toast"

interface ServerActionHandlerProps {
  action: (formData: FormData) => Promise<{ success: boolean; message: string }>
  children: React.ReactNode
  successMessage?: string
  errorMessage?: string
  resetFormOnSuccess?: boolean
  onSuccess?: () => void
  onError?: () => void
}

export default function ServerActionHandler({
  action,
  children,
  successMessage = "Form submitted successfully!",
  errorMessage = "There was an error submitting the form. Please try again.",
  resetFormOnSuccess = true,
  onSuccess,
  onError,
}: ServerActionHandlerProps) {
  const [isPending, setIsPending] = useState(false)

  const handleAction = async (formData: FormData) => {
    setIsPending(true)
    try {
      const result = await action(formData)

      if (result.success) {
        toast({
          title: "Success!",
          description: result.message || successMessage,
        })

        if (resetFormOnSuccess) {
          const form = document.querySelector("form") as HTMLFormElement
          if (form) form.reset()
        }

        if (onSuccess) onSuccess()
      } else {
        toast({
          title: "Error",
          description: result.message || errorMessage,
          variant: "destructive",
        })

        if (onError) onError()
      }
    } catch (error) {
      console.error("Form submission error:", error)
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      })

      if (onError) onError()
    } finally {
      setIsPending(false)
    }
  }

  return (
    <div className="server-action-handler">
      {children}
      {isPending && (
        <div className="fixed inset-0 bg-background/80 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary"></div>
        </div>
      )}
    </div>
  )
}
