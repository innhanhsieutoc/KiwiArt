export interface Painting {
  id: string;
  name: string;
  artist: string;
  description: string;
  price: number;
  imageUrl: string;
  thumbnailUrl: string;
  materials: string[];
  dimensions: string;
  videoUrl?: string; // New: Optional video URL for product detail
  additionalImages?: string[]; // New: Optional array of additional image URLs
  originalPrice?: number; // New: Optional original price for discount display
}

export interface NavItem {
  name: string;
  href: string;
}
