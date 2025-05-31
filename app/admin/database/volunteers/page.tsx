"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Download, Search, SlidersHorizontal, Eye, CheckCircle, XCircle } from "lucide-react"

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
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export default function VolunteersPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [volunteers, setVolunteers] = useState<any[]>([])
  const [selectedVolunteer, setSelectedVolunteer] = useState<any | null>(null)
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
          .from("volunteer_applications")
          .select("*")
          .like("name", `%${searchTerm}%`)
        if (error) {
          console.error("Error fetching volunteers:", error)
        } else {
          setVolunteers(data || [])
        }
      } catch (error) {
        console.error("Unexpected error:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [searchTerm, supabase])

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase.from("volunteer_applications").update({ status: newStatus }).eq("id", id)

      if (error) {
        console.error("Error updating status:", error)
      } else {
        // Optimistically update the UI
        setVolunteers((prev) =>
          prev.map((volunteer) => (volunteer.id === id ? { ...volunteer, status: newStatus } : volunteer)),
        )
      }
    } catch (error) {
      console.error("Unexpected error:", error)
    }
  }

  const handleExport = () => {
    const csvContent = [
      ["Name", "Email", "Phone", "Skills", "Availability", "Experience", "Date", "Status"],
      ...volunteers.map((v) => [v.name, v.email, v.phone, v.skills, v.availability, v.experience, v.date, v.status]),
    ]
      .map((row) => row.join(","))
      .join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `volunteers-${new Date().toISOString().split("T")[0]}.csv`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
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
          <h2 className="text-3xl font-bold tracking-tight">Volunteer Applications</h2>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search volunteers..."
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
                <TableHead>Skills</TableHead>
                <TableHead>Availability</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {volunteers.map((volunteer) => (
                <TableRow key={volunteer.id}>
                  <TableCell className="font-medium">{volunteer.name}</TableCell>
                  <TableCell>{volunteer.email}</TableCell>
                  <TableCell>{volunteer.skills}</TableCell>
                  <TableCell>{volunteer.availability}</TableCell>
                  <TableCell>{volunteer.date}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        volunteer.status === "Approved"
                          ? "default"
                          : volunteer.status === "Pending"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {volunteer.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm" onClick={() => setSelectedVolunteer(volunteer)}>
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Volunteer Application Details</DialogTitle>
                            <DialogDescription>Review the volunteer application information</DialogDescription>
                          </DialogHeader>
                          {selectedVolunteer && (
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="text-sm font-medium">Name</label>
                                  <p className="text-sm text-muted-foreground">{selectedVolunteer.name}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium">Email</label>
                                  <p className="text-sm text-muted-foreground">{selectedVolunteer.email}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium">Phone</label>
                                  <p className="text-sm text-muted-foreground">{selectedVolunteer.phone}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium">Availability</label>
                                  <p className="text-sm text-muted-foreground">{selectedVolunteer.availability}</p>
                                </div>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Skills</label>
                                <p className="text-sm text-muted-foreground">{selectedVolunteer.skills}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Experience</label>
                                <p className="text-sm text-muted-foreground">{selectedVolunteer.experience}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Motivation</label>
                                <p className="text-sm text-muted-foreground">{selectedVolunteer.motivation}</p>
                              </div>
                              <div className="flex gap-2 pt-4">
                                <Button
                                  onClick={() => handleStatusChange(selectedVolunteer.id, "Approved")}
                                  className="flex items-center gap-2"
                                >
                                  <CheckCircle className="h-4 w-4" />
                                  Approve
                                </Button>
                                <Button
                                  variant="destructive"
                                  onClick={() => handleStatusChange(selectedVolunteer.id, "Rejected")}
                                  className="flex items-center gap-2"
                                >
                                  <XCircle className="h-4 w-4" />
                                  Reject
                                </Button>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                      {volunteer.status === "Pending" && (
                        <>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleStatusChange(volunteer.id, "Approved")}
                          >
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleStatusChange(volunteer.id, "Rejected")}
                          >
                            <XCircle className="h-4 w-4 text-red-600" />
                          </Button>
                        </>
                      )}
                    </div>
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
