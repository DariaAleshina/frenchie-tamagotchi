import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/*', 'favicon.svg'],
      manifest: {
        name: 'Frenchie Tamagotchi',
        short_name: 'Frenchie',
        description: "Take care of your French Bulldog by feeding, playing, and letting it sleep. But be careful — if you neglect your pup, the game ends!",
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#DFAF53',
        theme_color: '#DFAF53',
        icons: [
          { src: '/icons/frenchie-fav-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icons/frenchie-fav-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }
        ]
      }
    })
  ],
})
