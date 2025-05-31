import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Users, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SchoolImprovementPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/images/school improvement.jpg"
          alt="School Improvement Program"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <Badge className="mb-4 bg-primary/90 hover:bg-primary text-white">Education Program</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">School Improvement Program</h1>
          <p className="text-xl text-white max-w-2xl">
            Enhancing school infrastructure and resources to create better learning environments
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
              <p className="text-muted-foreground">January 2018</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-muted rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-1">Active Locations</h3>
              <p className="text-muted-foreground">15 Schools</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-muted rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-1">Students Impacted</h3>
              <p className="text-muted-foreground">5,200+</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2>About the Program</h2>
            <p>
              Our School Improvement Program focuses on enhancing the physical infrastructure, learning resources, and
              teaching quality in underserved schools. We believe that every child deserves a safe, well-equipped, and
              stimulating learning environment to reach their full potential.
            </p>
            <p>
              Through this program, we renovate classrooms, build libraries, provide learning materials, train teachers,
              and implement innovative teaching methodologies. Our holistic approach addresses both the physical and
              educational needs of schools to create sustainable improvements in educational outcomes.
            </p>

            <h2>Program Components</h2>
            <div className="not-prose">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-primary/10 p-2 rounded-full">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Infrastructure Development</h3>
                        <p className="text-muted-foreground">
                          Renovating classrooms, building libraries, constructing sanitation facilities, and creating
                          safe play areas to improve the physical learning environment.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-primary/10 p-2 rounded-full">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Learning Resources</h3>
                        <p className="text-muted-foreground">
                          Providing textbooks, library books, computers, science equipment, and other educational
                          materials to enhance learning opportunities.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-primary/10 p-2 rounded-full">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Teacher Training</h3>
                        <p className="text-muted-foreground">
                          Conducting professional development workshops for teachers to improve teaching methodologies,
                          classroom management, and student engagement.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-primary/10 p-2 rounded-full">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Community Involvement</h3>
                        <p className="text-muted-foreground">
                          Engaging parents and community members in school improvement efforts to ensure sustainability
                          and community ownership of education.
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

      {/* Impact Section */}
      {/*<section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image src="/images/school-improvement-2.jpg" alt="School library" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Measurable Results</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">15 schools renovated</span> with improved classrooms, libraries, and
                    sanitation facilities
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">5,200+ students</span> benefiting from improved learning environments
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">320 teachers trained</span> in modern teaching methodologies
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">35% increase</span> in student attendance and engagement
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">28% improvement</span> in academic performance across participating
                    schools
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Success Story: Riverside Primary School</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-2">
                <p className="mb-4">
                  Before our intervention, Riverside Primary School had crumbling classrooms, no library, and limited
                  learning resources. Student attendance was low, and academic performance was suffering.
                </p>
                <p className="mb-4">
                  Through our School Improvement Program, we renovated all classrooms, built a library stocked with
                  2,000 books, provided computers and science equipment, and trained all teachers in modern teaching
                  methods.
                </p>
                <p>
                  Today, Riverside Primary School has seen a 45% increase in student attendance, a 38% improvement in
                  academic performance, and has become a model school in the region. The community is actively involved
                  in maintaining the improvements, ensuring long-term sustainability.
                </p>
              </div>
              <div className="relative h-[200px] md:h-full rounded-lg overflow-hidden">
                <Image src="/images/education6.jpg" alt="Riverside Primary School" fill className="object-cover" />
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
            We're committed to expanding our School Improvement Program to reach more schools and students in need.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Expansion</h3>
                <p className="text-muted-foreground mb-4">
                  Expanding to 10 additional schools in the next two years, reaching an additional 3,500 students.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Technology Integration</h3>
                <p className="text-muted-foreground mb-4">
                  Implementing digital learning resources and computer labs in all participating schools to prepare
                  students for the digital age.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Teacher Excellence</h3>
                <p className="text-muted-foreground mb-4">
                  Developing a comprehensive teacher training program with ongoing professional development and
                  mentoring.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Support */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Support Our School Improvement Program</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-muted-foreground">
            Your contribution can help us create better learning environments for thousands of children.
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
                <Image src="/images/education5.jpg" alt="Girl Child Empowerment" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Girl Child Empowerment</h3>
                <p className="text-muted-foreground mb-4">
                  Empowering girls through education, skills training, and leadership development.
                </p>
                <Link
                  href="/programs/girl-empowerment"
                  className="text-primary flex items-center gap-1 hover:underline font-medium"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/kids-muzungu.jpg" alt="Orphan Support" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Orphan Support</h3>
                <p className="text-muted-foreground mb-4">
                  Providing care, education, and a loving environment for vulnerable children.
                </p>
                <Link
                  href="/programs/orphan-support"
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
