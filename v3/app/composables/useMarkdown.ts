import { ref } from "vue";
import MarkdownIt from "markdown-it";
import type Token from "markdown-it/lib/token.mjs";
import type RendererType from "markdown-it/lib/renderer.mjs";

type RenderRule = NonNullable<RendererType["rules"][string]>;

type MdHighlighter = {
  getLoadedLanguages: () => string[];
  codeToHtml: (code: string, opts: { lang: string; theme: string }) => string;
};

let _highlighter: MdHighlighter | null = null;
let _highlighterPromise: Promise<MdHighlighter> | null = null;

async function getHighlighter(): Promise<MdHighlighter> {
  if (_highlighter) return _highlighter;
  if (_highlighterPromise) return _highlighterPromise;

  _highlighterPromise = import("shiki").then(async ({ createHighlighter }) => {
    _highlighter = await createHighlighter({
      themes: ["one-dark-pro"],
      langs: [
        "typescript", "javascript", "vue", "vue-html",
        "html", "css", "json", "bash", "shell",
        "markdown", "yaml", "python", "rust", "go",
      ],
    });
    return _highlighter;
  });

  return _highlighterPromise;
}

const md = new MarkdownIt({ html: true, linkify: true, typographer: true });

const defaultLinkOpen: RenderRule =
  md.renderer.rules.link_open ??
  ((tokens, idx, options, _env, self) => self.renderToken(tokens, idx, options));

md.renderer.rules.link_open = (tokens: Token[], idx: number, options, env, self) => {
  const token = tokens[idx];
  if (token) {
    const href = token.attrGet("href");
    if (href?.startsWith("http://") || href?.startsWith("https://")) {
      token.attrSet("target", "_blank");
      token.attrSet("rel", "noopener noreferrer");
    }
  }
  return defaultLinkOpen(tokens, idx, options, env, self);
};

const defaultImageRenderer: RenderRule =
  md.renderer.rules.image ??
  ((tokens, idx, options, _env, self) => self.renderToken(tokens, idx, options));

md.renderer.rules.image = (tokens: Token[], idx: number, options, env, self) => {
  const token = tokens[idx];
  if (token) {
    token.attrSet("loading", "lazy");
    token.attrSet("decoding", "async");
  }
  return defaultImageRenderer(tokens, idx, options, env, self);
};

export function useMarkdown() {
  const isReady = ref(false);

  async function init() {
    const highlighter = await getHighlighter();
    md.options.highlight = (code: string, lang: string) => {
      const language = highlighter.getLoadedLanguages().includes(lang) ? lang : "text";
      return highlighter.codeToHtml(code, { lang: language, theme: "one-dark-pro" });
    };
    isReady.value = true;
  }

  function render(content: string): string {
    return md.render(content);
  }

  return { render, init, isReady };
}
