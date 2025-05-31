import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TeamMemberProps {
  name: string
  title: string
  bio: string
  image: string
  compact?: boolean
}

export default function TeamMember({ name, title, bio, image, compact = false }: TeamMemberProps) {
  return (
    <Card className="overflow-hidden h-full">
      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = "/diverse-group.png"
          }}
        />
      </div>
      <CardContent className={compact ? "p-4" : "p-6"}>
        <h3 className={`font-bold ${compact ? "text-lg" : "text-xl"} mb-1`}>{name}</h3>
        <p className="text-primary mb-2">{title}</p>
        <p className={`text-muted-foreground ${compact ? "text-sm" : ""} mb-4`}>{bio}</p>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <Mail size={16} />
            <span className="sr-only">Email {name}</span>
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <Linkedin size={16} />
            <span className="sr-only">{name}'s LinkedIn</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
