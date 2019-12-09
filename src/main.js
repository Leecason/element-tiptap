import ElTiptap from './components/ElTiptap.vue';

export { ElTiptap };

const ElTiptapPlugin = {
  installed: false,

  install (Vue) {
    Vue.component('el-tiptap', ElTiptap);

    this.installed = true;
  },
};

export { ElTiptapPlugin };
