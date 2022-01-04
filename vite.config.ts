import path from 'path';
import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import Components from 'unplugin-vue-components/vite';

function kebabCase(key: string) {
  const result = key.replace(/([A-Z])/g, ' $1').trim();
  return result
    .split(' ')
    .join('-')
    .toLowerCase();
}

export default defineConfig({
  plugins: [
    createVuePlugin(),
    Components({
      resolvers: [{
        type: 'component',
        resolve: (name: string) => {
          if (name.startsWith('El')) {
            const compName = name.slice(2);
            if (compName !== 'Tiptap') {
              const partialName = kebabCase(compName);
              if (partialName === 'collapse-transition') {
                return {
                  path: `element-ui/lib/transitions/${partialName}`,
                };
              }
              return {
                path: `element-ui/lib/${partialName}`,
                sideEffects: [
                  'element-ui/packages/theme-chalk/src/base.scss',
                  `element-ui/packages/theme-chalk/src/${partialName}.scss`,
                ],
              };
            }
          }
        },
      }],
    }),
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
});
