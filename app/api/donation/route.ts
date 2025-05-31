import { NextResponse } from "next/server"
import { createServerSupabaseClient } from "@/lib/supabase"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, amount, program, message, paymentMethod, isAnonymous } = data

    // Validate required fields
    if (!email || !amount || !paymentMethod) {
      return NextResponse.json({ success: false, message: "Please fill in all required fields." }, { status: 400 })
    }

    // Validate email format
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ success: false, message: "Please provide a valid email address." }, { status: 400 })
    }

    // Validate amount
    if (isNaN(Number(amount)) || Number(amount) <= 0) {
      return NextResponse.json({ success: false, message: "Please enter a valid donation amount." }, { status: 400 })
    }

    const supabase = createServerSupabaseClient()

    // Check if donor already exists
    const { data: existingDonor } = await supabase.from("donors").select("*").eq("email", email).single()

    let donorId: string

    if (existingDonor) {
      // Update existing donor
      donorId = existingDonor.id

      const { error } = await supabase
        .from("donors")
        .update({
          name: isAnonymous ? null : name,
          is_anonymous: isAnonymous,
          total_donated: existingDonor.total_donated + Number(amount),
          last_donation_date: new Date().toISOString(),
        })
        .eq("id", donorId)

      if (error) throw error
    } else {
      // Create new donor
      const { data: newDonor, error } = await supabase
        .from("donors")
        .insert({
          name: isAnonymous ? null : name,
          email,
          is_anonymous: isAnonymous,
          total_donated: Number(amount),
          last_donation_date: new Date().toISOString(),
        })
        .select()
        .single()

      if (error) throw error
      donorId = newDonor.id
    }

    // Create donation record
    const { error } = await supabase.from("donations").insert({
      donor_id: donorId,
      amount: Number(amount),
      program,
      message,
      payment_method: paymentMethod,
      payment_status: "pending", // This would be updated after payment processing
      transaction_id: `TR-${Date.now()}`, // In a real app, this would come from the payment processor
    })

    if (error) throw error

    // In a production environment, you would:
    // 1. Process the payment through a payment gateway
    // 2. Send a receipt to the donor
    // 3. Update the payment_status based on the payment result

    return NextResponse.json({
      success: true,
      message: "Thank you for your generous donation!",
      transactionId: `TR-${Date.now()}`,
    })
  } catch (error) {
    console.error("Donation processing error:", error)
    return NextResponse.json(
      { success: false, message: "An error occurred while processing your donation." },
      { status: 500 },
    )
  }
}
