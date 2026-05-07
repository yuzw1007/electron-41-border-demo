import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'

export default defineConfig({
  plugins: [vue(),
  electron([{
    entry: 'src-electron/main.js',
  },
  {
    entry: 'src-electron/preload.js',
    onstart({ reload }) {
      // Notify the Renderer process to reload the page when the Preload scripts build is complete, 
      // instead of restarting the entire Electron App.
      reload()
    },
  },
  ]),
  ],
})
