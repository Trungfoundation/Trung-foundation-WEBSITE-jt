import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Heart, Users, Briefcase, GraduationCap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GirlEmpowermentPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/images/girl-children.jpg"
          alt="Girl Child Empowerment Programs"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Girl Child Empowerment</h1>
          <p className="text-xl text-white max-w-2xl">
            Equipping girls with skills, confidence, and opportunities to shape their own futures
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Approach to Girl Child Empowerment</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The Trung Foundation's Girl Child Empowerment Program is dedicated to breaking down barriers that
                  prevent girls from reaching their full potential. We focus on providing girls with quality education,
                  vocational skills, mentorship, and safe spaces where they can grow, learn, and develop into confident
                  young women.
                </p>
                <p>
                  We believe that when girls are empowered, entire communities benefit. Our comprehensive approach
                  addresses the multiple challenges girls face, from access to education and healthcare to protection
                  from harmful practices and gender-based violence. We work closely with families, schools, and
                  communities to create supportive environments where girls can thrive.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Educational support and scholarships for girls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Vocational and life skills training programs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Mentorship and leadership development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Health education and services for adolescent girls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Advocacy for girls' rights and gender equality</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden bg-gray-100">
                <Image src="/images/trund-education-1.jpg" alt="Girls in classroom" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Girl Empowerment Initiatives</h2>

          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills Training</TabsTrigger>
              <TabsTrigger value="leadership">Leadership</TabsTrigger>
            </TabsList>

            <TabsContent value="education">
              <div className="grid md:grid-cols-1 gap-12 items-center">
                {/* <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image src="/images/education5.jpg" alt="Girls' Education" fill className="object-cover" />
                </div> */}
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-4">Girls' Education Program</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our Girls' Education Program works to ensure that all girls have access to quality education by
                      addressing the barriers that often prevent them from attending school or completing their
                      education. We provide scholarships, school supplies, uniforms, and academic support to help girls
                      stay in school and excel in their studies.
                    </p>
                    <p>
                      We also work with schools to create girl-friendly learning environments and with communities to
                      change attitudes about the value of girls' education. Our goal is to help girls develop the
                      knowledge and skills they need to make informed choices about their lives and futures.
                    </p>
                    <div className="space-y-2 pt-2">
                      <h4 className="font-semibold text-foreground">Key Activities:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Scholarships for primary and secondary education</li>
                        <li>Provision of school supplies, uniforms, and sanitary products</li>
                        <li>After-school tutoring and academic support</li>
                        <li>Mentoring programs for academic success</li>
                        <li>Community awareness campaigns on girls' education</li>
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

            <TabsContent value="skills">
              <div className="grid md:grid-cols-1 gap-12 items-center">
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-4">Vocational Skills Training</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our Vocational Skills Training program equips adolescent girls and young women with practical
                      skills that can help them generate income and become economically independent. We offer training
                      in a variety of marketable skills such as tailoring, computer literacy, hairdressing, catering,
                      crafts, and agricultural techniques.
                    </p>
                    <p>
                      In addition to technical skills, we provide business training, financial literacy, and
                      entrepreneurship education to help girls start and manage their own small businesses. This
                      comprehensive approach empowers girls to create sustainable livelihoods for themselves.
                    </p>
                    <div className="space-y-2 pt-2">
                      <h4 className="font-semibold text-foreground">Key Activities:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Vocational training in marketable skills</li>
                        <li>Business development and entrepreneurship training</li>
                        <li>Financial literacy and savings programs</li>
                        <li>Startup kits and tools for graduates</li>
                        <li>Mentorship and ongoing business support</li>
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
                  <Image src="/images/workshop-1.jpg" alt="Vocational Training" fill className="object-cover" />
                </div> */}
              </div>
            </TabsContent>

            <TabsContent value="leadership">
              <div className="grid md:grid-cols-1 gap-12 items-center">
                {/* <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image src="/images/women-1.jpg" alt="Leadership Development" fill className="object-cover" />
                </div> */}
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-4">Leadership Development Program</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our Leadership Development Program nurtures the next generation of female leaders by providing
                      girls with opportunities to develop confidence, public speaking skills, critical thinking, and
                      decision-making abilities. Through workshops, mentoring, and practical leadership experiences,
                      girls learn to express themselves, advocate for their rights, and take on leadership roles in
                      their schools and communities.
                    </p>
                    <p>
                      We create safe spaces where girls can discuss issues that affect them, develop solutions to
                      community challenges, and implement their own community service projects. This hands-on approach
                      helps girls discover their own potential as change-makers and leaders.
                    </p>
                    <div className="space-y-2 pt-2">
                      <h4 className="font-semibold text-foreground">Key Activities:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Leadership skills workshops and training</li>
                        <li>Public speaking and communication skills development</li>
                        <li>Girls' clubs and peer support networks</li>
                        <li>Community service and action projects</li>
                        <li>Mentorship from successful women leaders</li>
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
            Real stories of transformation from our girl empowerment program
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/education6.jpg" alt="Faith's Story" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-2">Education</Badge>
                <h3 className="text-xl font-bold mb-2">Faith's Academic Journey</h3>
                <p className="text-muted-foreground mb-4">
                  "I was about to drop out of school because my parents couldn't afford the fees. The scholarship from
                  Trung Foundation changed everything. Now I'm the top student in my class and dream of becoming a
                  doctor to help my community."
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Faith N.</div>
                    <div className="text-sm text-muted-foreground">Scholarship Recipient</div>
                  </div>
                  <Button variant="outline" size="sm">
                    Read Full Story
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/workshop-1.jpg" alt="Rebecca's Story" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-2">Skills Training</Badge>
                <h3 className="text-xl font-bold mb-2">Rebecca's Tailoring Business</h3>
                <p className="text-muted-foreground mb-4">
                  "The tailoring skills I learned have transformed my life. I started with just one sewing machine, and
                  now I have my own shop with three employees. I can pay my siblings' school fees and support my
                  family."
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Rebecca M.</div>
                    <div className="text-sm text-muted-foreground">Business Owner</div>
                  </div>
                  <Button variant="outline" size="sm">
                    Read Full Story
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/women-1.jpg" alt="Sophia's Story" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-2">Leadership</Badge>
                <h3 className="text-xl font-bold mb-2">Sophia Leads Change</h3>
                <p className="text-muted-foreground mb-4">
                  "I used to be so shy I couldn't speak in class. Through the leadership program, I found my voice. I'm
                  now the head girl at my school and led a campaign that brought clean water to our community."
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Sophia K.</div>
                    <div className="text-sm text-muted-foreground">Student Leader</div>
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
                <GraduationCap className="text-primary" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2">450+</div>
              <div className="text-muted-foreground">Girls in School</div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Briefcase className="text-primary" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2">280+</div>
              <div className="text-muted-foreground">Vocational Graduates</div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="text-primary" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2">120+</div>
              <div className="text-muted-foreground">Young Leaders Trained</div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="text-primary" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2">10</div>
              <div className="text-muted-foreground">Communities Reached</div>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Get Involved */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Support Our Girl Empowerment Program</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-muted-foreground">
            Your contribution can help us empower more girls with education, skills, and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button variant="default" size="lg" className="shadow-sm">
                Donate Now
              </Button>
            </Link>
            <Link href="/get-involved">
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
