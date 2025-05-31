"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, MapPin, Search } from "lucide-react"
import { useState } from "react"
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  getDate,
  isSameDay,
  parseISO,
} from "date-fns"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RegisterButton from "@/components/register-button"

export default function EventsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px]">
        <Image src="/images/events.jpg" alt="Foundation Events" fill className="object-cover" priority />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Events & Activities</h1>
          <p className="text-xl text-white max-w-2xl">
            Join us for fundraisers, workshops, volunteer opportunities, and more
          </p>
        </div>
      </section>

      {/* Events Search & Filter */}
      <section className="py-12 px-4 md:px-6 bg-white border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1">
              <label htmlFor="search-events" className="block text-sm font-medium mb-1">
                Search Events
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input id="search-events" placeholder="Search by keyword..." className="pl-10" />
              </div>
            </div>
            <div className="w-full md:w-48">
              <label htmlFor="event-type" className="block text-sm font-medium mb-1">
                Event Type
              </label>
              <select
                id="event-type"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="all">All Types</option>
                <option value="fundraiser">Fundraiser</option>
                <option value="meeting">Meeting</option>
                <option value="outreach">Outreach</option>
                <option value="holiday">Holiday</option>
              </select>
            </div>
            <div className="w-full md:w-48">
              <label htmlFor="event-location" className="block text-sm font-medium mb-1">
                Location
              </label>
              <select
                id="event-location"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="all">All Locations</option>
                <option value="kampala">Kampala</option>
                <option value="mbale">Mbale</option>
                <option value="various">Various Locations</option>
              </select>
            </div>
            <Button>Filter Events</Button>
          </div>
        </div>
      </section>

      {/* Events Listing */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming">
              <div className="space-y-8">
                {/* Featured Event */}
                <Card className="overflow-hidden border-t-4 border-t-primary/70 transition-all duration-300 hover:shadow-lg">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative h-64 md:h-auto">
                      <Image
                        src="/images/engage-meeting.jpg"
                        alt="Annual Fundraising Gala"
                        fill
                        className="object-cover w-full"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary text-primary-foreground shadow-md">Featured</Badge>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline" className="flex items-center gap-1 border-primary/30">
                          <Calendar size={14} className="text-primary/70" />
                          November 30, 2025
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1 border-primary/30">
                          <Clock size={14} className="text-primary/70" />
                          6:00 PM - 10:00 PM
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1 border-primary/30">
                          <MapPin size={14} className="text-primary/70" />
                          Las Vegas Hotel, Bunga kawuku
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-primary/90">Annual Fundraising Gala</h3>
                      <p className="text-muted-foreground mb-4">
                        Join us for an elegant evening of celebration and support as we raise funds for our education
                        initiatives. The event will feature dinner, live entertainment, and inspiring stories from
                        program beneficiaries.
                      </p>
                      <div className="flex flex-wrap items-center gap-4 mt-auto">
                        <RegisterButton eventTitle="Annual Fundraising Gala" eventDate="November 30, 2025">
                          Register Now
                        </RegisterButton>
                        <Link
                          href="/events/annual-fundraising-gala"
                          className="text-primary flex items-center gap-1 hover:underline font-medium transition-all duration-200 hover:text-primary/80"
                        >
                          Event Details <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Regular Events */}
                <div className="grid md:grid-cols-2 gap-8">
                  <EventCard
                    title="Foundation's General Meeting"
                    description="Annual general meeting bringing together board members, staff, partners, and stakeholders to review progress and discuss future initiatives."
                    date="May 18, 2025"
                    time="11:00 AM - 6:00 PM"
                    location="Fairway Hotel, Kampala"
                    image="/images/first-general-meeting-flyer.jpeg"
                    type="Meeting"
                    slug="foundation-general-meeting"
                  />

                  <EventCard
                    title="Field Work in Mbale"
                    description="A comprehensive field work initiative focused on supporting children and youth through feeding programs, scholastic materials, medical outreach, and empowerment."
                    date="June 25-30, 2025"
                    time="All Day"
                    location="Mbale, Uganda"
                    image="/images/field-work-mbale.jpeg"
                    type="Outreach"
                    slug="field-work-mbale"
                  />

                  <EventCard
                    title="Children's Christmas Activities"
                    description="Spread holiday joy to children in need through our Christmas party, home visits, games, gift distribution, and hospital visits."
                    date="December 10-15, 2025"
                    time="9:00 AM - 5:00 PM"
                    location="Various Locations"
                    image="/images/childrens-christmas-activity.jpeg"
                    type="Holiday"
                    slug="childrens-christmas-activities"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="past">
              <div className="space-y-8">
                <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
                  <Card className="overflow-hidden border-t-4 border-t-gray-300 transition-all duration-300 hover:shadow-lg">
                    <div className="flex flex-col">
                      <div className="relative h-[400px]">
                        <Image
                          src="/images/pre-general-meeting-flier.png"
                          alt="First General Meeting Flyer"
                          fill
                          className="object-contain bg-white w-full"
                        />
                        <div className="absolute top-3 left-3">
                          <Badge variant="outline" className="bg-white/80 text-foreground backdrop-blur-sm">
                            Meeting
                          </Badge>
                        </div>
                        <div className="absolute top-3 right-3">
                          <Badge variant="outline" className="bg-white/80 text-foreground backdrop-blur-sm">
                            Past Event
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="space-y-1 mb-3">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar size={14} className="text-primary/70" />
                            <span>April 27, 2025</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock size={14} className="text-primary/70" />
                            <span>11:00 AM - 6:00 PM</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin size={14} className="text-primary/70" />
                            <span>Serena Hotel, Kampala</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-primary/90">Pre-General Meeting</h3>
                        <p className="text-muted-foreground mb-4">
                          Preparatory meeting for the Foundation's General Meeting, bringing together key stakeholders
                          to discuss agenda items, review progress reports, and finalize presentations for the upcoming
                          general meeting.
                        </p>
                        <Link href="/events/pre-general-meeting">
                          <Button
                            variant="outline"
                            className="w-full hover:bg-primary/10 hover:text-primary hover:border-primary/30"
                          >
                            View Recap
                          </Button>
                        </Link>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Calendar */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Event Calendar</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
            View our upcoming events by month to plan your participation
          </p>

          <EventCalendar />
        </div>
      </section>

      {/* Host an Event */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Host Your Own Fundraiser</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Want to make a difference? Host your own fundraising event to support our foundation's programs.
                  Whether it's a dinner party, a sports tournament, or a virtual challenge, your creativity can help
                  raise funds for causes you care about.
                </p>
                <p>
                  We provide resources, guidance, and promotional support to help make your event a success. Our team
                  will work with you to ensure your fundraiser aligns with our mission and maximizes impact.
                </p>
                <div className="pt-4">
                  <Link href="/contact">
                    <Button>Learn About Hosting</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/images/volunteers-working.JPG"
                  alt="Host a Fundraiser"
                  fill
                  className="object-cover object-top w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Join us at our next event and be part of creating positive change in our communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#upcoming-events">
              <Button variant="secondary" size="lg">
                View Upcoming Events
              </Button>
            </Link>
            <Link href="/volunteer">
              <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10">
                Volunteer With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

interface EventCardProps {
  title: string
  description: string
  date: string
  time: string
  location: string
  image: string
  type: string
  slug: string
  isPast?: boolean
}

function EventCard({ title, description, date, time, location, image, type, slug, isPast = false }: EventCardProps) {
  return (
    <Card
      className={`overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg ${isPast ? "" : "border-t-4 border-t-primary/70"}`}
    >
      <div className="relative h-48">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover w-full ${isPast ? "grayscale" : ""}`}
        />
        <div className="absolute top-3 left-3">
          <Badge
            variant={isPast ? "outline" : "secondary"}
            className={isPast ? "bg-white/80 text-foreground backdrop-blur-sm" : "shadow-sm"}
          >
            {type}
          </Badge>
        </div>
        {isPast && (
          <div className="absolute top-3 right-3">
            <Badge variant="outline" className="bg-white/80 text-foreground backdrop-blur-sm">
              Past Event
            </Badge>
          </div>
        )}
      </div>
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="space-y-1 mb-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar size={14} className="text-primary/70" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock size={14} className="text-primary/70" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={14} className="text-primary/70" />
            <span>{location}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-primary/90">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-1">{description}</p>
        <div className="mt-auto">
          {isPast ? (
            <Link href={`/events/${slug}`}>
              <Button
                variant="outline"
                className="w-full hover:bg-primary/10 hover:text-primary hover:border-primary/30"
              >
                View Recap
              </Button>
            </Link>
          ) : (
            <div className="flex flex-col gap-2">
              <RegisterButton eventTitle={title} eventDate={date} className="w-full shadow-sm">
                Register Now
              </RegisterButton>
              <Link href={`/events/${slug}`}>
                <Button
                  variant="outline"
                  className="w-full hover:bg-primary/10 hover:text-primary hover:border-primary/30"
                >
                  View Details
                </Button>
              </Link>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

function EventCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 4, 1)) // May 2025

  // Updated events data with only the specified events
  const events = [
    // Past events
    {
      id: 1,
      title: "Pre-General Meeting",
      date: "2025-04-27",
      slug: "pre-general-meeting",
      isPast: true,
      location: "Serena Hotel, Kampala",
    },

    // Upcoming events
    {
      id: 2,
      title: "Foundation's General Meeting",
      date: "2025-05-18",
      slug: "foundation-general-meeting",
      isPast: false,
      location: "Fairway Hotel, Kampala",
    },
    {
      id: 3,
      title: "Field Work in Mbale",
      date: "2025-06-25",
      slug: "field-work-mbale",
      isPast: false,
      location: "Mbale, Uganda",
    },
    {
      id: 4,
      title: "Field Work in Mbale",
      date: "2025-06-26",
      slug: "field-work-mbale",
      isPast: false,
      location: "Mbale, Uganda",
    },
    {
      id: 5,
      title: "Field Work in Mbale",
      date: "2025-06-27",
      slug: "field-work-mbale",
      isPast: false,
      location: "Mbale, Uganda",
    },
    {
      id: 6,
      title: "Field Work in Mbale",
      date: "2025-06-28",
      slug: "field-work-mbale",
      isPast: false,
      location: "Mbale, Uganda",
    },
    {
      id: 7,
      title: "Field Work in Mbale",
      date: "2025-06-29",
      slug: "field-work-mbale",
      isPast: false,
      location: "Mbale, Uganda",
    },
    {
      id: 8,
      title: "Field Work in Mbale",
      date: "2025-06-30",
      slug: "field-work-mbale",
      isPast: false,
      location: "Mbale, Uganda",
    },
    {
      id: 9,
      title: "Annual Fundraising Gala",
      date: "2025-11-30",
      slug: "annual-fundraising-gala",
      isPast: false,
      location: "Las Vegas Hotel, Bunga Kawuku",
    },
    {
      id: 10,
      title: "Children's Christmas Activities",
      date: "2025-12-10",
      slug: "childrens-christmas-activities",
      isPast: false,
      location: "Various Locations",
    },
    {
      id: 11,
      title: "Children's Christmas Activities",
      date: "2025-12-11",
      slug: "childrens-christmas-activities",
      isPast: false,
      location: "Various Locations",
    },
    {
      id: 12,
      title: "Children's Christmas Activities",
      date: "2025-12-12",
      slug: "childrens-christmas-activities",
      isPast: false,
      location: "Various Locations",
    },
    {
      id: 13,
      title: "Children's Christmas Activities",
      date: "2025-12-13",
      slug: "childrens-christmas-activities",
      isPast: false,
      location: "Various Locations",
    },
    {
      id: 14,
      title: "Children's Christmas Activities",
      date: "2025-12-14",
      slug: "childrens-christmas-activities",
      isPast: false,
      location: "Various Locations",
    },
    {
      id: 15,
      title: "Children's Christmas Activities",
      date: "2025-12-15",
      slug: "childrens-christmas-activities",
      isPast: false,
      location: "Various Locations",
    },
  ]

  const handlePreviousMonth = () => {
    setCurrentDate((prevDate) => subMonths(prevDate, 1))
  }

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => addMonths(prevDate, 1))
  }

  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(currentDate)
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd })

  // Get events for the current month
  const eventsInMonth = events.filter((event) => {
    const eventDate = parseISO(event.date)
    return isSameMonth(eventDate, currentDate)
  })

  // Function to get events for a specific day
  const getEventsForDay = (day) => {
    return eventsInMonth.filter((event) => isSameDay(parseISO(event.date), day))
  }

  // Function to download calendar for current month
  const handleDownloadCalendar = () => {
    const monthName = format(currentDate, "MMMM-yyyy").toLowerCase()
    const fileName = `foundation-events-${monthName}`

    // Generate iCalendar content
    let icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "CALSCALE:GREGORIAN",
      "PRODID:-//Trung Foundation//Events Calendar//EN",
    ]

    // Add each event to the calendar
    eventsInMonth.forEach((event) => {
      const eventDate = parseISO(event.date)
      const nextDay = new Date(eventDate)
      nextDay.setDate(nextDay.getDate() + 1)

      const startDate = format(eventDate, "yyyyMMdd")
      const endDate = format(nextDay, "yyyyMMdd")

      icsContent = [
        ...icsContent,
        "BEGIN:VEVENT",
        `SUMMARY:${event.title}`,
        `DTSTART:${startDate}`,
        `DTEND:${endDate}`,
        `LOCATION:${event.location}`,
        `DESCRIPTION:Event details for ${event.title}. Visit our website for more information.`,
        "STATUS:CONFIRMED",
        "SEQUENCE:0",
        `URL:https://trungfoundation.org/events/${event.slug}`,
        "END:VEVENT",
      ]
    })

    icsContent.push("END:VCALENDAR")

    // Create and download the file
    const icsData = icsContent.join("\r\n")
    const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${fileName}.ics`
    document.body.appendChild(a)
    a.click()
    window.URL.revokeObjectURL(url)
    document.body.removeChild(a)
  }

  return (
    <Card className="p-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold">{format(currentDate, "MMMM yyyy")}</h3>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        <div className="text-sm font-medium text-muted-foreground">Sun</div>
        <div className="text-sm font-medium text-muted-foreground">Mon</div>
        <div className="text-sm font-medium text-muted-foreground">Tue</div>
        <div className="text-sm font-medium text-muted-foreground">Wed</div>
        <div className="text-sm font-medium text-muted-foreground">Thu</div>
        <div className="text-sm font-medium text-muted-foreground">Fri</div>
        <div className="text-sm font-medium text-muted-foreground">Sat</div>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {/* Fill in days from previous month to start on correct day of week */}
        {Array.from({ length: monthStart.getDay() }).map((_, index) => (
          <div key={`prev-${index}`} className="h-24 p-1 border rounded-md bg-muted/50"></div>
        ))}

        {/* Current month days */}
        {daysInMonth.map((day) => {
          const dayEvents = getEventsForDay(day)
          const hasEvents = dayEvents.length > 0
          const date = getDate(day)

          return (
            <div
              key={day.toString()}
              className={`h-24 p-1 border rounded-md relative ${hasEvents ? "bg-primary/10" : ""}`}
            >
              {date}

              {/* Display events for this day */}
              <div className="absolute bottom-1 left-1 right-1 flex flex-col gap-1 overflow-hidden">
                {dayEvents.slice(0, 2).map((event) => (
                  <Link key={event.id} href={`/events/${event.slug}`}>
                    <div
                      className={`text-xs p-1 rounded truncate ${
                        event.isPast ? "bg-gray-200 text-gray-700" : "bg-primary text-primary-foreground"
                      }`}
                    >
                      {event.title}
                    </div>
                  </Link>
                ))}

                {/* Show indicator if there are more events */}
                {dayEvents.length > 2 && (
                  <div className="text-xs text-center text-muted-foreground">+{dayEvents.length - 2} more</div>
                )}
              </div>
            </div>
          )
        })}

        {/* Fill in days from next month to complete the grid */}
        {Array.from({ length: 6 - monthEnd.getDay() }).map((_, index) => (
          <div key={`next-${index}`} className="h-24 p-1 border rounded-md bg-muted/50"></div>
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <Button variant="outline" size="sm" onClick={handlePreviousMonth}>
          Previous Month
        </Button>
        <Button variant="outline" size="sm" onClick={handleDownloadCalendar}>
          Download {format(currentDate, "MMMM")} Calendar
        </Button>
        <Button variant="outline" size="sm" onClick={handleNextMonth}>
          Next Month
        </Button>
      </div>
    </Card>
  )
}
