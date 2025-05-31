import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const fileType = searchParams.get("type")
  const fileName = searchParams.get("name")

  if (!fileType || !fileName) {
    return NextResponse.json({ error: "Missing file type or name" }, { status: 400 })
  }

  // Map file types to their respective directories and extensions
  const fileMap: Record<string, { dir: string; ext: string; contentType: string }> = {
    report: {
      dir: "reports",
      ext: "pdf",
      contentType: "application/pdf",
    },
    calendar: {
      dir: "calendars",
      ext: "ics",
      contentType: "text/calendar",
    },
    resource: {
      dir: "resources",
      ext: "pdf",
      contentType: "application/pdf",
    },
    policy: {
      dir: "policies",
      ext: "pdf",
      contentType: "application/pdf",
    },
  }

  const fileConfig = fileMap[fileType]
  if (!fileConfig) {
    return NextResponse.json({ error: "Invalid file type" }, { status: 400 })
  }

  // In a real application, you would fetch the actual file from a storage service
  // For this example, we'll generate a simple file on the fly

  let fileContent: string | Buffer

  if (fileType === "calendar") {
    // Generate an iCalendar file
    fileContent = generateICalendarFile(fileName)
  } else {
    // Generate a simple PDF-like content (not a real PDF)
    fileContent = `This is a sample ${fileType} file: ${fileName}.${fileConfig.ext}`
  }

  // Set appropriate headers for the response
  const headers = new Headers()
  headers.set("Content-Type", fileConfig.contentType)
  headers.set("Content-Disposition", `attachment; filename="${fileName}.${fileConfig.ext}"`)

  return new NextResponse(fileContent, {
    status: 200,
    headers,
  })
}

function generateICalendarFile(eventName: string): string {
  // Create a simple iCalendar file
  const now = new Date()
  const tomorrow = new Date(now)
  tomorrow.setDate(tomorrow.getDate() + 1)

  const startDate = formatDateForICS(tomorrow)
  tomorrow.setHours(tomorrow.getHours() + 2)
  const endDate = formatDateForICS(tomorrow)

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `SUMMARY:${eventName}`,
    `DTSTART:${startDate}`,
    `DTEND:${endDate}`,
    "LOCATION:Trung Foundation",
    `DESCRIPTION:Event details for ${eventName}`,
    "STATUS:CONFIRMED",
    "SEQUENCE:0",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n")
}

function formatDateForICS(date: Date): string {
  return date.toISOString().replace(/-|:|\.\d+/g, "")
}
