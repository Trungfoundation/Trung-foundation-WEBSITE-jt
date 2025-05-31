import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowRight, BookOpen, FileText, Search, Video } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DownloadButton from "@/components/download-button"

export default function ResourcesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Resources"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Resources & Publications</h1>
          <p className="text-xl text-white max-w-2xl">
            Educational materials, reports, and tools to support our mission
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-12 px-4 md:px-6 bg-white border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1">
              <label htmlFor="search-resources" className="block text-sm font-medium mb-1">
                Search Resources
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input id="search-resources" placeholder="Search by keyword..." className="pl-10" />
              </div>
            </div>
            <div className="w-full md:w-48">
              <label htmlFor="resource-type" className="block text-sm font-medium mb-1">
                Resource Type
              </label>
              <select
                id="resource-type"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="all">All Types</option>
                <option value="reports">Reports</option>
                <option value="guides">Guides</option>
                <option value="toolkits">Toolkits</option>
                <option value="videos">Videos</option>
              </select>
            </div>
            <div className="w-full md:w-48">
              <label htmlFor="resource-topic" className="block text-sm font-medium mb-1">
                Topic
              </label>
              <select
                id="resource-topic"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="all">All Topics</option>
                <option value="education">Education</option>
                <option value="healthcare">Healthcare</option>
                <option value="women">Women Empowerment</option>
                <option value="community">Community Development</option>
              </select>
            </div>
            <Button>Filter Resources</Button>
          </div>
        </div>
      </section>

      {/* Resources Content */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="guides">Guides</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="space-y-12">
                {/* Featured Resource */}
                <Card className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative h-64 md:h-auto">
                      <Image
                        src="/placeholder.svg?height=400&width=400&text=Annual Report"
                        alt="Annual Impact Report"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">Report</Badge>
                        <Badge variant="outline">2024</Badge>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">Annual Impact Report 2024</h3>
                      <p className="text-muted-foreground mb-4">
                        Our comprehensive annual report detailing our programs, achievements, challenges, and financial
                        stewardship over the past year. Learn about our impact across education, healthcare, and
                        community development initiatives.
                      </p>
                      <div className="flex flex-wrap items-center gap-4 mt-auto">
                        <DownloadButton
                          fileType="report"
                          fileName="annual-impact-report-2024"
                          className="flex items-center gap-2"
                        >
                          Download PDF
                        </DownloadButton>
                        <Link href="/transparency" className="text-primary flex items-center gap-1 hover:underline">
                          View Online <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Reports Section */}
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Reports & Publications</h2>
                    <Link href="/transparency" className="text-primary flex items-center gap-1 hover:underline">
                      View All Reports <ArrowRight size={16} />
                    </Link>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <ResourceCard
                      title="Healthcare Access Study"
                      description="Research findings on healthcare access disparities in rural communities and recommended interventions."
                      type="Report"
                      date="May 2025"
                      image="/placeholder.svg?height=200&width=300"
                      icon={<FileText className="h-5 w-5" />}
                      downloadUrl="healthcare-access-study"
                    />

                    <ResourceCard
                      title="Education Program Evaluation"
                      description="Evaluation results from our education initiatives, including outcomes and lessons learned."
                      type="Report"
                      date="April 2025"
                      image="/placeholder.svg?height=200&width=300"
                      icon={<FileText className="h-5 w-5" />}
                      downloadUrl="education-program-evaluation"
                    />

                    <ResourceCard
                      title="Women Entrepreneurship Impact"
                      description="Analysis of our women's entrepreneurship program and its economic impact on communities."
                      type="Report"
                      date="March 2025"
                      image="/placeholder.svg?height=200&width=300"
                      icon={<FileText className="h-5 w-5" />}
                      downloadUrl="women-entrepreneurship-impact"
                    />
                  </div>
                </div>

                {/* Guides & Toolkits Section */}
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Guides & Toolkits</h2>
                    <Link href="/resources/guides" className="text-primary flex items-center gap-1 hover:underline">
                      View All Guides <ArrowRight size={16} />
                    </Link>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <ResourceCard
                      title="Community Organizing Toolkit"
                      description="Step-by-step guide for organizing community initiatives and building grassroots support."
                      type="Toolkit"
                      date="June 2025"
                      image="/placeholder.svg?height=200&width=300"
                      icon={<BookOpen className="h-5 w-5" />}
                      downloadUrl="community-organizing-toolkit"
                    />

                    <ResourceCard
                      title="Volunteer Management Guide"
                      description="Best practices for recruiting, training, and retaining effective volunteers."
                      type="Guide"
                      date="May 2025"
                      image="/placeholder.svg?height=200&width=300"
                      icon={<BookOpen className="h-5 w-5" />}
                      downloadUrl="volunteer-management-guide"
                    />

                    <ResourceCard
                      title="Fundraising Strategies"
                      description="Practical strategies and templates for effective fundraising campaigns and donor engagement."
                      type="Guide"
                      date="April 2025"
                      image="/placeholder.svg?height=200&width=300"
                      icon={<BookOpen className="h-5 w-5" />}
                      downloadUrl="fundraising-strategies"
                    />
                  </div>
                </div>

                {/* Media Resources Section */}
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Media Resources</h2>
                    <Link href="/resources/media" className="text-primary flex items-center gap-1 hover:underline">
                      View All Media <ArrowRight size={16} />
                    </Link>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <ResourceCard
                      title="Program Impact Video Series"
                      description="Video testimonials and stories from beneficiaries of our various programs."
                      type="Video"
                      date="2025"
                      image="/placeholder.svg?height=200&width=300"
                      icon={<Video className="h-5 w-5" />}
                      isVideo
                      viewUrl="/resources/videos/program-impact"
                    />

                    <ResourceCard
                      title="Healthcare Initiative Documentary"
                      description="Short documentary about our mobile healthcare clinics and their impact in rural areas."
                      type="Video"
                      date="2024"
                      image="/placeholder.svg?height=200&width=300"
                      icon={<Video className="h-5 w-5" />}
                      isVideo
                      viewUrl="/resources/videos/healthcare-initiative"
                    />

                    <ResourceCard
                      title="Photo Gallery: Community Projects"
                      description="High-resolution photos documenting our community development projects and their outcomes."
                      type="Gallery"
                      date="2025"
                      image="/placeholder.svg?height=200&width=300"
                      icon={<Image className="h-5 w-5" />}
                      viewUrl="/resources/photo-gallery"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reports">
              <div className="space-y-8">
                <h2 className="text-2xl font-bold mb-6">Reports & Publications</h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <ResourceCard
                    title="Annual Impact Report 2024"
                    description="Comprehensive overview of our programs, achievements, and financial stewardship."
                    type="Report"
                    date="June 2025"
                    image="/placeholder.svg?height=200&width=300"
                    icon={<FileText className="h-5 w-5" />}
                    downloadUrl="annual-report-2024"
                  />

                  <ResourceCard
                    title="Healthcare Access Study"
                    description="Research findings on healthcare access disparities in rural communities and recommended interventions."
                    type="Report"
                    date="May 2025"
                    image="/placeholder.svg?height=200&width=300"
                    icon={<FileText className="h-5 w-5" />}
                    downloadUrl="healthcare-access-study"
                  />

                  <ResourceCard
                    title="Education Program Evaluation"
                    description="Evaluation results from our education initiatives, including outcomes and lessons learned."
                    type="Report"
                    date="April 2025"
                    image="/placeholder.svg?height=200&width=300"
                    icon={<FileText className="h-5 w-5" />}
                    downloadUrl="education-program-evaluation"
                  />

                  <ResourceCard
                    title="Women Entrepreneurship Impact"
                    description="Analysis of our women's entrepreneurship program and its economic impact on communities."
                    type="Report"
                    date="March 2025"
                    image="/placeholder.svg?height=200&width=300"
                    icon={<FileText className="h-5 w-5" />}
                    downloadUrl="women-entrepreneurship-impact"
                  />

                  <ResourceCard
                    title="Community Needs Assessment"
                    description="Findings from our community needs assessment survey and focus groups."
                    type="Report"
                    date="February 2025"
                    image="/placeholder.svg?height=200&width=300"
                    icon={<FileText className="h-5 w-5" />}
                    downloadUrl="community-needs-assessment"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="guides">
              <div className="space-y-8">
                <h2 className="text-2xl font-bold mb-6">Guides & Toolkits</h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <ResourceCard
                    title="Community Organizing Toolkit"
                    description="Step-by-step guide for organizing community initiatives and building grassroots support."
                    type="Toolkit"
                    date="June 2025"
                    image="/placeholder.svg?height=200&width=300"
                    icon={<BookOpen className="h-5 w-5" />}
                    downloadUrl="community-organizing-toolkit"
                  />
                  <ResourceCard
                    title="Volunteer Management Guide"
                    description="Best practices for recruiting, training, and retaining effective volunteers."
                    type="Guide"
                    date="May 2025"
                    image="/placeholder.svg?height=200&width=300"
                    icon={<BookOpen className="h-5 w-5" />}
                    downloadUrl="volunteer-management-guide"
                  />
                  <ResourceCard
                    title="Fundraising Strategies"
                    description="Practical strategies and templates for effective fundraising campaigns and donor engagement."
                    type="Guide"
                    date="April 2025"
                    image="/placeholder.svg?height=200&width=300"
                    icon={<BookOpen className="h-5 w-5" />}
                    downloadUrl="fundraising-strategies"
                  />
                  />} downloadUrl="fundraising-strategies" />
                  <ResourceCard
                    title="Grant Writing Handbook"
                    description="Comprehensive guide to writing successful grant proposals for nonprofit organizations."
                    type="Guide"
                    date="March 2025"
                    image="/placeholder.svg?height=200&width=300"
                    icon={<BookOpen className="h-5 w-5" />}
                    downloadUrl="grant-writing-handbook"
                  />
                  <ResourceCard
                    title="Program Evaluation Toolkit"
                    description="Tools and templates for measuring program outcomes and demonstrating impact."
                    type="Toolkit"
                    date="February 2025"
                    image="/placeholder.svg?height=200&width=300"
                    icon={<BookOpen className="h-5 w-5" />}
                    downloadUrl="program-evaluation-toolkit"
                  />
                  <ResourceCard
                    title="Advocacy Action Guide"
                    description="Strategies for effective advocacy and policy change at local and national levels."
                    type="Guide"
                    date="January 2025"
                    image="/placeholder.svg?height=200&width=300"
                    icon={<BookOpen className="h-5 w-5" />}
                    downloadUrl="advocacy-action-guide"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="media">
              <div className="space-y-8">
                <h2 className="text-2xl font-bold mb-6">Media Resources</h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <ResourceCard
                    title="Program Impact Video Series"
                    description="Video testimonials and stories from beneficiaries of our various programs."
                    type="Video"
                    date="2025"
                    image="/placeholder.svg?height=200&width=300"
                    icon={<Video className="h-5 w-5" />}
                    isVideo
                    viewUrl="/resources/videos/program-impact"
                  />

                  <ResourceCard
                    title="Healthcare Initiative Documentary"
                    description="Short documentary about our mobile healthcare clinics and their impact in rural areas."
                    type="Video"
                    date="2024"
                    image="/placeholder.svg?height=200&width=300"
                    icon={<Video className="h-5 w-5" />}
                    isVideo
                    viewUrl="/resources/videos/healthcare-initiative"
                  />

                  <ResourceCard
                    title="Photo Gallery: Community Projects"
                    description="High-resolution photos documenting our community development projects and their outcomes."
                    type="Gallery"
                    date="2025"
                    image="/placeholder.svg?height=200&width=300"
                    icon={<Image className="h-5 w-5" />}
                    viewUrl="/resources/photo-gallery"
                  />

                  <ResourceCard
                    title="Educational Webinar Series"
                    description="Recorded webinars on various topics related to nonprofit management and community development."
                    type="Video"
                    date="2024-2025"
                    image="/placeholder.svg?height=200&width=300"
                    icon={<Video className="h-5 w-5" />}
                    viewUrl="/resources/webinars"
                  />

                  <ResourceCard
                    title="Infographics Collection"
                    description="Visual representations of our impact data and key statistics from our programs."
                    type="Graphics"
                    date="2025"
                    image="/placeholder.svg?height=200&width=300"
                    icon={<FileText className="h-5 w-5" />}
                    viewUrl="/resources/infographics"
                  />

                  <ResourceCard
                    title="Podcast: Community Voices"
                    description="Audio series featuring interviews with community leaders, beneficiaries, and experts."
                    type="Audio"
                    date="2024-2025"
                    image="/placeholder.svg?height=200&width=300"
                    icon={<Video className="h-5 w-5" />}
                    viewUrl="/resources/podcast"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Annual Reports Archive */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Annual Reports Archive</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Access our past annual reports to see our growth and impact over the years
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="relative h-48 w-full mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=150&text=2024 Report"
                  alt="2024 Annual Report"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold mb-2">Annual Report 2024</h3>
              <DownloadButton
                fileType="report"
                fileName="annual-report-2024"
                variant="outline"
                size="sm"
                className="w-full flex items-center justify-center gap-2"
              >
                Download
              </DownloadButton>
            </Card>

            <Card className="p-6 text-center">
              <div className="relative h-48 w-full mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=150&text=2023 Report"
                  alt="2023 Annual Report"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold mb-2">Annual Report 2023</h3>
              <DownloadButton
                fileType="report"
                fileName="annual-report-2023"
                variant="outline"
                size="sm"
                className="w-full flex items-center justify-center gap-2"
              >
                Download
              </DownloadButton>
            </Card>

            <Card className="p-6 text-center">
              <div className="relative h-48 w-full mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=150&text=2022 Report"
                  alt="2022 Annual Report"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold mb-2">Annual Report 2022</h3>
              <DownloadButton
                fileType="report"
                fileName="annual-report-2022"
                variant="outline"
                size="sm"
                className="w-full flex items-center justify-center gap-2"
              >
                Download
              </DownloadButton>
            </Card>

            <Card className="p-6 text-center">
              <div className="relative h-48 w-full mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=150&text=2021 Report"
                  alt="2021 Annual Report"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold mb-2">Annual Report 2021</h3>
              <DownloadButton
                fileType="report"
                fileName="annual-report-2021"
                variant="outline"
                size="sm"
                className="w-full flex items-center justify-center gap-2"
              >
                Download
              </DownloadButton>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link href="/transparency">
              <Button variant="outline">
                View All Annual Reports <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Educational Materials */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Educational Materials</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our foundation develops educational materials on various topics related to our work, including
                  community development, healthcare access, education, and nonprofit management. These resources are
                  available for free to educators, community organizations, and the public.
                </p>
                <p>
                  Materials include lesson plans, worksheets, presentation slides, and interactive activities suitable
                  for different age groups and learning environments.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center justify-between border-b pb-3">
                    <div>
                      <h4 className="font-semibold">Community Health Curriculum</h4>
                      <p className="text-sm">For middle and high school students</p>
                    </div>
                    <DownloadButton
                      fileType="resource"
                      fileName="community-health-curriculum"
                      variant="outline"
                      size="sm"
                    >
                      Download
                    </DownloadButton>
                  </div>

                  <div className="flex items-center justify-between border-b pb-3">
                    <div>
                      <h4 className="font-semibold">Financial Literacy Workshop</h4>
                      <p className="text-sm">For adult learners</p>
                    </div>
                    <DownloadButton
                      fileType="resource"
                      fileName="financial-literacy-workshop"
                      variant="outline"
                      size="sm"
                    >
                      Download
                    </DownloadButton>
                  </div>

                  <div className="flex items-center justify-between border-b pb-3">
                    <div>
                      <h4 className="font-semibold">Environmental Sustainability Guide</h4>
                      <p className="text-sm">For community organizations</p>
                    </div>
                    <DownloadButton
                      fileType="resource"
                      fileName="environmental-sustainability-guide"
                      variant="outline"
                      size="sm"
                    >
                      Download
                    </DownloadButton>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">Leadership Development Activities</h4>
                      <p className="text-sm">For youth programs</p>
                    </div>
                    <DownloadButton
                      fileType="resource"
                      fileName="leadership-development-activities"
                      variant="outline"
                      size="sm"
                    >
                      Download
                    </DownloadButton>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Educational Materials"
                  alt="Educational Materials"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Custom Resources */}
      <section className="py-16 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Resources?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Our team can develop customized resources for your organization, school, or community group.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Request Custom Materials
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

