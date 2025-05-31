"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Download, Search, SlidersHorizontal, Eye } from "lucide-react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function EventRegistrationsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [registrations, setRegistrations] = useState<any[]>([])
  const [selectedRegistration, setSelectedRegistration] = useState<any | null>(null)
  const router = useRouter()
  const supabase = createClientComponentClient()

  useEffect(() => {
    // Check if user is authenticated
    const auth = localStorage.getItem("adminAuthenticated")
    if (auth !== "true") {
      router.push("/admin")
    } else {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [router])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const { data, error } = await supabase
          .from("event_registrations")
          .select("*")
          .ilike("name", `%${searchTerm}%`)
          .order("registration_date", { ascending: false })

        if (error) {
          console.error("Error fetching event registrations:", error)
        } else {
          setRegistrations(data || [])
        }
      } catch (error) {
        console.error("Unexpected error:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [searchTerm, supabase])

  const handleExport = async () => {
    try {
      const { data, error } = await supabase.from("event_registrations").select("*")

      if (error) {
        console.error("Error fetching data for export:", error)
        return
      }

      if (!data) {
        console.warn("No data to export.")
        return
      }

      const csvContent = [
        ["Name", "Email", "Phone", "Event", "Registration Date", "Attendee Type", "Special Requirements", "Status"],
        ...data.map((r: any) => [
          r.name,
          r.email,
          r.phone,
          r.event,
          r.registration_date,
          r.attendee_type,
          r.special_requirements,
          r.status,
        ]),
      ]
        .map((row) => row.join(","))
        .join("\n")

      const blob = new Blob([csvContent], { type: "text/csv" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `event-registrations-${new Date().toISOString().split("T")[0]}.csv`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Error during export:", error)
    }
  }

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <Button variant="ghost" size="sm" onClick={() => router.push("/admin/dashboard")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={handleExport}>
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Event Registrations</h2>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search registrations..."
                className="w-[200px] sm:w-[300px] pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon">
              <SlidersHorizontal className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Event</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {registrations.map((registration: any) => (
                <TableRow key={registration.id}>
                  <TableCell className="font-medium">{registration.name}</TableCell>
                  <TableCell>{registration.email}</TableCell>
                  <TableCell>{registration.event}</TableCell>
                  <TableCell>{registration.attendee_type}</TableCell>
                  <TableCell>{registration.registration_date}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        registration.status === "Confirmed"
                          ? "default"
                          : registration.status === "Pending"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {registration.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm" onClick={() => setSelectedRegistration(registration)}>
                          <Eye className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Event Registration Details</DialogTitle>
                          <DialogDescription>Review the event registration information</DialogDescription>
                        </DialogHeader>
                        {selectedRegistration && (
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="text-sm font-medium">Name</label>
                                <p className="text-sm text-muted-foreground">{selectedRegistration.name}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Email</label>
                                <p className="text-sm text-muted-foreground">{selectedRegistration.email}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Phone</label>
                                <p className="text-sm text-muted-foreground">{selectedRegistration.phone}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Attendee Type</label>
                                <p className="text-sm text-muted-foreground">{selectedRegistration.attendee_type}</p>
                              </div>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Event</label>
                              <p className="text-sm text-muted-foreground">{selectedRegistration.event}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Registration Date</label>
                              <p className="text-sm text-muted-foreground">{selectedRegistration.registration_date}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Special Requirements</label>
                              <p className="text-sm text-muted-foreground">
                                {selectedRegistration.special_requirements}
                              </p>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Status</label>
                              <Badge
                                variant={
                                  selectedRegistration.status === "Confirmed"
                                    ? "default"
                                    : selectedRegistration.status === "Pending"
                                      ? "secondary"
                                      : "destructive"
                                }
                              >
                                {selectedRegistration.status}
                              </Badge>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
