"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Calendar, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ChartContainer,
  ChartTooltip,
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
} from "@/components/ui/chart"

// Chart configurations
const donationChartConfig = {
  amount: {
    label: "Amount",
    color: "hsl(var(--chart-1))",
  },
}

const programChartConfig = {
  value: {
    label: "Percentage",
    color: "hsl(var(--chart-1))",
  },
}

const donorChartConfig = {
  donors: {
    label: "Donors",
    color: "hsl(var(--chart-2))",
  },
}

const subscriberChartConfig = {
  subscribers: {
    label: "Subscribers",
    color: "hsl(var(--chart-3))",
  },
}

const contactChartConfig = {
  submissions: {
    label: "Submissions",
    color: "hsl(var(--chart-4))",
  },
}

const sourceChartConfig = {
  amount: {
    label: "Amount",
    color: "hsl(var(--chart-1))",
  },
}

const trafficChartConfig = {
  visitors: {
    label: "Visitors",
    color: "hsl(var(--chart-1))",
  },
}

const impactChartConfig = {
  value: {
    label: "People",
    color: "hsl(var(--chart-1))",
  },
}

const efficiencyChartConfig = {
  efficiency: {
    label: "Efficiency",
    color: "hsl(var(--chart-3))",
  },
}

const growthChartConfig = {
  people: {
    label: "People Reached",
    color: "hsl(var(--chart-1))",
  },
}

