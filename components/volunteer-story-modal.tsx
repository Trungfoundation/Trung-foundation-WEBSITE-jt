"use client"

import type React from "react"

import { useState } from "react"
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

interface VolunteerStoryModalProps {
  name: string
  role: string
  duration: string
  image: string
  trigger: React.ReactNode
  children: React.ReactNode
}

export default function VolunteerStoryModal({
  name,
  role,
  duration,
  image,
  trigger,
  children,
}: VolunteerStoryModalProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div onClick={() => setOpen(true)}>{trigger}</div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] p-0 overflow-hidden">
          <DialogHeader className="p-6 pb-0">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl font-bold">{name}&apos;s Story</DialogTitle>
              <DialogClose className="h-8 w-8 rounded-full hover:bg-muted flex items-center justify-center">
                <X className="h-4 w-4" />
              </DialogClose>
            </div>
            <DialogDescription className="text-base">
              {role}, {duration}
            </DialogDescription>
          </DialogHeader>
          <div className="relative w-full h-[200px] mt-4">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <ScrollArea className="p-6 max-h-[400px]">
            <div className="space-y-4 text-muted-foreground">{children}</div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  )
}
