"use client"

import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

interface SupportInfoModalProps {
  isOpen: boolean
  onClose: () => void
  type: "corporate" | "events" | "legacy" | "contact"
}

export function SupportInfoModal({ isOpen, onClose, type }: SupportInfoModalProps) {
  const content = {
    corporate: {
      title: "Corporate Partnerships",
      description: "Partner with us to make a lasting impact",
      content: (
        <div className="space-y-4">
          <p>
            Our corporate partnership program offers multiple ways for businesses to engage with our mission and create
            meaningful impact in communities we serve.
          </p>
          <h3 className="text-lg font-semibold">Partnership Opportunities</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-medium">Corporate Giving:</span> Make a direct financial contribution to support our
              programs and initiatives.
            </li>
            <li>
              <span className="font-medium">Matching Gifts:</span> Double the impact of your employees' donations by
              matching their contributions.
            </li>
            <li>
              <span className="font-medium">Cause Marketing:</span> Create co-branded campaigns that raise awareness and
              funds for our work.
            </li>
            <li>
              <span className="font-medium">In-Kind Donations:</span> Provide goods or services that support our
              operations and programs.
            </li>
            <li>
              <span className="font-medium">Employee Volunteering:</span> Engage your team in meaningful volunteer
              opportunities with our foundation.
            </li>
          </ul>
          <h3 className="text-lg font-semibold">Benefits of Partnership</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Enhanced corporate social responsibility profile</li>
            <li>Increased employee engagement and satisfaction</li>
            <li>Brand alignment with impactful community development</li>
            <li>Recognition in our annual reports and website</li>
            <li>Customized impact reports for your stakeholders</li>
          </ul>
          <div className="pt-4">
            <p className="font-medium">
              To discuss partnership opportunities, please contact our development team at
              partnerships@trungfoundation.org or call us at (123) 456-7890.
            </p>
          </div>
        </div>
      ),
    },
    events: {
      title: "Fundraising Events",
      description: "Join us at our upcoming events",
      content: (
        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold">Annual Charity Gala</h3>
            <p className="text-sm text-muted-foreground mb-2">September 15, 2023 • 6:30 PM • Grand Hotel</p>
            <p className="mb-4">
              Our flagship fundraising event featuring dinner, silent auction, and inspiring stories from our program
              beneficiaries.
            </p>
            <Button variant="outline" size="sm">
              Register Now
            </Button>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold">Charity Run for Education</h3>
            <p className="text-sm text-muted-foreground mb-2">October 8, 2023 • 8:00 AM • City Park</p>
            <p className="mb-4">
              A 5K run/walk to raise funds for our education programs. Family-friendly with activities for all ages.
            </p>
            <Button variant="outline" size="sm">
              Register Now
            </Button>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold">Holiday Giving Campaign</h3>
            <p className="text-sm text-muted-foreground mb-2">November 15 - December 31, 2023</p>
            <p className="mb-4">
              Our end-of-year campaign with multiple events and giving opportunities to support our programs.
            </p>
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold">Host Your Own Event</h3>
            <p className="mb-4">
              Interested in hosting a fundraiser for our foundation? We provide resources and support to make your event
              a success.
            </p>
            <Button variant="outline" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      ),
    },
    legacy: {
      title: "Legacy Giving",
      description: "Create a lasting impact through planned giving",
      content: (
        <div className="space-y-4">
          <p>
            Legacy giving allows you to create a lasting impact that extends beyond your lifetime. By including our
            foundation in your estate planning, you help ensure that our work continues for generations to come.
          </p>
          <h3 className="text-lg font-semibold">Ways to Give</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-medium">Bequest in Your Will:</span> Designate a specific amount or percentage of
              your estate to our foundation.
            </li>
            <li>
              <span className="font-medium">Charitable Remainder Trust:</span> Receive income during your lifetime with
              the remainder benefiting our foundation.
            </li>
            <li>
              <span className="font-medium">Charitable Lead Trust:</span> Support our work now while passing assets to
              your heirs later.
            </li>
            <li>
              <span className="font-medium">Retirement Plan Assets:</span> Name our foundation as a beneficiary of your
              retirement plan.
            </li>
            <li>
              <span className="font-medium">Life Insurance:</span> Designate our foundation as a beneficiary of your
              life insurance policy.
            </li>
          </ul>
          <h3 className="text-lg font-semibold">Benefits of Legacy Giving</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Create a lasting legacy aligned with your values</li>
            <li>Potential tax benefits for your estate</li>
            <li>Membership in our Legacy Circle with special recognition</li>
            <li>The satisfaction of supporting our mission for generations to come</li>
          </ul>
          <div className="pt-4">
            <p className="font-medium">
              To discuss legacy giving options, please contact our planned giving officer at legacy@trungfoundation.org
              or call us at (123) 456-7890. We recommend consulting with your financial advisor or attorney when making
              estate planning decisions.
            </p>
          </div>
        </div>
      ),
    },
    contact: {
      title: "Contact Our Development Team",
      description: "We're here to answer your questions about supporting our work",
      content: (
        <div className="space-y-6">
          <p>
            Our development team is dedicated to helping donors and supporters find meaningful ways to engage with our
            mission. Whether you have questions about making a donation, corporate partnerships, or planned giving,
            we're here to help.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold">General Donations</h3>
              <p className="text-sm text-muted-foreground mb-2">For questions about making a donation</p>
              <p className="mb-1">donations@trungfoundation.org</p>
              <p>(123) 456-7890</p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold">Corporate Partnerships</h3>
              <p className="text-sm text-muted-foreground mb-2">For business and corporate inquiries</p>
              <p className="mb-1">partnerships@trungfoundation.org</p>
              <p>(123) 456-7891</p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold">Planned Giving</h3>
              <p className="text-sm text-muted-foreground mb-2">For legacy and estate planning</p>
              <p className="mb-1">legacy@trungfoundation.org</p>
              <p>(123) 456-7892</p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold">Events & Fundraising</h3>
              <p className="text-sm text-muted-foreground mb-2">For event sponsorships and hosting</p>
              <p className="mb-1">events@trungfoundation.org</p>
              <p>(123) 456-7893</p>
            </div>
          </div>

          <div className="pt-4">
            <h3 className="text-lg font-semibold mb-4">Send Us a Message</h3>
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input id="name" type="text" className="w-full p-2 border rounded-md" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input id="email" type="email" className="w-full p-2 border rounded-md" placeholder="Your email" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <select id="subject" className="w-full p-2 border rounded-md">
                  <option value="">Select a subject</option>
                  <option value="donation">Donation Question</option>
                  <option value="corporate">Corporate Partnership</option>
                  <option value="legacy">Legacy Giving</option>
                  <option value="event">Event Sponsorship</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-2 border rounded-md"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </div>
        </div>
      ),
    },
  }

  const modalContent = content[type]

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl">{modalContent.title}</DialogTitle>
          <DialogDescription className="text-base">{modalContent.description}</DialogDescription>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        <ScrollArea className="max-h-[calc(90vh-120px)]">
          <div className="p-1">{modalContent.content}</div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
