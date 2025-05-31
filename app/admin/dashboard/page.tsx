"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import {
  BarChart3,
  CreditCard,
  DollarSign,
  Download,
  LayoutDashboard,
  LogOut,
  Mail,
  MessageSquare,
  Settings,
  Users,
  UserPlus,
  Database,
  Search,
  Filter,
  Edit,
  Trash,
  Plus,
  Upload,
  FileUp,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"
import Image from "next/image"

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ChartContainer,
  ChartTooltip,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
} from "@/components/ui/chart"
import { useAuth } from "@/components/auth-provider"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

// Dashboard data type
type DashboardData = {
  counts: {
    donors: number
    totalDonations: number
    newsletterSubscribers: number
    volunteers: number
    contactSubmissions: number
    eventRegistrations: number
  }
  recentDonations: Array<{
    id: string
    amount: number
    created_at: string
    donors: {
      name: string | null
      email: string
      is_anonymous: boolean
    }
  }>
  chartData: Array<{
    month: string
    amount: number
  }>
  recentSubmissions: Array<{
    id: string
    type: string
    name: string
    email: string
    created_at: string
    status: string
  }>
}

// Colors for charts
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82ca9d"]

// Chart configurations
const chartConfig = {
  amount: {
    label: "Amount",
    color: "hsl(var(--chart-1))",
  },
}

const donorChartConfig = {
  value: {
    label: "Percentage",
    color: "hsl(var(--chart-1))",
  },
}

const analyticsChartConfig = {
  views: {
    label: "Views",
    color: "hsl(var(--chart-1))",
  },
}

const financialChartConfig = {
  percentage: {
    label: "Percentage",
    color: "hsl(var(--chart-1))",
  },
}

const impactChartConfig = {
  people: {
    label: "People Impacted",
    color: "hsl(var(--chart-1))",
  },
}

