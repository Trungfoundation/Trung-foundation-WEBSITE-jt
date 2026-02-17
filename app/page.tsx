"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"

import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import NewsletterForm from "@/components/newsletter-form"
import ImpactCounter from "@/components/impact-counter"
import FeaturedProgram from "@/components/featured-program"
import { UpcomingEvents } from "@/components/upcoming-events"

export default function Home() {
  const [api, setApi] = useState<any>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const [partnersApi, setPartnersApi] = useState<any>(null)
  const partnersIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Function to start partners carousel autoplay
  const startPartnersAutoplay = () => {
    if (partnersIntervalRef.current) {
      clearInterval(partnersIntervalRef.current)
    }

    partnersIntervalRef.current = setInterval(() => {
      if (partnersApi) {
        partnersApi.scrollNext()
      }
    }, 2000)
  }

  // Set up auto-play when the carousel API is available
  useEffect(() => {
    if (!api) return

    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    // Set up new interval for auto-play
    intervalRef.current = setInterval(() => {
      api.scrollNext()
    }, 5000)

    // Clean up interval on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [api])

  // Set up auto-play for partners carousel
  useEffect(() => {
    if (!partnersApi) return

    startPartnersAutoplay()

    // Clean up interval on unmount
    return () => {
      if (partnersIntervalRef.current) {
        clearInterval(partnersIntervalRef.current)
      }
    }
  }, [partnersApi])

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section with Carousel */}
      <section className="relative w-full">
        <Carousel className="w-full" setApi={setApi} opts={{ loop: true }}>
          <CarouselContent>
            {/*   <CarouselItem>
              <div className="relative h-[500px] w-full">
                <Image
                  src="/images/cover.jpg"
                  alt="Children in a classroom"
                  fill
                  className="object-cover brightness-[0.7]"
                  priority
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Empowering Communities</h1>
                  <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
                    Building a better future through education, healthcare, and community development
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/donate">
                      <Button size="lg" className="bg-primary hover:bg-primary/90">
                        Donate Now
                      </Button>
                    </Link>
                    <Link href="/programs">
                      <Button
                        size="lg"
                        variant="outline"
                        className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                      >
                        Our Programs
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-[500px] w-full">
                <Image
                  src="/images/volunteer.jpg"
                  alt="Women empowerment program"
                  fill
                  className="object-cover brightness-[0.7]"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Empowering Women</h1>
                  <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
                    Supporting women entrepreneurs and leaders in our communities
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/programs/women-empowerment">
                      <Button size="lg" className="bg-primary hover:bg-primary/90">
                        Learn More
                      </Button>
                    </Link>
                    <Link href="/blog">
                      <Button
                        size="lg"
                        variant="outline"
                        className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                      >
                        Success Stories
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>*/}
            <CarouselItem>
              <div className="relative h-[500px] w-full">
                <Image
                  src="/images/trung-wallpaper-2.jpg"
                  alt="Trung Foundation Team"
                  fill
                  className="object-cover brightness-[0.7]"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <h1 className="text-4xl md:text-5xl lg:text-3xl font-bold text-white mb-4">We Give Hope</h1>
                  <p className="text-xl md:text-1xl text-white mb-8 max-w-1xl">
                    We give hope, we give love, we give the smile
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/about">
                      <Button size="lg" className="bg-primary hover:bg-primary/90">
                        About Us
                      </Button>
                    </Link>
                    <Link href="/get-involved">
                      <Button
                        size="lg"
                        variant="outline"
                        className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                      >
                        Get Involved
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
             <CarouselItem>
              <div className="relative h-[500px] w-full">
                <Image
                  src="/images/leaders.JPG"
                  alt="Trung Foundation leaders"
                  fill
                  className="object-cover brightness-[0.7]"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <h1 className="text-4xl md:text-5xl lg:text-3xl font-bold text-white mb-4">We Give Hope</h1>
                  <p className="text-xl md:text-1xl text-white mb-8 max-w-1xl">
                    We give hope, we give love, we give the smile
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/about">
                      <Button size="lg" className="bg-primary hover:bg-primary/90">
                        About Us
                      </Button>
                    </Link>
                    <Link href="/get-involved">
                      <Button
                        size="lg"
                        variant="outline"
                        className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                      >
                        Get Involved
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          {/*<div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
            <CarouselPrevious className="bg-white/20 hover:bg-white/40 backdrop-blur-sm" />
          </div>
         <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
            <CarouselNext className="bg-white/20 hover:bg-white/40 backdrop-blur-sm" />
          </div>*/}
        </Carousel>
      </section>

      {/* Director's Message */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-64 h-64 rounded-full border-4 border-primary overflow-hidden relative">
                <Image
                  src="/images/trung-musana.jpg"
                  alt="Foundation Director"
                  width={256}
                  height={256}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Director's Message</h2>
              <div className="text-lg text-muted-foreground mb-6">
                <p className="mb-4">
                  "Our foundation stands on the belief that every individual deserves the opportunity to thrive. Through
                  our programs in education, healthcare, and community development, we're committed to creating lasting
                  change in the communities we serve."
                </p>
                <p>
                  "We invite you to join us in this journey of transformation. Together, we can build a more equitable
                  and sustainable future for all."
                </p>
              </div>
              <div className="font-semibold">Andrew Trung Musana</div>
              <div className="text-muted-foreground">Executive Director</div>
            </div>
          </div>
        </div>
      </section>

       </section>

      {/* Director's Biography */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 flex justify-center">
              {/* <div className="w-64 h-64 rounded-full border-4 border-primary overflow-hidden relative">
                <Image
                  src="/images/trung-musana.jpg"
                  alt="Foundation Director"
                  width={256}
                  height={256}
                  className="object-cover"
                  priority
                />
              </div>*/}
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Director's Biography</h2>
              <div className="text-lg text-muted-foreground mb-6">
                <p className="mb-4">
                  "Andrew Trung musana is a Dynamic and result-driven professional with a blend of law and IT expertise, leveraging experience in the NGO sector since 2019.
                  Trung is highly skilled at driving projects, managing stakeholders, and levearaging Tech for social impact.
                  Currently, Trung is a Ugandan diplomat serving as a Country representative at Best diplomats and as the the CEO and founding Director of Trung foundation uganda.
                </p>
                <p>
                Andrew Trung has acquired awards such as;
                  1. Certificate of appreciation  from Best Diplomats Malaysia, a policy making arm of the UN (Focusing On SDG's)
                  2. Certificate of Prticipation from Best Diplomats, Dubai (2025)
                  3. Diploma in IT, from Makerere University, 2018
                  4. Diploma in Law (Refugee law project) Makerere University, 2015
                  5. Uganda Advanced Certificate of Education from Newcastle High school, kansanga (2014-2016)
                  7. Uganda Certificate of Education from Kawempe Muslim Secondary School (2010-2013)
                  "
                </p>
                {/* <p>
                  "We invite you to join us in this journey of transformation. Together, we can build a more equitable
                  and sustainable future for all."
                </p>
              </div>
              <div className="font-semibold">Andrew Trung Musana</div>
              <div className="text-muted-foreground">Executive Director</div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ImpactCounter number={1780} label="Lives Impacted" />
            <ImpactCounter number={36} label="Projects Completed" />
            <ImpactCounter number={13} label="Communities Served" />
            <ImpactCounter number={6} label="Years of Service" />
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Our Programs</h2>
            <Link href="/programs" className="text-primary flex items-center gap-1 hover:underline">
              View All Programs <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeaturedProgram
              title="Education Initiative"
              description="Providing quality education and learning resources to underserved communities."
              image="/images/trund-education-2.jpg"
              link="/programs/education"
            />
            <FeaturedProgram
              title="Healthcare Access"
              description="Improving access to essential healthcare services and preventive care."
              image="/images/healthcare-access-clinic.jpeg"
              link="/programs/healthcare"
            />
            <FeaturedProgram
              title="Women Empowerment"
              description="Supporting women through skills training, mentorship, and entrepreneurship."
              image="/images/we-give-our-best.jpg"
              link="/programs/women-empowerment"
            />
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <UpcomingEvents />

      {/* Newsletter Subscription */}
      <section className="py-16 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-8">Subscribe to our newsletter.</p>
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* Orphanage Anthem */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8">ORPHANAGE ANTHEM</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="hidden md:block md:w-1/4">
              <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/kids-play.jpg"
                  alt="Children playing"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="md:w-2/4">
              <div className="bg-muted/30 p-8 rounded-lg border border-muted">
                <div className="prose prose-lg mx-auto text-center">
                  <p className="mb-6">
                    We save the children
                    <br />
                    We save the orphans
                    <br />
                    Lord save the future of the orphans
                  </p>

                  <p className="mb-6">
                    We believe in You
                    <br />
                    We trust in You
                    <br />
                    With all our hearts
                  </p>

                  <p className="mb-6">
                    And God knew us
                    <br />
                    Gave us the children
                    <br />
                    He loves them all
                    <br />
                    He loves everyone
                    <br />
                    Embrace us all
                    <br />
                    Brought us to earth
                  </p>

                  <p className="mb-6">
                    And now God gave us orphanage first
                    <br />
                    To bring Hope
                    <br />
                    In this world
                  </p>

                  <p className="mb-6 font-semibold">
                    Orphanage first the Lord's vision
                    <br />
                    Orphanage first The hope to the hopeless
                    <br />
                    Orphanage first the help to the helpless
                    <br />
                    Orphanage first To die for the orphans
                  </p>

                  <p className="mb-6">
                    And we give hope
                    <br />
                    And we Give love
                    <br />
                    And we give the smile
                  </p>

                  <p className="mb-6">
                    And now one family
                    <br />
                    In christ the Lord
                  </p>

                  <p className="mb-6">
                    We bless the Lord for orphanage first
                    <br />
                    In this world
                    <br />
                    Helping the children
                  </p>

                  <p>Country wide...</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:w-1/4">
              <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/where-we-work.jpeg"
                  alt="Children playing"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners/Sponsors */}
      <section className="py-8 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-6">Our Partners</h2>
          <Carousel
            className="w-full"
            opts={{
              loop: true,
              align: "center",
              dragFree: true,
              containScroll: "trimSnaps",
            }}
            onMouseEnter={() => {
              if (partnersIntervalRef.current) {
                clearInterval(partnersIntervalRef.current)
              }
            }}
            onMouseLeave={() => {
              startPartnersAutoplay()
            }}
            setApi={setPartnersApi}
          >
            <CarouselContent className="py-4">
              {/*<CarouselItem className="basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/2 flex justify-center">
                <div className="relative w-64 h-64 mx-auto flex items-center justify-center">
                  <div className="bg-black rounded-lg p-4 w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/amor-logo.png"
                      alt="AMOR Way"
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </div>
                </div>
              </CarouselItem>*/}
              <CarouselItem className="basis-full flex justify-center">
                <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
                  <div className="bg-white rounded-lg p-1 w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/first-orphanage-logo.png"
                      alt="First Orphanage"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </section>
    </main>
  )
}
