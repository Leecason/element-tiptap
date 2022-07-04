import { Plugin } from 'vue';
import ElementTiptap from '@/components/ElementTiptap.vue';

const ElementTiptapPlugin: Plugin = {
  install(app) {
    app.component('element-tiptap', ElementTiptap);
    app.component('el-tiptap', ElementTiptap);
  },
};

export * from '@/extensions';

export { ElementTiptapPlugin, ElementTiptap };

export default ElementTiptapPlugin;
