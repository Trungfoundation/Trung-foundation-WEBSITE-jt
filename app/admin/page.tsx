"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Eye, EyeOff, Lock, User } from "lucide-react"
import { useAuth } from "@/components/auth-provider"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { signIn, user } = useAuth()

  // Check if user is already authenticated
  useEffect(() => {
    if (user || localStorage.getItem("adminAuthenticated") === "true") {
      router.push("/admin/dashboard")
    }
  }, [user, router])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // For demo purposes, bypass actual authentication
      // In production, you would use the signIn method
      localStorage.setItem("adminAuthenticated", "true")
      router.push("/admin/dashboard")

      /* Uncomment this for actual authentication
      const result = await signIn(email, password)

      if (result.success) {
        localStorage.setItem("adminAuthenticated", "true")
        router.push("/admin/dashboard")
      } else {
        setError(result.message)
      }
      */
    } catch (error) {
      setError("An error occurred during login. Please try again.")
      console.error("Login error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  // For demo purposes - this would be removed in production
  const handleDemoLogin = () => {
    setEmail("admin@trungfoundation.org")
    setPassword("TrungFoundation2025")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="relative w-16 h-16">
              <Image
                src="/images/trung_logo.svg"
                alt="Trung Foundation Logo"
                fill
                className="filter brightness-0 sepia-100 hue-rotate-80 saturate-200 opacity-80"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=64&width=64&text=TF"
                }}
              />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Admin Portal</CardTitle>
          <CardDescription>Enter your credentials to access the admin dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="pl-10 pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            {error && <p className="text-sm font-medium text-destructive">{error}</p>}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </Button>
            <Button type="button" variant="outline" className="w-full" onClick={handleDemoLogin}>
              Use Demo Credentials
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center text-sm text-muted-foreground">
          <p className="w-full">Protected area. Authorized personnel only.</p>
        </CardFooter>
      </Card>
    </div>
  )
}
