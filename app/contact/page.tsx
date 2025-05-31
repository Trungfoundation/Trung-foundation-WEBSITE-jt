import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/images/we-give-our-best.jpg"
          alt="Contact Us - We Give Our Best"
          fill
          className="object-cover object-top brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white max-w-2xl">
            We'd love to hear from you. Reach out with questions, ideas, or support.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have questions about our programs as Trung Foundation? We're here to help. Fill out the form and we'll
                get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Our Location</h3>
                    <address className="not-italic text-muted-foreground">
                      <p>Namugongo Road</p>
                      <p>Uganda</p>
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <div className="text-muted-foreground">
                      <p>General Inquiries: Trungmusana@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <div className="text-muted-foreground">
                      <p>Main Office: (256) 762-121-251</p>
                      <p>Hours: Monday-Friday, 9am-5pm</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
                  <div className="flex gap-4">
                    <Link
                      href="#"
                      className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link
                      href="#"
                      className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link
                      href="https://www.instagram.com/trungfoundation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link
                      href="#"
                      className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
                <ContactForm />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Healthcare Team */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Healthcare Team</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 md:h-80 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/images/mobile-health-clinic.jpeg"
                alt="Mobile Health Clinic Services"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Professional Healthcare Support</h3>
              <p className="text-muted-foreground mb-6">
                Our dedicated healthcare professionals and volunteers work tirelessly to provide quality medical care
                and health education to underserved communities. Our team includes qualified doctors, nurses, and
                community health workers committed to improving health outcomes.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span>Qualified medical professionals</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span>Community health education</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span>Mobile clinic services</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span>Preventive care programs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Find Us</h2>

          <div className="h-[400px] w-full rounded-lg overflow-hidden border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16401664.413293308!2d15.416767186852198!3d1.2145618335131774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbda0cd3ebaef%3A0x5bef56aedc890201!2sAmor%20Way%20Ministries!5e0!3m2!1sen!2sug!4v1743576445083!5m2!1sen!2sug"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Foundation Location Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">What are your office hours?</h3>
              <p className="text-muted-foreground">
                Our main office is open Monday through Friday from 9:00 AM to 5:00 PM. We are closed on weekends and
                major holidays.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">How can I volunteer with your foundation?</h3>
              <p className="text-muted-foreground">
                We welcome volunteers for various programs and events. Please visit our "Get Involved" page to learn
                about current volunteer opportunities or contact our volunteer coordinator at Trungmusana@gmail.com.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">How can I arrange a tour of our facilities?</h3>
              <p className="text-muted-foreground">
                We offer guided tours of our main office and some program sites by appointment. Please contact us at
                Trungmusana@gmail.com or call (256) 762-121-251 to schedule a visit.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">How can I request a speaker for my event?</h3>
              <p className="text-muted-foreground">
                Our team members are available for speaking engagements about our work and impact. Please submit your
                request at least 4 weeks in advance through our contact form, specifying the date, venue, audience, and
                topic of interest.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
            <p className="text-lg mb-8">Subscribe to our newsletter to receive updates.</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="pl-10 bg-primary-foreground text-primary"
                  required
                />
              </div>
              <Button variant="secondary">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
