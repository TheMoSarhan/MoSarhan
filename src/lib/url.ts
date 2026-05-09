// Astro doesn't auto-prefix internal links with the configured `base`.
// Use this helper for every internal href so the site works locally,
// on `themosarhan.github.io/MoSarhan`, and on a custom domain.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  if (path.startsWith("http") || path.startsWith("mailto:") || path.startsWith("#")) {
    return path;
  }
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean}`;
}
