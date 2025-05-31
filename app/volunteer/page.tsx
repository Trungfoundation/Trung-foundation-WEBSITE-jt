import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Clock, MapPin, Search, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function VolunteerPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/images/volunteers-working.JPG"
          alt="Volunteer With Us"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Volunteer With Us</h1>
          <p className="text-xl text-white max-w-2xl">
            Share your time and talents to make a meaningful difference in our communities
          </p>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Volunteer With Us?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Volunteering with our foundation is a rewarding way to give back to the community while developing new
                  skills and connections. Our volunteers are essential partners in our mission to create positive change
                  through education, healthcare, and community development.
                </p>
                <p>
                  We offer a variety of volunteer opportunities to match different interests, skills, and schedules. All
                  volunteers receive proper training and support to ensure a meaningful and impactful experience.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Make a tangible difference in people's lives</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Develop new skills and gain valuable experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Connect with like-minded individuals in your community</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Flexible opportunities to fit your schedule and interests</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src="/images/volunteer-and-women.jpg"
                alt="Volunteers working together"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Volunteer Opportunities</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Explore our current volunteer opportunities and find the perfect fit for your skills and interests
          </p>

          <div className="flex flex-col md:flex-row gap-4 items-end mb-8">
            <div className="flex-1">
              <label htmlFor="search-opportunities" className="block text-sm font-medium mb-1">
                Search Opportunities
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input id="search-opportunities" placeholder="Search by keyword..." className="pl-10" />
              </div>
            </div>
            <div className="w-full md:w-48">
              <label htmlFor="opportunity-type" className="block text-sm font-medium mb-1">
                Category
              </label>
              <select
                id="opportunity-type"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="all">All Categories</option>
                <option value="education">Education</option>
                <option value="healthcare">Healthcare</option>
                <option value="community">Community</option>
                <option value="events">Events</option>
                <option value="admin">Administrative</option>
              </select>
            </div>
            <div className="w-full md:w-48">
              <label htmlFor="commitment" className="block text-sm font-medium mb-1">
                Time Commitment
              </label>
              <select
                id="commitment"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="all">Any Commitment</option>
                <option value="one-time">One-time</option>
                <option value="short">Short-term</option>
                <option value="long">Long-term</option>
              </select>
            </div>
            <Button>Filter Opportunities</Button>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="all">All Opportunities</TabsTrigger>
              <TabsTrigger value="in-person">In-Person</TabsTrigger>
              <TabsTrigger value="virtual">Virtual</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid md:grid-cols-3 gap-6">
                <VolunteerCard
                  title="Classroom Assistant"
                  description="Support teachers and students in our education programs by assisting with activities and providing one-on-one help."
                  commitment="4 hours/week, 3-month minimum"
                  location="Various Schools"
                  skills={["Teaching experience", "Patience", "Communication"]}
                  category="Education"
                  isVirtual={false}
                />

                <VolunteerCard
                  title="Event Support"
                  description="Help with setup, registration, guest services, and cleanup at our fundraising and community events."
                  commitment="As needed, 4-6 hours per event"
                  location="Various Locations"
                  skills={["Organization", "Customer service", "Flexibility"]}
                  category="Events"
                  isVirtual={false}
                />

                <VolunteerCard
                  title="Administrative Support"
                  description="Assist our office staff with data entry, filing, correspondence, and other administrative tasks."
                  commitment="4-8 hours/week, flexible schedule"
                  location="Main Office, Downtown"
                  skills={["Computer skills", "Attention to detail", "Organization"]}
                  category="Administrative"
                  isVirtual={false}
                />

                <VolunteerCard
                  title="Community Garden Helper"
                  description="Help maintain our community gardens by planting, weeding, watering, and harvesting produce."
                  commitment="2-4 hours/week, seasonal"
                  location="Community Gardens, Various Locations"
                  skills={["Gardening interest", "Physical ability", "Reliability"]}
                  category="Community"
                  isVirtual={false}
                />

                <VolunteerCard
                  title="Healthcare Outreach"
                  description="Support our healthcare initiatives by assisting with health screenings, education, and outreach activities."
                  commitment="8 hours/month, 6-month minimum"
                  location="Community Centers and Mobile Clinics"
                  skills={["Healthcare background", "Compassion", "Communication"]}
                  category="Healthcare"
                  isVirtual={false}
                />

                <VolunteerCard
                  title="Mentor"
                  description="Provide guidance, support, and friendship to youth in our mentoring program through regular meetings and activities."
                  commitment="4 hours/month, 1-year commitment"
                  location="Various Locations"
                  skills={["Patience", "Reliability", "Positive attitude"]}
                  category="Education"
                  isVirtual={false}
                />

                <VolunteerCard
                  title="Virtual Tutor"
                  description="Provide academic support to students through online tutoring sessions in various subjects."
                  commitment="2-4 hours/week, 3-month minimum"
                  location="Virtual"
                  skills={["Subject expertise", "Teaching ability", "Technology comfort"]}
                  category="Education"
                  isVirtual={true}
                />

                <VolunteerCard
                  title="Social Media Ambassador"
                  description="Help promote our mission and activities by sharing content on your social media networks."
                  commitment="2-3 hours/month, ongoing"
                  location="Virtual"
                  skills={["Social media savvy", "Communication", "Creativity"]}
                  category="Administrative"
                  isVirtual={true}
                />

                <VolunteerCard
                  title="Grant Research Assistant"
                  description="Research potential grant opportunities and help prepare grant applications to support our programs."
                  commitment="5-10 hours/month, flexible"
                  location="Virtual"
                  skills={["Research skills", "Writing ability", "Attention to detail"]}
                  category="Administrative"
                  isVirtual={true}
                />
              </div>
            </TabsContent>

            <TabsContent value="in-person">
              <div className="grid md:grid-cols-3 gap-6">
                <VolunteerCard
                  title="Classroom Assistant"
                  description="Support teachers and students in our education programs by assisting with activities and providing one-on-one help."
                  commitment="4 hours/week, 3-month minimum"
                  location="Various Schools"
                  skills={["Teaching experience", "Patience", "Communication"]}
                  category="Education"
                  isVirtual={false}
                />

                <VolunteerCard
                  title="Event Support"
                  description="Help with setup, registration, guest services, and cleanup at our fundraising and community events."
                  commitment="As needed, 4-6 hours per event"
                  location="Various Locations"
                  skills={["Organization", "Customer service", "Flexibility"]}
                  category="Events"
                  isVirtual={false}
                />

                <VolunteerCard
                  title="Administrative Support"
                  description="Assist our office staff with data entry, filing, correspondence, and other administrative tasks."
                  commitment="4-8 hours/week, flexible schedule"
                  location="Main Office, Downtown"
                  skills={["Computer skills", "Attention to detail", "Organization"]}
                  category="Administrative"
                  isVirtual={false}
                />

                <VolunteerCard
                  title="Community Garden Helper"
                  description="Help maintain our community gardens by planting, weeding, watering, and harvesting produce."
                  commitment="2-4 hours/week, seasonal"
                  location="Community Gardens, Various Locations"
                  skills={["Gardening interest", "Physical ability", "Reliability"]}
                  category="Community"
                  isVirtual={false}
                />

                <VolunteerCard
                  title="Healthcare Outreach"
                  description="Support our healthcare initiatives by assisting with health screenings, education, and outreach activities."
                  commitment="8 hours/month, 6-month minimum"
                  location="Community Centers and Mobile Clinics"
                  skills={["Healthcare background", "Compassion", "Communication"]}
                  category="Healthcare"
                  isVirtual={false}
                />

                <VolunteerCard
                  title="Mentor"
                  description="Provide guidance, support, and friendship to youth in our mentoring program through regular meetings and activities."
                  commitment="4 hours/month, 1-year commitment"
                  location="Various Locations"
                  skills={["Patience", "Reliability", "Positive attitude"]}
                  category="Education"
                  isVirtual={false}
                />
              </div>
            </TabsContent>

            <TabsContent value="virtual">
              <div className="grid md:grid-cols-3 gap-6">
                <VolunteerCard
                  title="Virtual Tutor"
                  description="Provide academic support to students through online tutoring sessions in various subjects."
                  commitment="2-4 hours/week, 3-month minimum"
                  location="Virtual"
                  skills={["Subject expertise", "Teaching ability", "Technology comfort"]}
                  category="Education"
                  isVirtual={true}
                />

                <VolunteerCard
                  title="Social Media Ambassador"
                  description="Help promote our mission and activities by sharing content on your social media networks."
                  commitment="2-3 hours/month, ongoing"
                  location="Virtual"
                  skills={["Social media savvy", "Communication", "Creativity"]}
                  category="Administrative"
                  isVirtual={true}
                />

                <VolunteerCard
                  title="Grant Research Assistant"
                  description="Research potential grant opportunities and help prepare grant applications to support our programs."
                  commitment="5-10 hours/month, flexible"
                  location="Virtual"
                  skills={["Research skills", "Writing ability", "Attention to detail"]}
                  category="Administrative"
                  isVirtual={true}
                />

                <VolunteerCard
                  title="Translation Services"
                  description="Help translate our materials into different languages to reach more communities."
                  commitment="Flexible, project-based"
                  location="Virtual"
                  skills={["Fluency in multiple languages", "Writing skills", "Cultural sensitivity"]}
                  category="Administrative"
                  isVirtual={true}
                />

                <VolunteerCard
                  title="Website Support"
                  description="Assist with website updates, content creation, and technical improvements."
                  commitment="3-5 hours/month, ongoing"
                  location="Virtual"
                  skills={["Web development", "Content writing", "Design skills"]}
                  category="Administrative"
                  isVirtual={true}
                />

                <VolunteerCard
                  title="Virtual Event Coordinator"
                  description="Help plan and execute virtual fundraising events, webinars, and online workshops."
                  commitment="5-10 hours/month, project-based"
                  location="Virtual"
                  skills={["Event planning", "Technology skills", "Organization"]}
                  category="Events"
                  isVirtual={true}
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-8">
            <Link href="/get-involved">
              <Button size="lg">Apply to Volunteer</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Volunteer Process */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">How to Become a Volunteer</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Apply</h3>
              <p className="text-muted-foreground">
                Complete our volunteer application form with your interests, skills, and availability.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Interview</h3>
              <p className="text-muted-foreground">
                Meet with our volunteer coordinator to discuss opportunities that match your interests.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Orientation</h3>
              <p className="text-muted-foreground">
                Attend an orientation session to learn about our mission, policies, and procedures.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Start Volunteering</h3>
              <p className="text-muted-foreground">
                Begin your volunteer role with training and ongoing support from our team.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/get-involved">
              <Button>Start Your Volunteer Journey</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Volunteer Stories */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Volunteer Stories</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Hear from our volunteers about their experiences and the impact of their work
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image src="/images/john.jpg" alt="Volunteer Story" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">John's Story</h3>
                <p className="text-muted-foreground mb-4">
                  "Volunteering as a mentor has been one of the most rewarding experiences of my life. Seeing my mentee
                  grow in confidence and achieve his goals has been incredible."
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">John Davis</div>
                    <div className="text-sm text-muted-foreground">Volunteer Mentor, 2 years</div>
                  </div>
                  <Button variant="outline" size="sm">
                    Read Full Story
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image src="/images/maria.jpg" alt="Volunteer Story" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Maria's Story</h3>
                <p className="text-muted-foreground mb-4">
                  "As a healthcare professional, volunteering at the community clinics allows me to serve those who
                  might otherwise not receive care. It's both humbling and fulfilling."
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Maria Rodriguez</div>
                    <div className="text-sm text-muted-foreground">Healthcare Volunteer, 3 years</div>
                  </div>
                  <Button variant="outline" size="sm">
                    Read Full Story
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image src="/images/team-2.jpg" alt="Volunteer Story" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">David's Story</h3>
                <p className="text-muted-foreground mb-4">
                  "After retiring, I wanted to give back. Helping with administrative tasks may not seem glamorous, but
                  I know my work helps the foundation operate efficiently."
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">David Kim</div>
                    <div className="text-sm text-muted-foreground">Office Volunteer, 1 year</div>
                  </div>
                  <Button variant="outline" size="sm">
                    Read Full Story
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is the minimum time commitment for volunteers?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Time commitments vary by role. Some opportunities, like event support, may be one-time commitments of
                  a few hours. Others, like mentoring, require a longer commitment (typically 6-12 months) to ensure
                  consistency for those we serve. We offer a variety of opportunities to accommodate different schedules
                  and availability.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Do I need special skills or experience to volunteer?</AccordionTrigger>
              <AccordionContent>
                <p>
                  While some roles may require specific skills or experience (such as healthcare backgrounds for medical
                  outreach), many opportunities are open to anyone with a willingness to learn and help. We provide
                  training for all volunteer positions and will work with you to find a role that matches your skills
                  and interests.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Can I volunteer as a group or with my company?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes! We welcome group volunteers from companies, schools, faith communities, and other organizations.
                  We can arrange special projects or events for groups, or your group members can volunteer individually
                  in our ongoing programs. Please contact our volunteer coordinator at least 3-4 weeks in advance to
                  plan group volunteer activities.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Do you provide volunteer opportunities for students?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes, we offer volunteer opportunities for students, including service learning, internships, and
                  community service hours. Most student volunteers must be at least 16 years old, though some programs
                  may accept younger volunteers when accompanied by an adult. We're happy to provide documentation of
                  service hours for school requirements.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Is there a background check required for volunteers?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Background checks are required for volunteers who will be working directly with children, vulnerable
                  adults, or handling sensitive information. The type of background check depends on the volunteer role.
                  Our volunteer coordinator will provide information about any required background checks during the
                  application process. The foundation covers the cost of required background checks.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Join our community of volunteers who are creating positive change every day.
          </p>
          <Link href="/get-involved">
            <Button variant="secondary" size="lg">
              Apply to Volunteer
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

interface VolunteerCardProps {
  title: string
  description: string
  commitment: string
  location: string
  skills: string[]
  category: string
  isVirtual: boolean
}

function VolunteerCard({ title, description, commitment, location, skills, category, isVirtual }: VolunteerCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <Badge variant={isVirtual ? "outline" : "default"}>{category}</Badge>
          {isVirtual && <Badge variant="secondary">Virtual</Badge>}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-1">{description}</p>
        <div className="space-y-3 mt-auto">
          <div className="flex items-start gap-2">
            <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div>
              <div className="text-sm font-medium">Time Commitment</div>
              <div className="text-sm text-muted-foreground">{commitment}</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div>
              <div className="text-sm font-medium">Location</div>
              <div className="text-sm text-muted-foreground">{location}</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Users className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div>
              <div className="text-sm font-medium">Skills Needed</div>
              <div className="text-sm text-muted-foreground">{skills.join(", ")}</div>
            </div>
          </div>
        </div>
        <Link href="/get-involved">
          <Button className="w-full mt-4">Apply Now</Button>
        </Link>
      </CardContent>
    </Card>
  )
}
