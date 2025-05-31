"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Search, Tag, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useSearchParams } from "next/navigation"

export default function BlogPage() {
  const searchParams = useSearchParams()
  const categoryFilter = searchParams?.get("category")

  // Use the existing blog post from the blog data
  const visibleBlogPost = {
    title: "Ugandan Women Entrepreneurs Share Success Stories",
    slug: "women-entrepreneurs-success-stories", // Use the existing slug from blog-data.ts
    date: "May 15, 2025",
    author: "Trung Musana Foundation", // Changed to foundation name
    excerpt:
      "Five women from our entrepreneurship program share how they built thriving businesses and are now mentoring others in their communities across Uganda.",
    content: "",
    categories: ["Women Empowerment", "Success Stories"],
    featured: true,
  }

  // Function to get appropriate image based on category
  const getImageForCategory = (post: any) => {
    const category = post.categories[0]?.toLowerCase() || ""

    if (category.includes("women")) {
      return "/images/women-engagement.JPG"
    } else {
      return "/images/trung-wallpaper-1.jpg"
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/images/trung-wallpaper-1.jpg"
          alt="Foundation Blog"
          fill
          className="object-cover brightness-[0.7]"
          priority
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = "/placeholder.svg?height=400&width=800&text=Foundation+Blog"
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">News & Stories</h1>
          <p className="text-xl text-white max-w-2xl">
            Updates, impact stories, and insights from our work around the world
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-6">
                  {categoryFilter ? `${categoryFilter} Articles` : "Latest Articles"}
                </h2>

                {/* Featured Article - Only showing the Uganda Women Entrepreneurs article */}
                <Card className="mb-12 overflow-hidden border-t-4 border-t-primary/70 transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-[400px] bg-gray-100">
                    <Image
                      src="/images/women-engagement.JPG"
                      alt={visibleBlogPost.title}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/placeholder.svg?height=400&width=800&text=Women+Entrepreneurs"
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground shadow-md">Featured</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-primary/70" />
                        <span>{visibleBlogPost.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User size={14} className="text-primary/70" />
                        <span>By {visibleBlogPost.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Tag size={14} className="text-primary/70" />
                        <span>{visibleBlogPost.categories[0]}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-primary/90">{visibleBlogPost.title}</h3>
                    <p className="text-muted-foreground mb-4">{visibleBlogPost.excerpt}</p>
                    <Link
                      href={`/blog/women-entrepreneurs-success-stories`} // Use the correct existing slug
                      className="text-primary flex items-center gap-1 hover:underline font-medium"
                    >
                      Read Full Article <ArrowRight size={16} />
                    </Link>
                  </CardContent>
                </Card>

                {/* Empty message for when there would be more articles */}
                <div className="text-center py-8 text-muted-foreground">
                  <p>More articles coming soon!</p>
                </div>

                {/* Pagination - Simplified since we only have one article */}
                <Pagination className="mt-12">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Search */}
              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input placeholder="Search articles..." className="pl-10" />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <div className="space-y-2">
                  <Link
                    href="/blog?category=Women%20Empowerment"
                    className={`flex items-center justify-between p-3 rounded-md hover:bg-muted ${
                      searchParams?.get("category") === "Women Empowerment" ? "bg-muted" : ""
                    }`}
                  >
                    <span>Women Empowerment</span>
                    <Badge variant="outline">1</Badge>
                  </Link>
                  <Link
                    href="/blog?category=Success%20Stories"
                    className={`flex items-center justify-between p-3 rounded-md hover:bg-muted ${
                      searchParams?.get("category") === "Success Stories" ? "bg-muted" : ""
                    }`}
                  >
                    <span>Success Stories</span>
                    <Badge variant="outline">1</Badge>
                  </Link>
                  {searchParams?.get("category") && (
                    <Link href="/blog" className="flex items-center justify-center p-3 text-primary hover:underline">
                      Clear Filter
                    </Link>
                  )}
                </div>
              </div>

              {/* Recent Posts - Only showing our one article */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="relative h-16 w-16 flex-shrink-0 bg-gray-100">
                      <Image
                        src="/images/women-engagement.JPG"
                        alt="Women Entrepreneurs"
                        fill
                        className="object-cover rounded-md"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg?height=64&width=64&text=Women"
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium line-clamp-2 mb-1">
                        <Link href="#" className="hover:text-primary">
                          {visibleBlogPost.title}
                        </Link>
                      </h4>
                      <div className="text-sm text-muted-foreground">{visibleBlogPost.date}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Subscribe to Our Newsletter</h3>
                <p className="text-muted-foreground mb-4">
                  Get the latest updates, stories, and news delivered to your inbox.
                </p>
                <form className="space-y-3">
                  <Input placeholder="Your email address" type="email" required />
                  <Button className="w-full">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-6 bg-muted text-primary">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Share Your Story?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            If you've been impacted by our work or have a story to share, we'd love to hear from you.
          </p>
          <Button variant="default" size="lg">
            Contact Our Media Team
          </Button>
        </div>
      </section>
    </main>
  )
}
