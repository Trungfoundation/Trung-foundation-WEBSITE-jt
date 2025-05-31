import { NextResponse } from "next/server"
import { createServerSupabaseClient } from "@/lib/supabase"

export async function GET(request: Request) {
  try {
    const supabase = createServerSupabaseClient()

    // Get counts from each table
    const [donorsResult, donationsResult, newsletterResult, contactResult, volunteersResult, eventsResult] =
      await Promise.all([
        supabase.from("donors").select("*", { count: "exact", head: true }),
        supabase.from("donations").select("amount"),
        supabase.from("newsletter_subscribers").select("*", { count: "exact", head: true }),
        supabase.from("contact_submissions").select("*", { count: "exact", head: true }),
        supabase.from("volunteer_applications").select("*", { count: "exact", head: true }),
        supabase.from("event_registrations").select("*", { count: "exact", head: true }),
      ])

    // Calculate total donations
    const totalDonations = donationsResult.data?.reduce((sum, donation) => sum + Number(donation.amount), 0) || 0

    // Get recent donations
    const { data: recentDonations } = await supabase
      .from("donations")
      .select(`
        id,
        amount,
        created_at,
        donors (
          name,
          email,
          is_anonymous
        )
      `)
      .order("created_at", { ascending: false })
      .limit(5)

    // Get monthly donation data for chart
    const { data: monthlyDonations } = await supabase
      .from("donations")
      .select("amount, created_at")
      .order("created_at", { ascending: true })

    // Process monthly data for chart
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const currentYear = new Date().getFullYear()

    const donationsByMonth = monthlyDonations?.reduce((acc, donation) => {
      const date = new Date(donation.created_at)
      if (date.getFullYear() === currentYear) {
        const month = date.getMonth()
        acc[month] = (acc[month] || 0) + Number(donation.amount)
      }
      return acc
    }, Array(12).fill(0))

    const chartData = monthNames.map((month, index) => ({
      month,
      amount: donationsByMonth?.[index] || 0,
    }))

    // Get recent submissions
    const { data: recentSubmissions } = await supabase.rpc("get_recent_submissions", { limit_count: 5 }).catch(() => {
      // If the RPC function doesn't exist, return an empty array
      return { data: [] }
    })

    return NextResponse.json({
      success: true,
      data: {
        counts: {
          donors: donorsResult.count || 0,
          totalDonations,
          newsletterSubscribers: newsletterResult.count || 0,
          volunteers: volunteersResult.count || 0,
          contactSubmissions: contactResult.count || 0,
          eventRegistrations: eventsResult.count || 0,
        },
        recentDonations: recentDonations || [],
        chartData,
        recentSubmissions: recentSubmissions || [],
      },
    })
  } catch (error) {
    console.error("Dashboard data error:", error)
    return NextResponse.json(
      { success: false, message: "An error occurred while fetching dashboard data." },
      { status: 500 },
    )
  }
}