interface ResourceCardProps {
  title: string
  description: string
  type: string
  date: string
  image: string
  icon: React.ReactNode
  downloadUrl?: string
  viewUrl?: string
  isVideo?: boolean
}

function ResourceCard({
  title,
  description,
  type,
  date,
  image,
  icon,
  downloadUrl,
  viewUrl,
  isVideo = false,
}: ResourceCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg border-t-4 border-t-primary/70">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-16 w-16 rounded-full bg-primary/80 flex items-center justify-center text-white shadow-lg">
              <Video className="h-8 w-8" />
            </div>
          </div>
        )}
      </div>
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline" className="flex items-center gap-1 border-primary/30">
            {icon}
            {type}
          </Badge>
          <Badge variant="outline" className="border-primary/30">
            {date}
          </Badge>
        </div>
        <h3 className="text-xl font-bold mb-2 text-primary/90">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-1">{description}</p>
        <div className="mt-auto">
          {downloadUrl && (
            <DownloadButton
              fileType="report"
              fileName={downloadUrl}
              variant="outline"
              className="w-full flex items-center justify-center gap-2 hover:bg-primary/10"
            >
              Download
            </DownloadButton>
          )}
          {viewUrl && (
            <Link href={viewUrl}>
              <Button variant="outline" className="w-full flex items-center justify-center gap-2 hover:bg-primary/10">
                <ArrowRight size={16} />
                View Resource
              </Button>
            </Link>
          )}
          {isVideo && !viewUrl && (
            <Button variant="outline" className="w-full flex items-center justify-center gap-2 hover:bg-primary/10">
              <Video size={16} />
              Watch Video
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
