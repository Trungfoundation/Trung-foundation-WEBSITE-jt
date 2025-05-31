import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Package, Users, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SamaritanPackagesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      {/* <section className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/images/samaritan-package-supplies.jpeg"
          alt="Samaritan Packages Program"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Samaritan Packages Program</h1>
          <p className="text-xl text-white max-w-2xl">
            Providing essential supplies and support to vulnerable families and communities
          </p>
        </div>
      </section>*/}

      {/* Program Overview */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Approach to Community Support</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The Trung Foundation's Samaritan Packages Program is designed to provide immediate relief and support
                  to vulnerable families and communities facing hardship. Through carefully assembled packages of
                  essential supplies, we address urgent needs while preserving dignity and fostering community
                  resilience.
                </p>
                <p>
                  Our packages are tailored to meet specific needs, whether it's food security, hygiene supplies,
                  educational materials, or household essentials. We work closely with community leaders to identify
                  those most in need and ensure that our support reaches those who need it most.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Food packages with nutritious, culturally appropriate items</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Hygiene kits with essential personal care items</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>School supply packages for children's education</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Household essentials for families in crisis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Emergency relief packages during disasters</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                <Image src="/images/food-security.jpg" alt="Samaritan Packages" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Samaritan Package Initiatives</h2>

          <Tabs defaultValue="food" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="food">Food Security</TabsTrigger>
              <TabsTrigger value="hygiene">Hygiene & Health</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>

            <TabsContent value="food">
              <div className="grid md:grid-cols-1 gap-12 items-center">
                {/* <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="/images/samaritan-package-food.jpeg"
                    alt="Food Security Packages"
                    fill
                    className="object-cover"
                  />
                </div> */}
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-4">Food Security Packages</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our Food Security Packages provide essential nutrition to families facing food insecurity. Each
                      package is designed to supply a family with balanced, nutritious meals for up to two weeks,
                      helping them through periods of hardship.
                    </p>
                    <p>
                      We carefully select culturally appropriate, nutritious foods that can be easily prepared, even in
                      situations with limited cooking facilities. Our packages focus on providing protein, grains,
                      vegetables, and fruits to ensure balanced nutrition.
                    </p>
                    <div className="space-y-2 pt-2">
                      <h4 className="font-semibold text-foreground">Package Contents:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Rice, beans, and other staple grains</li>
                        <li>Cooking oil and salt</li>
                        <li>Canned proteins (fish, meat) and vegetables</li>
                        <li>Fortified flour and meal supplements</li>
                        <li>Dried fruits and nutritional supplements for children</li>
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

            <TabsContent value="hygiene">
              <div className="grid md:grid-cols-1 gap-12 items-center">
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-4">Hygiene and Health Kits</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our Hygiene and Health Kits provide essential personal care items to help families maintain proper
                      hygiene and prevent illness. These kits are especially important in areas with limited access to
                      clean water and sanitation facilities.
                    </p>
                    <p>
                      Each kit contains items carefully selected to promote health and hygiene for the entire family,
                      with special consideration for the needs of women and children. We also include educational
                      materials on proper hygiene practices.
                    </p>
                    <div className="space-y-2 pt-2">
                      <h4 className="font-semibold text-foreground">Kit Contents:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Soap, shampoo, and toothpaste</li>
                        <li>Toothbrushes for each family member</li>
                        <li>Sanitary pads and feminine hygiene products</li>
                        <li>Hand sanitizer and disinfectant</li>
                        <li>First aid supplies and basic medications</li>
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
                  <Image src="/images/healthcare-3.jpg" alt="Hygiene and Health Kits" fill className="object-cover" />
                </div> */}
              </div>
            </TabsContent>

            <TabsContent value="education">
              <div className="grid md:grid-cols-1 gap-12 items-center">
                {/* <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image src="/images/education5.jpg" alt="Education Support Packages" fill className="object-cover" />
                </div> */}
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-4">Education Support Packages</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our Education Support Packages provide essential school supplies to children from vulnerable
                      families, ensuring they have the tools they need to participate fully in their education. These
                      packages help remove barriers to education and promote learning.
                    </p>
                    <p>
                      We work closely with local schools to understand specific curriculum requirements and ensure that
                      our packages contain appropriate materials. We also include items that encourage creativity and a
                      love of learning.
                    </p>
                    <div className="space-y-2 pt-2">
                      <h4 className="font-semibold text-foreground">Package Contents:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Notebooks, paper, and writing materials</li>
                        <li>Pencils, pens, and erasers</li>
                        <li>Rulers, scissors, and other classroom tools</li>
                        <li>Backpacks for carrying school supplies</li>
                        <li>Age-appropriate books and learning resources</li>
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
            Real stories of how our Samaritan Packages have made a difference
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/community-aid-distribution.jpg" alt="Maria's Story" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-2">Food Security</Badge>
                <h3 className="text-xl font-bold mb-2">Maria's Family Finds Relief</h3>
                <p className="text-muted-foreground mb-4">
                  "After the floods destroyed our crops, we didn't know how we would feed our children. The food package
                  from the Trung Foundation helped us survive until we could replant and harvest again."
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Maria N.</div>
                    <div className="text-sm text-muted-foreground">Package Recipient</div>
                  </div>
                  <Button variant="outline" size="sm">
                    Read Full Story
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/healthcare-2.jpg" alt="Joseph's Story" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-2">Hygiene & Health</Badge>
                <h3 className="text-xl font-bold mb-2">Joseph's Village Stays Healthy</h3>
                <p className="text-muted-foreground mb-4">
                  "The hygiene kits and education on handwashing helped our entire village prevent the spread of disease
                  during the rainy season. For the first time in years, we had no cholera cases."
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Joseph M.</div>
                    <div className="text-sm text-muted-foreground">Village Elder</div>
                  </div>
                  <Button variant="outline" size="sm">
                    Read Full Story
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/school-improvement-2.jpg" alt="Sarah's Story" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-2">Education</Badge>
                <h3 className="text-xl font-bold mb-2">Sarah Returns to School</h3>
                <p className="text-muted-foreground mb-4">
                  "I was embarrassed to go to school without proper supplies. Now with my new backpack and notebooks,
                  I'm excited to learn and my grades have improved significantly."
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Sarah K.</div>
                    <div className="text-sm text-muted-foreground">Student, Age 12</div>
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
                <Package className="text-primary" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2">5,200+</div>
              <div className="text-muted-foreground">Packages Distributed</div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="text-primary" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2">18,500+</div>
              <div className="text-muted-foreground">People Supported</div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Calendar className="text-primary" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2">42</div>
              <div className="text-muted-foreground">Distribution Events</div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <ArrowRight className="text-primary" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2">12</div>
              <div className="text-muted-foreground">Communities Reached</div>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Get Involved */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Support Our Samaritan Packages Program</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-muted-foreground">
            Your contribution can help us provide essential supplies to vulnerable families and communities.
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
