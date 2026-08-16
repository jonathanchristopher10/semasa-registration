import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Assets live in /public and are referenced via import.meta.env.BASE_URL (see
// src/lib/asset.js). To deploy under a sub-path, set `base` here and the asset
// helper follows automatically.
export default defineConfig({
  base: "/",
  plugins: [react()],
});
