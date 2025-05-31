import { NextResponse } from "next/server"
import { createServerSupabaseClient } from "@/lib/supabase"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { email, password } = data

    // Validate required fields
    if (!email || !password) {
      return NextResponse.json({ success: false, message: "Please provide both email and password." }, { status: 400 })
    }

    const supabase = createServerSupabaseClient()

    // Sign in with email and password
    const { data: authData, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      console.error("Authentication error:", error.message)
      return NextResponse.json({ success: false, message: "Invalid email or password." }, { status: 401 })
    }

    // For demo purposes, allow any successful login
    // In production, you would check if the user exists in the admin_users table
    return NextResponse.json({
      success: true,
      message: "Authentication successful",
      user: {
        id: authData.user?.id,
        email: authData.user?.email,
        role: "admin",
      },
      session: authData.session,
    })
  } catch (error) {
    console.error("Authentication error:", error)
    return NextResponse.json({ success: false, message: "An error occurred during authentication." }, { status: 500 })
  }
}
