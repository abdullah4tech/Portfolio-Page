import { ref, computed } from "vue";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  cover: string;
  published: boolean;
  content: string;
  readingTime: number;
}

/**
 * Lightweight frontmatter parser — no Node.js deps (Buffer, fs, etc.)
 * Handles the standard `---` delimited YAML-like frontmatter block.
 */
function parseFrontmatter(raw: string): {
  data: Record<string, unknown>;
  content: string;
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const frontmatter = match[1];
  const content = match[2];
  const data: Record<string, unknown> = {};

  for (const line of frontmatter.split("\n")) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;

    const key = line.slice(0, colonIdx).trim();
    let value: unknown = line.slice(colonIdx + 1).trim();

    // Remove surrounding quotes
    if (
      typeof value === "string" &&
      ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'")))
    ) {
      value = (value as string).slice(1, -1);
    }

    // Parse arrays: ["tag1", "tag2"]
    if (
      typeof value === "string" &&
      value.startsWith("[") &&
      value.endsWith("]")
    ) {
      value = value
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    }

    // Parse booleans
    if (value === "true") value = true;
    if (value === "false") value = false;

    data[key] = value;
  }

  return { data, content };
}

// Module-level cache so every consumer shares the same parsed data
let _parsed = false;
const _posts = ref<BlogPost[]>([]);

function ensureParsed() {
  if (_parsed) return;

  const modules = import.meta.glob("~/content/blog/*.md", {
    eager: true,
    query: "?raw",
    import: "default",
  });

  Object.entries(modules).forEach(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw as string);

    // Reading time — ~200 words per minute
    const wordCount = content.split(/\s+/).filter(Boolean).length;
    const readingTime = Math.max(1, Math.ceil(wordCount / 200));

    // Extract slug from frontmatter or filename
    const fileSlug =
      path.match(/\/([^/]+)\.md$/)?.[1]?.replace(/^\d{4}-\d{2}-\d{2}-/, "") ||
      "";

    _posts.value.push({
      slug: (data.slug as string) || fileSlug,
      title: (data.title as string) || "Untitled",
      date: (data.date as string) || "",
      author: (data.author as string) || "Abdullah O. Mustapha",
      excerpt: (data.excerpt as string) || "",
      tags: (data.tags as string[]) || [],
      cover: (data.cover as string) || "",
      published: data.published !== false,
      content,
      readingTime,
    });
  });

  _parsed = true;
}

export function useBlogPosts() {
  ensureParsed();

  // Published posts sorted newest-first
  const posts = computed(() =>
    _posts.value
      .filter((p) => p.published)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  );

  const getPostBySlug = (slug: string) =>
    _posts.value.find((p) => p.slug === slug);

  const getPostsByTag = (tag: string) =>
    posts.value.filter((p) => p.tags?.includes(tag));

  // Unique tags across all published posts
  const allTags = computed(() => {
    const tags = new Set<string>();
    posts.value.forEach((p) => p.tags?.forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
  });

  return {
    posts,
    allTags,
    getPostBySlug,
    getPostsByTag,
  };
}
