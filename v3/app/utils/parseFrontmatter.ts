export function parseFrontmatter(raw: string): {
  data: Record<string, unknown>;
  content: string;
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const data = parseYamlBlock(match[1]!);
  return { data, content: match[2]! };
}

export function parseFrontmatterWithLinks(raw: string): {
  data: Record<string, unknown>;
  body: string;
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };

  const frontmatter = match[1]!;
  const data = parseYamlBlock(frontmatter);

  const linksMatch = frontmatter.match(/^links:([\s\S]*?)(?=^\w|\Z)/m);
  if (linksMatch) {
    const entries = linksMatch[1]!.split(/\n\s*-\s+/).filter(Boolean);
    data.links = entries.map((entry) => {
      const get = (key: string) =>
        entry.match(new RegExp(`${key}:\\s*["']?([^"'\\n]+)["']?`))?.[1]?.trim() ?? "";
      return { label: get("label"), href: get("href"), icon: get("icon") };
    });
  } else {
    data.links = [];
  }

  return { data, body: match[2]! };
}

function parseYamlBlock(block: string): Record<string, unknown> {
  const data: Record<string, unknown> = {};

  for (const line of block.split("\n")) {
    if (line.startsWith("links:") || line.startsWith("  -") || line.startsWith("    ")) continue;

    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;

    const key = line.slice(0, colonIdx).trim();
    let value: unknown = line.slice(colonIdx + 1).trim();

    if (
      typeof value === "string" &&
      ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'")))
    ) {
      value = (value as string).slice(1, -1);
    }

    if (typeof value === "string" && value.startsWith("[") && value.endsWith("]")) {
      value = value
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    }

    if (value === "true") value = true;
    if (value === "false") value = false;

    data[key] = value;
  }

  return data;
}
