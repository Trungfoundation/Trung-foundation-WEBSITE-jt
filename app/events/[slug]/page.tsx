"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Download, MapPin, Share2, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import RegisterButton from "@/components/register-button"
import DownloadButton from "@/components/download-button"

// This is a dynamic page that will handle all event detail pages
export default function EventDetailPage({ params }: { params: { slug: string } }) {
  // In a real application, you would fetch the event data based on the slug
  // For now, we'll use a mock event based on the slug
  const event = getEventBySlug(params.slug)

  if (!event) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
        <p className="text-muted-foreground mb-6">The event you're looking for doesn't exist or has been removed.</p>
        <Link href="/events">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Events
          </Button>
        </Link>
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px]">
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
              <Button variant="outline" onClick={() => handleShare(event)}>
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
              <DownloadButton
                fileType="calendar"
                fileName={event.title.toLowerCase().replace(/\s+/g, "-")}
                variant="outline"
              >
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
                  {event.capacity && (
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">Capacity</div>
                        <div className="text-muted-foreground">{event.capacity}</div>
                      </div>
                    </div>
                  )}
                </div>

                {event.schedule && event.schedule.length > 0 && (
                  <>
                    <h3 className="text-xl font-bold mb-3">Event Schedule</h3>
                    <ul className="space-y-2 mb-6">
                      {event.schedule.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="font-medium">{item.time}:</span>
                          <span className="text-muted-foreground">{item.activity}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {event.speakers && event.speakers.length > 0 && (
                  <>
                    <h3 className="text-xl font-bold mb-3">Speakers</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      {event.speakers.map((speaker, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="relative h-12 w-12 rounded-full overflow-hidden">
                            <Image
                              src={speaker.image || "/placeholder.svg?height=50&width=50"}
                              alt={speaker.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-medium">{speaker.name}</div>
                            <div className="text-sm text-muted-foreground">{speaker.title}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                <h3 className="text-xl font-bold mb-3">Additional Information</h3>
                <p className="text-muted-foreground mb-6">{event.additionalInfo}</p>
              </div>

              <div className="mt-8">
                {!event.isPast ? (
                  <RegisterButton
                    eventTitle={event.title}
                    eventDate={event.date}
                    size="lg"
                    className="w-full md:w-auto"
                  >
                    Register for This Event
                  </RegisterButton>
                ) : (
                  <div className="bg-muted p-4 rounded-md text-center">
                    <p className="text-muted-foreground">This event has already taken place.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Events */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Other Events You Might Like</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {getRelatedEvents(params.slug).map((relEvent, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={relEvent.image || "/placeholder.svg"}
                    alt={relEvent.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar size={14} />
                    <span>{relEvent.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{relEvent.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{relEvent.description}</p>
                  <Link href={`/events/${relEvent.slug}`}>
                    <Button
                      variant="outline"
                      className="w-full hover:bg-primary/10 hover:text-primary hover:border-primary/30"
                    >
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Support Our Events?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Help us create more impactful events by volunteering or donating to our cause.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/volunteer">
              <Button variant="secondary" size="lg">
                Volunteer With Us
              </Button>
            </Link>
            <Link href="/donate">
              <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10">
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

// Client-side functions for handling interactions
function handleShare(event: any) {
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

function copyToClipboard(text: string) {
  const textarea = document.createElement("textarea")
  textarea.value = text
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand("copy")
  document.body.removeChild(textarea)
}

// Get related events based on the current event slug
function getRelatedEvents(currentSlug: string) {
  // Get all events
  const allEvents = getAllEvents()

  // Filter out the current event and limit to 3 events
  return allEvents
    .filter((event) => event.slug !== currentSlug)
    .filter((event) => !event.isPast) // Prefer upcoming events
    .slice(0, 3)
}

// Get all events for the application
function getAllEvents() {
  return [
    {
      slug: "annual-fundraising-gala",
      title: "Annual Fundraising Gala",
      date: "November 30, 2025",
      time: "6:00 PM - 10:00 PM",
      location: "Las Vegas Hotel, Bunga Kawuku",
      description:
        "Join us for an elegant evening of celebration and support as we raise funds for our education initiatives. The event will feature dinner, live entertainment, and inspiring stories from program beneficiaries. All proceeds will go directly to supporting our education programs in underserved communities.",
      image: "/images/volunteer-and-women.jpf",
      capacity: "Limited to 200 guests",
      additionalInfo:
        "Formal attire requested. Ticket includes dinner, drinks, and entertainment. Parking is available at the venue.",
      schedule: [
        { time: "6:00 PM", activity: "Arrival and Welcome Reception" },
        { time: "7:00 PM", activity: "Dinner Service" },
        { time: "8:00 PM", activity: "Program and Presentations" },
        { time: "9:00 PM", activity: "Silent Auction Closes" },
        { time: "9:30 PM", activity: "Entertainment and Dancing" },
      ],
      speakers: [
        { name: "Mr. Andrew Trung Musana", title: "Executive Director" },
        { name: "Mr. Raul Zihash", title: "General Secretary" },
      ],
      isPast: false,
    },
    {
      slug: "field-work-mbale",
      title: "Field Work in Mbale",
      date: "June 25-30, 2025",
      time: "All Day",
      location: "Mbale, Uganda",
      description:
        "A comprehensive field work initiative focused on supporting children and youth in the Mbale region. Our team will be conducting various activities including feeding programs, distribution of scholastic materials, medical outreach, and youth empowerment workshops. This six-day program aims to make a significant impact on the lives of vulnerable children and youth in the area.",
      image: "/images/where-we-work.jpeg",
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
        { name: "Raul Zihash", title: "Community and Outreach Director" },
      ],
      isPast: false,
    },
    {
      slug: "foundation-general-meeting",
      title: "Foundation's General Meeting",
      date: "May 18, 2025",
      time: "11:00 AM - 6:00 PM",
      location: "Fairway Hotel, Kampala",
      description:
        "The annual general meeting of Trung Foundation bringing together board members, staff, partners, and stakeholders to review our progress, discuss future initiatives, and strengthen our collective commitment to serving communities in need.",
      image: "/images/foundation-general-meeting-flyer.jpeg",
      capacity: "By invitation",
      additionalInfo:
        "Dress code: Official Green for Trung Foundation members. Lunch and refreshments will be provided.",
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
        { name: "Andrew Trung Musana", title: "Foundation Director" },
        { name: "Raul Zihash", title: "Community and Outreach Director" },
        { name: "Counsel Aisha", title: "Legal Advisor" },
        { name: "Ken Wandabusi", title: "Guest of Honor" },
        { name: "Leonard Ofono", title: "NGO Board Representative, Wakiso" },
      ],
      isPast: false,
    },
    {
      slug: "childrens-christmas-activities",
      title: "Children's Christmas Activities",
      date: "December 10-15, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Various Locations",
      description:
        "Spread holiday joy to children in need through our annual Christmas activities program. This week-long initiative includes a Christmas party, home visits, games and activities, gift distribution, and hospital visits to pray for and support young patients.",
      image: "/images/childrens-christmas-activity.jpeg",
      capacity: "Open to all volunteers",
      additionalInfo:
        "Gift donations are welcome. Please contact our office to contribute gift boxes or supplies for the children's Christmas party.",
      schedule: [
        { time: "December 10-11", activity: "Children's Christmas party" },
        { time: "December 12-13", activity: "Children's home visits" },
        { time: "December 14", activity: "Games and activities" },
        { time: "December 14", activity: "Gift box distribution" },
        { time: "December 15", activity: "Hospital visits to pray for young children and youth" },
      ],
      speakers: [],
      isPast: false,
    },
    {
      slug: "pre-general-meeting",
      title: "Pre-General Meeting",
      date: "April 27, 2025",
      time: "11:00 AM - 6:00 PM",
      location: "Serena Hotel, Kampala",
      description:
        "Preparatory meeting for the Foundation's General Meeting, bringing together key stakeholders to discuss agenda items, review progress reports, and finalize presentations for the upcoming general meeting.",
      image: "/images/first-general-meeting-flyer.jpeg",
      capacity: "By invitation only",
      additionalInfo:
        "This is a closed meeting for board members, department heads, and invited stakeholders. Please bring all required reports and documentation.",
      schedule: [
        { time: "11:00 AM", activity: "Arrival and Registration" },
        { time: "11:30 AM", activity: "Opening Prayer and Introduction" },
        { time: "12:00 PM", activity: "Review of Annual Reports" },
        { time: "1:30 PM", activity: "Lunch Break" },
        { time: "2:30 PM", activity: "Discussion of Strategic Initiatives" },
        { time: "4:00 PM", activity: "Preparation for General Meeting" },
        { time: "5:30 PM", activity: "Closing Remarks" },
      ],
      speakers: [
        { name: "Andrew Trung Musana", title: "Foundation Director" },
        { name: "Raul Zihash", title: "General Secretary" },
      ],
      isPast: true,
    },
  ]
}

// Mock data functions
function getEventBySlug(slug: string) {
  // Get all events
  const allEvents = getAllEvents()

  // Find the event with the matching slug
  return allEvents.find((event) => event.slug === slug)
}
