import { ElementTiptapPluginInterface } from '../types';
import { useLang } from '@/i18n/index';
import ElementTiptap from '@/components/ElementTiptap.vue';

const ElementTiptapPlugin: ElementTiptapPluginInterface = {
  installed: false,
  spellcheck: true,

  install (Vue, options = {}) {
    const { lang } = options;
    if (lang) useLang(lang);

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
