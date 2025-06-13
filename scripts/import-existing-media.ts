import fs from "fs"
import path from "path"
import { createServerSupabaseClient } from "@/lib/supabase"

// This script would be run manually to import existing media
// It's not meant to be executed in the browser

async function importExistingMedia() {
  const supabase = createServerSupabaseClient()
  const publicDir = path.join(process.cwd(), "public")
  const imagesDir = path.join(publicDir, "images")

  // List of known problematic paths to skip
  const skipPaths = [
    path.join(imagesDir, "events.jpg"),
    path.join(imagesDir, "advocate-speaker.jpg"),
    path.join(imagesDir, "first-general-meeting-flyer.jpeg"),
  ]

  // Check if images directory exists
  if (!fs.existsSync(imagesDir)) {
    console.log("Images directory does not exist")
    return
  }

  // Get all image files recursively with better error handling
  const getFiles = (dir: string, fileList: string[] = []): string[] => {
    try {
      const files = fs.readdirSync(dir)

      files.forEach((file) => {
        const filePath = path.join(dir, file)

        // Skip known problematic paths
        if (skipPaths.includes(filePath)) {
          console.log(`Skipping known problematic path: ${filePath}`)
          return
        }

        try {
          // Use lstat instead of stat to handle symlinks properly
          const stat = fs.lstatSync(filePath)

          if (stat.isDirectory()) {
            // Recursively process subdirectories
            fileList = getFiles(filePath, fileList)
          } else if (stat.isFile()) {
            // Only include image files that are actually files
            const ext = path.extname(file).toLowerCase()
            if ([".jpg", ".jpeg", ".png", ".gif", ".svg", ".webp"].includes(ext)) {
              fileList.push(filePath)
            }
          }
        } catch (statError) {
          console.warn(`Warning: Could not stat ${filePath}:`, statError.message)
          // Skip this file/directory and continue
        }
      })
    } catch (readError) {
      console.error(`Error reading directory ${dir}:`, readError.message)
    }

    return fileList
  }

  const imageFiles = getFiles(imagesDir)
  console.log(`Found ${imageFiles.length} image files`)

  // Process each file with comprehensive error handling
  for (const filePath of imageFiles) {
    try {
      // Skip known problematic paths
      if (skipPaths.includes(filePath)) {
        console.log(`Skipping known problematic path: ${filePath}`)
        continue
      }

      // Verify the file still exists and is actually a file
      if (!fs.existsSync(filePath)) {
        console.log(`File no longer exists: ${filePath}`)
        continue
      }

      // Use lstat instead of stat to handle symlinks properly
      let stats
      try {
        stats = fs.lstatSync(filePath)
      } catch (statError) {
        console.warn(`Warning: Could not stat ${filePath}:`, statError.message)
        continue
      }

      if (!stats.isFile()) {
        console.log(`Skipping ${filePath} - not a regular file`)
        continue
      }

      const fileName = path.basename(filePath)
      const relativePath = filePath.replace(publicDir, "").replace(/\\/g, "/") // Normalize path separators
      const ext = path.extname(filePath).substring(1).toLowerCase()
      const fileType = `image/${ext === "jpg" ? "jpeg" : ext}`

      console.log(`Processing: ${fileName} (${relativePath})`)

      // Check if file already exists in database
      const { data: existingFile, error: selectError } = await supabase
        .from("media_files")
        .select("id")
        .eq("file_name", fileName)
        .maybeSingle()

      if (selectError) {
        console.error(`Error checking existing file ${fileName}:`, selectError)
        continue
      }

      if (existingFile) {
        console.log(`File ${fileName} already exists in database, skipping`)
        continue
      }

      // Insert into database
      const { error: insertError } = await supabase.from("media_files").insert({
        file_name: fileName,
        file_path: relativePath,
        file_type: fileType,
        file_size: stats.size,
        alt_text: fileName.split(".")[0].replace(/-/g, " "),
        is_public: true,
        tags: ["imported"],
      })

      if (insertError) {
        console.error(`Error importing ${fileName}:`, insertError)
      } else {
        console.log(`Successfully imported ${fileName}`)
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message)
      // Continue with next file instead of stopping
      continue
    }
  }

  console.log("Import completed")
}

// Execute the function with top-level error handling
importExistingMedia().catch((error) => {
  console.error("Fatal error in importExistingMedia:", error)
  process.exit(1)
})
