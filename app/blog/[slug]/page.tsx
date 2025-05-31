import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Clock, Tag, Share2, MessageSquare, Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/lib/blog-data"
import { notFound } from "next/navigation"
import { SocialShare } from "@/components/social-share"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | Trung Foundation`,
    description: post.excerpt,
    openGraph: {
      images: [post.image],
    },
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Get related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== params.slug && p.categories.some((cat) => post.categories.includes(cat)))
    .slice(0, 3)

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] w-full">
        <Image
          src={
            post.slug === "women-entrepreneurs-success-stories"
              ? "/images/women-engagement.JPG"
              : post.image || "/placeholder.svg"
          }
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-white/80">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{post.readTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <Link href="/blog" className="flex items-center gap-2 text-green-700 hover:text-green-800 mb-8">
              <ArrowLeft size={16} />
              <span>Back to all articles</span>
            </Link>

            <article className="prose prose-lg max-w-none">
              {post.content.map((section, index) => (
                <div key={index} className="mb-8">
                  {section.type === "paragraph" && <p>{section.content}</p>}
                  {section.type === "heading" && <h2 className="text-2xl font-bold mt-8 mb-4">{section.content}</h2>}
                  {section.type === "quote" && (
                    <blockquote className="border-l-4 border-green-700 pl-4 italic my-6">
                      {section.content}
                      {section.author && <footer className="text-sm mt-2">— {section.author}</footer>}
                    </blockquote>
                  )}
                  {section.type === "list" && (
                    <ul className="list-disc pl-6 my-4">
                      {section.items.map((item, i) => (
                        <li key={i} className="mb-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </article>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <Tag size={16} className="text-gray-500" />
              {post.categories.map((category) => (
                <span key={category} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  {category}
                </span>
              ))}
            </div>

            {/* Social Share */}
            <div className="border-t border-b border-gray-200 py-6 my-8">
              <SocialShare
                title={post.title}
                url={`https://trungfoundation.org/blog/${post.slug}`}
                description={post.excerpt}
              />
            </div>

            {/* Share */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Share2 size={18} />
                Share this article
              </h3>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Facebook size={18} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Twitter size={18} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin size={18} />
                </Button>
              </div>
            </div>

            {/* Comments */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <MessageSquare size={20} />
                Comments ({post.comments.length})
              </h3>

              <div className="space-y-8">
                {post.comments.map((comment, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                        <Image
                          src={comment.avatar || "/placeholder.svg?height=48&width=48"}
                          alt={comment.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{comment.name}</h4>
                        <span className="text-sm text-gray-500">{comment.date}</span>
                      </div>
                      <p className="text-gray-700">{comment.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Leave a comment</h4>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                      Comment
                    </label>
                    <textarea
                      id="comment"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  <Button className="bg-green-700 hover:bg-green-800">Submit Comment</Button>
                </form>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              {/* Author */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold mb-4">About the Author</h3>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                    <Image
                      src={
                        post.slug === "women-entrepreneurs-success-stories"
                          ? "/images/trung_logo.png"
                          : post.authorImage || "/placeholder.svg?height=64&width=64"
                      }
                      alt={post.author}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{post.author}</h4>
                    <p className="text-sm text-gray-600">{post.authorRole}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700 text-sm">{post.authorBio}</p>
              </div>

              {/* Related Posts */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.length > 0 ? (
                    relatedPosts.map((relatedPost) => (
                      <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="block group">
                        <div className="flex gap-3">
                          <div className="flex-shrink-0 w-20 h-20 relative rounded overflow-hidden">
                            <Image
                              src={relatedPost.image || "/placeholder.svg"}
                              alt={relatedPost.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 group-hover:text-green-700 transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-sm text-gray-500 mt-1">{relatedPost.date}</p>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="text-gray-500">No related articles found.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
