"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

interface DownloadButtonProps {
  children: React.ReactNode
  fileType: "calendar" | "pdf" | "document"
  fileName: string
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

export default function DownloadButton({
  children,
  fileType,
  fileName,
  className = "",
  variant = "default",
  size = "default",
}: DownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)

    try {
      // For calendar downloads
      if (fileType === "calendar") {
        // Create a basic iCalendar file
        const now = new Date()
        const icsContent = [
          "BEGIN:VCALENDAR",
          "VERSION:2.0",
          "PRODID:-//Trung Foundation//Events Calendar//EN",
          "BEGIN:VEVENT",
          `SUMMARY:${fileName.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}`,
          `DTSTART:${formatDate(now)}`,
          `DTEND:${formatDate(new Date(now.getTime() + 2 * 60 * 60 * 1000))}`, // 2 hours later
          "DESCRIPTION:Event details for Trung Foundation. Visit our website for more information.",
          "STATUS:CONFIRMED",
          "SEQUENCE:0",
          "END:VEVENT",
          "END:VCALENDAR",
        ].join("\r\n")

        // Create and download the file
        downloadFile(`${fileName}.ics`, icsContent, "text/calendar")

        toast({
          title: "Calendar event downloaded",
          description: "The event has been added to your calendar file.",
        })
      }
      // For PDF downloads
      else if (fileType === "pdf") {
        // In a real application, you would fetch the PDF from the server
        // For now, we'll just show a toast message
        toast({
          title: "Download started",
          description: `Your ${fileName}.pdf file is being downloaded.`,
        })
      }
      // For other document types
      else {
        // In a real application, you would fetch the document from the server
        // For now, we'll just show a toast message
        toast({
          title: "Download started",
          description: `Your ${fileName} document is being downloaded.`,
        })
      }
    } catch (error) {
      console.error("Download error:", error)
      toast({
        title: "Download failed",
        description: "There was an error downloading the file. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsDownloading(false)
    }
  }

  // Helper function to format date for iCalendar
  const formatDate = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"
  }

  // Helper function to download a file
  const downloadFile = (filename: string, content: string, contentType: string) => {
    const blob = new Blob([content], { type: contentType })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    URL.revokeObjectURL(url)
    document.body.removeChild(a)
  }

  return (
    <Button onClick={handleDownload} disabled={isDownloading} className={className} variant={variant} size={size}>
      {isDownloading ? "Downloading..." : children}
    </Button>
  )
}
