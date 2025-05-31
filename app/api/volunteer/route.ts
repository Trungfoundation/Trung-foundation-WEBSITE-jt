import { NextResponse } from "next/server"
import { createServerSupabaseClient } from "@/lib/supabase"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, phone, skills, availability, message } = data

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json({ success: false, message: "Please fill in all required fields." }, { status: 400 })
    }

    // Validate email format
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ success: false, message: "Please provide a valid email address." }, { status: 400 })
    }

    const supabase = createServerSupabaseClient()

    // Store the volunteer application in the database
    const { error } = await supabase.from("volunteer_applications").insert({
      name,
      email,
      phone,
      skills,
      availability,
      message,
      status: "pending",
    })

    if (error) throw error

    return NextResponse.json({
      success: true,
      message: "Thank you for your interest in volunteering. We'll be in touch soon!",
    })
  } catch (error) {
    console.error("Volunteer application error:", error)
    return NextResponse.json(
      { success: false, message: "An error occurred while processing your request." },
      { status: 500 },
    )
  }
}
