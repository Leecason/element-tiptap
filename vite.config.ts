import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import ElementPlus from 'unplugin-element-plus/vite';
import svgLoader from 'vite-svg-loader';
import copy from 'rollup-plugin-copy';
import dts from 'vite-plugin-dts';

const libDir = path.resolve(__dirname, 'lib');
const srcDir = path.resolve(__dirname, 'src');

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const IS_DEMO = process.env.VITE_BUILD_TARGET === 'demo';

  return defineConfig({
    plugins: [
      vue({
        style: {
          preprocessLang: 'scss',
          postcssOptions: 'postcss.config.js',
        },
      }),
      dts({
        include: ['src'],
        insertTypesEntry: true,
      }),
      ElementPlus(),
      svgLoader(),
    ],
    server: {
      port: 8080,
    },
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src'),
        },
        {
          find: 'demos',
          replacement: path.resolve(__dirname, 'demos'),
        },
        {
          find: 'element-tiptap',
          replacement: path.resolve(__dirname, 'src/index.ts'),
        },
      ],
    },
    build: IS_DEMO
      ? undefined
      : {
          outDir: libDir,
          minify: 'esbuild',
          lib: {
            entry: path.resolve(srcDir, 'index.ts'),
            name: 'ElementTiptap',
            fileName: 'element-tiptap',
          },
          // https://rollupjs.org/guide/en/#big-list-of-options
          rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: [
              'vue',
              'element-plus/lib/components/button',
              'element-plus/lib/components/checkbox',
              'element-plus/lib/components/tooltip',
              'element-plus/lib/components/dialog',
              'element-plus/lib/components/popover',
              'element-plus/lib/components/upload',
              'element-plus/lib/components/message-box',
              'element-plus/lib/components/dropdown',
              'element-plus/lib/components/dropdown-menu',
              'element-plus/lib/components/dropdown-item',
            ],
            output: {
              exports: 'named',
              // https://github.com/henriquehbr/svelte-typewriter/issues/21#issuecomment-968835822
              inlineDynamicImports: true,
              // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
              globals: {
                vue: 'vue',
                'element-plus/lib/components/button': 'ELEMENT.Button',
                'element-plus/lib/components/checkbox': 'ELEMENT.Checkbox',
                'element-plus/lib/components/tooltip': 'ELEMENT.Tooltip',
                'element-plus/lib/components/dialog': 'ELEMENT.Dialog',
                'element-plus/lib/components/popover': 'ELEMENT.Popover',
                'element-plus/lib/components/upload': 'ELEMENT.Upload',
                'element-plus/lib/components/message-box': 'ELEMENT.MessageBox',
                'element-plus/lib/components/dropdown': 'ELEMENT.Dropdown',
                'element-plus/lib/components/dropdown-menu':
                  'ELEMENT.DropdownMenu',
                'element-plus/lib/components/dropdown-item':
                  'ELEMENT.DropdownItem',
              },
            },
            plugins: [
              copy({
                targets: [
                  {
                    src: 'src/i18n/locales/',
                    dest: 'lib',
                  },
                ],
                // https://github.com/vitejs/vite/issues/1231#issuecomment-753549857
                hook: 'writeBundle', // notice here
              }),
            ],
          },
        },
    publicDir: IS_DEMO ? 'public' : false,
  });
};
