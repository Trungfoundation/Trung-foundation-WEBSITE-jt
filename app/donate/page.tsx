"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { DollarSign, Heart, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CryptoDonation } from "@/components/crypto-donation"
import DonationForm from "@/components/donation-form"
import { ImpactStoryModal } from "@/components/impact-story-modal"
import { SupportInfoModal } from "@/components/support-info-modal"

export default function DonatePage() {
  const [activeStory, setActiveStory] = useState<number | null>(null)
  const [activeModal, setActiveModal] = useState<"corporate" | "events" | "legacy" | "contact" | null>(null)

  const impactStories = [
    {
      id: 1,
      title: "Saving Lives Through Healthcare",
      name: "Sarah Nantongo",
      role: "Community Member",
      image: "/images/medical-camp-2.jpg",
      shortContent:
        '"The mobile clinic that visited our village provided life-saving care for my child. Without your support, we wouldn\'t have access to medical services."',
      quote:
        "The mobile clinic saved my daughter's life when she contracted malaria. I don't know what we would have done without it.",
      content: [
        "Sarah Nantongo lives in a remote village in Uganda, over 30 kilometers from the nearest health facility. When her 4-year-old daughter Amina developed a high fever and became lethargic, Sarah was desperate for help but had no means to travel to the hospital.",
        '"I was terrified," Sarah recalls. "Amina\'s fever kept rising, and she became so weak she couldn\'t even drink water. In our village, we\'ve lost children to similar symptoms before."',
        "Fortunately, one of the foundation's mobile health clinics was scheduled to visit a neighboring village just 5 kilometers away. Sarah's neighbor helped transport them on his motorcycle to reach the clinic.",
        '"When we arrived, the medical team immediately recognized that Amina had severe malaria and was becoming dangerously dehydrated. They started treatment right away with IV fluids and antimalarial medication."',
        "The medical team monitored Amina for several hours, and when her condition stabilized, they provided Sarah with medication to continue the treatment at home, along with clear instructions and warning signs to watch for.",
        "\"Within two days, Amina was playing again. I can't express how grateful I am for the mobile clinic. Without it, I don't know if my daughter would be alive today.\"",
        "Sarah's story is just one example of how donor support enables our healthcare initiatives to reach remote communities where medical care is otherwise inaccessible. The mobile clinics serve thousands of patients each year, providing preventive care, treatment for common illnesses, maternal health services, and health education.",
        '"Now I volunteer as a community health worker," Sarah says proudly. "I\'ve been trained by the foundation to recognize danger signs in children and pregnant women, and I help coordinate when the mobile clinic visits our area. I want to make sure other families get the same life-saving care that my daughter received."',
      ],
    },
    {
      id: 2,
      title: "Building Better Schools",
      name: "Robert Kizito",
      role: "School Principal",
      image: "/images/school-improvement-1.jpg",
      shortContent:
        '"The new classroom and learning materials have transformed our school. Students are more engaged and our test scores have improved significantly."',
      quote:
        "For the first time, our students have proper desks, textbooks, and a roof that doesn't leak when it rains.",
      content: [
        "Robert Kizito has been the principal of Nakaseke Primary School for over 15 years. For most of that time, he watched his students struggle to learn in deteriorating classrooms with minimal resources.",
        '"Our biggest classroom had crumbling walls and a leaking roof," Robert explains. "During rainy season, we often had to cancel classes because the floor would flood and it was impossible to hear the teacher over the sound of rain on the metal roof. Many of our students shared textbooks—sometimes one book between six children—and we had no science equipment at all."',
        "Three years ago, the foundation selected Nakaseke Primary School for its School Improvement Program. The transformation began with structural renovations to make the buildings safe and weather-resistant.",
        '"The construction team rebuilt our three most damaged classrooms from the foundation up. They installed proper windows, a solid roof, and even ceiling fans to keep the rooms cool during hot weather. They also built proper latrines with handwashing stations, which has significantly reduced illness among our students."',
        "Beyond the physical improvements, the foundation provided educational materials that were previously unattainable for the school.",
        "Every student now has their own textbooks for core subjects. We received a small library of storybooks, science kits for hands-on learning, and even some computers for our older students. Our teachers received training on interactive teaching methods that have completely changed the classroom experience.",
        "The results have been remarkable. In just three years, Nakaseke Primary School has seen attendance rates rise from 68% to 94%. Test scores have improved across all subjects, with the percentage of students passing national exams increasing from 45% to 82%.",
        '"What makes me most proud," Robert says, "is seeing the change in our students\' attitudes toward learning. They\'re eager to come to school now. They participate actively in class. They\'re developing aspirations beyond what they thought possible before."',
        "The school has become a source of pride for the entire community. Parents are more involved, attending school meetings and volunteering to help maintain the improvements.",
        '"One father told me that his daughter now insists on doing her homework before anything else when she gets home. Before, she would make excuses to avoid it because she didn\'t have the proper materials to complete assignments."',
        "Robert believes the impact will extend far beyond his current students. \"When children receive quality education, it changes the trajectory of their lives. The support from donors isn't just building classrooms—it's building futures.\"",
      ],
    },
    {
      id: 3,
      title: "Empowering Entrepreneurs",
      name: "Grace Mutesi",
      role: "Business Owner",
      image: "/images/women-1.jpg",
      shortContent:
        '"The business training and microloan helped me start my tailoring shop. Now I can support my family and even employ two other women from my community."',
      quote:
        "I went from struggling to feed my children to being a business owner who can pay school fees and save for the future.",
      content: [
        "Five years ago, Grace Mutesi was a widow struggling to support her three children by selling vegetables at the local market. Despite working long hours, she barely earned enough to cover basic necessities.",
        '"After my husband died, I felt hopeless," Grace recalls. "I had some skills in tailoring from a course I took years ago, but I had no money for a sewing machine or materials to start a business."',
        "Grace heard about the foundation's Women's Entrepreneurship Program from a community announcement. Though hesitant at first, she decided to apply.",
        '"The program started with business training—how to identify market opportunities, basic accounting, customer service, and planning. I realized that with my tailoring skills, I could fill a need in our community for school uniforms and clothing repairs."',
        "After completing the training, Grace qualified for a microloan to purchase a sewing machine, fabric, and other supplies. She started her business from a small corner of her home.",
        '"The foundation didn\'t just give me money and leave. They assigned me a mentor who visited regularly to help me solve problems and grow my business. When I struggled with pricing my products properly, my mentor helped me calculate all my costs so I could make a profit while keeping prices affordable."',
        "Within a year, Grace's business had grown enough that she could rent a small shop in the local trading center. She repaid her initial loan and qualified for a second one to purchase an additional machine and expand her product line.",
        '"Now I have two employees—both women from my community who needed income. I make school uniforms for three local schools, and I\'ve added embroidery services that are very popular for special occasions."',
        "The impact on Grace's family has been transformative. All three of her children are in school, with her oldest daughter now in secondary school studying business.",
        '"My daughter says she wants to expand our shop into a clothing factory someday," Grace says with pride. "Before this program, I couldn\'t imagine such a future. Now I\'m saving to help make her dream come true."',
        "Grace has become an advocate for the program, encouraging other women to participate. She occasionally speaks at training sessions to share her experience.",
        "\"When donors support programs like this, they're not just helping one person—they're lifting entire families and communities. My business supports three families now, and we all spend our earnings locally, which helps other businesses grow too.\"",
      ],
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/images/advocate-speaker.jpg"
          alt="Support Our Mission - Advocacy in Action"
          fill
          className="object-cover brightness-[0.6] zoom-animation hover:brightness-[0.8] transition-all duration-700 scale-105 hover:scale-110"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Support Our Mission</h1>
          <p className="text-xl text-white max-w-2xl">Your donation helps us create lasting change in communities</p>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Make a Difference Today</h2>
            <p className="text-muted-foreground">
              Your support enables us to continue our work in education, healthcare, women empowerment, and community
              development. Every contribution, no matter the size, helps us create positive change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Ways to Give</h3>

              <Tabs defaultValue="one-time" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="one-time">One-time</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="annual">Annual</TabsTrigger>
                </TabsList>

                <TabsContent value="one-time">
                  <DonationForm type="one-time" />
                </TabsContent>

                <TabsContent value="monthly">
                  <DonationForm type="monthly" />
                </TabsContent>

                <TabsContent value="annual">
                  <DonationForm type="annual" />
                </TabsContent>
              </Tabs>

              {/* Cryptocurrency Donation Section */}
              <div className="mt-8">
                <CryptoDonation />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Your Impact</h3>

              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">$25 provides</h4>
                      <p className="text-muted-foreground">School supplies for a student for an entire semester</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Heart className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">$50 provides</h4>
                      <p className="text-muted-foreground">Essential healthcare services for a family for one month</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">$100 provides</h4>
                      <p className="text-muted-foreground">
                        Business training and seed funding for a woman entrepreneur
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Home className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">$500 provides</h4>
                      <p className="text-muted-foreground">Infrastructure improvements for a community center</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      {/*<section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Impact Stories</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            See how your donations make a difference in people's lives
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <Card key={story.id} className="overflow-hidden">
                <div className="relative h-64">
                  <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                  <p className="text-muted-foreground mb-4">{story.shortContent}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold">{story.name}</div>
                      <div className="text-sm text-muted-foreground">{story.role}</div>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => setActiveStory(index)}>
                      Read More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Other Ways to Support */}
      {/*<section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Other Ways to Support</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Corporate Partnerships</h3>
              <p className="text-muted-foreground mb-4">
                Partner with us through corporate giving, matching gifts, or employee volunteer programs.
              </p>
              <Button variant="outline" onClick={() => setActiveModal("corporate")}>
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>

            <Card className="p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fundraising Events</h3>
              <p className="text-muted-foreground mb-4">
                Attend or sponsor our fundraising events, or organize your own event to support our cause.
              </p>
              <Button variant="outline" onClick={() => setActiveModal("events")}>
                View Events <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>

            <Card className="p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Legacy Giving</h3>
              <p className="text-muted-foreground mb-4">
                Make a lasting impact by including our foundation in your estate planning or will.
              </p>
              <Button variant="outline" onClick={() => setActiveModal("legacy")}>
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          </div>
        </div>
      </section>*/}

      {/* Transparency */}
      {/*<section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Transparency & Accountability</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We are committed to transparency in how we use donor funds. Our financial reports are published
                  annually and available for public review.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>85% of donations go directly to our programs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>10% supports administrative operations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>5% is invested in fundraising efforts</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button variant="outline">View Financial Reports</Button>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                <Image src="/images/healthcare-2.jpg" alt="Fund Allocation Chart" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Donor Recognition */}
      {/*<section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Our Supporters</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            We are grateful to the individuals, organizations, and corporations who make our work possible
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative h-24 w-full mb-4">
                <Image src="/images/our-partner-4.jpg" alt="Corporate Sponsor" fill className="object-contain" />
              </div>
              <h3 className="font-semibold">ABC Corporation</h3>
              <p className="text-sm text-muted-foreground">Platinum Sponsor</p>
            </div>
            <div className="text-center">
              <div className="relative h-24 w-full mb-4">
                <Image src="/images/our-partner-5.jpg" alt="Corporate Sponsor" fill className="object-contain" />
              </div>
              <h3 className="font-semibold">XYZ Foundation</h3>
              <p className="text-sm text-muted-foreground">Gold Sponsor</p>
            </div>
            <div className="text-center">
              <div className="relative h-24 w-full mb-4">
                <Image src="/images/our-partner-4.jpg" alt="Corporate Sponsor" fill className="object-contain" />
              </div>
              <h3 className="font-semibold">Global Trust</h3>
              <p className="text-sm text-muted-foreground">Silver Sponsor</p>
            </div>
            <div className="text-center">
              <div className="relative h-24 w-full mb-4">
                <Image src="/images/our-partner-5.jpg" alt="Corporate Sponsor" fill className="object-contain" />
              </div>
              <h3 className="font-semibold">Community Bank</h3>
              <p className="text-sm text-muted-foreground">Bronze Sponsor</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline">View All Supporters</Button>
          </div>
        </div>
      </section>*/}

      {/* FAQ */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">Is my donation tax-deductible?</h3>
              <p className="text-muted-foreground">
                Yes, our foundation is a registered non-profit organization, and all donations are tax-deductible to the
                extent allowed by law. You will receive a receipt for your donation that can be used for tax purposes.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">Can I specify which program my donation supports?</h3>
              <p className="text-muted-foreground">
                During the donation process, you can select which program area you'd like your contribution to support.
                You can also choose to make an unrestricted gift that allows us to direct funds where they're needed
                most.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">How do I set up a recurring donation?</h3>
              <p className="text-muted-foreground">
                You can set up a recurring donation by selecting the "Monthly" or "Annual" option on our donation form.
                Your card will be automatically charged at the selected interval until you choose to cancel or modify
                your donation.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">Does my employer match donations?</h3>
              <p className="text-muted-foreground">
                Many employers offer matching gift programs that can double or even triple your donation. Check with
                your company's HR department to see if they offer this benefit, and we'll be happy to provide any
                documentation needed for the matching process.
              </p>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">Have more questions about donating or supporting our work?</p>
            <Button onClick={() => setActiveModal("contact")}>Contact Our Development Team</Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Your support today helps create a better tomorrow for communities in need.
          </p>
          <Button variant="secondary" size="lg">
            Donate Now <DollarSign className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Impact Story Modals */}
      {activeStory !== null && (
        <ImpactStoryModal
          isOpen={activeStory !== null}
          onClose={() => setActiveModal(null)}
          story={impactStories[activeStory]}
        />
      )}

      {/* Support Info Modals */}
      {activeModal && (
        <SupportInfoModal isOpen={activeModal !== null} onClose={() => setActiveModal(null)} type={activeModal} />
      )}
    </main>
  )
}

function BookOpen(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}

function Home(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}
