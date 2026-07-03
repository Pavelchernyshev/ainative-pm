import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base matches the GitHub Pages project path (…/ainative-pm/).
// If this app ever moves to a domain root (e.g. a subdomain), change base to "/".
export default defineConfig({
  plugins: [react()],
  base: "/ainative-pm/",
  server: {
    port: 5199,
    strictPort: true,
  },
});
