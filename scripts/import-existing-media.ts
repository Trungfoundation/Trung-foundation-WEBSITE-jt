import fs from "fs"
import path from "path"
import { createServerSupabaseClient } from "@/lib/supabase"

// This script would be run manually to import existing media
// It's not meant to be executed in the browser

async function importExistingMedia() {
  const supabase = createServerSupabaseClient()
  const publicDir = path.join(process.cwd(), "public")
  const imagesDir = path.join(publicDir, "images")

  // Get all image files recursively
  const getFiles = (dir: string, fileList: string[] = []): string[] => {
    const files = fs.readdirSync(dir)

    files.forEach((file) => {
      const filePath = path.join(dir, file)
      if (fs.statSync(filePath).isDirectory()) {
        fileList = getFiles(filePath, fileList)
      } else {
        // Only include image files
        const ext = path.extname(file).toLowerCase()
        if ([".jpg", ".jpeg", ".png", ".gif", ".svg", ".webp"].includes(ext)) {
          fileList.push(filePath)
        }
      }
    })

    return fileList
  }

  const imageFiles = getFiles(imagesDir)
  console.log(`Found ${imageFiles.length} image files`)

  // Process each file
  for (const filePath of imageFiles) {
    try {
      const stats = fs.statSync(filePath)
      const fileName = path.basename(filePath)
      const relativePath = filePath.replace(publicDir, "")
      const fileType = `image/${path.extname(filePath).substring(1)}`

      // Check if file already exists in database
      const { data: existingFile } = await supabase
        .from("media_files")
        .select("id")
        .eq("file_name", fileName)
        .maybeSingle()

      if (existingFile) {
        console.log(`File ${fileName} already exists in database, skipping`)
        continue
      }

      // Insert into database
      const { error } = await supabase.from("media_files").insert({
        file_name: fileName,
        file_path: relativePath,
        file_type: fileType,
        file_size: stats.size,
        alt_text: fileName.split(".")[0].replace(/-/g, " "),
        is_public: true,
        tags: ["imported"],
      })

      if (error) {
        console.error(`Error importing ${fileName}:`, error)
      } else {
        console.log(`Imported ${fileName}`)
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error)
    }
  }

  console.log("Import completed")
}

// Execute the function
importExistingMedia().catch(console.error)
