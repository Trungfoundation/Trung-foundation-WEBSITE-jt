-- Create media table for storing photos and other media files
CREATE TABLE IF NOT EXISTS public.media_files (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  file_name TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_type TEXT NOT NULL,
  file_size INTEGER NOT NULL,
  alt_text TEXT,
  description TEXT,
  tags TEXT[],
  uploaded_by UUID REFERENCES auth.users(id),
  is_public BOOLEAN DEFAULT true,
  metadata JSONB
);

-- Create a function to update the updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger to automatically update the updated_at column
CREATE TRIGGER update_media_files_updated_at
BEFORE UPDATE ON public.media_files
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Create an index on tags for faster searching
CREATE INDEX IF NOT EXISTS idx_media_files_tags ON public.media_files USING GIN (tags);

-- Create a view for commonly accessed media information
CREATE OR REPLACE VIEW public.media_gallery AS
SELECT 
  id,
  created_at,
  file_name,
  file_path,
  file_type,
  alt_text,
  tags,
  is_public
FROM public.media_files
WHERE is_public = true
ORDER BY created_at DESC;
