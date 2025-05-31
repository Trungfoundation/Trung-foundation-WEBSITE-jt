"use client"

import Image from "next/image"
import { X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

interface ImpactStoryModalProps {
  isOpen: boolean
  onClose: () => void
  story: {
    title: string
    name: string
    role: string
    image: string
    content: string[]
    quote: string
  }
}

export function ImpactStoryModal({ isOpen, onClose, story }: ImpactStoryModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl">{story.title}</DialogTitle>
          <DialogDescription className="text-base font-medium">
            {story.name}, {story.role}
          </DialogDescription>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        <ScrollArea className="max-h-[calc(90vh-120px)]">
          <div className="relative h-64 w-full mb-6">
            <Image src={story.image || "/placeholder.svg"} alt={story.name} fill className="object-cover rounded-md" />
          </div>
          <blockquote className="border-l-4 border-primary pl-4 italic text-lg mb-6">"{story.quote}"</blockquote>
          <div className="space-y-4">
            {story.content.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
