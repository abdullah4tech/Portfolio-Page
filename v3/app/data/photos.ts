export interface Photo {
  id: string;
  src: string;
  thumb: string;
  width: number;
  height: number;
  alt: string;
  title?: string;
  description?: string;
  location?: string;
  camera?: string;
  tags?: string[];
  exif?: {
    aperture?: string;
    shutter?: string;
    iso?: string;
    focalLength?: string;
  };
}

/**
 * Photo collection.
 *
 * Replace these with your own images.
 * Place originals in `/public/photos/full/` and thumbnails in `/public/photos/thumbs/`.
 * For now we use picsum placeholder images as samples.
 */
export const photos: Photo[] = [
  {
    id: "1",
    src: "https://picsum.photos/id/10/4000/2667",
    thumb: "https://picsum.photos/id/10/600/400",
    width: 4000,
    height: 2667,
    alt: "Forest trail through tall trees",
    title: "Into the Woods",
    description: "A quiet walk through the pines on a misty morning.",
    location: "Olympic National Park, WA",
    tags: ["nature", "landscape"],
    exif: {
      aperture: "f/5.6",
      shutter: "1/125s",
      iso: "200",
      focalLength: "24mm",
    },
  },
  {
    id: "2",
    src: "https://picsum.photos/id/15/4000/3000",
    thumb: "https://picsum.photos/id/15/600/450",
    width: 4000,
    height: 3000,
    alt: "River flowing through a valley",
    title: "Still Waters",
    location: "Yosemite, CA",
    tags: ["nature", "landscape"],
    exif: {
      aperture: "f/8",
      shutter: "1/60s",
      iso: "100",
      focalLength: "35mm",
    },
  },
  {
    id: "3",
    src: "https://picsum.photos/id/29/4000/2667",
    thumb: "https://picsum.photos/id/29/600/400",
    width: 4000,
    height: 2667,
    alt: "Mountain range at golden hour",
    title: "Golden Ridgeline",
    description: "The last light of the day painting the peaks.",
    location: "Dolomites, Italy",
    tags: ["landscape", "travel"],
    exif: {
      aperture: "f/11",
      shutter: "1/250s",
      iso: "100",
      focalLength: "70mm",
    },
  },
  {
    id: "4",
    src: "https://picsum.photos/id/36/4000/3000",
    thumb: "https://picsum.photos/id/36/600/450",
    width: 4000,
    height: 3000,
    alt: "Coastal waves crashing on rocks",
    title: "Tideline",
    location: "Big Sur, CA",
    tags: ["nature", "landscape"],
    exif: {
      aperture: "f/8",
      shutter: "1/500s",
      iso: "100",
      focalLength: "50mm",
    },
  },
  {
    id: "5",
    src: "https://picsum.photos/id/42/3000/4000",
    thumb: "https://picsum.photos/id/42/450/600",
    width: 3000,
    height: 4000,
    alt: "Neon lights in a narrow alley",
    title: "After Dark",
    description: "City streets come alive when the sun goes down.",
    location: "Shibuya, Tokyo",
    tags: ["urban", "travel", "night"],
    exif: {
      aperture: "f/1.8",
      shutter: "1/60s",
      iso: "3200",
      focalLength: "35mm",
    },
  },
  {
    id: "6",
    src: "https://picsum.photos/id/48/4000/2667",
    thumb: "https://picsum.photos/id/48/600/400",
    width: 4000,
    height: 2667,
    alt: "Aerial view of a winding road",
    title: "The Long Way Home",
    location: "Iceland",
    tags: ["travel", "landscape"],
    exif: {
      aperture: "f/5.6",
      shutter: "1/1000s",
      iso: "200",
      focalLength: "16mm",
    },
  },
  {
    id: "7",
    src: "https://picsum.photos/id/65/4000/3000",
    thumb: "https://picsum.photos/id/65/600/450",
    width: 4000,
    height: 3000,
    alt: "Laptop on a wooden desk",
    title: "Workspace",
    description: "Where the ideas happen.",
    tags: ["minimal", "urban"],
  },
  {
    id: "8",
    src: "https://picsum.photos/id/76/3000/4000",
    thumb: "https://picsum.photos/id/76/450/600",
    width: 3000,
    height: 4000,
    alt: "Tall building facade looking up",
    title: "Vertigo",
    location: "Lagos, Nigeria",
    tags: ["urban", "architecture"],
    exif: {
      aperture: "f/8",
      shutter: "1/250s",
      iso: "100",
      focalLength: "14mm",
    },
  },
  {
    id: "9",
    src: "https://picsum.photos/id/100/4000/2667",
    thumb: "https://picsum.photos/id/100/600/400",
    width: 4000,
    height: 2667,
    alt: "Coffee cup on a table in morning light",
    title: "Morning Ritual",
    tags: ["minimal"],
  },
  {
    id: "10",
    src: "https://picsum.photos/id/119/4000/3000",
    thumb: "https://picsum.photos/id/119/600/450",
    width: 4000,
    height: 3000,
    alt: "Sunset over the ocean horizon",
    title: "Horizon Line",
    description: "Where the sky meets the sea.",
    location: "Freetown, Sierra Leone",
    tags: ["nature", "landscape"],
    exif: {
      aperture: "f/8",
      shutter: "1/250s",
      iso: "100",
      focalLength: "35mm",
    },
  },
  {
    id: "11",
    src: "https://picsum.photos/id/137/4000/2667",
    thumb: "https://picsum.photos/id/137/600/400",
    width: 4000,
    height: 2667,
    alt: "A person walking down a narrow street",
    title: "Passerby",
    location: "Lisbon, Portugal",
    tags: ["street", "travel"],
    exif: {
      aperture: "f/2.8",
      shutter: "1/200s",
      iso: "400",
      focalLength: "50mm",
    },
  },
  {
    id: "12",
    src: "https://picsum.photos/id/167/3000/4000",
    thumb: "https://picsum.photos/id/167/450/600",
    width: 3000,
    height: 4000,
    alt: "Bridge cables in fog",
    title: "Suspended",
    location: "San Francisco, CA",
    tags: ["urban", "architecture"],
    exif: {
      aperture: "f/5.6",
      shutter: "1/500s",
      iso: "200",
      focalLength: "70mm",
    },
  },
];
