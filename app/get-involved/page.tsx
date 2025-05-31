"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, CheckCircle, Clock, DollarSign, Heart, MapPin, Share2, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import VolunteerStoryModal from "@/components/volunteer-story-modal"
import ApplicationModal from "@/components/application-modal"
import SignupModal from "@/components/signup-modal"

export default function GetInvolvedPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/images/where-we-work.jpeg"
          alt="Get Involved"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get Involved</h1>
          <p className="text-xl text-white max-w-2xl">
            Join us in creating positive change through volunteering, advocacy, and support
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Ways to Make a Difference</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            There are many ways to support our mission and create positive change in communities
          </p>

          <Tabs defaultValue="volunteer" className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
              <TabsTrigger value="donate">Donate</TabsTrigger>
              <TabsTrigger value="advocate">Advocate</TabsTrigger>
              <TabsTrigger value="partner">Partner</TabsTrigger>
            </TabsList>

            <TabsContent value="volunteer">
              <div className="grid md:grid-cols-1 gap-12 items-center">
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-4">Volunteer Your Time</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Volunteering is one of the most direct ways to make an impact. Whether you can give a few hours or
                      commit to a regular schedule, your time and skills can make a meaningful difference in our
                      programs and the communities we serve.
                    </p>
                    <p>
                      We offer a variety of volunteer opportunities to match different interests, skills, and schedules.
                      All volunteers receive proper training and support to ensure a rewarding experience.
                    </p>
                    <div className="space-y-2 pt-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Flexible scheduling to fit your availability</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Opportunities for individuals and groups</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Training and orientation provided</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Various roles to match your skills and interests</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="/images/volunteer-2.jpg"
                    alt="Volunteers working together"
                    fill
                    className="object-cover"
                  />
                </div> */}
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Current Volunteer Opportunities</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <VolunteerCard
                    title="Classroom Assistant"
                    description="Support teachers and students in our education programs by assisting with activities and providing one-on-one help."
                    commitment="4 hours/week, 3-month minimum"
                    location="Various Schools"
                    skills={["Teaching experience", "Patience", "Communication"]}
                  />

                  <VolunteerCard
                    title="Event Support"
                    description="Help with setup, registration, guest services, and cleanup at our fundraising and community events."
                    commitment="As needed, 4-6 hours per event"
                    location="Various Locations"
                    skills={["Organization", "Customer service", "Flexibility"]}
                  />

                  <VolunteerCard
                    title="Administrative Support"
                    description="Assist our office staff with data entry, filing, correspondence, and other administrative tasks."
                    commitment="4-8 hours/week, flexible schedule"
                    location="Main Office, Downtown"
                    skills={["Computer skills", "Attention to detail", "Organization"]}
                  />

                  <VolunteerCard
                    title="Community Garden Helper"
                    description="Help maintain our community gardens by planting, weeding, watering, and harvesting produce."
                    commitment="2-4 hours/week, seasonal"
                    location="Community Gardens, Various Locations"
                    skills={["Gardening interest", "Physical ability", "Reliability"]}
                  />

                  <VolunteerCard
                    title="Healthcare Outreach"
                    description="Support our healthcare initiatives by assisting with health screenings, education, and outreach activities."
                    commitment="8 hours/month, 6-month minimum"
                    location="Community Centers and Mobile Clinics"
                    skills={["Healthcare background", "Compassion", "Communication"]}
                  />

                  <VolunteerCard
                    title="Mentor"
                    description="Provide guidance, support, and friendship to youth in our mentoring program through regular meetings and activities."
                    commitment="4 hours/month, 1-year commitment"
                    location="Various Locations"
                    skills={["Patience", "Reliability", "Positive attitude"]}
                  />
                </div>

                <div className="text-center mt-8">
                  <ApplicationModal
                    title="Volunteer Application"
                    description="Thank you for your interest in volunteering with us. Please complete the form below to get started."
                  >
                    <Button size="lg">Apply to Volunteer</Button>
                  </ApplicationModal>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="donate">
              <div className="grid md:grid-cols-1 gap-12 items-center">
                {/* <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="/images/school-improvement-1.jpg"
                    alt="Supporting our cause"
                    fill
                    className="object-cover"
                  />
                </div> */}
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-4">Support Our Work</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Your financial support enables us to continue and expand our programs in education, healthcare,
                      women empowerment, and community development. Every contribution, regardless of size, makes a
                      difference in the lives of those we serve.
                    </p>
                    <p>
                      We offer various ways to give, including one-time donations, monthly giving, legacy gifts, and
                      in-kind contributions. All donations are tax-deductible to the extent allowed by law.
                    </p>
                    <div className="space-y-6 pt-4">
                      <div>
                        <h4 className="font-semibold mb-2">One-Time Donation</h4>
                        <p className="text-sm">Make an immediate impact with a one-time gift of any amount.</p>
                        <Link href="/donate">
                          <Button className="mt-2" size="sm">
                            Donate Now <DollarSign className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Monthly Giving</h4>
                        <p className="text-sm">
                          Join our sustainer program with a recurring monthly donation to provide ongoing support.
                        </p>
                        <SignupModal
                          title="Become a Monthly Donor"
                          description="Join our community of monthly donors who provide sustainable support for our programs."
                          buttonText="Sign Up"
                        >
                          <Button className="mt-2" size="sm" variant="outline">
                            Become a Monthly Donor
                          </Button>
                        </SignupModal>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Other Ways to Give</h4>
                        <Link href="/donate" className="text-primary flex items-center gap-1 hover:underline">
                          Learn about all giving options <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="advocate">
              <div className="grid md:grid-cols-1 gap-12 items-center">
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-4">Raise Your Voice</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Advocacy is a powerful way to create systemic change. By raising awareness about the issues we
                      address and advocating for supportive policies, you can help create lasting improvements in
                      communities.
                    </p>
                    <p>
                      Whether you share our content on social media, participate in awareness campaigns, or engage with
                      policymakers, your voice can amplify our impact and bring attention to important causes.
                    </p>
                    <div className="space-y-4 pt-2">
                      <h4 className="font-semibold">Ways to Advocate:</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <Card className="p-4">
                          <div className="flex items-center gap-3 mb-2">
                            <Share2 className="h-5 w-5 text-primary" />
                            <h5 className="font-medium">Share Our Stories</h5>
                          </div>
                          <p className="text-sm">
                            Share our impact stories and updates on social media to raise awareness.
                          </p>
                        </Card>

                        <Card className="p-4">
                          <div className="flex items-center gap-3 mb-2">
                            <Users className="h-5 w-5 text-primary" />
                            <h5 className="font-medium">Host an Event</h5>
                          </div>
                          <p className="text-sm">Organize a community discussion or awareness event about our cause.</p>
                        </Card>

                        <Card className="p-4">
                          <div className="flex items-center gap-3 mb-2">
                            <Calendar className="h-5 w-5 text-primary" />
                            <h5 className="font-medium">Join Campaigns</h5>
                          </div>
                          <p className="text-sm">Participate in our advocacy campaigns and awareness days.</p>
                        </Card>

                        <Card className="p-4">
                          <div className="flex items-center gap-3 mb-2">
                            <Heart className="h-5 w-5 text-primary" />
                            <h5 className="font-medium">Be an Ambassador</h5>
                          </div>
                          <p className="text-sm">
                            Represent our foundation in your community and professional networks.
                          </p>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image src="/images/training-seminar-1.jpg" alt="Advocacy in action" fill className="object-cover" />
                </div> */}
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image src="/images/engage-meeting.jpg" alt="Advocacy in action" fill className="object-cover" />
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Current Advocacy Priorities</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="p-6">
                    <h4 className="text-xl font-bold mb-3">Education Access</h4>
                    <p className="text-muted-foreground mb-4">
                      Advocating for policies that ensure quality education is accessible to all children, regardless of
                      their socioeconomic background.
                    </p>
                    <SignupModal
                      title="Join Education Advocacy Network"
                      description="Sign up to receive updates and action alerts about our education advocacy work."
                      buttonText="Join Network"
                    >
                      <Button variant="outline">Learn More</Button>
                    </SignupModal>
                  </Card>

                  <Card className="p-6">
                    <h4 className="text-xl font-bold mb-3">Healthcare Equity</h4>
                    <p className="text-muted-foreground mb-4">
                      Working to address disparities in healthcare access and outcomes in underserved communities.
                    </p>
                    <SignupModal
                      title="Join Healthcare Advocacy Network"
                      description="Sign up to receive updates and action alerts about our healthcare equity advocacy work."
                      buttonText="Join Network"
                    >
                      <Button variant="outline">Learn More</Button>
                    </SignupModal>
                  </Card>

                  <Card className="p-6">
                    <h4 className="text-xl font-bold mb-3">Women's Economic Empowerment</h4>
                    <p className="text-muted-foreground mb-4">
                      Supporting policies that promote women's economic independence and leadership opportunities.
                    </p>
                    <SignupModal
                      title="Join Women's Empowerment Network"
                      description="Sign up to receive updates and action alerts about our women's empowerment advocacy work."
                      buttonText="Join Network"
                    >
                      <Button variant="outline">Learn More</Button>
                    </SignupModal>
                  </Card>
                </div>

                <div className="text-center mt-8">
                  <SignupModal
                    title="Join Our Advocacy Network"
                    description="Sign up to receive updates, action alerts, and resources to help you advocate for positive change."
                    buttonText="Join Network"
                  >
                    <Button>Join Our Advocacy Network</Button>
                  </SignupModal>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="partner">
              <div className="grid md:grid-cols-1 gap-12 items-center">
                {/* <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image src="/images/workshop-1.jpg" alt="Partnership opportunities" fill className="object-cover" />
                </div> */}
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-4">Partner With Us</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Strategic partnerships are essential to expanding our reach and deepening our impact. We
                      collaborate with businesses, foundations, government agencies, and other nonprofits to leverage
                      resources and expertise for greater community benefit.
                    </p>
                    <p>
                      Our partnerships are built on shared values and mutual goals, with a focus on creating
                      sustainable, measurable impact in the communities we serve.
                    </p>
                    <div className="space-y-4 pt-2">
                      <h4 className="font-semibold">Partnership Opportunities:</h4>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="corporate">
                          <AccordionTrigger>Corporate Partnerships</AccordionTrigger>
                          <AccordionContent>
                            <p className="mb-2">
                              We work with businesses of all sizes to create meaningful partnerships that align with
                              corporate social responsibility goals while making a real difference in communities.
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Cause marketing campaigns</li>
                              <li>Employee volunteer programs</li>
                              <li>Matching gift programs</li>
                              <li>Event sponsorships</li>
                              <li>In-kind donations of products or services</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="foundation">
                          <AccordionTrigger>Foundation & Grant Partnerships</AccordionTrigger>
                          <AccordionContent>
                            <p className="mb-2">
                              We collaborate with foundations and grantmakers who share our commitment to creating
                              positive change in education, healthcare, and community development.
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Program funding</li>
                              <li>Capacity building support</li>
                              <li>Research and evaluation partnerships</li>
                              <li>Collaborative initiatives</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="nonprofit">
                          <AccordionTrigger>Nonprofit Collaborations</AccordionTrigger>
                          <AccordionContent>
                            <p className="mb-2">
                              We believe in the power of collaboration and regularly partner with other nonprofits to
                              maximize impact and avoid duplication of efforts.
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Joint programming</li>
                              <li>Resource sharing</li>
                              <li>Advocacy coalitions</li>
                              <li>Referral networks</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="government">
                          <AccordionTrigger>Government Partnerships</AccordionTrigger>
                          <AccordionContent>
                            <p className="mb-2">
                              We work with local, state, and national government agencies to implement programs and
                              initiatives that serve community needs.
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Program implementation</li>
                              <li>Public-private partnerships</li>
                              <li>Policy development</li>
                              <li>Community engagement</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Featured Partners</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    {/* <div className="relative h-32 w-full mb-4">
                      <Image src="/images/our-partner-4.jpg" alt="Partner logo" fill className="object-contain" />
                    </div> */}
                    <h4 className="font-semibold">ABC Corporation</h4>
                    <p className="text-sm text-muted-foreground">Corporate Partner</p>
                  </div>

                  <div className="text-center">
                    {/* <div className="relative h-32 w-full mb-4">
                      <Image src="/images/our-partner-5.jpg" alt="Partner logo" fill className="object-contain" />
                    </div> */}
                    <h4 className="font-semibold">XYZ Foundation</h4>
                    <p className="text-sm text-muted-foreground">Foundation Partner</p>
                  </div>

                  <div className="text-center">
                    {/* <div className="relative h-32 w-full mb-4">
                      <Image src="/images/our-partner-4.jpg" alt="Partner logo" fill className="object-contain" />
                    </div> */}
                    <h4 className="font-semibold">Community Health Alliance</h4>
                    <p className="text-sm text-muted-foreground">Nonprofit Partner</p>
                  </div>

                  <div className="text-center">
                    {/* <div className="relative h-32 w-full mb-4">
                      <Image src="/images/our-partner-5.jpg" alt="Partner logo" fill className="object-contain" />
                    </div> */}
                    <h4 className="font-semibold">City Department of Health</h4>
                    <p className="text-sm text-muted-foreground">Government Partner</p>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <ApplicationModal
                    title="Partnership Inquiry"
                    description="Interested in partnering with us? Please complete this form to start the conversation."
                  >
                    <Button>Explore Partnership Opportunities</Button>
                  </ApplicationModal>
                </div>
              </div>
            </TabsContent>
          </Tabs>
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
                <Image src="/images/femh-shero.jpg" alt="Femh Shero's Story" fill className="object-contain" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Femh Shero's Story</h3>
                <p className="text-muted-foreground mb-4">
                  "Volunteering as a mentor has been one of the most rewarding experiences of my life. Seeing my mentee
                  grow in confidence and achieve their goals has been incredible."
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Femh Shero</div>
                    <div className="text-sm text-muted-foreground">Volunteer Mentor, 2 years</div>
                  </div>
                  <VolunteerStoryModal
                    name="Femh Shero"
                    role="Volunteer Mentor"
                    duration="2 years"
                    image="/images/femh-shero.jpg"
                    backgroundImage="/images/femh-shero.jpg"
                    trigger={
                      <Button variant="outline" size="sm">
                        Read Full Story
                      </Button>
                    }
                  >
                    <p>
                      I first got involved with the foundation after retiring from my career as a high school teacher.
                      After 30 years in education, I wasn't ready to completely step away from working with young
                      people, but I wanted a different kind of engagement that would allow me more flexibility.
                    </p>
                    <p>
                      When I heard about the mentoring program, it seemed like the perfect fit. I was matched with
                      Jamal, a 14-year-old who was struggling in school and needed additional support. From our first
                      meeting, I could see he was bright and curious but lacked confidence and direction.
                    </p>
                    <p>
                      Over the past two years, we've met weekly. Sometimes we work on homework, other times we just talk
                      about life, his future goals, or challenges he's facing. We've also enjoyed activities
                      together—attending sporting events, visiting museums, or just grabbing a meal.
                    </p>
                    <p>
                      The transformation I've witnessed has been remarkable. Jamal's grades have improved significantly,
                      but more importantly, his self-confidence has soared. He's joined the debate team at school and is
                      now talking about college—something he hadn't considered possible before.
                    </p>
                    <p>
                      What surprised me most about volunteering is how much I've gained from the experience. Mentoring
                      Jamal has kept me connected to the community, given me purpose in retirement, and honestly, kept
                      me young at heart. His perspective on the world is refreshing, and I've learned as much from him
                      as he has from me.
                    </p>
                    <p>
                      To anyone considering volunteering as a mentor, I would say it's one of the most meaningful ways
                      to make a difference. The time commitment is manageable—just a few hours a week—but the impact is
                      profound and lasting. You don't need special skills, just a willingness to listen, encourage, and
                      be consistent in showing up. The rewards far outweigh the effort.
                    </p>
                  </VolunteerStoryModal>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/dr-chaka-barasa.jpg"
                  alt="Dr. Chaka Barasa's Story"
                  fill
                  className="object-contain"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Dr. Chaka Barasa's Story</h3>
                <p className="text-muted-foreground mb-4">
                  "As a healthcare professional, volunteering at the community clinics allows me to serve those who
                  might otherwise not receive care. It's both humbling and fulfilling."
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Dr. Chaka Barasa</div>
                    <div className="text-sm text-muted-foreground">Healthcare Volunteer, 3 years</div>
                  </div>
                  <VolunteerStoryModal
                    name="Dr. Chaka Barasa"
                    role="Healthcare Volunteer"
                    duration="3 years"
                    image="/images/dr-chaka-barasa.jpg"
                    backgroundImage="/images/dr-chaka-barasa.jpg"
                    trigger={
                      <Button variant="outline" size="sm">
                        Read Full Story
                      </Button>
                    }
                  >
                    <p>
                      As a physician at a busy urban hospital, my days are often filled with back-to-back appointments
                      and administrative work. While I love my career, I sometimes felt disconnected from the reason I
                      went into healthcare in the first place—to help people in need.
                    </p>
                    <p>
                      Three years ago, a colleague told me about the foundation's mobile health clinics that serve rural
                      communities with limited access to healthcare. I decided to volunteer one Saturday a month, and it
                      has completely transformed my perspective on my profession and purpose.
                    </p>
                    <p>
                      The mobile clinics travel to different villages where residents often have to travel hours to
                      reach the nearest medical facility. We provide basic health screenings, vaccinations, prenatal
                      care, and health education. For many of the people we serve, this is their only interaction with
                      healthcare professionals all year.
                    </p>
                    <p>
                      What strikes me most is the gratitude expressed by the community members. A simple blood pressure
                      check or diabetes screening—things I do routinely in my regular practice—can be life-changing for
                      someone who has never had access to these services. I've caught several serious conditions early
                      enough to make a significant difference in patients' outcomes.
                    </p>
                    <p>
                      One particular experience stands out. We met a young mother who had been experiencing severe
                      headaches for months but couldn't afford to take time off work or travel to the city for medical
                      care. A simple examination revealed dangerously high blood pressure that could have led to a
                      stroke. We were able to start her on medication and connect her with ongoing care. Six months
                      later, she returned to our clinic with her blood pressure under control and her quality of life
                      dramatically improved.
                    </p>
                    <p>
                      Volunteering has reminded me of the privilege it is to work in healthcare and the profound impact
                      we can have on individuals' lives. It's also opened my eyes to the healthcare disparities that
                      exist even within our own region and motivated me to advocate for better access to care for all
                      communities.
                    </p>
                    <p>
                      For other healthcare professionals considering volunteering, I would say it's an invaluable
                      experience that will renew your passion for your work. The skills you use every day can literally
                      save lives in communities that lack access to care. And the perspective you gain will make you a
                      better, more compassionate provider in your regular practice as well.
                    </p>
                  </VolunteerStoryModal>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image src="/images/raul-zihash.jpg" alt="Raul Zihash's Story" fill className="object-contain" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Raul Zihash's Story</h3>
                <p className="text-muted-foreground mb-4">
                  "As Community and Outreach Director, I started as a volunteer. Helping with administrative tasks may
                  not seem glamorous, but I know my work helps the foundation operate efficiently and reach more people
                  in need."
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Raul Zihash</div>
                    <div className="text-sm text-muted-foreground">Community and Outreach Volunteer</div>
                  </div>
                  <VolunteerStoryModal
                    name="Raul Zihash"
                    role="Community and Outreach Director"
                    duration="4 years"
                    image="/images/raul-zihash.jpg"
                    backgroundImage="/images/raul-zihash.jpg"
                    trigger={
                      <Button variant="outline" size="sm">
                        Read Full Story
                      </Button>
                    }
                  >
                    <p>
                      After 15 years in community development and office management, I wanted to use my skills to make a
                      direct impact in underserved communities. I learned about the foundation through a local community
                      event and was immediately drawn to their mission and approach.
                    </p>
                    <p>
                      I began volunteering two days a week in the foundation's main office. My responsibilities included
                      helping with bookkeeping, organizing donor records, assisting with grant applications, and
                      preparing materials for board meetings. During busy fundraising seasons, I would come in more
                      frequently to help process donations and send acknowledgment letters.
                    </p>
                    <p>
                      What many people don't realize is how critical administrative support is to nonprofit
                      organizations. Every hour spent helping with paperwork or financial records is an hour that staff
                      members can dedicate to program development, community outreach, or direct service.
                    </p>
                    <p>
                      One project I'm particularly proud of was helping to streamline the foundation's donor database
                      system. I noticed they were using outdated methods that were time-consuming and prone to errors.
                      Drawing on my professional experience, I helped implement a more efficient system that saved
                      countless hours of staff time and improved their ability to maintain relationships with
                      supporters.
                    </p>
                    <p>
                      After two years of volunteering, I was offered the position of Community and Outreach Director. In
                      this role, I've been able to expand our community partnerships and develop new outreach
                      initiatives that have significantly increased our impact in the region.
                    </p>
                    <p>
                      My journey from volunteer to director has given me a unique perspective on how vital volunteers
                      are to our organization. I understand firsthand the challenges and rewards of volunteering, and I
                      work hard to ensure that every volunteer feels valued and sees the impact of their contribution.
                    </p>
                    <p>
                      For anyone considering volunteering, I would encourage you to share your professional skills.
                      Nonprofits desperately need expertise in areas like administration, finance, marketing, and
                      technology. Your skills can make a tremendous difference in helping organizations like ours
                      operate more effectively and extend our reach to more people in need.
                    </p>
                  </VolunteerStoryModal>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Opportunities 
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Upcoming Opportunities</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Join us for these upcoming events and volunteer opportunities
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/training-seminar-1.jpg" alt="Volunteer Orientation" fill className="object-cover" />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-white/80 text-foreground backdrop-blur-sm">
                    Training
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-1 mb-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    <span>June 20, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock size={14} />
                    <span>6:00 PM - 8:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={14} />
                    <span>Main Office, Downtown</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Volunteer Orientation</h3>
                <p className="text-muted-foreground mb-4">
                  Learn about our volunteer opportunities, policies, and procedures in this comprehensive orientation
                  session.
                </p>
                <SignupModal
                  title="Register for Volunteer Orientation"
                  description="Join us on June 20, 2025 from 6:00 PM - 8:00 PM at our Main Office for a comprehensive volunteer orientation."
                  buttonText="Register"
                >
                  <Button>Register</Button>
                </SignupModal>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/school-improvement-1.jpg" alt="School Supply Drive" fill className="object-cover" />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-white/80 text-foreground backdrop-blur-sm">
                    Volunteer
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-1 mb-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    <span>July 15-30, 2025</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock size={14} />
                    <span>Various Shifts</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={14} />
                    <span>Multiple Locations</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Back-to-School Supply Drive</h3>
                <p className="text-muted-foreground mb-4">
                  Help collect, sort, and distribute school supplies to students in need for the upcoming school year.
                </p>
                <SignupModal
                  title="Sign Up for School Supply Drive"
                  description="Volunteer for our Back-to-School Supply Drive happening July 15-30, 2025 at multiple locations."
                  buttonText="Sign Up"
                >
                  <Button>Sign Up</Button>
                </SignupModal>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/workshop-1.jpg" alt="Advocacy Workshop" fill className="object-cover" />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-white/80 text-foreground backdrop-blur-sm">
                    Workshop
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-1 mb-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    <span>August 5, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock size={14} />
                    <span>1:00 PM - 4:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={14} />
                    <span>Community Center, Riverside</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Advocacy Workshop</h3>
                <p className="text-muted-foreground mb-4">
                  Learn effective advocacy techniques and how to speak up for causes you care about in your community.
                </p>
                <SignupModal
                  title="Register for Advocacy Workshop"
                  description="Join us on August 5, 2025 from 1:00 PM - 4:00 PM at the Community Center in Riverside for an interactive advocacy workshop."
                  buttonText="Register"
                >
                  <Button>Register</Button>
                </SignupModal>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link href="/events">
              <Button variant="outline" size="lg">
                View All Opportunities <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>*/}

      {/* FAQ */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I become a volunteer?</AccordionTrigger>
              <AccordionContent>
                <p>
                  To become a volunteer, start by completing our volunteer application form online or at our main
                  office. You'll then be invited to attend an orientation session where you'll learn about our programs,
                  policies, and available opportunities. Depending on the role, you may need to complete additional
                  training or a background check before beginning your volunteer work.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
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
              <AccordionTrigger>How can my business become a corporate partner?</AccordionTrigger>
              <AccordionContent>
                <p>
                  We offer various corporate partnership opportunities, including employee volunteer programs, cause
                  marketing campaigns, event sponsorships, and matching gift programs. To explore partnership
                  possibilities, please contact our development team at Trungmusana@gmail.com or call (256) 762-121-251.
                  We'll work with you to create a partnership that aligns with your company's values and CSR goals.
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
            Join our community of volunteers, donors, and advocates who are creating positive change every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ApplicationModal
              title="Volunteer Application"
              description="Thank you for your interest in volunteering with us. Please complete the form below to get started."
            >
              <Button variant="secondary" size="lg">
                Apply to Volunteer
              </Button>
            </ApplicationModal>
            <Link href="/donate">
              <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10">
                Donate Now
              </Button>
            </Link>
          </div>
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
}

function VolunteerCard({ title, description, commitment, location, skills }: VolunteerCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="p-6 flex-1 flex flex-col">
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
        <ApplicationModal
          title="Apply for Volunteer Position"
          description="Thank you for your interest in volunteering with us."
          role={title}
        >
          <Button className="w-full mt-4">Apply Now</Button>
        </ApplicationModal>
      </CardContent>
    </Card>
  )
}
