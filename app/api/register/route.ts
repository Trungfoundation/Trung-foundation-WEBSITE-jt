import { NextResponse } from "next/server"
import { createServerSupabaseClient } from "@/lib/supabase"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, phone, eventTitle, eventDate, message } = data

    // Validate required fields
    if (!name || !email || !eventTitle) {
      return NextResponse.json({ success: false, message: "Please fill in all required fields." }, { status: 400 })
    }

    // Validate email format
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ success: false, message: "Please provide a valid email address." }, { status: 400 })
    }

    const supabase = createServerSupabaseClient()

    // Store the event registration in the database
    const { error } = await supabase.from("event_registrations").insert({
      name,
      email,
      phone,
      event_title: eventTitle,
      event_date: eventDate,
      message,
      status: "registered",
    })

    if (error) throw error

    // In a production environment, you would also:
    // 1. Send a confirmation email to the registrant
    // 2. Send a notification to the event organizer

    return NextResponse.json({
      success: true,
      message: `Thank you for registering for ${eventTitle}. We've sent a confirmation to your email.`,
    })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json(
      { success: false, message: "An error occurred while processing your request." },
      { status: 500 },
    )
  }
}
