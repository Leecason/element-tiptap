import ElTiptap from './src/components/ElTiptap.vue';
export * from './src/extensions/index';

export { ElTiptap };

const ElTiptapPlugin = {
  installed: false,

  install (Vue) {
    Vue.component('el-tiptap', ElTiptap);

    this.installed = true;
  },
};

export { ElTiptapPlugin };
