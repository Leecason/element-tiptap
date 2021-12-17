import { ElementTiptapPluginInterface } from '../types';
import { DEFAULT_LANGUAGE } from '@/i18n/index';
import ElementTiptap from '@/components/ElementTiptap.vue';

const ElementTiptapPlugin: ElementTiptapPluginInterface = {
  installed: false,
  spellcheck: true,
  lang: DEFAULT_LANGUAGE,

  install(Vue, options = {}) {
    if (options.lang) {
      this.lang = options.lang;
    }

    this.spellcheck = options.spellcheck == null
      ? true
      : options.spellcheck;

    Vue.component('el-tiptap', ElementTiptap);
    Vue.prototype.$elementTiptapPlugin = this;

    this.installed = true;
  },
};

export * from '@/extensions/index';

export {
  ElementTiptapPlugin,
  ElementTiptap,
};

export default ElementTiptapPlugin;
