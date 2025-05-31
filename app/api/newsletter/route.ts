import { NextResponse } from "next/server"
import { createServerSupabaseClient } from "@/lib/supabase"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { email } = data

    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ success: false, message: "Please provide a valid email address." }, { status: 400 })
    }

    const supabase = createServerSupabaseClient()

    // Check if email already exists
    const { data: existingSubscriber } = await supabase
      .from("newsletter_subscribers")
      .select("*")
      .eq("email", email)
      .single()

    if (existingSubscriber) {
      // If already subscribed, return success
      if (existingSubscriber.status === "subscribed") {
        return NextResponse.json({
          success: true,
          message: "You're already subscribed to our newsletter!",
        })
      }

      // If previously unsubscribed, resubscribe them
      const { error } = await supabase
        .from("newsletter_subscribers")
        .update({
          status: "subscribed",
          subscribed_at: new Date().toISOString(),
          unsubscribed_at: null,
        })
        .eq("id", existingSubscriber.id)

      if (error) throw error

      return NextResponse.json({
        success: true,
        message: "Welcome back! You've been resubscribed to our newsletter.",
      })
    }

    // Add new subscriber
    const { error } = await supabase.from("newsletter_subscribers").insert({
      email,
      status: "subscribed",
      subscribed_at: new Date().toISOString(),
      source: "website",
    })

    if (error) throw error

    return NextResponse.json({
      success: true,
      message: "Thank you for subscribing to our newsletter!",
    })
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json(
      { success: false, message: "An error occurred while processing your request." },
      { status: 500 },
    )
  }
}
