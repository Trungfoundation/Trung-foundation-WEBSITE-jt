import Image from "next/image"
import Link from "next/link"
import { BookOpen, CheckCircle, GraduationCap, School, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EducationProgramPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/images/trund-education-1.jpg"
          alt="Education Programs"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Education Programs</h1>
          <p className="text-xl text-white max-w-2xl">
            Empowering communities through quality education and learning opportunities
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Approach to Education</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We believe that quality education is a fundamental right and a powerful tool for breaking the cycle of
                  poverty. Our education programs focus on improving access to education, enhancing the quality of
                  learning, and creating supportive educational environments for students of all ages.
                </p>
                <p>
                  Working closely with local schools, teachers, and community leaders, we implement sustainable
                  solutions that address the specific educational needs and challenges in each community we serve.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Improved school infrastructure and learning environments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Enhanced teaching quality through teacher training and support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Increased access to educational resources and materials</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Support for vulnerable students through scholarships and mentoring</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                <Image src="/images/trund-education-2.jpg" alt="Students in classroom" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Education Initiatives</h2>

          <Tabs defaultValue="school" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="school">School Improvement</TabsTrigger>
              <TabsTrigger value="teacher">Teacher Development</TabsTrigger>
              <TabsTrigger value="student">Student Support</TabsTrigger>
            </TabsList>

            <TabsContent value="school">
              <div className="grid md:grid-cols-1 gap-12 items-center">
                {/* <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="/images/school-improvement-1.jpg"
                    alt="School Improvement"
                    fill
                    className="object-cover"
                  />
                </div> */}
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-4">School Improvement Program</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our School Improvement Program focuses on enhancing the physical infrastructure and learning
                      environment of schools in underserved communities. We work on renovating classrooms, providing
                      furniture and equipment, establishing libraries, and creating safe and conducive spaces for
                      learning.
                    </p>
                    <p>
                      By improving school facilities, we aim to create environments that inspire learning, increase
                      student attendance and retention, and enhance overall educational outcomes.
                    </p>
                    <div className="space-y-2 pt-2">
                      <h4 className="font-semibold text-foreground">Key Activities:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Classroom renovation and construction</li>
                        <li>Provision of desks, chairs, and blackboards</li>
                        <li>Establishment of school libraries and resource centers</li>
                        <li>Installation of water and sanitation facilities</li>
                        <li>Creation of safe play areas and sports facilities</li>
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

            <TabsContent value="teacher">
              <div className="grid md:grid-cols-1 gap-12 items-center">
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-4">Teacher Development Program</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our Teacher Development Program aims to enhance the quality of teaching by providing comprehensive
                      training, ongoing professional development, and support to teachers in our partner schools. We
                      believe that well-trained and motivated teachers are essential for providing quality education and
                      improving student learning outcomes.
                    </p>
                    <p>
                      Through workshops, mentoring, and collaborative learning opportunities, we equip teachers with
                      modern teaching methodologies, classroom management techniques, and subject-specific knowledge to
                      enhance their effectiveness in the classroom.
                    </p>
                    <div className="space-y-2 pt-2">
                      <h4 className="font-semibold text-foreground">Key Activities:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Teacher training workshops and seminars</li>
                        <li>Mentoring and coaching programs</li>
                        <li>Development of teaching and learning materials</li>
                        <li>Teacher exchange and peer learning opportunities</li>
                        <li>Recognition and incentives for outstanding teachers</li>
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
                  <Image src="/images/volunteer-2.jpg" alt="Teacher Training" fill className="object-cover" />
                </div> */}
              </div>
            </TabsContent>

            <TabsContent value="student">
              <div className="grid md:grid-cols-1 gap-12 items-center">
                {/* <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image src="/images/trund-education-1.jpg" alt="Student Support" fill className="object-cover" />
                </div> */}
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-4">Student Support Program</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our Student Support Program focuses on providing comprehensive assistance to vulnerable and
                      disadvantaged students to ensure they have access to quality education and the support they need
                      to succeed academically and personally.
                    </p>
                    <p>
                      Through scholarships, mentoring, tutoring, and the provision of essential educational materials,
                      we help remove barriers to education and create pathways for students to achieve their full
                      potential.
                    </p>
                    <div className="space-y-2 pt-2">
                      <h4 className="font-semibold text-foreground">Key Activities:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Scholarship programs for vulnerable students</li>
                        <li>Provision of school supplies and uniforms</li>
                        <li>After-school tutoring and homework support</li>
                        <li>Mentoring and life skills development</li>
                        <li>Career guidance and counseling services</li>
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

      {/* Impact Stories*/} 
      {/*<section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Impact Stories</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Real stories of transformation from our education programs
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/education6.jpg" alt="Maria's Story" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-2">Scholarship Program</Badge>
                <h3 className="text-xl font-bold mb-2">Maria's Journey to College</h3>
                <p className="text-muted-foreground mb-4">
                  "The scholarship program changed my life. I'm the first in my family to attend college, and now I'm
                  studying to become a teacher so I can give back to my community."
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Maria Garcia</div>
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
                <Image
                  src="/images/school-improvement-2.jpg"
                  alt="School Transformation"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-2">School Improvement</Badge>
                <h3 className="text-xl font-bold mb-2">A School Transformed</h3>
                <p className="text-muted-foreground mb-4">
                  "The renovation of our school has created a positive learning environment. Student attendance has
                  improved by 40%, and our academic performance has significantly increased."
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Robert Kimani</div>
                    <div className="text-sm text-muted-foreground">School Principal</div>
                  </div>
                  <Button variant="outline" size="sm">
                    Read Full Story
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/volunteer-2.jpg" alt="Teacher's Story" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-2">Teacher Development</Badge>
                <h3 className="text-xl font-bold mb-2">Empowering Educators</h3>
                <p className="text-muted-foreground mb-4">
                  "The training I received has transformed my teaching approach. I now use interactive methods that
                  engage my students and make learning enjoyable and effective."
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Sarah Ochieng</div>
                    <div className="text-sm text-muted-foreground">Primary School Teacher</div>
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
                <School className="text-primary" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2">25</div>
              <div className="text-muted-foreground">Schools Improved</div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="text-primary" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-muted-foreground">Teachers Trained</div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="text-primary" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-muted-foreground">Students Reached</div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <GraduationCap className="text-primary" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2">200</div>
              <div className="text-muted-foreground">Scholarships Awarded</div>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Get Involved */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Support Our Education Programs</h2>
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
