import { ref, computed } from "vue";
import { parseFrontmatter } from "~/utils/parseFrontmatter";

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

    const wordCount = content.split(/\s+/).filter(Boolean).length;
    const readingTime = Math.max(1, Math.ceil(wordCount / 200));

    const fileSlug: string =
      path.match(/\/([^/]+)\.md$/)?.[1]?.replace(/^\d{4}-\d{2}-\d{2}-/, "") ?? "";

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

  const posts = computed(() =>
    _posts.value
      .filter((p) => p.published)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  );

  const getPostBySlug = (slug: string) =>
    _posts.value.find((p) => p.slug === slug);

  const getPostsByTag = (tag: string) =>
    posts.value.filter((p) => p.tags?.includes(tag));

  const allTags = computed(() => {
    const tags = new Set<string>();
    posts.value.forEach((p) => p.tags?.forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
  });

  return { posts, allTags, getPostBySlug, getPostsByTag };
}
