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

const isProduction = process.env.BUILD === 'production';
const libDir = path.resolve(__dirname, 'lib');

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
      node({
        extensions: ['.js', '.vue'],
      }),
      cjs(),
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
