"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Download, Search, SlidersHorizontal, Mail, Send } from "lucide-react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"

export default function NewsletterPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [subscribers, setSubscribers] = useState<any[]>([])
  const [selectedSubscribers, setSelectedSubscribers] = useState<string[]>([])
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
    const fetchSubscribers = async () => {
      setIsLoading(true)
      try {
        let query = supabase.from("newsletter_subscribers").select("*")

        if (searchTerm) {
          query = query.ilike("email", `%${searchTerm}%`)
        }

        const { data, error } = await query

        if (error) {
          console.error("Error fetching subscribers:", error)
        } else {
          setSubscribers(data || [])
        }
      } catch (error) {
        console.error("Unexpected error fetching subscribers:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchSubscribers()
  }, [searchTerm, supabase])

  const toggleSelectAll = () => {
    if (selectedSubscribers.length === subscribers.length) {
      setSelectedSubscribers([])
    } else {
      setSelectedSubscribers(subscribers.map((subscriber) => subscriber.id))
    }
  }

  const toggleSelectSubscriber = (id: string) => {
    if (selectedSubscribers.includes(id)) {
      setSelectedSubscribers(selectedSubscribers.filter((subscriberId) => subscriberId !== id))
    } else {
      setSelectedSubscribers([...selectedSubscribers, id])
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
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button size="sm" disabled={selectedSubscribers.length === 0}>
              <Send className="mr-2 h-4 w-4" />
              Send Email
            </Button>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Newsletter Subscribers</h2>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search subscribers..."
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
                <TableHead className="w-[50px]">
                  <Checkbox
                    checked={selectedSubscribers.length === subscribers.length && subscribers.length > 0}
                    onCheckedChange={toggleSelectAll}
                    aria-label="Select all"
                  />
                </TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Date Subscribed</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Source</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subscribers.map((subscriber) => (
                <TableRow key={subscriber.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedSubscribers.includes(subscriber.id)}
                      onCheckedChange={() => toggleSelectSubscriber(subscriber.id)}
                      aria-label={`Select ${subscriber.email}`}
                    />
                  </TableCell>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      {subscriber.email}
                    </div>
                  </TableCell>
                  <TableCell>{subscriber.created_at}</TableCell>
                  <TableCell>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        subscriber.status === "active"
                          ? "bg-green-100 text-green-800"
                          : subscriber.status === "unsubscribed"
                            ? "bg-gray-100 text-gray-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {subscriber.status}
                    </span>
                  </TableCell>
                  <TableCell>{subscriber.source}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
