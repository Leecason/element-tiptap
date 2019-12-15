const path = require('path');

module.exports = {
  runtimeCompiler: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'lib/src'))
      .set('examples', path.resolve(__dirname, 'examples'))
      .set('el-tiptap', path.resolve(__dirname, 'lib/index'));
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/el-tiptap/'
    : '/'
};
