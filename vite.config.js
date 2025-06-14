import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: [
      'all',
      '*.replit.dev',
      '37fc9a9f-501e-4541-a1f3-714a0b2de287-00-34qq49wollwew.pike.replit.dev'
    ]
  }
})
