"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  image: string
  slug: string
  description: string
}

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Foundation's General Meeting",
    date: "June 15, 2025",
    time: "10:00 AM - 1:00 PM",
    location: "Kampala Community Center",
    image: "/images/events.jpg",
    slug: "foundation-general-meeting",
    description:
      "Join us for our annual general meeting where we'll share updates on our programs and plans for the coming year.",
  },
  {
    id: 2,
    title: "Field Work in Mbale",
    date: "June 25-30, 2025",
    time: "All Day",
    location: "Mbale, Uganda",
    image: "/images/field-work-mbale.jpeg",
    slug: "field-work-mbale",
    description:
      "A comprehensive field work initiative focused on supporting children and youth through feeding programs, scholastic materials, medical outreach, and empowerment.",
  },
  {
    id: 3,
    title: "Annual Fundraising Gala",
    date: "November 30, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "Las Vegas Hotel, Bunga kawuku",
    image: "/images/healthcare1.jpg",
    slug: "annual-fundraising-gala",
    description:
      "Join us for an elegant evening of celebration and support as we raise funds for our education initiatives. The event will feature dinner, live entertainment, and inspiring stories from program beneficiaries.",
  },
  {
    id: 4,
    title: "Children's Christmas Activities",
    date: "December 10-15, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Various Locations",
    image: "/images/kids-muzungu.jpg",
    slug: "childrens-christmas-activities",
    description:
      "Spread holiday joy to children in need through our Christmas party, home visits, games, gift distribution, and hospital visits.",
  },
]

export function UpcomingEvents() {
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
            <p className="text-lg text-gray-600 mt-2">Join us in making a difference across Uganda</p>
          </div>
          <Button asChild variant="outline">
            <Link href="/events">
              View All Events <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.slice(0, 3).map((event) => (
            <Link
              href={`/events/${event.slug}`}
              key={event.id}
              className="group"
              onMouseEnter={() => setHoveredEvent(event.id)}
              onMouseLeave={() => setHoveredEvent(null)}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={
                      event.title === "Field Work in Mbale"
                        ? "/images/field-work-mbale.jpeg"
                        : event.title === "Foundation's General Meeting"
                          ? "/images/foundation-general-meeting-flyer.jpeg"
                          : "/images/events.jpg"
                    }
                    alt={event.title}
                    fill
                    className={cn(
                      "object-cover transition-transform duration-500",
                      hoveredEvent === event.id && "scale-110",
                    )}
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-1">{event.description}</p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-emerald-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-emerald-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-emerald-500" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
