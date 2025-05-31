"use client"

import { Facebook, Twitter, Linkedin, Mail, LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"

interface SocialShareProps {
  title: string
  url: string
  description?: string
  className?: string
  vertical?: boolean
}

export function SocialShare({ title, url, description = "", className = "", vertical = false }: SocialShareProps) {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description)

  const shareLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="h-4 w-4" />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "bg-[#1877F2] hover:bg-[#0E65D9] text-white",
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-4 w-4" />,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: "bg-[#1DA1F2] hover:bg-[#0C85D0] text-white",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-4 w-4" />,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
      color: "bg-[#0A66C2] hover:bg-[#084E96] text-white",
    },
    {
      name: "Email",
      icon: <Mail className="h-4 w-4" />,
      href: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
      color: "bg-gray-600 hover:bg-gray-700 text-white",
    },
  ]

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      toast({
        title: "Link copied!",
        description: "The link has been copied to your clipboard.",
      })
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again or copy the URL manually.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className={className}>
      <div className="mb-3">
        <h3 className="text-sm font-medium text-gray-700">Share this:</h3>
      </div>
      <div className={`flex ${vertical ? "flex-col space-y-2" : "flex-row space-x-2"}`}>
        {shareLinks.map((link) => (
          <Button
            key={link.name}
            variant="outline"
            size="sm"
            className={`${link.color} ${vertical ? "justify-start" : ""}`}
            asChild
          >
            <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${link.name}`}>
              {link.icon}
              {vertical && <span className="ml-2">{link.name}</span>}
            </a>
          </Button>
        ))}
        <Button
          variant="outline"
          size="sm"
          className="bg-gray-200 hover:bg-gray-300 text-gray-700"
          onClick={copyToClipboard}
          aria-label="Copy link"
        >
          <LinkIcon className="h-4 w-4" />
          {vertical && <span className="ml-2">Copy Link</span>}
        </Button>
      </div>
    </div>
  )
}
