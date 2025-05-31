"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { getMediaFiles, deleteMedia, updateMedia } from "@/app/actions/media-actions"
import { ImageIcon, Search, Filter, Trash2, Eye, Download, Copy, Tag } from "lucide-react"

type MediaFile = {
  id: string
  file_name: string
  file_path: string
  file_type: string
  file_size: number
  alt_text: string | null
  description: string | null
  tags: string[] | null
  created_at: string
  is_public: boolean
}

export function MediaGallery() {
  const [media, setMedia] = useState<MediaFile[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [selectedType, setSelectedType] = useState("")
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [selectedMedia, setSelectedMedia] = useState<MediaFile | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [isPublicOnly, setIsPublicOnly] = useState(false)
  const [allTags, setAllTags] = useState<string[]>([])

  useEffect(() => {
    loadMedia()
  }, [page, searchTerm, selectedTags, selectedType, isPublicOnly])

  const loadMedia = async () => {
    setLoading(true)
    try {
      const result = await getMediaFiles({
        page,
        search: searchTerm,
        tags: selectedTags,
        type: selectedType,
        isPublic: isPublicOnly ? true : undefined,
      })

      setMedia(result.data)
      setTotalPages(result.totalPages)

      // Extract all unique tags
      const tags = result.data
        .flatMap((item) => item.tags || [])
        .filter((tag, index, self) => self.indexOf(tag) === index)

      setAllTags((prev) => {
        const newTags = [...new Set([...prev, ...tags])]
        return newTags.sort()
      })
    } catch (error) {
      console.error("Error loading media:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this media file?")) {
      const result = await deleteMedia(id)
      if (result.success) {
        setMedia(media.filter((item) => item.id !== id))
      } else {
        alert(`Error deleting media: ${result.error}`)
      }
    }
  }

  const handleUpdateMedia = async (id: string, data: any) => {
    const result = await updateMedia(id, data)
    if (result.success) {
      loadMedia()
    } else {
      alert(`Error updating media: ${result.error}`)
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B"
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB"
    else return (bytes / 1048576).toFixed(1) + " MB"
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => alert("Copied to clipboard!"))
      .catch((err) => console.error("Failed to copy:", err))
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search media files..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>

        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Filter Media</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">File Type</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant={selectedType === "" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedType("")}
                    >
                      All
                    </Button>
                    <Button
                      variant={selectedType === "image/jpeg" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedType("image/jpeg")}
                    >
                      JPEG
                    </Button>
                    <Button
                      variant={selectedType === "image/png" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedType("image/png")}
                    >
                      PNG
                    </Button>
                    <Button
                      variant={selectedType === "image/svg+xml" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedType("image/svg+xml")}
                    >
                      SVG
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Tags</h3>
                  <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto">
                    {allTags.map((tag) => (
                      <Badge
                        key={tag}
                        variant={selectedTags.includes(tag) ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => {
                          if (selectedTags.includes(tag)) {
                            setSelectedTags(selectedTags.filter((t) => t !== tag))
                          } else {
                            setSelectedTags([...selectedTags, tag])
                          }
                        }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="public-only"
                    checked={isPublicOnly}
                    onCheckedChange={(checked) => setIsPublicOnly(!!checked)}
                  />
                  <Label htmlFor="public-only">Show public files only</Label>
                </div>
              </div>
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedTags([])
                    setSelectedType("")
                    setIsPublicOnly(false)
                  }}
                >
                  Reset Filters
                </Button>
                <Button onClick={() => loadMedia()}>Apply Filters</Button>
              </div>
            </DialogContent>
          </Dialog>

          <div className="flex border rounded-md overflow-hidden">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              className="rounded-none"
              onClick={() => setViewMode("grid")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              className="rounded-none"
              onClick={() => setViewMode("list")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <>
          {viewMode === "grid" ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {media.map((item) => (
                <Card key={item.id} className="overflow-hidden group">
                  <div className="relative aspect-square bg-gray-100 flex items-center justify-center overflow-hidden">
                    {item.file_type.startsWith("image/") ? (
                      <img
                        src={item.file_path || "/placeholder.svg"}
                        alt={item.alt_text || item.file_name}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full w-full">
                        <ImageIcon className="h-12 w-12 text-gray-400" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 text-white"
                        onClick={() => setSelectedMedia(item)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 text-white"
                        onClick={() => handleDelete(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 text-white"
                        onClick={() => copyToClipboard(item.file_path)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-2">
                    <p className="text-xs font-medium truncate" title={item.file_name}>
                      {item.file_name}
                    </p>
                    <p className="text-xs text-muted-foreground">{formatFileSize(item.file_size)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="border rounded-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-2 text-xs font-medium">Preview</th>
                    <th className="text-left p-2 text-xs font-medium">Name</th>
                    <th className="text-left p-2 text-xs font-medium">Type</th>
                    <th className="text-left p-2 text-xs font-medium">Size</th>
                    <th className="text-left p-2 text-xs font-medium">Date</th>
                    <th className="text-left p-2 text-xs font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {media.map((item) => (
                    <tr key={item.id} className="border-t">
                      <td className="p-2">
                        <div className="h-10 w-10 bg-gray-100 flex items-center justify-center rounded overflow-hidden">
                          {item.file_type.startsWith("image/") ? (
                            <img
                              src={item.file_path || "/placeholder.svg"}
                              alt={item.alt_text || item.file_name}
                              className="object-cover w-full h-full"
                            />
                          ) : (
                            <ImageIcon className="h-6 w-6 text-gray-400" />
                          )}
                        </div>
                      </td>
                      <td className="p-2 text-sm">
                        <div className="max-w-[200px] truncate" title={item.file_name}>
                          {item.file_name}
                        </div>
                        {item.tags && item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-1">
                            {item.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs py-0">
                                {tag}
                              </Badge>
                            ))}
                            {item.tags.length > 2 && (
                              <Badge variant="outline" className="text-xs py-0">
                                +{item.tags.length - 2}
                              </Badge>
                            )}
                          </div>
                        )}
                      </td>
                      <td className="p-2 text-sm">{item.file_type.split("/")[1]}</td>
                      <td className="p-2 text-sm">{formatFileSize(item.file_size)}</td>
                      <td className="p-2 text-sm">{new Date(item.created_at).toLocaleDateString()}</td>
                      <td className="p-2">
                        <div className="flex gap-1">
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8"
                            onClick={() => setSelectedMedia(item)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => handleDelete(item.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8"
                            onClick={() => copyToClipboard(item.file_path)}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {media.length === 0 && !loading && (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <ImageIcon className="h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium">No media files found</h3>
              <p className="text-muted-foreground">
                {searchTerm || selectedTags.length > 0 || selectedType
                  ? "Try adjusting your search or filters"
                  : "Upload your first media file to get started"}
              </p>
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex justify-center mt-4 gap-2">
              <Button variant="outline" size="sm" disabled={page === 1} onClick={() => setPage(page - 1)}>
                Previous
              </Button>
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <Button
                    key={p}
                    variant={p === page ? "default" : "outline"}
                    size="sm"
                    className="w-8 h-8 p-0"
                    onClick={() => setPage(p)}
                  >
                    {p}
                  </Button>
                ))}
              </div>
              <Button variant="outline" size="sm" disabled={page === totalPages} onClick={() => setPage(page + 1)}>
                Next
              </Button>
            </div>
          )}
        </>
      )}

      {/* Media Detail Dialog */}
      {selectedMedia && (
        <Dialog open={!!selectedMedia} onOpenChange={(open) => !open && setSelectedMedia(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{selectedMedia.file_name}</DialogTitle>
            </DialogHeader>

            <Tabs defaultValue="preview">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="edit">Edit</TabsTrigger>
              </TabsList>

              <TabsContent value="preview" className="py-4">
                <div className="flex justify-center">
                  {selectedMedia.file_type.startsWith("image/") ? (
                    <img
                      src={selectedMedia.file_path || "/placeholder.svg"}
                      alt={selectedMedia.alt_text || selectedMedia.file_name}
                      className="max-h-[60vh] object-contain"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-64 w-full bg-gray-100">
                      <ImageIcon className="h-16 w-16 text-gray-400" />
                    </div>
                  )}
                </div>

                <div className="flex justify-center gap-2 mt-4">
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard(selectedMedia.file_path)}>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy URL
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => window.open(selectedMedia.file_path, "_blank")}>
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="details" className="py-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium mb-1">File Name</h3>
                    <p className="text-sm text-muted-foreground">{selectedMedia.file_name}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-1">File Type</h3>
                    <p className="text-sm text-muted-foreground">{selectedMedia.file_type}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-1">File Size</h3>
                    <p className="text-sm text-muted-foreground">{formatFileSize(selectedMedia.file_size)}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-1">Uploaded On</h3>
                    <p className="text-sm text-muted-foreground">
                      {new Date(selectedMedia.created_at).toLocaleString()}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-1">File Path</h3>
                  <div className="flex">
                    <Input value={selectedMedia.file_path} readOnly className="flex-1" />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="ml-2"
                      onClick={() => copyToClipboard(selectedMedia.file_path)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-1">Alt Text</h3>
                  <p className="text-sm text-muted-foreground">{selectedMedia.alt_text || "No alt text provided"}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-1">Description</h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedMedia.description || "No description provided"}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-1">Tags</h3>
                  <div className="flex flex-wrap gap-1">
                    {selectedMedia.tags && selectedMedia.tags.length > 0 ? (
                      selectedMedia.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))
                    ) : (
                      <p className="text-sm text-muted-foreground">No tags</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="is-public" checked={selectedMedia.is_public} disabled />
                  <Label htmlFor="is-public">Publicly accessible</Label>
                </div>
              </TabsContent>

              <TabsContent value="edit" className="py-4 space-y-4">
                <div>
                  <Label htmlFor="edit-alt-text">Alt Text</Label>
                  <Input
                    id="edit-alt-text"
                    defaultValue={selectedMedia.alt_text || ""}
                    onChange={(e) => {
                      setSelectedMedia({
                        ...selectedMedia,
                        alt_text: e.target.value,
                      })
                    }}
                  />
                  <p className="text-xs text-muted-foreground mt-1">Describe the image for accessibility purposes</p>
                </div>

                <div>
                  <Label htmlFor="edit-description">Description</Label>
                  <Textarea
                    id="edit-description"
                    defaultValue={selectedMedia.description || ""}
                    onChange={(e) => {
                      setSelectedMedia({
                        ...selectedMedia,
                        description: e.target.value,
                      })
                    }}
                  />
                </div>

                <div>
                  <Label htmlFor="edit-tags">Tags (comma separated)</Label>
                  <div className="flex">
                    <Input
                      id="edit-tags"
                      defaultValue={selectedMedia.tags?.join(", ") || ""}
                      onChange={(e) => {
                        const tagsValue = e.target.value
                        const tags = tagsValue
                          ? tagsValue
                              .split(",")
                              .map((tag) => tag.trim())
                              .filter(Boolean)
                          : []

                        setSelectedMedia({
                          ...selectedMedia,
                          tags,
                        })
                      }}
                    />
                    <Button variant="ghost" size="icon" className="ml-2" title="Add tag">
                      <Tag className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="edit-is-public"
                    checked={selectedMedia.is_public}
                    onCheckedChange={(checked) => {
                      setSelectedMedia({
                        ...selectedMedia,
                        is_public: !!checked,
                      })
                    }}
                  />
                  <Label htmlFor="edit-is-public">Publicly accessible</Label>
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <Button variant="outline" onClick={() => setSelectedMedia(null)}>
                    Cancel
                  </Button>
                  <Button
                    onClick={() => {
                      handleUpdateMedia(selectedMedia.id, {
                        alt_text: selectedMedia.alt_text,
                        description: selectedMedia.description,
                        tags: selectedMedia.tags,
                        is_public: selectedMedia.is_public,
                      })
                      setSelectedMedia(null)
                    }}
                  >
                    Save Changes
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
