"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px]">
        <div className="flex flex-col h-full">
          <div className="flex justify-end mb-8">
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-lg font-medium hover:text-primary transition-colors px-2 py-1 rounded hover:bg-primary/5"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium hover:text-primary transition-colors px-2 py-1 rounded hover:bg-primary/5"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              href="/programs"
              className="text-lg font-medium hover:text-primary transition-colors px-2 py-1 rounded hover:bg-primary/5"
              onClick={() => setOpen(false)}
            >
              Programs
            </Link>
            <Link
              href="/get-involved"
              className="text-lg font-medium hover:text-primary transition-colors px-2 py-1 rounded hover:bg-primary/5"
              onClick={() => setOpen(false)}
            >
              Engage
            </Link>
            <Link
              href="/events"
              className="text-lg font-medium hover:text-primary transition-colors px-2 py-1 rounded hover:bg-primary/5"
              onClick={() => setOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/blog"
              className="text-lg font-medium hover:text-primary transition-colors px-2 py-1 rounded hover:bg-primary/5"
              onClick={() => setOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium hover:text-primary transition-colors px-2 py-1 rounded hover:bg-primary/5"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/admin"
              className="text-lg font-medium hover:text-primary transition-colors px-2 py-1 rounded hover:bg-primary/5"
              onClick={() => setOpen(false)}
            >
              Admin
            </Link>
          </nav>

          <div className="mt-auto pt-6">
            <Link
              href="/donate"
              className="block w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 text-center transition-colors"
              onClick={() => setOpen(false)}
            >
              Donate
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
