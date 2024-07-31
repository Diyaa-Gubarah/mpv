import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/mpv/', // Use your repository name here
  plugins: [react()],
});
