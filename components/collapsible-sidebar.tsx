"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  FileText,
  BarChart,
  Settings,
  Database,
  ImageIcon,
  Mail,
  Calendar,
  LogOut,
  ChevronRight,
  Menu,
} from "lucide-react"

interface CollapsibleSidebarProps {
  className?: string
}

export function CollapsibleSidebar({ className }: CollapsibleSidebarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Handle hover events
  const handleMouseEnter = () => {
    setIsHovering(true)
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
  }

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovering(false)
      if (!isHovering) {
        setIsOpen(false)
      }
    }, 300) // Small delay to prevent accidental collapses
  }

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [])

  // Effect to close sidebar when not hovering
  useEffect(() => {
    if (!isHovering && isOpen) {
      const timeout = setTimeout(() => {
        setIsOpen(false)
      }, 300)
      return () => clearTimeout(timeout)
    }
  }, [isHovering, isOpen])

  // Handle click outside to close sidebar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  return (
    <>
      {/* Toggle Button - Always visible */}
      <Button
        variant="outline"
        size="icon"
        className="fixed left-4 top-4 z-40 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-4 w-4" />
        <span className="sr-only">Toggle Sidebar</span>
      </Button>

      {/* Desktop Toggle Button */}
      <Button
        variant="outline"
        size="sm"
        className="fixed left-4 top-4 z-40 hidden md:flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-4 w-4 mr-2" />
        <span>Menu</span>
      </Button>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "fixed left-0 top-0 z-30 h-full w-64 transform bg-gray-900 text-white transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
          className,
        )}
      >
        <div className="p-4 border-b border-gray-800">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
        </div>

        <ScrollArea className="h-[calc(100vh-64px)]">
          <nav className="p-4 space-y-1">
            <Link href="/admin/dashboard" passHref>
              <Button variant="ghost" className="w-full justify-start text-white">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
            </Link>

            <div className="pt-4 pb-2">
              <p className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Content</p>
            </div>

            <Link href="/admin/media" passHref>
              <Button variant="ghost" className="w-full justify-start text-white">
                <ImageIcon className="mr-2 h-4 w-4" />
                Media Library
              </Button>
            </Link>

            <Link href="/admin/pages" passHref>
              <Button variant="ghost" className="w-full justify-start text-white">
                <FileText className="mr-2 h-4 w-4" />
                Pages
              </Button>
            </Link>

            <Link href="/admin/events" passHref>
              <Button variant="ghost" className="w-full justify-start text-white">
                <Calendar className="mr-2 h-4 w-4" />
                Events
              </Button>
            </Link>

            <div className="pt-4 pb-2">
              <p className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Communication</p>
            </div>

            <Link href="/admin/newsletter" passHref>
              <Button variant="ghost" className="w-full justify-start text-white">
                <Mail className="mr-2 h-4 w-4" />
                Newsletter
              </Button>
            </Link>

            <div className="pt-4 pb-2">
              <p className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Data</p>
            </div>

            <Link href="/admin/database/donors" passHref>
              <Button variant="ghost" className="w-full justify-start text-white">
                <Database className="mr-2 h-4 w-4" />
                Database
              </Button>
            </Link>

            <Link href="/admin/analytics" passHref>
              <Button variant="ghost" className="w-full justify-start text-white">
                <BarChart className="mr-2 h-4 w-4" />
                Analytics
              </Button>
            </Link>

            <div className="pt-4 pb-2">
              <p className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Settings</p>
            </div>

            <Link href="/admin/users" passHref>
              <Button variant="ghost" className="w-full justify-start text-white">
                <Users className="mr-2 h-4 w-4" />
                Users
              </Button>
            </Link>

            <Link href="/admin/settings" passHref>
              <Button variant="ghost" className="w-full justify-start text-white">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </Link>

            <div className="pt-4 pb-2">
              <p className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Account</p>
            </div>

            <Link href="/admin/logout" passHref>
              <Button variant="ghost" className="w-full justify-start text-white">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </Link>
          </nav>
        </ScrollArea>

        {/* Collapse indicator */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 transform">
          <div className="flex h-8 w-4 items-center justify-center rounded-l-md bg-gray-800">
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>
    </>
  )
}
