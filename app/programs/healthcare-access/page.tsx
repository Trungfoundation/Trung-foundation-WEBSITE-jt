import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Heart, BookOpen, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HealthcareAccessPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/images/mobile-health-clinic.jpeg"
          alt="Healthcare Access Programs"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Healthcare Access Programs</h1>
          <p className="text-xl text-white max-w-2xl">
            Bringing essential healthcare services to underserved communities
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Approach to Healthcare Access</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The Trung Foundation is committed to improving healthcare access for underserved communities through
                  comprehensive programs that address the barriers to quality healthcare. We believe that access to
                  healthcare is a fundamental right, and we work to ensure that even the most remote and marginalized
                  communities can receive the care they need.
                </p>
                <p>
                  Our healthcare access programs focus on bringing medical services directly to communities, training
                  local health workers, providing health education, and supporting existing healthcare facilities with
                  resources and expertise.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Mobile health clinics that reach remote areas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Training and support for community health workers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Health education and preventive care programs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Medical supplies and equipment for local facilities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Maternal and child health services</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                <Image src="/images/trung_logo.png" alt="Healthcare" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Healthcare Access Initiatives</h2>

          <Tabs defaultValue="mobile" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="mobile">Mobile Clinics</TabsTrigger>
              <TabsTrigger value="education">Health Education</TabsTrigger>
              <TabsTrigger value="workers">Community Health</TabsTrigger>
            </TabsList>

            <TabsContent value="mobile">
              <div className="grid md:grid-cols-1 gap-12 items-center">
                {/* Image commented out as requested
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="/images/healthcare-access-clinic.jpeg"
                    alt="Mobile Health Clinic"
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder-6uoes.png"
                    }}
                  />
                </div>
                */}
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-4">Mobile Health Clinics</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our Mobile Health Clinics bring essential medical services directly to remote and underserved
                      communities. These clinics are staffed by qualified healthcare professionals and equipped with
                      basic diagnostic tools and medications.
                    </p>
                    <p>
                      The mobile clinics provide a range of services, from general check-ups and vaccinations to
                      specialized care for common health issues. By bringing healthcare to the community, we eliminate
                      the barriers of distance, cost, and time that often prevent people from seeking medical attention.
                    </p>
                    <div className="space-y-2 pt-2">
                      <h4 className="font-semibold text-foreground">Services Provided:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>General health check-ups and consultations</li>
                        <li>Vaccinations and immunizations</li>
                        <li>Maternal and child health services</li>
                        <li>Treatment for common illnesses</li>
                        <li>Referrals to specialized care when needed</li>
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

            <TabsContent value="education">
              <div className="grid md:grid-cols-1 gap-12 items-center">
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-4">Health Education Programs</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our Health Education Programs empower communities with knowledge about preventive healthcare,
                      hygiene, nutrition, and common health issues. We believe that education is a powerful tool for
                      improving health outcomes and preventing disease.
                    </p>
                    <p>
                      Through workshops, community meetings, and educational materials, we provide practical information
                      that helps individuals and families make informed decisions about their health. We also train
                      local health educators who can continue to share this knowledge within their communities.
                    </p>
                    <div className="space-y-2 pt-2">
                      <h4 className="font-semibold text-foreground">Focus Areas:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Preventive healthcare and early detection</li>
                        <li>Maternal and child health</li>
                        <li>Nutrition and food safety</li>
                        <li>Water, sanitation, and hygiene (WASH)</li>
                        <li>Common diseases and their prevention</li>
                      </ul>
                    </div>
                    <div className="pt-4">
                      <Link href="/get-involved">
                        <Button>Support This Initiative</Button>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Image commented out as requested
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="/images/healthcare-3.jpg"
                    alt="Health Education Workshop"
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/health-education-workshop.png"
                    }}
                  />
                </div>
                */}
              </div>
            </TabsContent>

            <TabsContent value="workers">
              <div className="grid md:grid-cols-1 gap-12 items-center">
                {/* Image commented out as requested
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="/images/dr-chaka-barasa.jpeg"
                    alt="Community Health Workers"
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/community-health-workers.png"
                    }}
                  />
                </div>
                */}
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-4">Community Health Workers Program</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our Community Health Workers Program trains and supports local individuals to serve as the first
                      point of contact for healthcare in their communities. These health workers are equipped with basic
                      medical knowledge and supplies to address common health issues and refer more complex cases to
                      appropriate facilities.
                    </p>
                    <p>
                      Community health workers play a vital role in bridging the gap between formal healthcare systems
                      and communities. They provide continuous monitoring, follow-up care, and health education,
                      ensuring that healthcare remains accessible even between visits from our mobile clinics.
                    </p>
                    <div className="space-y-2 pt-2">
                      <h4 className="font-semibold text-foreground">Program Components:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Selection and training of community health workers</li>
                        <li>Provision of basic medical supplies and equipment</li>
                        <li>Ongoing supervision and support</li>
                        <li>Integration with local healthcare systems</li>
                        <li>Regular refresher training and skill development</li>
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

      {/* Program Stats */}
      {/*<section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact in Numbers</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="text-primary" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2">12,500+</div>
              <div className="text-muted-foreground">Patients Served</div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="text-primary" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2">45</div>
              <div className="text-muted-foreground">Community Health Workers</div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="text-primary" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2">75+</div>
              <div className="text-muted-foreground">Health Education Sessions</div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <ArrowRight className="text-primary" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2">35</div>
              <div className="text-muted-foreground">Communities Reached</div>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Related Programs */}
      {/*<section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Related Programs</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Explore other programs that complement our healthcare access initiatives
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/healthcare-1.jpg"
                  alt="Healthcare Program"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/healthcare-abstract.png"
                  }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Healthcare Program</h3>
                <p className="text-muted-foreground mb-4">
                  Our comprehensive healthcare program that addresses various health challenges in underserved
                  communities.
                </p>
                <Link href="/programs/healthcare">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/food-security-packaging.jpeg"
                  alt="Samaritan Packages"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg?height=200&width=400"
                  }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Samaritan Packages</h3>
                <p className="text-muted-foreground mb-4">
                  Essential supplies including food, hygiene items, and basic necessities for vulnerable families.
                </p>
                <Link href="/programs/samaritan-packages">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/community-centers.jpeg"
                  alt="Community Centers"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg?height=200&width=400"
                  }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Community Centers</h3>
                <p className="text-muted-foreground mb-4">
                  Safe spaces that provide various services including health education and basic healthcare.
                </p>
                <Link href="/programs/community-centers">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>*/}

      {/* Get Involved */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Support Our Healthcare Access Programs</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-muted-foreground">
            Your contribution can help us bring essential healthcare services to more underserved communities.
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
