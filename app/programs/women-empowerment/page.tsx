import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function WomenEmpowermentPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px]">
        <div className="absolute inset-0 bg-gray-800">
          <Image
            src="/images/volunteer-and-women.jpg"
            alt="Women empowerment and leadership"
            fill
            className="object-cover object-top brightness-[0.7]"
            priority
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Women Empowerment Programs</h1>
          <p className="text-xl text-white max-w-2xl">
            Supporting women through skills training, mentorship, and entrepreneurship opportunities
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Approach to Women Empowerment</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The Trung Foundation is committed to empowering women through comprehensive programs that address the
                  unique challenges they face. We believe that when women are empowered, entire communities benefit from
                  improved health, education, and economic outcomes.
                </p>
                <p>
                  Our women empowerment programs focus on providing skills training, business development support,
                  mentorship, and access to resources that enable women to become financially independent and take on
                  leadership roles in their communities.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Vocational skills training in high-demand areas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Business development and entrepreneurship support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Financial literacy and management training</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Leadership development and mentorship</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Access to microloans and savings groups</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src="/images/women-engagement.JPG"
                  alt="Women community engagement"
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
          <h2 className="text-3xl font-bold text-center mb-12">Our Women Empowerment Initiatives</h2>

          <Tabs defaultValue="skills" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="skills">Skills Training</TabsTrigger>
              <TabsTrigger value="business">Entrepreneurship</TabsTrigger>
              <TabsTrigger value="leadership">Leadership</TabsTrigger>
            </TabsList>

            <TabsContent value="skills">
              <div className="grid md:grid-cols-1 gap-12 items-center">
                {/* 
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="/images/workshop-1.jpg"
                    alt="Skills Training"
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder.svg?height=400&width=600"
                    }}
                  />
                </div>
                */}
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-4">Vocational Skills Training</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our Vocational Skills Training program equips women with practical, marketable skills that enable
                      them to secure employment or start their own businesses. We offer training in various fields based
                      on market demand and women's interests.
                    </p>
                    <p>
                      Each training program is designed to be comprehensive, combining technical skills with business
                      knowledge and personal development. We also provide mentorship and job placement support to help
                      women transition successfully into the workforce.
                    </p>
                    <div className="space-y-2 pt-2">
                      <h4 className="font-semibold text-foreground">Training Programs:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Tailoring and garment production</li>
                        <li>Handicrafts and artisanal products</li>
                        <li>Food processing and catering</li>
                        <li>Agriculture and animal husbandry</li>
                        <li>Computer skills and digital literacy</li>
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

            <TabsContent value="business">
              <div className="grid md:grid-cols-1 gap-12 items-center">
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-4">Entrepreneurship Development</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our Entrepreneurship Development program supports women in starting and growing their own
                      businesses. We provide comprehensive business training, mentorship, and access to resources that
                      help women entrepreneurs succeed.
                    </p>
                    <p>
                      Through this program, women learn essential business skills, develop viable business plans, and
                      gain access to markets and financial services. We also facilitate networking opportunities and
                      peer support groups where women can share experiences and learn from each other.
                    </p>
                    <div className="space-y-2 pt-2">
                      <h4 className="font-semibold text-foreground">Program Components:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Business planning and management training</li>
                        <li>Financial literacy and accounting skills</li>
                        <li>Marketing and sales strategies</li>
                        <li>Access to microloans and savings groups</li>
                        <li>Market linkages and business networking</li>
                      </ul>
                    </div>
                    <div className="pt-4">
                      <Link href="/get-involved">
                        <Button>Support This Initiative</Button>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* 
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Entrepreneurship Development"
                    fill
                    className="object-cover"
                  />
                </div>
                */}
              </div>
            </TabsContent>

            <TabsContent value="leadership">
              <div className="grid md:grid-cols-1 gap-12 items-center">
                {/* 
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="/images/women-certification.jpeg"
                    alt="Leadership Development"
                    fill
                    className="object-contain object-center bg-white"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder.svg?height=400&width=600"
                    }}
                  />
                </div>
                */}
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-4">Leadership Development</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our Leadership Development program empowers women to take on leadership roles in their families,
                      businesses, and communities. We provide training in leadership skills, decision-making, advocacy,
                      and community organizing.
                    </p>
                    <p>
                      Through this program, women gain confidence, develop their voice, and learn to influence positive
                      change. We also create platforms where women can practice their leadership skills and engage in
                      community development initiatives.
                    </p>
                    <div className="space-y-2 pt-2">
                      <h4 className="font-semibold text-foreground">Program Components:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Leadership skills and personal development</li>
                        <li>Public speaking and communication</li>
                        <li>Conflict resolution and negotiation</li>
                        <li>Community organizing and advocacy</li>
                        <li>Mentorship and networking opportunities</li>
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
      {/*<section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact in Numbers</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <GraduationCap className="text-primary" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2">750+</div>
              <div className="text-muted-foreground">Women Trained</div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Briefcase className="text-primary" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2">320+</div>
              <div className="text-muted-foreground">Businesses Started</div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="text-primary" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2">45</div>
              <div className="text-muted-foreground">Women's Groups Formed</div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <ArrowRight className="text-primary" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2">180%</div>
              <div className="text-muted-foreground">Average Income Increase</div>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Get Involved */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Support Our Women Empowerment Programs</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-muted-foreground">
            Your contribution can help us empower more women to achieve financial independence and become leaders in
            their communities.
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
