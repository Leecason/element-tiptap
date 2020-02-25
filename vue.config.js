const path = require('path');

module.exports = {
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/element-tiptap/'
    : '/',
  transpileDependencies: [
    /\bvue-awesome\b/
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        // eslint-disable-next-line quote-props
        'examples': path.resolve(__dirname, 'examples'),
        'element-tiptap': path.resolve(__dirname, 'src/index.ts')
      }
    }
  },
};
