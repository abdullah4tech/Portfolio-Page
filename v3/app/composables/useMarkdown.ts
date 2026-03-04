import { ref } from "vue";
import MarkdownIt from "markdown-it";

// Lazy-loaded Shiki highlighter (heavy — only load on post pages)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let _highlighter: any = null;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let _highlighterPromise: Promise<any> | null = null;

async function getHighlighter() {
  if (_highlighter) return _highlighter;
  if (_highlighterPromise) return _highlighterPromise;

  _highlighterPromise = import("shiki").then(async ({ createHighlighter }) => {
    _highlighter = await createHighlighter({
      themes: ["github-light", "github-dark"],
      langs: [
        "typescript",
        "javascript",
        "vue",
        "vue-html",
        "html",
        "css",
        "json",
        "bash",
        "shell",
        "markdown",
        "yaml",
        "python",
        "rust",
        "go",
      ],
    });
    return _highlighter;
  });

  return _highlighterPromise;
}

export function useMarkdown() {
  const isReady = ref(false);

  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
  });

  // Custom link renderer — external links open in new tab
  const defaultLinkOpen =
    md.renderer.rules.link_open ||
    function (tokens, idx, options, _env, self) {
      return self.renderToken(tokens, idx, options);
    };

  md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    const href = tokens[idx].attrGet("href");
    if (href && (href.startsWith("http://") || href.startsWith("https://"))) {
      tokens[idx].attrSet("target", "_blank");
      tokens[idx].attrSet("rel", "noopener noreferrer");
    }
    return defaultLinkOpen(tokens, idx, options, env, self);
  };

  // Lazy image loading
  const defaultImageOpen =
    md.renderer.rules.image ||
    function (tokens, idx, options, _env, self) {
      return self.renderToken(tokens, idx, options);
    };

  md.renderer.rules.image = function (tokens, idx, options, env, self) {
    tokens[idx].attrSet("loading", "lazy");
    tokens[idx].attrSet("decoding", "async");
    return defaultImageOpen(tokens, idx, options, env, self);
  };

  async function init() {
    const highlighter = await getHighlighter();

    md.options.highlight = (code: string, lang: string) => {
      const language = highlighter.getLoadedLanguages().includes(lang)
        ? lang
        : "text";
      return highlighter.codeToHtml(code, {
        lang: language,
        themes: {
          light: "github-light",
          dark: "github-dark",
        },
        defaultColor: false,
      });
    };

    isReady.value = true;
  }

  function render(content: string): string {
    return md.render(content);
  }

  return { render, init, isReady };
}
