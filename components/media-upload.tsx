"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { uploadMedia } from "@/app/actions/media-actions"
import { Upload, X, ImageIcon } from "lucide-react"

export function MediaUpload() {
  const [isUploading, setIsUploading] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [preview, setPreview] = useState<string | null>(null)
  const [altText, setAltText] = useState("")
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState("")
  const [isPublic, setIsPublic] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files)
      setFiles(selectedFiles)

      // Create preview for the first file if it's an image
      const file = selectedFiles[0]
      if (file.type.startsWith("image/")) {
        const reader = new FileReader()
        reader.onload = () => {
          setPreview(reader.result as string)
        }
        reader.readAsDataURL(file)
      } else {
        setPreview(null)
      }

      // Auto-fill alt text with file name
      const fileName = file.name.split(".")[0].replace(/-/g, " ")
      setAltText(fileName)
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFiles = Array.from(e.dataTransfer.files)
      setFiles(droppedFiles)

      // Create preview for the first file if it's an image
      const file = droppedFiles[0]
      if (file.type.startsWith("image/")) {
        const reader = new FileReader()
        reader.onload = () => {
          setPreview(reader.result as string)
        }
        reader.readAsDataURL(file)
      } else {
        setPreview(null)
      }

      // Auto-fill alt text with file name
      const fileName = file.name.split(".")[0].replace(/-/g, " ")
      setAltText(fileName)
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleUpload = async () => {
    if (files.length === 0) return

    setIsUploading(true)

    try {
      for (const file of files) {
        const formData = new FormData()
        formData.append("file", file)
        formData.append("altText", altText)
        formData.append("description", description)
        formData.append("tags", tags)
        formData.append("isPublic", isPublic.toString())

        const result = await uploadMedia(formData)

        if (!result.success) {
          console.error("Upload failed:", result.error)
          alert(`Failed to upload ${file.name}: ${result.error}`)
        }
      }

      // Reset form
      setFiles([])
      setPreview(null)
      setAltText("")
      setDescription("")
      setTags("")
      setIsPublic(true)
      setIsOpen(false)

      // Reload the page to show the new media
      window.location.reload()
    } catch (error) {
      console.error("Upload error:", error)
      alert("An error occurred during upload")
    } finally {
      setIsUploading(false)
    }
  }

  const clearFiles = () => {
    setFiles([])
    setPreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <Upload className="h-4 w-4 mr-2" />
          Upload Media
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Upload Media</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div
            className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-muted/50 transition-colors"
            onClick={() => fileInputRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {preview ? (
              <div className="relative">
                <img
                  src={preview || "/placeholder.svg"}
                  alt="Preview"
                  className="max-h-[200px] mx-auto object-contain"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-0 right-0 h-6 w-6 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation()
                    clearFiles()
                  }}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-4">
                <ImageIcon className="h-10 w-10 text-muted-foreground mb-2" />
                <p className="text-sm font-medium mb-1">Drag and drop your files here or click to browse</p>
                <p className="text-xs text-muted-foreground">Supports images, documents, and videos up to 10MB</p>
              </div>
            )}
            <Input
              ref={fileInputRef}
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept="image/*"
              multiple
            />
          </div>

          {files.length > 0 && (
            <div>
              <p className="text-sm font-medium mb-2">Selected Files:</p>
              <ul className="text-sm space-y-1">
                {files.map((file, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span className="truncate">{file.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {file.size < 1024
                        ? `${file.size} B`
                        : file.size < 1048576
                          ? `${(file.size / 1024).toFixed(1)} KB`
                          : `${(file.size / 1048576).toFixed(1)} MB`}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="alt-text">Alt Text</Label>
            <Input
              id="alt-text"
              value={altText}
              onChange={(e) => setAltText(e.target.value)}
              placeholder="Describe the image for accessibility"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description (optional)</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add a description for this media"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">Tags (comma separated)</Label>
            <Input
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="e.g. event, program, hero"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="is-public" checked={isPublic} onCheckedChange={(checked) => setIsPublic(!!checked)} />
            <Label htmlFor="is-public">Make publicly accessible</Label>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleUpload} disabled={isUploading || files.length === 0}>
            {isUploading ? "Uploading..." : "Upload"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
