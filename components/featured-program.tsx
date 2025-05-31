import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

interface FeaturedProgramProps {
  title: string
  description: string
  image: string
  link: string
}

export default function FeaturedProgram({ title, description, image, link }: FeaturedProgramProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48">
        <Image
          src={
            title.includes("Healthcare Access") ? "/images/healthcare-access-clinic.jpeg" : image || "/placeholder.svg"
          }
          alt={title}
          fill
          className="object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = "/placeholder.svg?height=200&width=400&query=" + encodeURIComponent(title)
          }}
        />
      </div>
      <CardContent className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-1">{description}</p>
        <Link href={link} className="text-primary flex items-center gap-1 hover:underline mt-auto">
          Learn More <ArrowRight size={16} />
        </Link>
      </CardContent>
    </Card>
  )
}
