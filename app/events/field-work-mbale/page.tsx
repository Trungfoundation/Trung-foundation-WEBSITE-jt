"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Download, MapPin, Share2, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import RegisterButton from "@/components/register-button"
import DownloadButton from "@/components/download-button"

export default function FieldWorkMbalePage() {
  const event = {
    slug: "field-work-mbale",
    title: "Field Work in Mbale",
    date: "June 25-30, 2025",
    time: "All Day",
    location: "Mbale, Uganda",
    description:
      "A comprehensive field work initiative focused on supporting children and youth in the Mbale region. Our team will be conducting various activities including feeding programs, distribution of scholastic materials, medical outreach, and youth empowerment workshops. This six-day program aims to make a significant impact on the lives of vulnerable children and youth in the area.",
    image: "/images/field-work-mbale.jpeg",
    capacity: "Volunteers needed",
    additionalInfo:
      "We welcome volunteers to join us for this impactful field work. Transportation will be provided from Kampala. Please bring appropriate clothing for field activities. Accommodation will be arranged for volunteers participating for the full duration.",
    schedule: [
      { time: "Daily", activity: "Feeding the children" },
      { time: "June 25-26", activity: "Distribution of scholastic materials" },
      { time: "June 27-28", activity: "Medical field work" },
      { time: "June 29-30", activity: "Youth empowerment workshops" },
    ],
    speakers: [
      { name: "Andrew Trung Musana", title: "Foundation Director" },
      { name: "Dr. Chaka Barasa", title: "Healthcare Program Coordinator" },
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
      <section className="relative w-full h-[300px] md:h-[400px]">
        <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" priority />
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
              <DownloadButton fileType="calendar" fileName="field-work-mbale" variant="outline">
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

                <h3 className="text-xl font-bold mb-3">Activities</h3>
                <div className="mb-6">
                  <ul className="space-y-2 list-disc pl-5">
                    <li className="text-muted-foreground">
                      <span className="font-medium text-foreground">Feeding the children:</span> Daily nutritious meals
                      will be provided to children in need throughout the program.
                    </li>
                    <li className="text-muted-foreground">
                      <span className="font-medium text-foreground">Distribution of scholastic materials:</span> School
                      supplies, textbooks, and educational resources will be distributed to support children's
                      education.
                    </li>
                    <li className="text-muted-foreground">
                      <span className="font-medium text-foreground">Medical field work:</span> Healthcare professionals
                      will provide basic health check-ups, treatments, and health education to community members.
                    </li>
                    <li className="text-muted-foreground">
                      <span className="font-medium text-foreground">Youth empowerment:</span> Workshops focused on life
                      skills, career guidance, and entrepreneurship to empower local youth.
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

                <h3 className="text-xl font-bold mb-3">Program Leaders</h3>
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
                    <li className="text-muted-foreground">Comfortable clothing suitable for field work</li>
                    <li className="text-muted-foreground">Closed shoes or boots</li>
                    <li className="text-muted-foreground">Hat and sunscreen</li>
                    <li className="text-muted-foreground">Water bottle</li>
                    <li className="text-muted-foreground">Any personal medications</li>
                    <li className="text-muted-foreground">Optional: Camera to document the experience</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <RegisterButton eventTitle={event.title} eventDate={event.date} size="lg" className="w-full md:w-auto">
                  Volunteer for This Event
                </RegisterButton>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Expected Impact</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Short-term Impact</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Provide immediate relief through food distribution to over 500 children</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Equip 300+ students with necessary scholastic materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Offer basic medical care to approximately 400 community members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Conduct empowerment workshops for 150 youth</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Long-term Impact</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Improve school attendance and performance through educational support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Enhance community health awareness and preventive practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Foster youth entrepreneurship and self-reliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Strengthen community relationships and support networks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 
      Previous Field Work Section - Commented out as requested
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8">Previous Field Work Highlights</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/images/medical-camp-2.jpg" alt="Medical Camp" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                <h3 className="text-white font-bold text-lg">Medical Outreach</h3>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/images/school-improvement-1.jpg" alt="School Support" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                <h3 className="text-white font-bold text-lg">Educational Support</h3>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/images/workshop-1.jpg" alt="Youth Workshop" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                <h3 className="text-white font-bold text-lg">Youth Empowerment</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* CTA */}
      <section className="py-16 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Your participation as a volunteer or donor can help us create lasting impact in the lives of children and
            youth in Mbale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <RegisterButton eventTitle={event.title} eventDate={event.date} size="lg">
              Volunteer Now
            </RegisterButton>
            <Link href="/donate">
              <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10">
                Donate to Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
