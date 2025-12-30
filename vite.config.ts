
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // GitHub Pages 배포 시 저장소 이름이 'gihong2'인 경우 base 설정을 추가해야 합니다.
  // './' 로 설정하면 상대 경로를 사용하여 어디서든 유연하게 동작합니다.
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  server: {
    port: 3000
  }
});
