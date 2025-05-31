"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Download, MapPin, Share2, Users, Gift, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import RegisterButton from "@/components/register-button"
import DownloadButton from "@/components/download-button"

export default function ChristmasActivitiesPage() {
  const event = {
    slug: "childrens-christmas-activities",
    title: "Children's Christmas Activities",
    date: "December 10-15, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Various Locations",
    description:
      "Spread holiday joy to children in need through our annual Christmas activities program. This week-long initiative includes a Christmas party, home visits, games and activities, gift distribution, and hospital visits to pray for and support young patients. Join us in making this holiday season special for children who might otherwise miss out on the joy and magic of Christmas.",
    image: "images/childrens-christmas-activity.jpeg",
    capacity: "Open to all volunteers",
    additionalInfo:
      "Gift donations are welcome. Please contact our office to contribute gift boxes or supplies for the children's Christmas party. Volunteers can participate for the entire week or select specific days based on their availability.",
    schedule: [
      { time: "December 10-11", activity: "Children's Christmas party" },
      { time: "December 12-13", activity: "Children's home visits" },
      { time: "December 14", activity: "Games and activities" },
      { time: "December 14", activity: "Gift box distribution" },
      { time: "December 15", activity: "Hospital visits to pray for young children and youth" },
    ],
    locations: [
      { name: "Main Christmas Party", address: "Trung Foundation Community Center, Kampala", date: "December 10-11" },
      { name: "Children's Homes", address: "Various orphanages in Kampala area", date: "December 12-13" },
      { name: "Community Games", address: "Local school grounds, Wakiso District", date: "December 14" },
      { name: "Hospital Visits", address: "Children's Ward, Mulago Hospital", date: "December 15" },
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
        <Image
          src="/images/childrens-christmas-activity.jpeg"
          alt="Children's Christmas Activities"
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
              <DownloadButton fileType="calendar" fileName="childrens-christmas-activities" variant="outline">
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

                <h3 className="text-xl font-bold mb-3">Activities Overview</h3>
                <div className="mb-6">
                  <ul className="space-y-2 list-disc pl-5">
                    <li className="text-muted-foreground">
                      <span className="font-medium text-foreground">Christmas Party:</span> A festive celebration with
                      music, games, food, and entertainment for children from various communities.
                    </li>
                    <li className="text-muted-foreground">
                      <span className="font-medium text-foreground">Home Visits:</span> Bringing Christmas cheer to
                      children in orphanages and vulnerable households through personalized visits.
                    </li>
                    <li className="text-muted-foreground">
                      <span className="font-medium text-foreground">Games and Activities:</span> Organized sports, arts
                      and crafts, and educational activities to engage children in fun and learning.
                    </li>
                    <li className="text-muted-foreground">
                      <span className="font-medium text-foreground">Gift Distribution:</span> Providing Christmas gifts
                      to children who might otherwise not receive any during the holiday season.
                    </li>
                    <li className="text-muted-foreground">
                      <span className="font-medium text-foreground">Hospital Visits:</span> Bringing comfort, prayers,
                      and small gifts to children spending the holidays in hospital care.
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

                <h3 className="text-xl font-bold mb-3">Locations</h3>
                <div className="space-y-4 mb-6">
                  {event.locations.map((location, index) => (
                    <div key={index} className="p-4 border rounded-md">
                      <div className="font-medium text-lg">{location.name}</div>
                      <div className="text-sm text-muted-foreground">{location.address}</div>
                      <div className="text-sm text-primary mt-1">{location.date}</div>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-3">How You Can Help</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3 p-3 border rounded-md hover:border-primary/50 hover:bg-primary/5 transition-colors">
                    <Gift className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Donate Gifts</div>
                      <p className="text-sm text-muted-foreground">
                        Contribute new toys, books, school supplies, or clothing for children of various ages. Gift
                        boxes can be dropped off at our office or we can arrange pickup.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 border rounded-md hover:border-primary/50 hover:bg-primary/5 transition-colors">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Volunteer Your Time</div>
                      <p className="text-sm text-muted-foreground">
                        Help organize activities, wrap gifts, distribute presents, or participate in home and hospital
                        visits. You can volunteer for specific days or the entire week.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 border rounded-md hover:border-primary/50 hover:bg-primary/5 transition-colors">
                    <Heart className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Sponsor a Child's Christmas</div>
                      <p className="text-sm text-muted-foreground">
                        For $25, you can sponsor a complete Christmas experience for one child, including gifts, food,
                        and participation in all activities.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">Additional Information</h3>
                <p className="text-muted-foreground mb-6">{event.additionalInfo}</p>

                <div className="bg-muted p-4 rounded-md mb-6">
                  <h4 className="font-medium mb-2">What to Bring as a Volunteer</h4>
                  <ul className="space-y-1 list-disc pl-5">
                    <li className="text-muted-foreground">
                      Comfortable clothing appropriate for interacting with children
                    </li>
                    <li className="text-muted-foreground">Water bottle and personal items</li>
                    <li className="text-muted-foreground">Energy and enthusiasm for working with children</li>
                    <li className="text-muted-foreground">
                      Any special skills you'd like to share (music, storytelling, face painting, etc.)
                    </li>
                    <li className="text-muted-foreground">Camera to capture memories (with appropriate permission)</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <RegisterButton eventTitle={event.title} eventDate={event.date} size="lg" className="flex-1">
                  Volunteer for This Event
                </RegisterButton>
                <Link href="/donate">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <Gift className="mr-2 h-4 w-4" />
                    Donate Gifts
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">The Impact of Your Support</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Gift className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">500+</h3>
                <p className="text-muted-foreground">Children received gifts last year</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">50+</h3>
                <p className="text-muted-foreground">Volunteers participated</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">8</h3>
                <p className="text-muted-foreground">Communities reached</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              "The joy on the children's faces when they receive their gifts is priceless. For many, it's the only
              Christmas present they'll receive, and it means the world to them."
            </p>
            <p className="font-medium mt-2">— Andrew Trung Musana, Foundation Director</p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      {/* <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8">Memories from Previous Years</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-40 md:h-60 rounded-lg overflow-hidden">
              <Image
                src="/images/christmas-party.jpeg"
                alt="Children's Christmas Activities"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 md:h-60 rounded-lg overflow-hidden">
              <Image
                src="/images/christmas-party.jpeg"
                alt="Children's Christmas Activities"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 md:h-60 rounded-lg overflow-hidden">
              <Image
                src="/images/christmas-party.jpeg"
                alt="Children's Christmas Activities"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 md:h-60 rounded-lg overflow-hidden">
              <Image
                src="/images/christmas-party.jpeg"
                alt="Children's Christmas Activities"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>*/}

      {/* CTA */}
      <section className="py-16 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Help Us Spread Christmas Joy</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Together, we can make this holiday season special for children who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <RegisterButton eventTitle={event.title} eventDate={event.date} size="lg" variant="secondary">
              Volunteer Now
            </RegisterButton>
            <Link href="/donate">
              <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10">
                Make a Donation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
