import path from 'path';
import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import alias from 'rollup-plugin-alias';
import { terser } from 'rollup-plugin-terser';
import cjs from 'rollup-plugin-commonjs';
import node from 'rollup-plugin-node-resolve';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';
import replace from 'rollup-plugin-replace';

const isProduction = process.env.BUILD === 'production';
const srcDir = path.resolve(__dirname, 'src');
const libDir = path.resolve(__dirname, 'lib');

export default () => [
  getConfig({
    file: path.resolve(libDir, 'el-tiptap.js'),
    format: 'umd',
    env: 'development',
  }),
  getConfig({
    file: path.resolve(libDir, 'el-tiptap.min.js'),
    format: 'umd',
    env: 'production',
  }),
  getConfig({
    file: path.resolve(libDir, 'el-tiptap.common.js'),
    format: 'cjs',
  }),
  getConfig({
    file: path.resolve(libDir, 'el-tiptap.esm.js'),
    format: 'es',
  }),
];

function getConfig ({
  file,
  format,
  env,
}) {
  return {
    input: 'src/index.js',
    output: {
      file,
      name: 'ElTiptap',
      format,
      globals: {
        tiptap: 'tiptap',
        'tiptap-extensions': 'tiptap',
        'prosemirror-utils': 'prosemirror-utils',
        'prosemirror-state': 'prosemirror-state',
        'prosemirror-model': 'prosemirror-model',
        'element-ui': 'element-ui',
        'vue-awesome': 'vue-awesome',
      },
    },
    external: [
      'vue',
      'tiptap',
      'tiptap-extensions',
      'prosemirror-utils',
      'prosemirror-state',
      'prosemirror-model',
      'element-ui',
      'vue-awesome',
    ],
    plugins: [
      env && replace({
        'process.env.NODE_ENV': JSON.stringify(env),
      }),
      alias({
        resolve: ['.js', '.vue'],
        entries: {
          '@': srcDir,
        },
      }),
      node({
        extensions: ['.js', '.vue'],
      }),
      cjs(),
      vue({
        defaultLang: {
          style: 'scss',
        },
        style: {
          postcssPlugins: [
            cssnext(),
            cssnano(),
          ],
        },
      }),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true,
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false,
              useBuiltIns: 'usage',
              corejs: 3,
            },
          ],
        ],
      }),
      env !== 'development' && isProduction && terser(),
    ],
  };
}
