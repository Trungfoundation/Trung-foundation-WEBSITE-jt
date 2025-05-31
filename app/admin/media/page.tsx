import { Suspense } from "react"
import { MediaGallery } from "@/components/media-gallery"
import { MediaUpload } from "@/components/media-upload"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { importExistingMedia } from "@/app/actions/media-actions"
import { Database, Upload, RefreshCw } from "lucide-react"

export const metadata = {
  title: "Media Library | Trung Musana Foundation",
}

export default function MediaPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Media Library</h1>
          <p className="text-muted-foreground">Manage all your media files in one place</p>
        </div>

        <div className="flex gap-2">
          <form action={importExistingMedia}>
            <Button variant="outline" type="submit">
              <RefreshCw className="h-4 w-4 mr-2" />
              Import Existing
            </Button>
          </form>
          <MediaUpload />
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Media</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-4">
          <Suspense fallback={<div>Loading media...</div>}>
            <MediaGallery />
          </Suspense>
        </TabsContent>

        <TabsContent value="images" className="mt-4">
          <Suspense fallback={<div>Loading images...</div>}>
            <MediaGallery />
          </Suspense>
        </TabsContent>

        <TabsContent value="documents" className="mt-4">
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <Database className="h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium">No documents found</h3>
            <p className="text-muted-foreground">Upload your first document to get started</p>
          </div>
        </TabsContent>

        <TabsContent value="videos" className="mt-4">
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <Upload className="h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium">No videos found</h3>
            <p className="text-muted-foreground">Upload your first video to get started</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
