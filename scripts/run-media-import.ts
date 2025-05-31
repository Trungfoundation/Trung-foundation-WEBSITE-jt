// This is a script that can be run from the command line to import all media files
// It makes a request to the API endpoint we created

async function runMediaImport() {
  try {
    console.log("Starting media import process...")

    const response = await fetch("http://localhost:3000/api/admin/import-media")
    const data = await response.json()

    if (data.success) {
      console.log(`Media import completed successfully. Imported ${data.count} files.`)
    } else {
      console.error("Media import failed:", data.error)
    }
  } catch (error) {
    console.error("Error running media import:", error)
  }
}

runMediaImport()
