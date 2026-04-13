import { ref, computed } from "vue";
import { parseFrontmatterWithLinks } from "~/utils/parseFrontmatter";

export interface ProjectLink {
  label: string;
  href: string;
  icon: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  icon: string;
  tags: string[];
  status: "active" | "beta" | "wip" | "archived" | "live";
  year: number;
  featured: boolean;
  group: string;
  links: ProjectLink[];
  body: string;
}

export interface ProjectGroup {
  label: string;
  projects: Project[];
}

const GROUP_ORDER = ["Products", "Open Source", "Experiments"];

let _parsed = false;
const _projects = ref<Project[]>([]);

function ensureParsed() {
  if (_parsed) return;

  const modules = import.meta.glob("~/content/projects/*.md", {
    eager: true,
    query: "?raw",
    import: "default",
  });

  Object.entries(modules).forEach(([, raw]) => {
    const { data, body } = parseFrontmatterWithLinks(raw as string);

    _projects.value.push({
      slug: (data.slug as string) ?? "",
      name: (data.name as string) ?? "Untitled",
      tagline: (data.tagline as string) ?? "",
      icon: (data.icon as string) ?? "ph:cube-duotone",
      tags: (data.tags as string[]) ?? [],
      status: (data.status as Project["status"]) ?? "wip",
      year: Number(data.year ?? 0),
      featured: data.featured === true,
      group: (data.group as string) ?? "Other",
      links: (data.links as ProjectLink[]) ?? [],
      body,
    });
  });

  _parsed = true;
}

export function useProjects() {
  ensureParsed();

  const allProjects = computed(() => _projects.value);

  const groups = computed<ProjectGroup[]>(() => {
    const map = new Map<string, Project[]>();
    _projects.value.forEach((p) => {
      if (!map.has(p.group)) map.set(p.group, []);
      map.get(p.group)!.push(p);
    });

    return GROUP_ORDER.filter((g) => map.has(g)).map((g) => ({
      label: g,
      projects: map.get(g)!,
    }));
  });

  const getProjectBySlug = (slug: string) =>
    _projects.value.find((p) => p.slug === slug);

  return { allProjects, groups, getProjectBySlug };
}
