import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';

function pathResolve(path) {
  return resolve(__dirname, path);
}
console.log(pathResolve('src'));
// https://vitejs.dev/config/
export default defineConfig({
  // base: '/wiley-best-sellers/',
  base: '/wp-content/themes/2021-child/wiley-best-sellers/docs/',
  build: {
    target: 'es2015',
    outDir: 'docs',
  },
  resolve: {
    alias: {
      '@': pathResolve('src'),
    },
  },
  plugins: [
    react(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.jsx']
    })
  ]
});
