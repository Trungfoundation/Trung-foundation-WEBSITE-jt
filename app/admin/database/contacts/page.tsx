"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Download, Search, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/components/ui/use-toast"
import type { Database } from "@/types/supabase"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export default function ContactsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [contacts, setContacts] = useState<Database["public"]["Tables"]["contact_submissions"]["Row"][]>([])
  const router = useRouter()
  const supabase = createClientComponentClient<Database>()
  const { toast } = useToast()

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
    const fetchContacts = async () => {
      setIsLoading(true)
      try {
        const { data, error } = await supabase
          .from("contact_submissions")
          .select("*")
          .order("created_at", { ascending: false })

        if (error) {
          console.error("Error fetching contacts:", error)
          toast({
            title: "Error",
            description: "Failed to fetch contacts from the database.",
            variant: "destructive",
          })
        }

        if (data) {
          setContacts(data)
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchContacts()
  }, [supabase, toast])

  useEffect(() => {
    const searchContacts = async () => {
      setIsLoading(true)
      try {
        const { data, error } = await supabase
          .from("contact_submissions")
          .select("*")
          .ilike("name", `%${searchTerm}%`)
          .order("created_at", { ascending: false })

        if (error) {
          console.error("Error searching contacts:", error)
          toast({
            title: "Error",
            description: "Failed to search contacts in the database.",
            variant: "destructive",
          })
          setContacts([])
        }

        if (data) {
          setContacts(data)
        }
      } finally {
        setIsLoading(false)
      }
    }

    if (searchTerm) {
      searchContacts()
    } else {
      const fetchContacts = async () => {
        setIsLoading(true)
        try {
          const { data, error } = await supabase
            .from("contact_submissions")
            .select("*")
            .order("created_at", { ascending: false })

          if (error) {
            console.error("Error fetching contacts:", error)
            toast({
              title: "Error",
              description: "Failed to fetch contacts from the database.",
              variant: "destructive",
            })
          }

          if (data) {
            setContacts(data)
          }
        } finally {
          setIsLoading(false)
        }
      }

      fetchContacts()
    }
  }, [searchTerm, supabase, toast])

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
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Contact Form Submissions</h2>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search contacts..."
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
                <TableHead>Subject</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell className="font-medium">{contact.name}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{contact.subject}</TableCell>
                  <TableCell>{contact.created_at}</TableCell>
                  <TableCell>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        contact.status === "New"
                          ? "bg-blue-100 text-blue-800"
                          : contact.status === "Responded"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {contact.status}
                    </span>
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
