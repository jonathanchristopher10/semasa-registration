// Resolve a path inside /public against the app's base URL, so asset links stay
// correct in dev, in production, and under a sub-path deploy (see vite.config.js).
export function asset(path = "") {
  const clean = String(path).replace(/^\/+/, "");
  return import.meta.env.BASE_URL + clean;
}

// Base path (with trailing slash) for components like <Sticker basePath=...>
// that concatenate their own "assets/..." suffix.
export const ASSET_BASE = import.meta.env.BASE_URL;
