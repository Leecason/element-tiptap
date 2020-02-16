import path from 'path';
import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import cjs from 'rollup-plugin-commonjs';
import node from 'rollup-plugin-node-resolve';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';
import postcssPresetEnv from 'postcss-preset-env';
import typescript from 'rollup-plugin-typescript2';
import alias from '@rollup/plugin-alias';

const isProduction = process.env.BUILD === 'production';
const libDir = path.resolve(__dirname, 'lib');
const srcDir = path.resolve(__dirname, 'src');

export default () => [
  getConfig({
    file: path.resolve(libDir, 'element-tiptap.js'),
    format: 'umd',
    env: 'development',
  }),
  getConfig({
    file: path.resolve(libDir, 'element-tiptap.min.js'),
    format: 'umd',
    env: 'production',
  }),
  getConfig({
    file: path.resolve(libDir, 'element-tiptap.common.js'),
    format: 'cjs',
  }),
  getConfig({
    file: path.resolve(libDir, 'element-tiptap.esm.js'),
    format: 'es',
  }),
];

function getConfig ({
  file,
  format,
  env,
}) {
  return {
    input: 'src/index.ts',
    output: {
      file,
      name: 'ElementTiptap',
      format,
      globals: {
        vue: 'Vue',
        tiptap: 'tiptap',
        'tiptap-extensions': 'tiptap',
        'prosemirror-utils': 'prosemirror-utils',
        'prosemirror-state': 'prosemirror-state',
        'prosemirror-model': 'prosemirror-model',
        'prosemirror-tables': 'prosemirror-tables',
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
      'prosemirror-tables',
      'element-ui',
      'vue-awesome',
    ],
    plugins: [
      env && replace({
        'process.env.NODE_ENV': JSON.stringify(env),
      }),
      alias({
        entries: {
          '@': srcDir,
        },
      }),
      node({
        extensions: ['.ts', '.js', '.vue'],
      }),
      typescript({
        clear: true,
        typescript: require('typescript'),
      }),
      cjs({
        extensions: ['.ts', '.js'],
      }),
      postcss({
        extract: false,
        minimize: true,
        plugins: [
          postcssPresetEnv()
        ]
      }),
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
        extensions: ['.js', '.ts'],
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
        plugins: [
          [
            'component',
            {
              libraryName: 'element-ui',
              styleLibraryName: 'theme-chalk'
            }
          ]
        ]
      }),
      env !== 'development' && isProduction && terser(),
    ],
  };
}
