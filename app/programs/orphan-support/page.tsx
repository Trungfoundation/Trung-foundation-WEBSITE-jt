import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Heart, Home, Gift, School, Music } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function OrphanSupportPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      {/*<section className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/images/orphan-support-meal.jpeg"
          alt="Orphan Support Programs - Children sharing a meal"
          fill
          className="object-cover brightness-[0.7]"
          priority
          onError={(e) => {
            e.currentTarget.src = "/orphan-support.png"
            e.currentTarget.srcset = ""
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Orphan Support Program</h1>
          <p className="text-xl text-white max-w-2xl">
            Providing care, education, and a loving environment for vulnerable children
          </p>
        </div>
      </section>*/}

      {/* Program Overview */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Approach to Orphan Support</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The Trung Foundation is committed to providing comprehensive support to orphaned and vulnerable
                  children, ensuring they have access to education, healthcare, nutrition, and emotional support. We
                  believe that every child deserves a chance to grow up in a safe, nurturing environment with
                  opportunities to develop their full potential.
                </p>
                <p>
                  Our holistic approach addresses not only the immediate needs of orphaned children but also works to
                  create sustainable solutions that empower them to build better futures for themselves. We work closely
                  with local communities, caregivers, and partner organizations to provide the best possible support for
                  these vulnerable children.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Educational support including school fees, uniforms, and supplies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Healthcare services and regular medical check-ups</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Nutritional support and balanced meals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Psychosocial support and counseling services</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Life skills training and mentorship programs</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src="/images/kids-play.jpg"
                  alt="Children sharing a meal together"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Orphan Support Initiatives</h2>

          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="health">Health & Nutrition</TabsTrigger>
              <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
            </TabsList>

            <TabsContent value="education">
              <div className="grid md:grid-cols-1 gap-12 items-center">
                {/* <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image src="/images/school-improvement-1.jpg" alt="Education Support" fill className="object-cover" />
                </div> */}
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-4">Educational Support Program</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our Educational Support Program ensures that orphaned and vulnerable children have access to
                      quality education by covering school fees, providing school supplies, uniforms, and educational
                      materials. We also offer tutoring and academic support to help children excel in their studies.
                    </p>
                    <p>
                      We believe that education is the key to breaking the cycle of poverty and creating opportunities
                      for a better future. By investing in the education of these children, we are empowering them to
                      become self-sufficient and contributing members of society.
                    </p>
                    <div className="space-y-2 pt-2">
                      <h4 className="font-semibold text-foreground">Key Activities:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Payment of school fees for primary and secondary education</li>
                        <li>Provision of school uniforms, books, and stationery</li>
                        <li>After-school tutoring and homework support</li>
                        <li>Computer literacy and digital skills training</li>
                        <li>Vocational training for older children</li>
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

            <TabsContent value="health">
              <div className="grid md:grid-cols-1 gap-12 items-center">
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-4">Health and Nutrition Program</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our Health and Nutrition Program focuses on ensuring that orphaned and vulnerable children have
                      access to proper healthcare services and nutritious meals. We provide regular health check-ups,
                      immunizations, and treatment for illnesses, as well as balanced meals to support their physical
                      development.
                    </p>
                    <p>
                      Good health and proper nutrition are essential for children's growth, development, and ability to
                      learn. By addressing these basic needs, we help children thrive and reach their full potential.
                    </p>
                    <div className="space-y-2 pt-2">
                      <h4 className="font-semibold text-foreground">Key Activities:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Regular health check-ups and medical care</li>
                        <li>Immunization programs and preventive healthcare</li>
                        <li>Nutritious meal programs and food supplements</li>
                        <li>Health education and hygiene training</li>
                        <li>Psychosocial support and counseling services</li>
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
                  <Image src="/images/medical-camp-4.jpg" alt="Health and Nutrition" fill className="object-cover" />
                </div> */}
              </div>
            </TabsContent>

            <TabsContent value="mentorship">
              <div className="grid md:grid-cols-1 gap-12 items-center">
                {/* <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image src="/images/volunteer-2.jpg" alt="Mentorship Program" fill className="object-cover" />
                </div> */}
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-4">Mentorship and Life Skills Program</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our Mentorship and Life Skills Program pairs orphaned and vulnerable children with caring adult
                      mentors who provide guidance, support, and positive role models. We also offer life skills
                      training to help children develop essential skills for independent living and success in life.
                    </p>
                    <p>
                      Children who have lost parents often lack the guidance and emotional support that is crucial for
                      their development. Our mentorship program helps fill this gap, providing children with the
                      encouragement and direction they need to navigate life's challenges.
                    </p>
                    <div className="space-y-2 pt-2">
                      <h4 className="font-semibold text-foreground">Key Activities:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>One-on-one mentorship with trained adult volunteers</li>
                        <li>Life skills workshops and training sessions</li>
                        <li>Career guidance and counseling</li>
                        <li>Recreational activities and sports programs</li>
                        <li>Leadership development and community service projects</li>
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
            Real stories of transformation from our orphan support program
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/education5.jpg" alt="David's Story" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-2">Education Support</Badge>
                <h3 className="text-xl font-bold mb-2">David's Journey to Success</h3>
                <p className="text-muted-foreground mb-4">
                  "After losing both my parents, I thought my education was over. The Trung Foundation provided me with
                  school fees, uniforms, and books. Today, I'm in my final year of secondary school with plans to become
                  an engineer."
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">David K.</div>
                    <div className="text-sm text-muted-foreground">Program Beneficiary</div>
                  </div>
                  <Button variant="outline" size="sm">
                    Read Full Story
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/medical-camp-2.jpg" alt="Sarah's Story" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-2">Health & Nutrition</Badge>
                <h3 className="text-xl font-bold mb-2">Sarah's Path to Health</h3>
                <p className="text-muted-foreground mb-4">
                  "When Sarah came to us, she was malnourished and frequently ill. With regular medical care and
                  nutritious meals, she has transformed into a healthy, energetic child who excels in school and
                  sports."
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Mary N.</div>
                    <div className="text-sm text-muted-foreground">Program Coordinator</div>
                  </div>
                  <Button variant="outline" size="sm">
                    Read Full Story
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/volunteer.jpg" alt="James's Story" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-2">Mentorship</Badge>
                <h3 className="text-xl font-bold mb-2">James Finds Direction</h3>
                <p className="text-muted-foreground mb-4">
                  "My mentor has been like a father to me, guiding me through difficult decisions and encouraging me to
                  pursue my dreams. His support has given me confidence and hope for the future."
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">James O.</div>
                    <div className="text-sm text-muted-foreground">Mentorship Program Participant</div>
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

      {/* Orphanage Anthem */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8">Orphanage Anthem</h2>

          <div className="max-w-3xl mx-auto bg-muted/30 rounded-lg p-8 border border-muted shadow-sm">
            <div className="prose prose-lg mx-auto text-center italic">
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

            <div className="mt-8 text-center">
              <Button variant="outline" size="sm" className="gap-2">
                <Music className="h-4 w-4" />
                Listen to Anthem
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Stats */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact in Numbers</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <School className="text-primary" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2">350+</div>
              <div className="text-muted-foreground">Children Supported</div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Gift className="text-primary" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2">12,000+</div>
              <div className="text-muted-foreground">Meals Provided</div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="text-primary" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-muted-foreground">Health Improvement Rate</div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Home className="text-primary" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2">8</div>
              <div className="text-muted-foreground">Communities Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Support Our Orphan Support Program</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-muted-foreground">
            Your contribution can help us provide care, education, and a loving environment for vulnerable children.
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
