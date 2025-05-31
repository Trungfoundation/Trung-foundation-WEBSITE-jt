import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Heart, StethoscopeIcon, Users, BabyIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HealthcareProgramPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/images/mobile-health-clinic.jpeg"
          alt="Healthcare Programs"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Healthcare Programs</h1>
          <p className="text-xl text-white max-w-2xl">
            Improving access to quality healthcare services in underserved communities
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Approach to Healthcare</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We believe that access to quality healthcare is a fundamental right for all people. Our healthcare
                  programs focus on improving access to essential health services, strengthening local healthcare
                  systems, and promoting preventive care and health education in underserved communities.
                </p>
                <p>
                  Working in partnership with local health authorities, medical professionals, and community leaders, we
                  implement sustainable solutions that address the specific healthcare needs and challenges in each
                  community we serve.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Increased access to essential healthcare services</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Improved maternal and child health outcomes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Enhanced community health knowledge and practices</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Strengthened local healthcare capacity and systems</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                <Image src="/images/trung_logo.png" alt="Healthcare services" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Healthcare Initiatives</h2>

          <Tabs defaultValue="mobile" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="mobile">Mobile Clinics</TabsTrigger>
              <TabsTrigger value="maternal">Maternal Health</TabsTrigger>
              <TabsTrigger value="community">Community Health</TabsTrigger>
            </TabsList>

            <TabsContent value="mobile">
              <div className="grid md:grid-cols-1 gap-12 items-center">
                {/* <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="/images/mobile-health-clinic.jpeg"
                    alt="Mobile Health Clinic"
                    fill
                    className="object-cover"
                  />
                </div> */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">Mobile Health Clinics</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our Mobile Health Clinics bring essential healthcare services directly to remote and underserved
                      communities where access to healthcare facilities is limited. These clinics provide preventive
                      care, basic treatment, health screenings, and referrals for more complex medical needs.
                    </p>
                    <p>
                      By bringing healthcare to the doorsteps of communities, we help overcome barriers such as
                      distance, transportation costs, and time constraints that often prevent people from seeking
                      medical care.
                    </p>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative h-16 w-16 rounded-full overflow-hidden">
                        <Image
                          src="/images/dr-chaka-barasa.jpeg"
                          alt="Dr. Chaka Barasa"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">Dr. Chaka Barasa</h4>
                        <p className="text-sm text-muted-foreground">Community Health Team Leader</p>
                      </div>
                    </div>
                    <div className="space-y-2 pt-2">
                      <h4 className="font-semibold text-foreground">Key Services:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>General medical consultations</li>
                        <li>Health screenings and basic diagnostics</li>
                        <li>Immunizations and preventive care</li>
                        <li>Treatment of common illnesses</li>
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

            <TabsContent value="maternal">
              <div className="grid md:grid-cols-1 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Maternal and Child Health</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our Maternal and Child Health program focuses on improving health outcomes for mothers and
                      children through comprehensive prenatal care, safe delivery services, postnatal support, and early
                      childhood healthcare. We work to reduce maternal and infant mortality rates and promote healthy
                      development in the critical early years of life.
                    </p>
                    <p>
                      Through education, support, and access to quality care, we empower mothers to make informed
                      decisions about their health and the health of their children.
                    </p>
                    <div className="space-y-2 pt-2">
                      <h4 className="font-semibold text-foreground">Key Services:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Prenatal care and education</li>
                        <li>Skilled birth attendance and safe delivery</li>
                        <li>Postnatal care for mothers and newborns</li>
                        <li>Infant and young child nutrition support</li>
                        <li>Immunization and growth monitoring</li>
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
                  <Image src="/images/maternal-health.jpg" alt="Maternal Health" fill className="object-cover" />
                </div> */}
              </div>
            </TabsContent>

            <TabsContent value="community">
              <div className="grid md:grid-cols-1 gap-12 items-center">
                {/* <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image src="/images/dr-chaka-barasa.jpeg" alt="Community Health" fill className="object-cover" />
                </div> */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">Community Health Workers</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our Community Health Workers program trains local individuals to serve as frontline health
                      providers in their communities. These workers bridge the gap between formal healthcare systems and
                      communities, providing basic health services, education, and referrals.
                    </p>
                    <p>
                      By building local capacity, we create sustainable healthcare solutions that continue to benefit
                      communities long after our direct involvement ends.
                    </p>
                    <div className="space-y-2 pt-2">
                      <h4 className="font-semibold text-foreground">Key Activities:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Training and equipping community health workers</li>
                        <li>Health education and behavior change communication</li>
                        <li>Disease prevention and surveillance</li>
                        <li>Home visits and follow-up care</li>
                        <li>Referrals to health facilities for advanced care</li>
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
            Real stories of transformation from our healthcare programs
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/medical-camp-4.jpg" alt="Sarah's Story" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-2">Mobile Clinic</Badge>
                <h3 className="text-xl font-bold mb-2">Sarah's Life-Saving Diagnosis</h3>
                <p className="text-muted-foreground mb-4">
                  "The mobile clinic that visited our village provided life-saving care for my child. Without your
                  support, we wouldn't have access to medical services."
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Sarah N.</div>
                    <div className="text-sm text-muted-foreground">Community Member</div>
                  </div>
                  <Button variant="outline" size="sm">
                    Read Full Story
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/causes-3.jpg" alt="Maternal Health Story" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-2">Maternal Health</Badge>
                <h3 className="text-xl font-bold mb-2">A Mother's Journey</h3>
                <p className="text-muted-foreground mb-4">
                  "The prenatal care and support I received helped me have a safe pregnancy and delivery. My baby and I
                  are healthy thanks to the maternal health program."
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Grace M.</div>
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
                <Image src="/images/healthcare2.jpg" alt="Community Health Story" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-2">Community Health</Badge>
                <h3 className="text-xl font-bold mb-2">Empowering Health Workers</h3>
                <p className="text-muted-foreground mb-4">
                  "As a community health worker, I can now provide basic healthcare and education to my neighbors. We've
                  seen a significant reduction in preventable illnesses."
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Joseph K.</div>
                    <div className="text-sm text-muted-foreground">Community Health Worker</div>
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
      {/*<section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact in Numbers</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="text-primary" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-muted-foreground">Patients Served</div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <StethoscopeIcon className="text-primary" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2">35</div>
              <div className="text-muted-foreground">Mobile Clinic Visits</div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <BabyIcon className="text-primary" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-muted-foreground">Safe Deliveries</div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="text-primary" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2">75</div>
              <div className="text-muted-foreground">Community Health Workers Trained</div>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Get Involved */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Support Our Healthcare Programs</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-muted-foreground">
            Your contribution can help us expand our reach and deepen our impact in communities that need it most.
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
