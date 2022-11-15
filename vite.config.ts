import { defineConfig } from 'vite';
import { resolve } from 'pathe';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import VueI18n from '@intlify/vite-plugin-vue-i18n';
import Components from 'unplugin-vue-components/vite'
import PurgeIcons from 'vite-plugin-purge-icons';
import ViteFonts from 'vite-plugin-fonts';
import svgLoader from 'vite-svg-loader';
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  clearScreen: false,
  server: {
    port: 4000,
    strictPort: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~': resolve(__dirname, './'),
    },
  },
   // 使用 `TAURI_PLATFORM`、`TAURI_ARCH`、`TAURI_FAMILY`,
  // `TAURI_PLATFORM_VERSION`、`TAURI_PLATFORM_TYPE` 和 `TAURI_DEBUG` 环境变量
  envPrefix: ['VITE_', 'TAURI_'],
   build: {
    // Tauri 支持 es2021
    target: ['es2021', 'chrome100', 'safari13'],
    // 不为调试构建压缩构建体积
    minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
    // 为调试构建生成源代码映射 (sourcemap)
    sourcemap: !!process.env.TAURI_DEBUG,
  },
  plugins: [
    vue(),
    // https://github.com/jpkleemans/vite-svg-loader
    Pages(),
    svgLoader(),
    // https://github.com/antfu/vite-plugin-components
    Components({
      extensions: ['vue'],
      dts: 'src/components.d.ts',
    }),
    // https://github.com/stafyniaksacha/vite-plugin-fonts#readme
    ViteFonts({
      google: {
        families: ['Open Sans', 'Montserrat', 'Fira Sans'],
      },
    }),

    // https://github.com/antfu/vite-plugin-windicss
    WindiCSS({
      safelist: 'prose prose-sm m-auto text-left',
    }),

    // https://github.com/antfu/purge-icons/tree/main/packages/vite-plugin-purge-icons
    PurgeIcons({
      /* PurgeIcons Options */
    }),

    // https://github.com/intlify/vite-plugin-vue-i18n
    VueI18n({
      include: [resolve(__dirname, './locales/**')],
    }),
  ],

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
    ],
    exclude: [
      'vue-demi',
    ],
  },
});
