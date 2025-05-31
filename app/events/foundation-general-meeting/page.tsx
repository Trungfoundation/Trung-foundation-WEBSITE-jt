"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Download, MapPin, Share2, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import RegisterButton from "@/components/register-button"
import DownloadButton from "@/components/download-button"

export default function FoundationGeneralMeetingPage() {
  const event = {
    slug: "foundation-general-meeting",
    title: "Foundation's General Meeting",
    date: "May 18, 2025",
    time: "11:00 AM - 6:00 PM",
    location: "Fairway Hotel, Kampala",
    description:
      "The annual general meeting of Trung Foundation bringing together board members, staff, partners, and stakeholders to review our progress, discuss future initiatives, and strengthen our collective commitment to serving communities in need. This meeting is a crucial opportunity for strategic planning and alignment of our vision for the coming year.",
    image: "/images/foundation-general-meeting-flyer.jpeg",
    capacity: "By invitation",
    additionalInfo:
      "Dress code: Official Green for Trung Foundation members. Lunch and refreshments will be provided. Please bring your membership ID and any relevant reports or materials for discussion.",
    schedule: [
      { time: "11:00 AM", activity: "Arrival and Registration" },
      { time: "11:30 AM", activity: "Opening Remarks" },
      { time: "12:00 PM", activity: "Director's Annual Report" },
      { time: "1:00 PM", activity: "Lunch Break" },
      { time: "2:00 PM", activity: "Guest Speakers" },
      { time: "4:00 PM", activity: "Open Forum and Q&A" },
      { time: "5:30 PM", activity: "Closing Remarks" },
    ],
    speakers: [
      { name: "Andrew Trung Musana", title: "Foundation Director", image: "/images/trung-musana.jpg" },
      { name: "Raul Zihash", title: "Community and Outreach Director", image: "/images/team-3.jpg" },
      { name: "Counsel Aisha", title: "Legal Advisor", image: "/female-lawyer.png" },
      { name: "Ken Wandabusi", title: "Guest of Honor", image: "/male-dignitary.png" },
      { name: "Leonard Ofono", title: "NGO Board Representative, Wakiso", image: "/man-in-classic-suit.png" },
    ],
    isPast: false,
  }

  // Function to handle sharing
  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator
        .share({
          title: event.title,
          text: `Join us for ${event.title} on ${event.date}`,
          url: window.location.href,
        })
        .catch((err) => {
          console.error("Error sharing:", err)
          // Fallback for browsers that don't support the Web Share API
          copyToClipboard(window.location.href)
          alert("Event link copied to clipboard!")
        })
    } else {
      // Fallback for browsers that don't support the Web Share API
      copyToClipboard(window.location.href)
      alert("Event link copied to clipboard!")
    }
  }

  // Function to copy to clipboard
  const copyToClipboard = (text: string) => {
    const textarea = document.createElement("textarea")
    textarea.value = text
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    document.body.removeChild(textarea)
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{event.title}</h1>
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge variant="secondary" className="bg-white/80 text-foreground backdrop-blur-sm flex items-center gap-1">
              <Calendar size={14} />
              {event.date}
            </Badge>
            <Badge variant="secondary" className="bg-white/80 text-foreground backdrop-blur-sm flex items-center gap-1">
              <Clock size={14} />
              {event.time}
            </Badge>
            <Badge variant="secondary" className="bg-white/80 text-foreground backdrop-blur-sm flex items-center gap-1">
              <MapPin size={14} />
              {event.location}
            </Badge>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-between items-center mb-8">
            <Link href="/events">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Events
              </Button>
            </Link>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleShare}>
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
              <DownloadButton fileType="calendar" fileName="foundation-general-meeting" variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Add to Calendar
              </DownloadButton>
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">About This Event</h2>
                <p className="text-muted-foreground mb-6">{event.description}</p>

                <h3 className="text-xl font-bold mb-3">Event Details</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Date</div>
                      <div className="text-muted-foreground">{event.date}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Time</div>
                      <div className="text-muted-foreground">{event.time}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-muted-foreground">{event.location}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Capacity</div>
                      <div className="text-muted-foreground">{event.capacity}</div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">Meeting Agenda</h3>
                <div className="mb-6">
                  <ul className="space-y-2 list-disc pl-5">
                    <li className="text-muted-foreground">
                      <span className="font-medium text-foreground">Annual Progress Review:</span> Comprehensive review
                      of the foundation's activities, achievements, and challenges over the past year.
                    </li>
                    <li className="text-muted-foreground">
                      <span className="font-medium text-foreground">Financial Report:</span> Presentation of the annual
                      financial statements, budget utilization, and funding overview.
                    </li>
                    <li className="text-muted-foreground">
                      <span className="font-medium text-foreground">Strategic Planning:</span> Discussion of the
                      foundation's strategic direction, upcoming initiatives, and long-term goals.
                    </li>
                    <li className="text-muted-foreground">
                      <span className="font-medium text-foreground">Stakeholder Engagement:</span> Opportunities for
                      partners and stakeholders to provide feedback and suggestions.
                    </li>
                    <li className="text-muted-foreground">
                      <span className="font-medium text-foreground">Recognition:</span> Acknowledgment of outstanding
                      contributions by staff, volunteers, and partners.
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-bold mb-3">Event Schedule</h3>
                <ul className="space-y-2 mb-6">
                  {event.schedule.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="font-medium">{item.time}:</span>
                      <span className="text-muted-foreground">{item.activity}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold mb-3">Speakers & Special Guests</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {event.speakers.map((speaker, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-4 border rounded-lg">
                      <div className="font-medium">{speaker.name}</div>
                      <div className="text-sm text-muted-foreground">{speaker.title}</div>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-3">Additional Information</h3>
                <p className="text-muted-foreground mb-6">{event.additionalInfo}</p>

                <div className="bg-muted p-4 rounded-md mb-6">
                  <h4 className="font-medium mb-2">What to Bring</h4>
                  <ul className="space-y-1 list-disc pl-5">
                    <li className="text-muted-foreground">Foundation membership ID</li>
                    <li className="text-muted-foreground">Department reports (if applicable)</li>
                    <li className="text-muted-foreground">Notebook and pen</li>
                    <li className="text-muted-foreground">Business cards for networking</li>
                    <li className="text-muted-foreground">Questions or topics you'd like to discuss</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <RegisterButton eventTitle={event.title} eventDate={event.date} size="lg" className="w-full md:w-auto">
                  Request Invitation
                </RegisterButton>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Topics Section */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Key Topics for Discussion</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Program Updates</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Education initiatives and scholarship program expansion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Healthcare outreach achievements and challenges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Orphan support program developments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Women empowerment initiatives progress</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Community development project outcomes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Strategic Initiatives</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Funding diversification strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Partnership development opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Organizational capacity building</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Program expansion to new regions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Technology integration for improved impact measurement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Previous Meeting Highlights */}
      {/*<section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8">Previous Meeting Highlights</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/pre-general-meeting-flier.png"
                alt="Pre-General Meeting"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                <h3 className="text-white font-bold text-lg">Pre-General Meeting</h3>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/images/workshop-1.jpg" alt="Strategic Planning Session" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                <h3 className="text-white font-bold text-lg">Strategic Planning Session</h3>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/images/training-seminar-1.jpg" alt="Board Meeting" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                <h3 className="text-white font-bold text-lg">Board Meeting</h3>
              </div>
            </div>
          </div>
        </div>
      </section>*/}

      {/* CTA */}
      <section className="py-16 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Our Foundation's Work?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Learn more about our programs and how you can support our mission to empower communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs">
              <Button variant="secondary" size="lg">
                Explore Our Programs
              </Button>
            </Link>
            <Link href="/get-involved">
              <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10">
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