export default function AdminDashboard() {
  const [isLoading, setIsLoading] = useState(true)
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredContacts, setFilteredContacts] = useState([])
  const [selectedReport, setSelectedReport] = useState("donation")
  const router = useRouter()
  const { user, signOut } = useAuth()

  const [showAddContactDialog, setShowAddContactDialog] = useState(false)
  const [showEditContactDialog, setShowEditContactDialog] = useState(false)
  const [currentContact, setCurrentContact] = useState<any>(null)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [contactToDelete, setContactToDelete] = useState<number | null>(null)
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Donor",
    status: "Active",
  })

  const [contacts, setContacts] = useState([])
  const [donorSegments, setDonorSegments] = useState([])
  const [pageViews, setPageViews] = useState([])
  const [websitePages, setWebsitePages] = useState([])
  const [mediaItems, setMediaItems] = useState([])
  const [financialData, setFinancialData] = useState([])
  const [impactMetrics, setImpactMetrics] = useState([])

  const handleAddContact = () => {
    // In a real app, this would send data to an API
    const newId = Math.max(...contacts.map((c) => c.id)) + 1
    const contact = {
      ...newContact,
      id: newId,
      lastContact: new Date().toISOString().split("T")[0],
      totalDonated: newContact.type === "Donor" ? 0 : undefined,
      image: "/images/trung-musana.jpg",
    }

    setContacts([contact, ...contacts])
    setFilteredContacts([contact, ...filteredContacts])
    setShowAddContactDialog(false)
    setNewContact({
      name: "",
      email: "",
      phone: "",
      type: "Donor",
      status: "Active",
    })
  }

  const handleEditContact = () => {
    if (!currentContact) return

    const updatedContacts = contacts.map((contact) => (contact.id === currentContact.id ? currentContact : contact))

    setContacts(updatedContacts)
    setFilteredContacts(
      updatedContacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contact.type.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    )
    setShowEditContactDialog(false)
    setCurrentContact(null)
  }

  const handleDeleteContact = () => {
    if (contactToDelete === null) return

    const updatedContacts = contacts.filter((contact) => contact.id !== contactToDelete)
    setContacts(updatedContacts)
    setFilteredContacts(filteredContacts.filter((contact) => contact.id !== contactToDelete))
    setShowDeleteDialog(false)
    setContactToDelete(null)
  }

  const openEditDialog = (contact) => {
    setCurrentContact({ ...contact })
    setShowEditContactDialog(true)
  }

  const openDeleteDialog = (id) => {
    setContactToDelete(id)
    setShowDeleteDialog(true)
  }

  const handleNewPage = () => {
    const newId = Math.max(...websitePages.map((p) => p.id)) + 1
    const newPage = {
      id: newId,
      title: "New Page",
      lastUpdated: new Date().toISOString().split("T")[0],
      status: "Draft",
    }
    setWebsitePages([newPage, ...websitePages])
    // Force re-render
    setIsLoading(false)
  }

  const handleUploadMedia = () => {
    alert("Media upload functionality would open a file picker in a real application")
  }

  const handleViewAllPages = () => {
    alert("This would navigate to the full content management system in a real application")
  }

  const handleViewAllMedia = () => {
    router.push("/admin/media")
  }

  useEffect(() => {
    // Check if user is authenticated
    const auth = localStorage.getItem("adminAuthenticated")
    if (auth !== "true") {
      router.push("/admin")
      return
    }

    // Fetch dashboard data
    const fetchDashboardData = async () => {
      try {
        // For demo purposes, use mock data
        // Replace with actual database queries
        const dashboardData = {
          counts: {
            donors: 2350,
            totalDonations: 45231.89,
            newsletterSubscribers: 12234,
            volunteers: 573,
            contactSubmissions: 128,
            eventRegistrations: 345,
          },
          recentDonations: Array(5)
            .fill(0)
            .map((_, i) => ({
              id: `donation-${i}`,
              amount: Math.floor(Math.random() * 1000),
              created_at: new Date().toISOString(),
              donors: {
                name: i % 2 === 0 ? `Donor ${i}` : null,
                email: `donor${i}@example.com`,
                is_anonymous: i % 2 !== 0,
              },
            })),
          chartData: [
            { month: "Jan", amount: 4000 },
            { month: "Feb", amount: 3000 },
            { month: "Mar", amount: 2000 },
            { month: "Apr", amount: 2780 },
            { month: "May", amount: 1890 },
            { month: "Jun", amount: 2390 },
            { month: "Jul", amount: 3490 },
            { month: "Aug", amount: 4000 },
            { month: "Sep", amount: 5200 },
            { month: "Oct", amount: 6000 },
            { month: "Nov", amount: 7000 },
            { month: "Dec", amount: 9800 },
          ],
          recentSubmissions: [
            {
              id: "submission-1",
              type: "Donation",
              name: "John Smith",
              email: "john@example.com",
              created_at: "2025-05-01T12:00:00Z",
              status: "Completed",
            },
            {
              id: "submission-2",
              type: "Contact",
              name: "Sarah Johnson",
              email: "sarah@example.com",
              created_at: "2025-04-30T12:00:00Z",
              status: "Pending",
            },
            {
              id: "submission-3",
              type: "Newsletter",
              name: "Michael Brown",
              email: "michael@example.com",
              created_at: "2025-04-29T12:00:00Z",
              status: "Subscribed",
            },
            {
              id: "submission-4",
              type: "Event",
              name: "Lisa Chen",
              email: "lisa@example.com",
              created_at: "2025-04-28T12:00:00Z",
              status: "Registered",
            },
            {
              id: "submission-5",
              type: "Volunteer",
              name: "David Wilson",
              email: "david@example.com",
              created_at: "2025-04-27T12:00:00Z",
              status: "In Review",
            },
          ],
        }

        setDashboardData(dashboardData)

        // Fetch CRM data
        const contacts = [
          {
            id: 1,
            name: "John Smith",
            email: "john@example.com",
            phone: "+1 (555) 123-4567",
            type: "Donor",
            lastContact: "2025-04-28",
            status: "Active",
            totalDonated: 1250,
            image: "/images/trung-musana.jpg",
          },
          {
            id: 2,
            name: "Sarah Johnson",
            email: "sarah@example.com",
            phone: "+1 (555) 987-6543",
            type: "Volunteer",
            lastContact: "2025-04-25",
            status: "Active",
            totalDonated: 0,
            image: "/african-woman-portrait.png",
          },
          {
            id: 3,
            name: "Michael Brown",
            email: "michael@example.com",
            phone: "+1 (555) 456-7890",
            type: "Donor",
            lastContact: "2025-04-20",
            status: "Active",
            totalDonated: 3500,
            image: "/man-in-classic-suit.png",
          },
          {
            id: 4,
            name: "Emily Davis",
            email: "emily@example.com",
            phone: "+1 (555) 789-0123",
            type: "Donor",
            lastContact: "2025-04-15",
            status: "Inactive",
            totalDonated: 750,
            image: "/african-woman-entrepreneur-portrait.png",
          },
          {
            id: 5,
            name: "David Wilson",
            email: "david@example.com",
            phone: "+1 (555) 234-5678",
            type: "Volunteer",
            lastContact: "2025-04-10",
            status: "Active",
            totalDonated: 0,
            image: "/african-woman-farmer-portrait.png",
          },
        ]
        setContacts(contacts)
        setFilteredContacts(contacts)

        // Fetch donor segments data
        const donorSegments = [
          { name: "One-time", value: 65 },
          { name: "Monthly", value: 25 },
          { name: "Major", value: 10 },
        ]
        setDonorSegments(donorSegments)

        // Fetch website analytics data
        const pageViews = [
          { page: "Homepage", views: 5200 },
          { page: "Donate", views: 3800 },
          { page: "Programs", views: 2900 },
          { page: "About", views: 2400 },
          { page: "Events", views: 1800 },
          { page: "Blog", views: 1500 },
          { page: "Contact", views: 1200 },
        ]
        setPageViews(pageViews)

        // Fetch content management data
        const websitePages = [
          { id: 1, title: "Homepage", lastUpdated: "2025-04-30", status: "Published" },
          { id: 2, title: "About Us", lastUpdated: "2025-04-28", status: "Published" },
          { id: 3, title: "Programs", lastUpdated: "2025-04-25", status: "Published" },
          { id: 4, title: "Donate", lastUpdated: "2025-04-20", status: "Published" },
          { id: 5, title: "Events", lastUpdated: "2025-04-15", status: "Published" },
          { id: 6, title: "Blog", lastUpdated: "2025-04-10", status: "Published" },
          { id: 7, title: "Contact", lastUpdated: "2025-04-05", status: "Published" },
          { id: 8, title: "New Program Page", lastUpdated: "2025-05-01", status: "Draft" },
        ]
        setWebsitePages(websitePages)

        // Fetch media library data
        const mediaItems = [
          {
            id: 1,
            name: "hero-image.jpg",
            type: "image",
            size: "1.2 MB",
            uploaded: "2025-04-30",
            url: "/images/trung-wallpaper-1.jpg",
          },
          {
            id: 2,
            name: "team-photo.jpg",
            type: "image",
            size: "2.1 MB",
            uploaded: "2025-04-25",
            url: "/images/leadership-committee.jpeg",
          },
          {
            id: 3,
            name: "program-image.jpg",
            type: "image",
            size: "0.9 MB",
            uploaded: "2025-04-15",
            url: "/images/community-centers.jpeg",
          },
          {
            id: 4,
            name: "event-flyer.jpg",
            type: "image",
            size: "1.5 MB",
            uploaded: "2025-04-10",
            url: "/images/first-general-meeting-flyer.jpeg",
          },
        ]
        setMediaItems(mediaItems)

        // Fetch financial reports data
        const financialData = [
          { category: "Education Programs", amount: 125000, percentage: 35 },
          { category: "Healthcare Initiatives", amount: 89000, percentage: 25 },
          { category: "Orphan Support", amount: 71000, percentage: 20 },
          { category: "Women Empowerment", amount: 53000, percentage: 15 },
          { category: "Administrative", amount: 18000, percentage: 5 },
        ]
        setFinancialData(financialData)

        // Fetch impact metrics data
        const impactMetrics = [
          { metric: "Children Educated", value: 1250, change: 15, trend: "up" },
          { metric: "Healthcare Recipients", value: 3800, change: 22, trend: "up" },
          { metric: "Women Empowered", value: 750, change: 30, trend: "up" },
          { metric: "Communities Served", value: 45, change: 12, trend: "up" },
          { metric: "Volunteer Hours", value: 12500, change: -5, trend: "down" },
        ]
        setImpactMetrics(impactMetrics)
      } catch (error) {
        console.error("Error fetching dashboard data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDashboardData()
  }, [router])

  // Filter contacts based on search term
  useEffect(() => {
    if (searchTerm) {
      const filtered = contacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contact.type.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      setFilteredContacts(filtered)
    } else {
      setFilteredContacts(contacts)
    }
  }, [searchTerm, contacts])

  const handleLogout = async () => {
    await signOut()
    router.push("/admin")
  }

  const chartData = dashboardData?.chartData || [
    { month: "Jan", amount: 4000 },
    { month: "Feb", amount: 3000 },
    { month: "Mar", amount: 2000 },
    { month: "Apr", amount: 2780 },
    { month: "May", amount: 1890 },
    { month: "Jun", amount: 2390 },
    { month: "Jul", amount: 3490 },
    { month: "Aug", amount: 4000 },
    { month: "Sep", amount: 5200 },
    { month: "Oct", amount: 6000 },
    { month: "Nov", amount: 7000 },
    { month: "Dec", amount: 9800 },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <div className="flex items-center gap-2 font-semibold">
            <LayoutDashboard className="h-6 w-6" />
            <span>Trung Foundation Admin</span>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
            <Avatar>
              <AvatarImage src="/images/trung-musana.jpg" alt="Admin" />
              <AvatarFallback>TF</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Button onClick={() => router.push("/admin/analytics")}>
              <BarChart3 className="mr-2 h-4 w-4" />
              View Analytics
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download Reports
            </Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="data">Database</TabsTrigger>
            <TabsTrigger value="crm">CRM</TabsTrigger>
            <TabsTrigger value="website">Website</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {dashboardData?.counts.totalDonations
                      ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
                          dashboardData.counts.totalDonations,
                        )
                      : "$45,231.89"}
                  </div>
                  <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Donors</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+{dashboardData?.counts.donors || 2350}</div>
                  <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Newsletter Subscribers</CardTitle>
                  <Mail className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+{dashboardData?.counts.newsletterSubscribers || 12234}</div>
                  <p className="text-xs text-muted-foreground">+19% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Volunteers</CardTitle>
                  <UserPlus className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+{dashboardData?.counts.volunteers || 573}</div>
                  <p className="text-xs text-muted-foreground">+201 since last year</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Donation Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <ChartContainer config={chartConfig}>
                    <AreaChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis tickFormatter={(value) => `$${value}`} />
                      <ChartTooltip formatter={(value) => [`$${value}`, "Amount"]} />
                      <Area
                        type="monotone"
                        dataKey="amount"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.3}
                        activeDot={{ r: 8 }}
                      />
                    </AreaChart>
                  </ChartContainer>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Donations</CardTitle>
                  <CardDescription>You received 30 donations this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {(dashboardData?.recentDonations || Array(5).fill(0)).map((donation, i) => (
                      <div key={donation.id || i} className="flex items-center">
                        <Avatar className="h-9 w-9">
                          <AvatarFallback>{donation.donors?.name?.[0] || `D${i}`}</AvatarFallback>
                        </Avatar>
                        <div className="ml-4 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {donation.donors?.is_anonymous || !donation.donors?.name
                              ? "Anonymous Donor"
                              : donation.donors.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {donation.amount
                              ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
                                  donation.amount,
                                )
                              : `$${Math.floor(Math.random() * 1000)}.00`}
                          </p>
                        </div>
                        <div className="ml-auto font-medium">
                          {donation.created_at
                            ? new Date(donation.created_at).toLocaleString(undefined, {
                                hour: "numeric",
                                minute: "numeric",
                                hour12: true,
                              })
                            : `${Math.floor(Math.random() * 24)}h ago`}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="data" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Database Tables</CardTitle>
                  <CardDescription>Manage all form submissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => router.push("/admin/database/donors")}
                    >
                      <Database className="mr-2 h-4 w-4" />
                      Donors
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => router.push("/admin/database/contacts")}
                    >
                      <Database className="mr-2 h-4 w-4" />
                      Contact Form Submissions
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => router.push("/admin/database/volunteers")}
                    >
                      <Database className="mr-2 h-4 w-4" />
                      Volunteer Applications
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => router.push("/admin/database/events")}
                    >
                      <Database className="mr-2 h-4 w-4" />
                      Event Registrations
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => router.push("/admin/database/newsletter")}
                    >
                      <Database className="mr-2 h-4 w-4" />
                      Newsletter Subscribers
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Recent Submissions</CardTitle>
                  <CardDescription>Latest form submissions across all tables</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-5 bg-muted/50 p-2 font-medium">
                      <div>Type</div>
                      <div>Name</div>
                      <div>Email</div>
                      <div>Date</div>
                      <div>Status</div>
                    </div>
                    <div className="divide-y">
                      {(dashboardData?.recentSubmissions || []).map((submission, i) => (
                        <div key={submission.id || i} className="grid grid-cols-5 p-2 items-center">
                          <div className="font-medium">{submission.type}</div>
                          <div>{submission.name}</div>
                          <div className="text-sm">{submission.email}</div>
                          <div className="text-sm">
                            {submission.created_at
                              ? new Date(submission.created_at).toLocaleDateString()
                              : "May 1, 2025"}
                          </div>
                          <div>
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${
                                submission.status === "Completed" ||
                                submission.status === "Subscribed" ||
                                submission.status === "Registered"
                                  ? "bg-green-100 text-green-800"
                                  : submission.status === "Pending"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-blue-100 text-blue-800"
                              }`}
                            >
                              {submission.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="crm" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-2">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Contact Management</CardTitle>
                    <CardDescription>Manage your donor and volunteer contacts</CardDescription>
                  </div>
                  <Button size="sm" onClick={() => setShowAddContactDialog(true)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Contact
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search contacts..."
                        className="pl-8"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                      <span className="sr-only">Filter</span>
                    </Button>
                  </div>

                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Last Contact</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredContacts.map((contact) => (
                          <TableRow key={contact.id}>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={contact.image || "/placeholder.svg"} alt={contact.name} />
                                  <AvatarFallback>{contact.name[0]}</AvatarFallback>
                                </Avatar>
                                <span className="font-medium">{contact.name}</span>
                              </div>
                            </TableCell>
                            <TableCell>{contact.email}</TableCell>
                            <TableCell>
                              <Badge variant={contact.type === "Donor" ? "default" : "secondary"}>{contact.type}</Badge>
                            </TableCell>
                            <TableCell>
                              <Badge variant={contact.status === "Active" ? "outline" : "destructive"}>
                                {contact.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{new Date(contact.lastContact).toLocaleDateString()}</TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                <Button variant="ghost" size="icon" onClick={() => openEditDialog(contact)}>
                                  <Edit className="h-4 w-4" />
                                  <span className="sr-only">Edit</span>
                                </Button>
                                <Button variant="ghost" size="icon" onClick={() => openDeleteDialog(contact.id)}>
                                  <Trash className="h-4 w-4" />
                                  <span className="sr-only">Delete</span>
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">
                    Showing {filteredContacts.length} of {contacts.length} contacts
                  </div>
                  <div className="flex gap-1">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm" disabled>
                      Next
                    </Button>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Inquiries</CardTitle>
                  <CardDescription>Latest messages from the contact form</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Emma Wilson", subject: "Volunteer Inquiry", time: "2h ago" },
                      { name: "Daniel Johnson", subject: "Donation Question", time: "5h ago" },
                      { name: "Sophia Martinez", subject: "Partnership Opportunity", time: "1d ago" },
                      { name: "Noah Brown", subject: "Media Inquiry", time: "2d ago" },
                    ].map((inquiry, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <MessageSquare className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">{inquiry.name}</p>
                          <p className="text-xs text-muted-foreground">{inquiry.subject}</p>
                          <p className="text-xs text-muted-foreground">{inquiry.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View All Inquiries
                  </Button>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Donor Segments</CardTitle>
                <CardDescription>Analyze and segment your donor base</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <ChartContainer config={donorChartConfig}>
                    <RechartsPieChart>
                      <Pie
                        data={donorSegments}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {donorSegments.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <ChartTooltip formatter={(value) => [`${value}%`, ""]} />
                    </RechartsPieChart>
                  </ChartContainer>
                </div>
                <div className="md:w-1/2 space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">One-time Donors</span>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Monthly Donors</span>
                      <span className="text-sm font-medium">25%</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Major Donors</span>
                      <span className="text-sm font-medium">10%</span>
                    </div>
                    <Progress value={10} className="h-2" />
                  </div>
                  <div className="pt-4">
                    <Button variant="outline" className="w-full">
                      View Detailed Segments
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="website" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Website Analytics</CardTitle>
                  <CardDescription>Traffic and engagement metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={analyticsChartConfig}>
                    <BarChart data={pageViews}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="page" />
                      <YAxis />
                      <ChartTooltip formatter={(value) => [`${value} views`, ""]} />
                      <Bar dataKey="views" fill="#8884d8" />
                    </BarChart>
                  </ChartContainer>
                  <div className="flex justify-between items-center mt-4 text-sm">
                    <div>
                      <p className="font-medium">Total Views</p>
                      <p className="text-2xl font-bold">18,800</p>
                    </div>
                    <div>
                      <p className="font-medium">Avg. Time on Site</p>
                      <p className="text-2xl font-bold">3:24</p>
                    </div>
                    <div>
                      <p className="font-medium">Bounce Rate</p>
                      <p className="text-2xl font-bold">32%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Content Management</CardTitle>
                    <CardDescription>Manage website content</CardDescription>
                  </div>
                  <Button size="sm" onClick={handleNewPage}>
                    <Plus className="mr-2 h-4 w-4" />
                    New Page
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Page</TableHead>
                          <TableHead>Last Updated</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {websitePages.slice(0, 5).map((page) => (
                          <TableRow key={page.id}>
                            <TableCell className="font-medium">{page.title}</TableCell>
                            <TableCell>{new Date(page.lastUpdated).toLocaleDateString()}</TableCell>
                            <TableCell>
                              <Badge variant={page.status === "Published" ? "outline" : "secondary"}>
                                {page.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                <Button variant="ghost" size="icon">
                                  <Edit className="h-4 w-4" />
                                  <span className="sr-only">Edit</span>
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  <Button variant="outline" className="w-full mt-4" onClick={handleViewAllPages}>
                    View All Pages
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Media Library</CardTitle>
                    <CardDescription>Manage images and files</CardDescription>
                  </div>
                  <Button size="sm" onClick={handleUploadMedia}>
                    <Upload className="mr-2 h-4 w-4" />
                    Upload
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-2">
                    {mediaItems.slice(0, 6).map((item) => (
                      <div key={item.id} className="relative group">
                        <div className="aspect-square bg-muted rounded-md overflow-hidden">
                          {item.type === "image" ? (
                            <Image
                              src={item.url || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                              onError={(e) => {
                                e.currentTarget.src = "/placeholder.svg?height=100&width=100&text=Image"
                              }}
                            />
                          ) : (
                            <div className="h-full w-full flex items-center justify-center bg-muted">
                              <FileUp className="h-8 w-8 text-muted-foreground" />
                            </div>
                          )}
                        </div>
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 rounded-md">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-white">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-white">
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4" variant="outline" onClick={handleViewAllMedia}>
                    View All Media
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="reports" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Financial Reports</CardTitle>
                      <CardDescription>Donation and expense tracking</CardDescription>
                    </div>
                    <Select value={selectedReport} onValueChange={setSelectedReport}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select report" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="donation">Donation Summary</SelectItem>
                        <SelectItem value="expense">Expense Breakdown</SelectItem>
                        <SelectItem value="program">Program Allocation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                      <ChartContainer config={financialChartConfig}>
                        <RechartsPieChart>
                          <Pie
                            data={financialData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="percentage"
                            label={({ name, percent }) => `${name.split(" ")[0]} ${(percent * 100).toFixed(0)}%`}
                          >
                            {financialData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <ChartTooltip
                            formatter={(value, name, props) => {
                              const item = financialData.find((d) => d.percentage === value)
                              return [`${value}% ($${item?.amount.toLocaleString()})`, item?.category]
                            }}
                          />
                        </RechartsPieChart>
                      </ChartContainer>
                    </div>
                    <div className="md:w-1/2">
                      <div className="rounded-md border">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Category</TableHead>
                              <TableHead className="text-right">Amount</TableHead>
                              <TableHead className="text-right">%</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {financialData.map((item) => (
                              <TableRow key={item.category}>
                                <TableCell className="font-medium">{item.category}</TableCell>
                                <TableCell className="text-right">${item.amount.toLocaleString()}</TableCell>
                                <TableCell className="text-right">{item.percentage}%</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="ml-auto">
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Available Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CreditCard className="h-5 w-5 text-primary" />
                        <span className="text-sm">Donation Summary</span>
                      </div>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-1" />
                        Export
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        <span className="text-sm">Volunteer Hours</span>
                      </div>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-1" />
                        Export
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-primary" />
                        <span className="text-sm">Program Impact</span>
                      </div>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-1" />
                        Export
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Settings className="h-5 w-5 text-primary" />
                        <span className="text-sm">Annual Report</span>
                      </div>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-1" />
                        Export
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Impact Metrics</CardTitle>
                <CardDescription>Track the impact of your programs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {impactMetrics.map((metric) => (
                    <Card key={metric.metric} className="bg-muted/20">
                      <CardContent className="p-4">
                        <div className="flex flex-col items-center text-center">
                          <div className="text-3xl font-bold mb-1">{metric.value.toLocaleString()}</div>
                          <div className="text-sm font-medium mb-2">{metric.metric}</div>
                          <div
                            className={`flex items-center text-xs ${
                              metric.trend === "up" ? "text-green-600" : "text-red-600"
                            }`}
                          >
                            {metric.trend === "up" ? (
                              <ArrowUpRight className="h-3 w-3 mr-1" />
                            ) : (
                              <ArrowDownRight className="h-3 w-3 mr-1" />
                            )}
                            {metric.change}% from last year
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6">
                  <ChartContainer config={impactChartConfig}>
                    <BarChart
                      data={[
                        { year: "2020", people: 1200 },
                        { year: "2021", people: 1800 },
                        { year: "2022", people: 2400 },
                        { year: "2023", people: 3200 },
                        { year: "2024", people: 4000 },
                        { year: "2025", people: 4800 },
                      ]}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <ChartTooltip formatter={(value) => [`${value.toLocaleString()} people`, "Impact"]} />
                      <Bar dataKey="people" fill="#8884d8" />
                    </BarChart>
                  </ChartContainer>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">Data updated as of May 1, 2025</div>
                <Button variant="outline">
                  <PieChart className="mr-2 h-4 w-4" />
                  View Detailed Impact
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      {/* Add Contact Dialog */}
      <Dialog open={showAddContactDialog} onOpenChange={setShowAddContactDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Contact</DialogTitle>
            <DialogDescription>Create a new contact in the system. Click save when you're done.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={newContact.name}
                onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={newContact.email}
                onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Phone
              </Label>
              <Input
                id="phone"
                value={newContact.phone}
                onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="type" className="text-right">
                Type
              </Label>
              <Select value={newContact.type} onValueChange={(value) => setNewContact({ ...newContact, type: value })}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Donor">Donor</SelectItem>
                  <SelectItem value="Volunteer">Volunteer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="status" className="text-right">
                Status
              </Label>
              <Select
                value={newContact.status}
                onValueChange={(value) => setNewContact({ ...newContact, status: value })}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddContactDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddContact}>Save Contact</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Contact Dialog */}
      <Dialog open={showEditContactDialog} onOpenChange={setShowEditContactDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Contact</DialogTitle>
            <DialogDescription>Make changes to the contact information. Click save when you're done.</DialogDescription>
          </DialogHeader>
          {currentContact && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-name" className="text-right">
                  Name
                </Label>
                <Input
                  id="edit-name"
                  value={currentContact.name}
                  onChange={(e) => setCurrentContact({ ...currentContact, name: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-email" className="text-right">
                  Email
                </Label>
                <Input
                  id="edit-email"
                  type="email"
                  value={currentContact.email}
                  onChange={(e) => setCurrentContact({ ...currentContact, email: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-phone" className="text-right">
                  Phone
                </Label>
                <Input
                  id="edit-phone"
                  value={currentContact.phone}
                  onChange={(e) => setCurrentContact({ ...currentContact, phone: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-type" className="text-right">
                  Type
                </Label>
                <Select
                  value={currentContact.type}
                  onValueChange={(value) => setCurrentContact({ ...currentContact, type: value })}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Donor">Donor</SelectItem>
                    <SelectItem value="Volunteer">Volunteer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-status" className="text-right">
                  Status
                </Label>
                <Select
                  value={currentContact.status}
                  onValueChange={(value) => setCurrentContact({ ...currentContact, status: value })}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowEditContactDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleEditContact}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this contact? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDeleteDialog(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteContact}>
              Delete Contact
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
