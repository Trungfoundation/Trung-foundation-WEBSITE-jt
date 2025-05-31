import type { ReactNode } from "react"
import { CollapsibleSidebar } from "@/components/collapsible-sidebar"

export const metadata = {
  title: "Admin Portal - Trung Foundation",
  description: "Administrative dashboard for Trung Foundation",
}

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Collapsible Sidebar */}
      <CollapsibleSidebar />

      {/* Main content */}
      <div className="flex min-h-screen flex-col">
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
