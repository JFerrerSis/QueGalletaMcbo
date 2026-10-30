import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://quegalleta.example.com',
  // Accesible desde cualquier IP de la red local (0.0.0.0)
  server: {
    host: true,
    port: 4321,
  },
  preview: {
    host: true,
    port: 4321,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
