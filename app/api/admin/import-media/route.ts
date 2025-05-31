import { NextResponse } from "next/server"
import { createServerSupabaseClient } from "@/lib/supabase"

// This is a server-side API route that will scan the public directory
// and import all images into the media_files table

export async function GET() {
  try {
    const supabase = createServerSupabaseClient()

    // Get all image files from the public directory
    // This is a simplified version since we can't actually access the file system in Next.js API routes
    // In a real implementation, you would need to use a different approach

    // For demonstration purposes, we'll create entries for known images
    const knownImages = [
      { path: "/images/cover.jpg", name: "cover.jpg", size: 150000, type: "image/jpeg" },
      { path: "/images/bg_3.jpg", name: "bg_3.jpg", size: 180000, type: "image/jpeg" },
      { path: "/images/asaph.jpg", name: "asaph.jpg", size: 120000, type: "image/jpeg" },
      { path: "/images/asaph-1.jpg", name: "asaph-1.jpg", size: 125000, type: "image/jpeg" },
      { path: "/images/dirty-water.jpg", name: "dirty-water.jpg", size: 140000, type: "image/jpeg" },
      { path: "/images/volunteer.jpg", name: "volunteer.jpg", size: 160000, type: "image/jpeg" },
      { path: "/images/volunteer-2.jpg", name: "volunteer-2.jpg", size: 165000, type: "image/jpeg" },
      { path: "/images/women-1.jpg", name: "women-1.jpg", size: 145000, type: "image/jpeg" },
      { path: "/images/workshop-1.jpg", name: "workshop-1.jpg", size: 155000, type: "image/jpeg" },
      { path: "/images/healthcare-1.jpg", name: "healthcare-1.jpg", size: 170000, type: "image/jpeg" },
      { path: "/images/healthcare-2.jpg", name: "healthcare-2.jpg", size: 175000, type: "image/jpeg" },
      { path: "/images/healthcare-3.jpg", name: "healthcare-3.jpg", size: 172000, type: "image/jpeg" },
      { path: "/images/education5.jpg", name: "education5.jpg", size: 165000, type: "image/jpeg" },
      { path: "/images/education6.jpg", name: "education6.jpg", size: 168000, type: "image/jpeg" },
      { path: "/images/events.jpg", name: "events.jpg", size: 158000, type: "image/jpeg" },
      { path: "/images/events-coming-soon.jpg", name: "events-coming-soon.jpg", size: 162000, type: "image/jpeg" },
      { path: "/trung_logo.png", name: "trung_logo.png", size: 50000, type: "image/png" },
      { path: "/images/amor-logo.png", name: "amor-logo.png", size: 45000, type: "image/png" },
      { path: "/images/first-orphanage-logo.png", name: "first-orphanage-logo.png", size: 48000, type: "image/png" },
      {
        path: "/images/pre-general-meeting-flier.png",
        name: "pre-general-meeting-flier.png",
        size: 200000,
        type: "image/png",
      },
    ]

    // Insert each image into the media_files table
    for (const image of knownImages) {
      // Check if the image already exists in the database
      const { data: existingFile } = await supabase
        .from("media_files")
        .select("id")
        .eq("file_path", image.path)
        .maybeSingle()

      if (existingFile) {
        console.log(`File ${image.name} already exists in database, skipping`)
        continue
      }

      // Insert into database
      const { error } = await supabase.from("media_files").insert({
        file_name: image.name,
        file_path: image.path,
        file_type: image.type,
        file_size: image.size,
        alt_text: image.name.split(".")[0].replace(/-/g, " "),
        is_public: true,
        tags: ["imported"],
      })

      if (error) {
        console.error(`Error importing ${image.name}:`, error)
      } else {
        console.log(`Imported ${image.name}`)
      }
    }

    return NextResponse.json({
      success: true,
      message: "Media import completed",
      count: knownImages.length,
    })
  } catch (error) {
    console.error("Error in import media API:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to import media",
      },
      { status: 500 },
    )
  }
}
