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

export default function DonorsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [donors, setDonors] = useState<Database["public"]["Tables"]["donors"]["Row"][]>([])
  const router = useRouter()
  const { toast } = useToast()
  const supabase = createClientComponentClient<Database>()

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
        const { data: donorsData, error: donorsError } = await supabase.from("donors").select("*")

        if (donorsError) {
          console.error("Error fetching donors:", donorsError)
          toast({
            title: "Error",
            description: "Failed to fetch donors. Please try again.",
            variant: "destructive",
          })
        }

        if (donorsData) {
          setDonors(donorsData)
        }
      } catch (error) {
        console.error("Unexpected error:", error)
        toast({
          title: "Error",
          description: "An unexpected error occurred. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [supabase, toast])

  useEffect(() => {
    const searchData = async () => {
      setIsLoading(true)
      try {
        if (searchTerm) {
          const { data: searchData, error: searchError } = await supabase
            .from("donors")
            .select("*")
            .ilike("name", `%${searchTerm}%`)
            .order("created_at", { ascending: false })

          if (searchError) {
            console.error("Error searching donors:", searchError)
            toast({
              title: "Error",
              description: "Failed to search donors. Please try again.",
              variant: "destructive",
            })
          }

          if (searchData) {
            setDonors(searchData)
          }
        } else {
          const { data: donorsData, error: donorsError } = await supabase.from("donors").select("*")

          if (donorsError) {
            console.error("Error fetching donors:", donorsError)
            toast({
              title: "Error",
              description: "Failed to fetch donors. Please try again.",
              variant: "destructive",
            })
          }

          if (donorsData) {
            setDonors(donorsData)
          }
        }
      } catch (error) {
        console.error("Unexpected error:", error)
        toast({
          title: "Error",
          description: "An unexpected error occurred. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    searchData()
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
          <h2 className="text-3xl font-bold tracking-tight">Donors</h2>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search donors..."
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
                <TableHead>Phone</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Program</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {donors.map((donor) => (
                <TableRow key={donor.id}>
                  <TableCell className="font-medium">{donor.name}</TableCell>
                  <TableCell>{donor.email}</TableCell>
                  <TableCell>{donor.phone}</TableCell>
                  <TableCell>{donor.amount}</TableCell>
                  <TableCell>{donor.program}</TableCell>
                  <TableCell>{donor.date}</TableCell>
                  <TableCell>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">{donor.status}</span>
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
