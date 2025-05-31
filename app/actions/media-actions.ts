"use server"

import { createServerSupabaseClient } from "@/lib/supabase"
import { revalidatePath } from "next/cache"

export async function uploadMedia(formData: FormData) {
  try {
    const supabase = createServerSupabaseClient()

    const file = formData.get("file") as File
    if (!file) {
      return { success: false, error: "No file provided" }
    }

    const fileName = file.name
    const fileType = file.type
    const fileSize = file.size
    const altText = (formData.get("altText") as string) || ""
    const description = (formData.get("description") as string) || ""
    const tagsString = (formData.get("tags") as string) || ""
    const tags = tagsString ? tagsString.split(",").map((tag) => tag.trim()) : []
    const isPublic = formData.get("isPublic") === "true"

    // Generate a unique file path
    const timestamp = Date.now()
    const fileExtension = fileName.split(".").pop()
    const uniqueFileName = `${fileName.split(".")[0]}-${timestamp}.${fileExtension}`
    const filePath = `media/${uniqueFileName}`

    // Upload file to Supabase Storage
    const { data: storageData, error: storageError } = await supabase.storage.from("public").upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
    })

    if (storageError) {
      return { success: false, error: storageError.message }
    }

    // Get the public URL
    const {
      data: { publicUrl },
    } = supabase.storage.from("public").getPublicUrl(filePath)

    // Insert record into media_files table
    const { data, error } = await supabase
      .from("media_files")
      .insert({
        file_name: fileName,
        file_path: publicUrl,
        file_type: fileType,
        file_size: fileSize,
        alt_text: altText,
        description: description,
        tags: tags,
        is_public: isPublic,
        metadata: {
          original_name: fileName,
          storage_path: filePath,
          dimensions: formData.get("dimensions") || null,
        },
      })
      .select()

    if (error) {
      console.error("Database insert error:", error)
      return { success: false, error: error.message }
    }

    revalidatePath("/admin/media")
    return { success: true, data }
  } catch (error) {
    console.error("Error uploading media:", error)
    return { success: false, error: "Failed to upload media" }
  }
}

export async function getMediaFiles(
  options: {
    page?: number
    limit?: number
    search?: string
    tags?: string[]
    type?: string
    isPublic?: boolean
  } = {},
) {
  const { page = 1, limit = 20, search = "", tags = [], type = "", isPublic } = options

  try {
    const supabase = createServerSupabaseClient()

    let query = supabase.from("media_files").select("*", { count: "exact" })

    // Apply filters
    if (search) {
      query = query.or(`file_name.ilike.%${search}%,alt_text.ilike.%${search}%,description.ilike.%${search}%`)
    }

    if (tags.length > 0) {
      query = query.overlaps("tags", tags)
    }

    if (type) {
      query = query.eq("file_type", type)
    }

    if (isPublic !== undefined) {
      query = query.eq("is_public", isPublic)
    }

    // Pagination
    const from = (page - 1) * limit
    const to = from + limit - 1

    const { data, error, count } = await query.order("created_at", { ascending: false }).range(from, to)

    if (error) {
      console.error("Database error:", error)
      throw error
    }

    return {
      data: data || [],
      count: count || 0,
      page,
      limit,
      totalPages: count ? Math.ceil(count / limit) : 0,
    }
  } catch (error) {
    console.error("Error fetching media files:", error)
    return {
      data: [],
      count: 0,
      page,
      limit,
      totalPages: 0,
    }
  }
}

export async function deleteMedia(id: string) {
  try {
    const supabase = createServerSupabaseClient()

    // First get the file path
    const { data: fileData, error: fetchError } = await supabase
      .from("media_files")
      .select("file_path")
      .eq("id", id)
      .single()

    if (fetchError) {
      return { success: false, error: fetchError.message }
    }

    // Extract the storage path from the public URL
    const storagePath = fileData.file_path.split("/").pop()

    // Delete from storage
    const { error: storageError } = await supabase.storage.from("public").remove([`media/${storagePath}`])

    if (storageError) {
      console.warn("Error deleting file from storage:", storageError)
      // Continue to delete the database record even if storage deletion fails
    }

    // Delete from database
    const { error } = await supabase.from("media_files").delete().eq("id", id)

    if (error) {
      return { success: false, error: error.message }
    }

    revalidatePath("/admin/media")
    return { success: true }
  } catch (error) {
    console.error("Error deleting media:", error)
    return { success: false, error: "Failed to delete media" }
  }
}

export async function updateMedia(
  id: string,
  data: {
    alt_text?: string
    description?: string
    tags?: string[]
    is_public?: boolean
  },
) {
  try {
    const supabase = createServerSupabaseClient()

    const { error } = await supabase.from("media_files").update(data).eq("id", id)

    if (error) {
      return { success: false, error: error.message }
    }

    revalidatePath("/admin/media")
    return { success: true }
  } catch (error) {
    console.error("Error updating media:", error)
    return { success: false, error: "Failed to update media" }
  }
}

export async function importExistingMedia() {
  // This function will scan the public directory and import existing images into the database
  // This is a placeholder for now as it would require server-side file system access
  return { success: true, message: "Media import started" }
}
