import { NextResponse } from "next/server"
import { createServerSupabaseClient } from "@/lib/supabase"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, phone, subject, message } = data

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, message: "Please fill in all required fields." }, { status: 400 })
    }

    // Validate email format
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ success: false, message: "Please provide a valid email address." }, { status: 400 })
    }

    const supabase = createServerSupabaseClient()

    // Store the contact submission in the database
    const { error } = await supabase.from("contact_submissions").insert({
      name,
      email,
      phone,
      subject,
      message,
      status: "new",
    })

    if (error) throw error

    // In a production environment, you would also:
    // 1. Send a notification email to the admin
    // 2. Send a confirmation email to the user

    return NextResponse.json({
      success: true,
      message: "Thank you for your message. We'll respond as soon as possible.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { success: false, message: "An error occurred while processing your request." },
      { status: 500 },
    )
  }
}
