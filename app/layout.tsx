import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Image from "next/image"
import Link from "next/link"

import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/components/auth-provider"
import MobileMenu from "@/components/mobile-menu"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Trung Foundation - Empowering Communities",
  description: "A non-profit foundation dedicated to education, healthcare, and community development",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <ScrollToTop />
            <Header />
            {children}
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="border-b sticky top-0 bg-white z-50 shadow-md">
      <div className="container mx-auto py-4 px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative w-[60px] h-[60px] mr-2">
                <Image
                  src="/images/trung_logo.svg"
                  alt="Trung Foundation Logo"
                  fill
                  className="filter brightness-0 sepia-100 hue-rotate-80 saturate-200 opacity-80"
                />
              </div>
              <span className="font-bold text-lg hidden sm:inline text-primary">Trung Foundation</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/programs" className="hover:text-primary transition-colors">
              Programs
            </Link>
            <Link href="/get-involved" className="hover:text-primary transition-colors">
              Engage
            </Link>
            <Link href="/events" className="hover:text-primary transition-colors">
              Events
            </Link>
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/admin" className="hover:text-primary transition-colors">
              Admin
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/donate"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Donate
            </Link>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-[#003300] text-white py-8 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="relative w-[50px] h-[50px] mr-2 bg-white/10 rounded-full p-1">
                <Image
                  src="/images/trung_logo.svg"
                  alt="Trung Foundation Logo"
                  fill
                  className="filter brightness-0 invert opacity-90"
                />
              </div>
              <span className="font-bold text-lg">Trung Foundation</span>
            </div>
            <p className="text-white/80 text-sm">
              Empowering communities through education, healthcare, and sustainable development.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Programs</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/programs/education" className="hover:text-white transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/programs/healthcare" className="hover:text-white transition-colors">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/programs/orphan-support" className="hover:text-white transition-colors">
                  Orphan Support
                </Link>
              </li>
              <li>
                <Link href="/programs/girl-empowerment" className="hover:text-white transition-colors">
                  Girl Empowerment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Get Involved</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/donate" className="hover:text-white transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="hover:text-white transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.facebook.com/share/1Ece7oiEuA/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/trungfoundation?igsh=bjZ4dTVocnljYnQ%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                title="Instagram link coming soon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@trung.foundation?_t=ZM-8vzFXjusm6J&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-music"
                >
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@trungfoundationco.limited?si=jD0KDhQNcvDGKrTf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-youtube"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>
            </div>
            <p className="text-white/80 text-sm">Sign up for our newsletter to stay updated on our work and impact.</p>
          </div>
        </div>

        <div className="border-t border-white/15 pt-6 text-center text-white/70">
          <p>© {new Date().getFullYear()} Trung Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
