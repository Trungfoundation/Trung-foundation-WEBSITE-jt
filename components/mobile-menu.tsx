"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        {open && (
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col h-full">
              <div className="flex justify-end mb-8">
                <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="flex flex-col gap-6">
                <Link href="/" className="text-lg font-medium hover:text-primary">
                  Home
                </Link>
                <Link href="/about" className="text-lg font-medium hover:text-primary">
                  About
                </Link>
                <Link href="/programs" className="text-lg font-medium hover:text-primary">
                  Programs
                </Link>
                <Link href="/get-involved" className="text-lg font-medium hover:text-primary">
                  Engage
                </Link>
                <Link href="/volunteer" className="text-lg font-medium hover:text-primary">
                  Volunteer
                </Link>
                <Link href="/events" className="text-lg font-medium hover:text-primary">
                  Events
                </Link>
                <Link href="/blog" className="text-lg font-medium hover:text-primary">
                  Blog
                </Link>
                <Link href="/resources" className="text-lg font-medium hover:text-primary">
                  Resources
                </Link>
                <Link href="/transparency" className="text-lg font-medium hover:text-primary">
                  Transparency
                </Link>
                <Link href="/contact" className="text-lg font-medium hover:text-primary">
                  Contact
                </Link>
                <Link href="/admin" className="text-lg font-medium hover:text-primary">
                  Admin
                </Link>

                <div className="mt-auto pt-6">
                  <Link
                    href="/donate"
                    className="block w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 text-center"
                  >
                    Donate
                  </Link>
                </div>
              </nav>
            </div>
          </SheetContent>
        )}
      </Sheet>
    </div>
  )
}
