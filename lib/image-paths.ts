// This file provides safe image paths for the application
// Use these constants instead of hardcoded paths to avoid file system errors

export const IMAGE_PATHS = {
  // Replace problematic paths with safe alternatives
  EVENTS: "/images/events-photo.jpg",
  ADVOCATE_SPEAKER: "/images/advocate-speaker-photo.jpg",

  // Add other commonly used image paths here
  LOGO: "/images/trung_logo.png",
  WALLPAPER_1: "/images/trung-wallpaper-1.jpg",
  WALLPAPER_2: "/images/trung-wallpaper-2.jpg",
}

// Helper function to get a safe image path with fallback
export function getSafeImagePath(path: string, fallback = "/placeholder.svg"): string {
  // If the path is one of our known problematic paths, use the safe alternative
  if (path === "/images/events.jpg") {
    return IMAGE_PATHS.EVENTS
  }
  if (path === "/images/advocate-speaker.jpg") {
    return IMAGE_PATHS.ADVOCATE_SPEAKER
  }

  // Otherwise return the original path or fallback
  return path || fallback
}
