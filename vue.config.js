const path = require('path');

module.exports = {
  runtimeCompiler: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('examples', path.resolve(__dirname, 'examples'))
      .set('element-tiptap', path.resolve(__dirname, 'src/index'));
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/element-tiptap/'
    : '/',
  transpileDependencies: [
    /\bvue-awesome\b/
  ]
};
