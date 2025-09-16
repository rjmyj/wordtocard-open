//vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
export default defineConfig({
  plugins: [
    vue(),
  ],
  // ...
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  // 开启less支持
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
});
//# sourceMappingURL=vite.config.js.map
