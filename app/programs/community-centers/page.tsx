import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CommunityCentersPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/images/community-centers.jpeg"
          alt="Community Centers Program"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <Badge className="mb-4 bg-primary/90 hover:bg-primary text-white">Community Development</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Community Centers Program</h1>
          <p className="text-xl text-white max-w-2xl">
            Building and operating community centers that serve as hubs for various programs
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center p-6 bg-muted rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-1">Program Started</h3>
              <p className="text-muted-foreground">June 2019</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-muted rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-1">Active Locations</h3>
              <p className="text-muted-foreground">6 Centers</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-muted rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-1">People Served</h3>
              <p className="text-muted-foreground">8,500+</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2>About the Program</h2>
            <p>
              Our Community Centers Program focuses on establishing multi-purpose centers that serve as hubs for various
              community development activities. These centers provide safe spaces for education, healthcare, skills
              training, social gatherings, and other essential services.
            </p>
            <p>
              Each community center is designed with input from local residents to ensure it meets the specific needs of
              the community. The centers are operated in partnership with community members, fostering a sense of
              ownership and ensuring long-term sustainability.
            </p>

            <h2>Program Components</h2>
            <div className="not-prose">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6 my-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {/*<div className="mt-1 bg-primary/10 p-2 rounded-full">
                        <Home className="h-5 w-5 text-primary" />
                      </div>*/}
                      <div>
                        <h3 className="text-xl font-bold mb-2">Multi-Purpose Facilities</h3>
                        <p className="text-muted-foreground">
                          Building and equipping centers with classrooms, meeting spaces, healthcare rooms, computer
                          labs, and recreational areas.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {/*<div className="mt-1 bg-primary/10 p-2 rounded-full">
                        <Home className="h-5 w-5 text-primary" />
                      </div>*/}
                      <div>
                        <h3 className="text-xl font-bold mb-2">Educational Programs</h3>
                        <p className="text-muted-foreground">
                          Offering literacy classes, after-school programs, vocational training, and adult education at
                          the centers.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {/*<div className="mt-1 bg-primary/10 p-2 rounded-full">
                        <Home className="h-5 w-5 text-primary" />
                      </div>*/}
                      <div>
                        <h3 className="text-xl font-bold mb-2">Healthcare Services</h3>
                        <p className="text-muted-foreground">
                          Providing basic healthcare services, health education, and preventive care through the
                          centers.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {/*<div className="mt-1 bg-primary/10 p-2 rounded-full">
                        <Home className="h-5 w-5 text-primary" />
                      </div>*/}
                      <div>
                        <h3 className="text-xl font-bold mb-2">Community Engagement</h3>
                        <p className="text-muted-foreground">
                          Facilitating community meetings, social events, and collaborative decision-making processes.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section 
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image src="/images/workshop-1.jpg" alt="Community center activities" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Measurable Results</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">6 community centers</span> established in underserved areas
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">8,500+ community members</span> accessing services at the centers
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">1,200+ adults</span> completed literacy and vocational training
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">2,500+ children</span> participating in after-school programs
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">40% increase</span> in community engagement and collaboration
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Success Story: Riverside Community Center</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-2">
                <p className="mb-4">
                  Before the establishment of the Riverside Community Center, residents had to travel long distances to
                  access basic services. There was limited community cohesion and few opportunities for skills
                  development.
                </p>
                <p className="mb-4">
                  Through our Community Centers Program, we built a multi-purpose center with classrooms, a healthcare
                  room, a computer lab, and a community hall. The center now offers literacy classes, vocational
                  training, basic healthcare services, and hosts community events.
                </p>
                <p>
                  Today, the Riverside Community Center serves over 1,500 people monthly. Adult literacy rates have
                  increased by 35%, youth have access to educational support, and community members have a space to
                  gather and collaborate on local initiatives. The center is now managed by a community committee,
                  ensuring local ownership and sustainability.
                </p>
              </div>
              <div className="relative h-[200px] md:h-full rounded-lg overflow-hidden">
                <Image src="/images/volunteer-2.jpg" alt="Riverside Community Center" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Future Plans */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Future Plans</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            We're committed to expanding our Community Centers Program to reach more communities in need.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Expansion</h3>
                <p className="text-muted-foreground mb-4">
                  Establishing 4 additional community centers in the next three years, reaching an additional 6,000
                  people.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Enhanced Services</h3>
                <p className="text-muted-foreground mb-4">
                  Expanding the range of services offered at existing centers to include legal aid, financial literacy,
                  and mental health support.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Digital Connectivity</h3>
                <p className="text-muted-foreground mb-4">
                  Equipping all centers with internet connectivity and digital resources to bridge the digital divide in
                  underserved communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Support */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Support Our Community Centers Program</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-muted-foreground">
            Your contribution can help us establish and operate community centers that serve as hubs for development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button variant="default" size="lg" className="shadow-sm">
                Donate Now
              </Button>
            </Link>
            <Link href="/volunteer">
              <Button variant="outline" size="lg" className="shadow-sm">
                Volunteer With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Programs */}
      {/*<section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Related Programs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/school-improvement-1.jpg" alt="School Improvement" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">School Improvement</h3>
                <p className="text-muted-foreground mb-4">
                  Enhancing school infrastructure and resources to create better learning environments.
                </p>
                <Link
                  href="/programs/school-improvement"
                  className="text-primary flex items-center gap-1 hover:underline font-medium"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/women-1.jpg" alt="Women Empowerment" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Women Empowerment</h3>
                <p className="text-muted-foreground mb-4">
                  Supporting women through skills training, mentorship, and entrepreneurship.
                </p>
                <Link
                  href="/programs/women-empowerment"
                  className="text-primary flex items-center gap-1 hover:underline font-medium"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>*/}
    </main>
  )
}
