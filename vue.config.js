const path = require('path');

module.exports = {
  runtimeCompiler: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('utils', path.resolve(__dirname, 'src/utils'))
      .set('examples', path.resolve(__dirname, 'examples'))
      .set('el-tiptap', path.resolve(__dirname, 'src/main'));
  },
};