// Mock data for charts
const donationData = [
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

const programDistribution = [
  { name: "Education", value: 35 },
  { name: "Healthcare", value: 25 },
  { name: "Orphan Support", value: 20 },
  { name: "Women Empowerment", value: 15 },
  { name: "Other Programs", value: 5 },
]

const donorGrowth = [
  { month: "Jan", donors: 120 },
  { month: "Feb", donors: 150 },
  { month: "Mar", donors: 180 },
  { month: "Apr", donors: 220 },
  { month: "May", donors: 280 },
  { month: "Jun", donors: 350 },
  { month: "Jul", donors: 410 },
  { month: "Aug", donors: 490 },
  { month: "Sep", donors: 550 },
  { month: "Oct", donors: 620 },
  { month: "Nov", donors: 700 },
  { month: "Dec", donors: 850 },
]

const subscriberGrowth = [
  { month: "Jan", subscribers: 250 },
  { month: "Feb", subscribers: 320 },
  { month: "Mar", subscribers: 380 },
  { month: "Apr", subscribers: 450 },
  { month: "May", subscribers: 520 },
  { month: "Jun", subscribers: 600 },
  { month: "Jul", subscribers: 700 },
  { month: "Aug", subscribers: 820 },
  { month: "Sep", subscribers: 950 },
  { month: "Oct", subscribers: 1100 },
  { month: "Nov", subscribers: 1250 },
  { month: "Dec", subscribers: 1400 },
]

const contactSubmissions = [
  { month: "Jan", submissions: 15 },
  { month: "Feb", submissions: 20 },
  { month: "Mar", submissions: 25 },
  { month: "Apr", submissions: 18 },
  { month: "May", submissions: 22 },
  { month: "Jun", submissions: 30 },
  { month: "Jul", submissions: 28 },
  { month: "Aug", submissions: 35 },
  { month: "Sep", submissions: 40 },
  { month: "Oct", submissions: 45 },
  { month: "Nov", submissions: 50 },
  { month: "Dec", submissions: 60 },
]

const donationsBySource = [
  { source: "Website", amount: 25000 },
  { source: "Events", amount: 15000 },
  { source: "Email", amount: 10000 },
  { source: "Social Media", amount: 8000 },
  { source: "Direct Mail", amount: 5000 },
  { source: "Other", amount: 2000 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82ca9d"]

export default function AnalyticsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [timeRange, setTimeRange] = useState("year")
  const router = useRouter()

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

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const handleExportData = () => {
    // Mock export functionality
    const data = {
      donations: donationData,
      programs: programDistribution,
      donors: donorGrowth,
      timeRange,
      exportDate: new Date().toISOString(),
    }

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `analytics-export-${new Date().toISOString().split("T")[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
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
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select time range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="quarter">This Quarter</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                  <SelectItem value="all">All Time</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline" size="sm" onClick={handleExportData}>
              <Download className="mr-2 h-4 w-4" />
              Export Data
            </Button>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
        </div>

        <Tabs defaultValue="donations" className="space-y-4">
          <TabsList>
            <TabsTrigger value="donations">Donations</TabsTrigger>
            <TabsTrigger value="donors">Donors</TabsTrigger>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
            <TabsTrigger value="impact">Impact</TabsTrigger>
          </TabsList>

          <TabsContent value="donations" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Donation Trends</CardTitle>
                  <CardDescription>Monthly donation amounts over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={donationChartConfig}>
                    <AreaChart data={donationData}>
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
              <Card>
                <CardHeader>
                  <CardTitle>Program Distribution</CardTitle>
                  <CardDescription>Donations by program</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={programChartConfig}>
                    <PieChart>
                      <Pie
                        data={programDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {programDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <ChartTooltip formatter={(value) => [`${value}%`, ""]} />
                    </PieChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Donation Sources</CardTitle>
                <CardDescription>Where donations are coming from</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={sourceChartConfig}>
                  <BarChart data={donationsBySource}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="source" />
                    <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
                    <ChartTooltip formatter={(value) => [formatCurrency(value as number), "Amount"]} />
                    <Bar dataKey="amount" fill="#82ca9d">
                      {donationsBySource.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="donors" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Donor Growth</CardTitle>
                  <CardDescription>Monthly new donors</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={donorChartConfig}>
                    <LineChart data={donorGrowth}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip />
                      <Line type="monotone" dataKey="donors" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                  </ChartContainer>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Donor Retention</CardTitle>
                  <CardDescription>Percentage of returning donors</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={programChartConfig}>
                    <BarChart
                      data={[
                        { category: "First-time", value: 65 },
                        { category: "Returning", value: 35 },
                      ]}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="category" />
                      <YAxis tickFormatter={(value) => `${value}%`} />
                      <ChartTooltip formatter={(value) => [`${value}%`, ""]} />
                      <Bar dataKey="value" fill="#8884d8">
                        <Cell fill="#0088FE" />
                        <Cell fill="#00C49F" />
                      </Bar>
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Donor Demographics</CardTitle>
                <CardDescription>Donor distribution by region</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={sourceChartConfig}>
                  <BarChart
                    data={[
                      { region: "North America", value: 45 },
                      { region: "Europe", value: 25 },
                      { region: "Asia", value: 15 },
                      { region: "Africa", value: 10 },
                      { region: "Other", value: 5 },
                    ]}
                    layout="vertical"
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" tickFormatter={(value) => `${value}%`} />
                    <YAxis type="category" dataKey="region" width={100} />
                    <ChartTooltip formatter={(value) => [`${value}%`, ""]} />
                    <Bar dataKey="value" fill="#8884d8">
                      {[0, 1, 2, 3, 4].map((index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="engagement" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Newsletter Subscribers</CardTitle>
                  <CardDescription>Growth over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={subscriberChartConfig}>
                    <LineChart data={subscriberGrowth}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip />
                      <Line type="monotone" dataKey="subscribers" stroke="#82ca9d" activeDot={{ r: 8 }} />
                    </LineChart>
                  </ChartContainer>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Contact Form Submissions</CardTitle>
                  <CardDescription>Monthly submissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={contactChartConfig}>
                    <BarChart data={contactSubmissions}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip />
                      <Bar dataKey="submissions" fill="#ffc658" />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Website Traffic</CardTitle>
                <CardDescription>Visitors by page</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={trafficChartConfig}>
                  <BarChart
                    data={[
                      { page: "Homepage", visitors: 5200 },
                      { page: "Donate", visitors: 3800 },
                      { page: "Programs", visitors: 2900 },
                      { page: "About", visitors: 2400 },
                      { page: "Events", visitors: 1800 },
                      { page: "Blog", visitors: 1500 },
                      { page: "Contact", visitors: 1200 },
                    ]}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="page" />
                    <YAxis />
                    <ChartTooltip />
                    <Bar dataKey="visitors" fill="#8884d8" />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="impact" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Lives Impacted</CardTitle>
                  <CardDescription>By program area</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={impactChartConfig}>
                    <PieChart>
                      <Pie
                        data={[
                          { name: "Education", value: 1250 },
                          { name: "Healthcare", value: 980 },
                          { name: "Orphan Support", value: 750 },
                          { name: "Women Empowerment", value: 680 },
                          { name: "Other Programs", value: 340 },
                        ]}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}`}
                      >
                        {programDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <ChartTooltip />
                    </PieChart>
                  </ChartContainer>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Program Effectiveness</CardTitle>
                  <CardDescription>Impact per dollar spent</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={efficiencyChartConfig}>
                    <BarChart
                      data={[
                        { program: "Education", efficiency: 0.85 },
                        { program: "Healthcare", efficiency: 0.78 },
                        { program: "Orphan Support", efficiency: 0.92 },
                        { program: "Women Empowerment", efficiency: 0.88 },
                        { program: "Other", efficiency: 0.75 },
                      ]}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="program" />
                      <YAxis tickFormatter={(value) => `${(value * 100).toFixed(0)}%`} />
                      <ChartTooltip formatter={(value) => [`${(Number(value) * 100).toFixed(0)}%`, "Efficiency"]} />
                      <Bar dataKey="efficiency" fill="#82ca9d">
                        {[0, 1, 2, 3, 4].map((index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Year-over-Year Impact Growth</CardTitle>
                <CardDescription>People reached by our programs</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={growthChartConfig}>
                  <LineChart
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
                    <ChartTooltip />
                    <Line type="monotone" dataKey="people" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
