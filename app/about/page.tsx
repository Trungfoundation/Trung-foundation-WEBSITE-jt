import Image from "next/image"
import { ArrowRight, Award, Calendar, Clock, Heart, Users, Mail, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Our Story */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2019, our foundation began with a simple mission: To empower communities through education,
                  healthcare and sustainable development, creating a brighter future for all. What started as a small
                  initiative by a group of passionate individuals has grown into a comprehensive foundation with
                  programs spanning education, healthcare, community and sustainability development.
                </p>
                <p>
                  Over the years, we've expanded our reach to over 25 communities across the several region of Uganda,
                  impacting over 2,000 lives through our various programs and initiatives. Our approach has always been
                  centered on sustainability and community ownership, ensuring that the changes we help initiate
                  continue to flourish long after our direct involvement ends.
                </p>
                <p>
                  Today, we continue to grow and adapt to the changing needs of the communities we serve, guided by our
                  core values of compassion, integrity, and excellence.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center items-center p-4">
              <div className="relative h-[300px] w-[300px] flex items-center justify-center">
                <div className="w-64 h-64 bg-primary/10 rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/trung_logo.svg"
                    alt="Trung Foundation Logo"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <Heart className="text-primary" size={28} />
                Our Mission
              </h2>
              <p className="text-muted-foreground mb-6">
                To empower communities through sustainable development initiatives in education, healthcare, and
                economic empowerment, creating lasting positive change that enables individuals and communities to
                thrive.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold">Provide Quality Education</h3>
                    <p className="text-sm text-muted-foreground">
                      Ensure access to quality education for all children in our communities.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold">Improve Healthcare Access</h3>
                    <p className="text-sm text-muted-foreground">
                      Enhance access to essential healthcare services for vulnerable populations.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold">Foster Economic Growth</h3>
                    <p className="text-sm text-muted-foreground">
                      Support sustainable economic development through skills training and entrepreneurship.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <Award className="text-primary" size={28} />
                Our Vision
              </h2>
              <p className="text-muted-foreground mb-6">
                A world where all people hold the muscle to create opportunity for themselves and others to end poverty.
                A world where all communities have the resources, opportunities, and support they need to achieve their
                full potential, creating a more equitable and sustainable future for all.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Users size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Empowered Communities</h3>
                    <p className="text-sm text-muted-foreground">
                      Communities that are self-sufficient and resilient in the face of challenges.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Sustainable Development</h3>
                    <p className="text-sm text-muted-foreground">
                      Long-term solutions that continue to benefit communities for generations.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Lasting Impact</h3>
                    <p className="text-sm text-muted-foreground">
                      Measurable, positive change that transforms lives and communities.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Compassion</h3>
              <p className="text-muted-foreground">
                We approach our work with empathy and understanding, recognizing the dignity and worth of every
                individual.
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Award className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-muted-foreground">
                We maintain the highest ethical standards in all our actions, ensuring transparency and accountability.
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe in the power of partnerships and work closely with communities and organizations.
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <ArrowRight className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously seek creative solutions to complex challenges, embracing new ideas and approaches.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Our Team</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Meet the dedicated professionals who drive our mission forward every day.
          </p>

          <Tabs defaultValue="leadership" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-xs mx-auto grid-cols-1">
                <TabsTrigger value="leadership">Leadership</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="leadership">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="overflow-hidden h-full">
                  <div className="p-6 text-center">
                    <div className="w-32 h-32 mx-auto mb-4 overflow-hidden">
                      <Image
                        src="/images/trung-musana.jpg"
                        alt="Andrew Trung Musana"
                        width={128}
                        height={128}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-bold text-xl mb-1">Andrew Trung Musana</h3>
                    <p className="text-primary mb-2">Executive Director</p>
                    <p className="text-muted-foreground mb-4">
                      Mr. Andrew Trung has over 8 years of experience in non-profit leadership and international
                      development.
                    </p>
                    <div className="flex gap-2 justify-center">
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <Mail size={16} />
                        <span className="sr-only">Email Andrew Trung Musana</span>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <Linkedin size={16} />
                        <span className="sr-only">Andrew Trung Musana's LinkedIn</span>
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="overflow-hidden h-full">
                  <div className="p-6 text-center">
                    <div className="w-32 h-32 mx-auto mb-4 overflow-hidden">
                      <Image
                        src="/images/counsel-aisha-nakisinje.jpg"
                        alt="Counsel Aisha Nakisinje"
                        width={128}
                        height={128}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-bold text-xl mb-1">Counsel Aisha Nakisinje</h3>
                    <p className="text-primary mb-2">Legal Advisor</p>
                    <p className="text-muted-foreground mb-4">
                      Counsel Aisha oversees all Legal programs ensuring alignment with legal obligations/requirements.
                    </p>
                    <div className="flex gap-2 justify-center">
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <Mail size={16} />
                        <span className="sr-only">Email Counsel Aisha Nakisinje</span>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <Linkedin size={16} />
                        <span className="sr-only">Counsel Aisha Nakisinje's LinkedIn</span>
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="overflow-hidden h-full">
                  <div className="p-6 text-center">
                    <div className="w-32 h-32 mx-auto mb-4 overflow-hidden">
                      <Image
                        src="/images/ken-wandabusi.jpg"
                        alt="Mr. Ken Wandabusi"
                        width={128}
                        height={128}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-bold text-xl mb-1">Mr. Ken Wandabusi</h3>
                    <p className="text-primary mb-2">Patron</p>
                    <p className="text-muted-foreground mb-4">
                      Mr Wandabusi provides oversight and guidance to ensure all programs operate within the bounds of
                      the organizations strategic intent.
                    </p>
                    <div className="flex gap-2 justify-center">
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <Mail size={16} />
                        <span className="sr-only">Email Mr. Ken Wandabusi</span>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <Linkedin size={16} />
                        <span className="sr-only">Mr. Ken Wandabusi's LinkedIn</span>
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="overflow-hidden h-full">
                  <div className="p-6 text-center">
                    <div className="w-32 h-32 mx-auto mb-4 overflow-hidden">
                      <Image
                        src="/images/raul-zihash.jpg"
                        alt="Raul Zihash"
                        width={128}
                        height={128}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-bold text-xl mb-1">Raul Zihash</h3>
                    <p className="text-primary mb-2">General Secretary</p>
                    <p className="text-muted-foreground mb-4">
                      Raul coordinates administrative functions and ensures effective communication across all
                      departments.
                    </p>
                    <div className="flex gap-2 justify-center">
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <Mail size={16} />
                        <span className="sr-only">Email Raul Zihash</span>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <Linkedin size={16} />
                        <span className="sr-only">Raul Zihash's LinkedIn</span>
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Leadership Committee */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Leadership Committee</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
            Our dedicated leadership committee guides our foundation's strategic direction and ensures we fulfill our
            mission.
          </p>

          <div className="bg-muted p-6 rounded-lg mb-8">
            <div className="relative w-full h-auto rounded-lg overflow-hidden">
              <Image
                src="/images/leadership-committee.jpeg"
                alt="Trung Foundation Leadership Committee"
                width={1200}
                height={600}
                className="object-cover w-full"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Executive Committee</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Users size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Andrew Trung Musana</p>
                    <p className="text-sm text-muted-foreground">Executive Director</p>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Users size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Counsel Aisha Nakisinje</p>
                    <p className="text-sm text-muted-foreground">Legal Advisor</p>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Users size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Mr. Ken Wandabusi</p>
                    <p className="text-sm text-muted-foreground">Patron</p>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Users size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Raul Zihash</p>
                    <p className="text-sm text-muted-foreground">General Secretary</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Program Directors</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Users size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Kusiima Keryn Precious</p>
                    <p className="text-sm text-muted-foreground">Treasurer</p>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Users size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Femh Shero</p>
                    <p className="text-sm text-muted-foreground">Media coordinator</p>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Users size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Dr Chaka Barasa</p>
                    <p className="text-sm text-muted-foreground">Health Overseer</p>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Users size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Prossy Wandabusi</p>
                    <p className="text-sm text-muted-foreground">Women's Counselor</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
