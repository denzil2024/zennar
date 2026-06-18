import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Railway provides the PORT env var at runtime. `vite preview` serves the
// production build in dist/ on that port, bound to all interfaces so the
// platform's proxy (and Cloudflare in front of it) can reach it.
const port = Number(process.env.PORT) || 4173

export default defineConfig({
  plugins: [react()],
  preview: {
    host: true,
    port,
    // Railway/Cloudflare route through their own hostnames; allow them all.
    allowedHosts: true,
  },
})
