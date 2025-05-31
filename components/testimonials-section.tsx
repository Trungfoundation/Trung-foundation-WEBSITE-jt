"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: number
  name: string
  role: string
  quote: string
  image: string
  location: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Namukasa Sarah",
    role: "Program Beneficiary",
    quote:
      "The Trung Foundation's education program changed my life. I was able to complete my studies and now I'm teaching at a local school, inspiring other young girls to pursue their dreams.",
    image: "/african-woman-portrait.png",
    location: "Mbale, Uganda",
  },
  {
    id: 2,
    name: "Okello David",
    role: "Healthcare Program Participant",
    quote:
      "Before the mobile clinic came to our village, I had been suffering with untreated diabetes for years. The doctors not only provided treatment but taught me how to manage my condition. I'm healthier now than I've been in a decade.",
    image: "/african-man-portrait.png",
    location: "Tororo District, Uganda",
  },
  {
    id: 3,
    name: "Achieng Grace",
    role: "Women's Empowerment Graduate",
    quote:
      "The business skills and mentorship I received helped me transform my small craft business into a sustainable enterprise. I now employ five other women from my community and can provide for my family with dignity.",
    image: "/african-woman-entrepreneur-portrait.png",
    location: "Jinja, Uganda",
  },
  {
    id: 4,
    name: "Mark A",
    role: "Scholarship Recipient",
    quote:
      "Growing up in a rural village, university seemed like an impossible dream. The scholarship from Trung Foundation didn't just pay my tuition—it provided mentorship and support that helped me become the first doctor from my community.",
    image: "/placeholder.svg?key=7i3eo",
    location: "Kampala, Uganda",
  },
  {
    id: 5,
    name: "Nakato Esther",
    role: "Community Garden Participant",
    quote:
      "The community garden has brought our neighborhood together while providing fresh, nutritious food for our families. My children are eating better, and I've developed friendships with neighbors I never knew before.",
    image: "/african-woman-farmer-portrait.png",
    location: "Jinja, Uganda",
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Voices of Impact</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from the communities we serve across Uganda
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="absolute top-8 left-8 text-emerald-500">
              <Quote size={48} className="opacity-20" />
            </div>

            <div className="relative z-10">
              <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-8 pt-6">
                "{testimonials[activeIndex].quote}"
              </blockquote>

              <div className="flex items-center">
                <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonials[activeIndex].image || "/placeholder.svg"}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonials[activeIndex].name}</p>
                  <p className="text-emerald-600">{testimonials[activeIndex].role}</p>
                  <p className="text-gray-500 text-sm">{testimonials[activeIndex].location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  activeIndex === index ? "bg-emerald-600 w-6" : "bg-gray-300",
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-center mt-6 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
