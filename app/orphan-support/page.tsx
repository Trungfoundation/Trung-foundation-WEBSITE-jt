import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Heart, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function OrphanSupportPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/images/kids-muzungu.jpg"
          alt="Orphan Support Program"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Orphan Support Program</h1>
          <p className="text-xl text-white max-w-2xl">
            Providing care, education, and a loving environment for vulnerable children
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/30 hover:bg-primary/20">
                Ongoing Program
              </Badge>
              <h2 className="text-3xl font-bold mb-6 text-primary/90">About Our Orphan Support Program</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The Trung Foundation's Orphan Support Program provides comprehensive care for vulnerable children who
                  have lost one or both parents, or who are at risk of abandonment. We create loving environments where
                  orphaned children can grow, learn, and develop their full potential.
                </p>
                <p>
                  Our holistic approach addresses not only the basic needs of these children but also their emotional,
                  educational, and social development. We work closely with local communities, caregivers, and
                  government agencies to ensure sustainable support systems.
                </p>
                <div className="space-y-2 pt-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <span className="font-medium text-foreground">Comprehensive Care:</span> We provide food, shelter,
                      clothing, healthcare, and education to orphaned children.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <span className="font-medium text-foreground">Educational Support:</span> We ensure all children
                      have access to quality education and learning materials.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <span className="font-medium text-foreground">Psychosocial Support:</span> We provide counseling
                      and emotional support to help children cope with trauma and loss.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <span className="font-medium text-foreground">Community Integration:</span> We work to keep
                      children connected to their communities and cultural heritage.
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/donate">
                  <Button className="shadow-md">
                    Support This Program <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg border-4 border-white">
              <Image src="/images/kids-muzungu.jpg" alt="Children in our program" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Program Impact */}
      <section className="py-16 px-4 md:px-6 bg-accent">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary/90">Our Impact</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">350+</div>
              <div className="text-lg font-medium">Children Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">8</div>
              <div className="text-lg font-medium">Communities Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-lg font-medium">School Attendance</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">12</div>
              <div className="text-lg font-medium">Years of Service</div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-primary/90">Program Achievements</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Heart className="h-5 w-5 text-primary mt-1" />
                <span>Provided comprehensive care to over 350 orphaned and vulnerable children</span>
              </li>
              <li className="flex items-start gap-2">
                <Heart className="h-5 w-5 text-primary mt-1" />
                <span>Maintained a 95% school attendance rate among supported children</span>
              </li>
              <li className="flex items-start gap-2">
                <Heart className="h-5 w-5 text-primary mt-1" />
                <span>Established 3 community-based care centers in underserved areas</span>
              </li>
              <li className="flex items-start gap-2">
                <Heart className="h-5 w-5 text-primary mt-1" />
                <span>Trained 45 community caregivers in child protection and psychosocial support</span>
              </li>
              <li className="flex items-start gap-2">
                <Heart className="h-5 w-5 text-primary mt-1" />
                <span>Facilitated family reunification for 28 children where appropriate</span>
              </li>
              <li className="flex items-start gap-2">
                <Heart className="h-5 w-5 text-primary mt-1" />
                <span>Provided vocational training to 75 older children to prepare them for independence</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4 text-primary/90">Success Stories</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Meet some of the children whose lives have been transformed through our Orphan Support Program
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-t-4 border-t-primary/70">
              <div className="relative h-64">
                <Image src="/images/kids-muzungu.jpg" alt="David's Story" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary/90">David's Story</h3>
                <p className="text-muted-foreground mb-4">
                  "After losing both parents at age 7, I came to the Trung Foundation. They provided me with education,
                  care, and love. Now I'm studying engineering and hope to build infrastructure in my community."
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">David, 19</div>
                    <div className="text-sm text-muted-foreground">University Student</div>
                  </div>
                  <Button variant="outline" size="sm" className="hover:bg-primary/10">
                    Read Full Story
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-t-4 border-t-primary/70">
              <div className="relative h-64">
                <Image src="/images/kids-muzungu.jpg" alt="Sarah's Story" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary/90">Sarah's Story</h3>
                <p className="text-muted-foreground mb-4">
                  "The foundation has been my family since I was 5. They helped me heal from my past and discover my
                  passion for art. I now teach art to younger children in the program."
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Sarah, 17</div>
                    <div className="text-sm text-muted-foreground">Student & Art Teacher</div>
                  </div>
                  <Button variant="outline" size="sm" className="hover:bg-primary/10">
                    Read Full Story
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-t-4 border-t-primary/70">
              <div className="relative h-64">
                <Image src="/images/kids-muzungu.jpg" alt="James and Mary's Story" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary/90">James & Mary's Story</h3>
                <p className="text-muted-foreground mb-4">
                  "As siblings who lost our parents to illness, staying together was our biggest fear. The foundation
                  kept us together and gave us a new home with love and support."
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">James & Mary</div>
                    <div className="text-sm text-muted-foreground">Siblings, 12 & 10</div>
                  </div>
                  <Button variant="outline" size="sm" className="hover:bg-primary/10">
                    Read Full Story
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="py-16 px-4 md:px-6 bg-primary text-primary-foreground bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">How You Can Help</h2>
          <p className="text-xl text-center max-w-2xl mx-auto mb-12">
            Join us in making a difference in the lives of orphaned and vulnerable children
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Donate</h3>
              <p className="mb-4 text-white/80">
                Your financial contribution helps provide food, shelter, education, and healthcare to children in need.
              </p>
              <Link href="/donate">
                <Button variant="secondary" className="shadow-md">
                  Donate Now
                </Button>
              </Link>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Volunteer</h3>
              <p className="mb-4 text-white/80">
                Share your time and skills to support our programs, whether in person or remotely.
              </p>
              <Link href="/volunteer">
                <Button variant="secondary" className="shadow-md">
                  Volunteer With Us
                </Button>
              </Link>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sponsor a Child</h3>
              <p className="mb-4 text-white/80">
                Make a lasting impact by sponsoring a child's education, healthcare, and basic needs.
              </p>
              <Link href="/contact">
                <Button variant="secondary" className="shadow-md">
                  Learn About Sponsorship
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
