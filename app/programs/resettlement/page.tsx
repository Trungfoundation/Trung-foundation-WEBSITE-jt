import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Heart, Home, Building, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResettlementPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      {/*<section className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/images/services-3.jpg"
          alt="Resettlement Programs"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Resettlement Program</h1>
          <p className="text-xl text-white max-w-2xl">
            Building homes and rebuilding lives for vulnerable families and communities
          </p>
        </div>
      </section>*/}

      {/* Program Overview */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Approach to Resettlement</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The Trung Foundation's Resettlement Program focuses on providing safe, dignified housing solutions for
                  vulnerable families and individuals who have been displaced or are living in inadequate conditions. We
                  build and renovate homes, working closely with communities to ensure that our housing solutions are
                  appropriate, sustainable, and meet local needs.
                </p>
                <p>
                  Beyond just constructing physical structures, our holistic approach to resettlement includes community
                  integration, livelihood support, and access to essential services. We believe that a stable home is
                  the foundation upon which families can build better lives and brighter futures.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Construction of new homes for vulnerable families</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Renovation and repair of damaged housing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Community infrastructure development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Livelihood support for resettled families</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Connection to essential services and community resources</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                <Image src="/images/trung_logo.png" alt="New home construction" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Resettlement Initiatives</h2>

          <Tabs defaultValue="housing" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="housing">Housing Construction</TabsTrigger>
              <TabsTrigger value="community">Community Development</TabsTrigger>
              <TabsTrigger value="livelihood">Livelihood Support</TabsTrigger>
            </TabsList>

            <TabsContent value="housing">
              <div className="grid md:grid-cols-1 gap-12 items-center">
                {/* <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image src="/images/services-3.jpg" alt="Housing Construction" fill className="object-cover" />
                </div> */}
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-4">Housing Construction Program</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our Housing Construction Program builds safe, durable homes for vulnerable families who lack
                      adequate shelter. We work with local builders and use locally sourced materials when possible,
                      creating homes that are appropriate for the climate and cultural context while providing training
                      and employment opportunities for community members.
                    </p>
                    <p>
                      Each home is designed to meet basic standards of safety, durability, and comfort, with
                      considerations for water, sanitation, and energy needs. We involve future homeowners in the design
                      and construction process, fostering a sense of ownership and pride.
                    </p>
                    <div className="space-y-2 pt-2">
                      <h4 className="font-semibold text-foreground">Key Activities:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Construction of new homes for vulnerable families</li>
                        <li>Renovation and repair of damaged housing</li>
                        <li>Installation of water and sanitation facilities</li>
                        <li>Training in home maintenance and basic repairs</li>
                        <li>Community involvement in construction projects</li>
                      </ul>
                    </div>
                    <div className="pt-4">
                      <Link href="/get-involved">
                        <Button>Support This Initiative</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="community">
              <div className="grid md:grid-cols-1 gap-12 items-center">
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-4">Community Development Program</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our Community Development Program focuses on building the infrastructure and services needed for
                      resettled communities to thrive. We work on projects such as community centers, schools, health
                      clinics, water systems, and roads that connect communities to essential services and economic
                      opportunities.
                    </p>
                    <p>
                      We engage community members in planning and implementing these projects, building local capacity
                      and ensuring that the infrastructure meets the specific needs of each community. This
                      participatory approach fosters community cohesion and long-term sustainability.
                    </p>
                    <div className="space-y-2 pt-2">
                      <h4 className="font-semibold text-foreground">Key Activities:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Construction of community centers and gathering spaces</li>
                        <li>Development of water and sanitation systems</li>
                        <li>Building or renovating schools and health facilities</li>
                        <li>Creating roads and improving accessibility</li>
                        <li>Establishing community gardens and green spaces</li>
                      </ul>
                    </div>
                    <div className="pt-4">
                      <Link href="/get-involved">
                        <Button>Support This Initiative</Button>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="/images/training-seminar-1.jpg"
                    alt="Community Development"
                    fill
                    className="object-cover"
                  />
                </div> */}
              </div>
            </TabsContent>

            <TabsContent value="livelihood">
              <div className="grid md:grid-cols-1 gap-12 items-center">
                {/* <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image src="/images/workshop-1.jpg" alt="Livelihood Support" fill className="object-cover" />
                </div> */}
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-4">Livelihood Support Program</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our Livelihood Support Program helps resettled families establish sustainable sources of income
                      and become economically self-sufficient. We provide vocational training, business skills
                      development, startup grants, and connections to employment opportunities that enable families to
                      support themselves in their new communities.
                    </p>
                    <p>
                      We tailor our livelihood interventions to match local economic opportunities and the skills and
                      interests of community members, ensuring that the support we provide leads to viable and
                      sustainable income-generating activities.
                    </p>
                    <div className="space-y-2 pt-2">
                      <h4 className="font-semibold text-foreground">Key Activities:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Vocational skills training in marketable trades</li>
                        <li>Business development training and mentorship</li>
                        <li>Startup grants and tools for small businesses</li>
                        <li>Agricultural training and support for farming families</li>
                        <li>Job placement assistance and employment connections</li>
                      </ul>
                    </div>
                    <div className="pt-4">
                      <Link href="/get-involved">
                        <Button>Support This Initiative</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Impact Stories 
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Impact Stories</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Real stories of transformation from our resettlement program
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/services-3.jpg" alt="Nambi's Story" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-2">Housing Construction</Badge>
                <h3 className="text-xl font-bold mb-2">Nambi's New Beginning</h3>
                <p className="text-muted-foreground mb-4">
                  "After years of living in a leaking mud house, my children and I now have a safe, dry home. I no
                  longer worry about my children getting sick during the rainy season. This house has given us dignity
                  and hope for the future."
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Nambi R.</div>
                    <div className="text-sm text-muted-foreground">Single Mother</div>
                  </div>
                  <Button variant="outline" size="sm">
                    Read Full Story
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/training-seminar-1.jpg" alt="Community Story" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-2">Community Development</Badge>
                <h3 className="text-xl font-bold mb-2">A Village Transformed</h3>
                <p className="text-muted-foreground mb-4">
                  "Our new community center has become the heart of our village. It serves as a school, clinic, and
                  gathering place. The water system has reduced disease and saved women hours of walking each day to
                  collect water."
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Musa K.</div>
                    <div className="text-sm text-muted-foreground">Village Leader</div>
                  </div>
                  <Button variant="outline" size="sm">
                    Read Full Story
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/workshop-1.jpg" alt="Esther's Story" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-2">Livelihood Support</Badge>
                <h3 className="text-xl font-bold mb-2">Esther's Tailoring Business</h3>
                <p className="text-muted-foreground mb-4">
                  "The vocational training and sewing machine I received have changed my life. I now run a successful
                  tailoring business from my new home, earning enough to support my family and send my children to
                  school."
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Esther N.</div>
                    <div className="text-sm text-muted-foreground">Entrepreneur</div>
                  </div>
                  <Button variant="outline" size="sm">
                    Read Full Story
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link href="/blog">
              <Button variant="outline">
                View More Stories <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>*/}

      {/* Program Stats */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact in Numbers</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Home className="text-primary" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2">2+</div>
              <div className="text-muted-foreground">Homes Built</div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="text-primary" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2">3+</div>
              <div className="text-muted-foreground">People Housed</div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Building className="text-primary" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2">0</div>
              <div className="text-muted-foreground">Community Facilities</div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="text-primary" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2">6</div>
              <div className="text-muted-foreground">Communities Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Support Our Resettlement Program</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-muted-foreground">
            Your contribution can help us build homes and rebuild lives for vulnerable families.
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
    </main>
  )
}
