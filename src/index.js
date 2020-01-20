import {
  Button,
  Tooltip,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  MessageBox,
  Dialog,
  Upload,
  Popover,
} from 'element-ui';
import Icon from 'vue-awesome/components/Icon';

import ElementTiptap from './components/ElementTiptap.vue';

const ElementTiptapPlugin = {
  installed: false,
  currentLang: 'zh',

  install (Vue, opts = {}) {
    Vue.component('v-icon', Icon);
    this.currentLang = opts.locale || 'zh';
    Vue.use(Button);
    Vue.use(Tooltip);
    Vue.use(Dropdown);
    Vue.use(DropdownMenu);
    Vue.use(DropdownItem);
    Vue.use(Dialog);
    Vue.use(Upload);
    Vue.use(Popover);
    Vue.prototype.$prompt = MessageBox.prompt;

    Vue.component('el-tiptap', ElementTiptap);

    this.installed = true;
  },
};

export * from './extensions/index';

export { ElementTiptapPlugin };

;(function autoInstall () {
  let globalScope;

  if (typeof window !== 'undefined') {
    globalScope = window;
  } else if (typeof global !== 'undefined') {
    globalScope = global;
  }
  if (globalScope && globalScope.Vue) {
    globalScope.Vue.use(ElementTiptapPlugin);
  }
})();
