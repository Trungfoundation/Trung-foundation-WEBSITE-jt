"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Download, MapPin, Share2, Users, Heart, DollarSign } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import RegisterButton from "@/components/register-button"
import DownloadButton from "@/components/download-button"

export default function AnnualFundraisingGalaPage() {
  const event = {
    slug: "annual-fundraising-gala",
    title: "Annual Fundraising Gala",
    date: "November 30, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "Las Vegas Hotel, Bunga Kawuku",
    description:
      "Join us for an elegant evening of celebration and support as we raise funds for our education initiatives. The event will feature dinner, live entertainment, and inspiring stories from program beneficiaries. All proceeds will go directly to supporting our education programs in underserved communities, helping to provide quality education, school supplies, and scholarships to children in need.",
    image: "/images/first-general-meeting-photo.jpg",
    capacity: "Limited to 200 guests",
    additionalInfo:
      "Formal attire requested. Ticket includes dinner, drinks, and entertainment. Parking is available at the venue. For table reservations or sponsorship opportunities, please contact us at Trungmusana@gmail.com.",
    schedule: [
      { time: "6:00 PM", activity: "Arrival and Welcome Reception" },
      { time: "7:00 PM", activity: "Dinner Service" },
      { time: "8:00 PM", activity: "Program and Presentations" },
      { time: "9:00 PM", activity: "Silent Auction Closes" },
      { time: "9:30 PM", activity: "Entertainment and Dancing" },
    ],
    speakers: [
      { name: "Mr. Andrew Trung Musana", title: "Executive Director", image: "/images/trung-musana.jpg" },
      { name: "Mr. Raul Zihash", title: "Community and Outreach Director", image: "/images/raul-zihash-portrait.jpeg" },
    ],
    isPast: false,
    ticketOptions: [
      { name: "Individual Ticket", price: "$100", description: "Single admission with dinner and entertainment" },
      { name: "Couple Ticket", price: "$180", description: "Admission for two with dinner and entertainment" },
      {
        name: "Table Sponsor",
        price: "$1,000",
        description: "Table for 8 guests with premium seating and recognition",
      },
      { name: "Silver Sponsor", price: "$2,500", description: "Table for 10, recognition, and program advertisement" },
      {
        name: "Gold Sponsor",
        price: "$5,000",
        description: "VIP table for 10, prominent recognition, and exclusive benefits",
      },
    ],
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
          src="/images/volunteer-and-women.jpg"
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
              <DownloadButton fileType="calendar" fileName="annual-fundraising-gala" variant="outline">
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

                <h3 className="text-xl font-bold mb-3">Gala Highlights</h3>
                <div className="mb-6">
                  <ul className="space-y-2 list-disc pl-5">
                    <li className="text-muted-foreground">
                      <span className="font-medium text-foreground">Gourmet Dinner:</span> Enjoy a delicious
                      multi-course meal prepared by top chefs.
                    </li>
                    <li className="text-muted-foreground">
                      <span className="font-medium text-foreground">Live Entertainment:</span> Experience captivating
                      performances throughout the evening.
                    </li>
                    <li className="text-muted-foreground">
                      <span className="font-medium text-foreground">Silent Auction:</span> Bid on unique items and
                      experiences donated by our generous sponsors.
                    </li>
                    <li className="text-muted-foreground">
                      <span className="font-medium text-foreground">Beneficiary Stories:</span> Hear directly from those
                      whose lives have been changed by our programs.
                    </li>
                    <li className="text-muted-foreground">
                      <span className="font-medium text-foreground">Networking:</span> Connect with like-minded
                      individuals passionate about community development.
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

                <h3 className="text-xl font-bold mb-3">Featured Speakers</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {event.speakers.map((speaker, index) => (
                    <div key={index} className="flex flex-col gap-2 p-4 border rounded-lg">
                      <div>
                        <div className="font-medium text-lg">{speaker.name}</div>
                        <div className="text-sm text-muted-foreground">{speaker.title}</div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {index === 0
                            ? "Will present on the foundation's achievements and vision for the future."
                            : "Will share stories from our community outreach programs and their impact."}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-3">Ticket Options</h3>
                <div className="space-y-4 mb-6">
                  {event.ticketOptions.map((option, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 border rounded-md hover:border-primary/50 hover:bg-primary/5 transition-colors"
                    >
                      <DollarSign className="h-5 w-5 text-primary mt-0.5" />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div className="font-medium">{option.name}</div>
                          <div className="font-bold text-primary">{option.price}</div>
                        </div>
                        <div className="text-sm text-muted-foreground">{option.description}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-3">Additional Information</h3>
                <p className="text-muted-foreground mb-6">{event.additionalInfo}</p>

                <div className="bg-muted p-4 rounded-md mb-6">
                  <h4 className="font-medium mb-2">Sponsorship Opportunities</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Become a sponsor and gain visibility for your organization while supporting our mission. Various
                    sponsorship levels are available with different benefits and recognition opportunities. Contact us
                    at Trungmusana@gmail.com for a detailed sponsorship package.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <RegisterButton eventTitle={event.title} eventDate={event.date} size="lg" className="w-full md:w-auto">
                  Purchase Tickets
                </RegisterButton>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Impact Section */}
      {/*<section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Your Support Makes a Difference</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <p className="text-muted-foreground">
                Funds raised will provide scholarships, school supplies, and educational resources to children in need.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-muted-foreground">
                Your support helps strengthen communities through development projects and empowerment programs.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <DollarSign className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-muted-foreground">
                Contributions enable us to develop sustainable programs that create lasting change in communities.
              </p>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Silent Auction Preview */}
      {/*<section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8">Silent Auction Preview</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
            Preview some of the exciting items that will be available in our silent auction. More items will be revealed
            at the event!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden border">
              <Image src="/luxury-vacation-package.png" alt="Luxury Vacation Package" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                <h3 className="text-white font-bold text-lg">Luxury Vacation Package</h3>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden border">
              <Image src="/fine-dining.png" alt="Fine Dining Experience" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                <h3 className="text-white font-bold text-lg">Fine Dining Experience</h3>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden border">
              <Image src="/placeholder.svg?key=m7vqr" alt="African Art Collection" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                <h3 className="text-white font-bold text-lg">African Art Collection</h3>
              </div>
            </div>
          </div>
        </div>
      </section>*/}

      {/* CTA */}
      <section className="py-16 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Attend But Want to Support?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Even if you can't join us at the gala, you can still make a difference by donating to our cause.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button variant="secondary" size="lg">
                Make a Donation
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10">
                Contact for Sponsorship
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
