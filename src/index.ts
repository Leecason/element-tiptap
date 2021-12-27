import { IElementTiptapPlugin } from '../types';
import ElementTiptap from './components/ElementTiptap.vue';

const ElementTiptapPlugin: IElementTiptapPlugin = {
  spellcheck: true,

  install(app, options = {}) {
    // this.spellcheck = options.spellcheck == null ? true : options.spellcheck;

    app.component('el-tiptap', ElementTiptap);
  },
};

export { ElementTiptapPlugin, ElementTiptap };

export default ElementTiptapPlugin;
