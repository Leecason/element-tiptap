import {
  Tooltip,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  MessageBox,
  Dialog,
  Upload,
} from 'element-ui';
import Icon from 'vue-awesome/components/Icon';

import ElementTiptap from './components/ElementTiptap.vue';

const ElementTiptapPlugin = {
  installed: false,

  install (Vue) {
    Vue.component('v-icon', Icon);

    Vue.use(Tooltip);
    Vue.use(Dropdown);
    Vue.use(DropdownMenu);
    Vue.use(DropdownItem);
    Vue.use(Dialog);
    Vue.use(Upload);
    Vue.prototype.$prompt = MessageBox.prompt;

    Vue.component('el-tiptap', ElementTiptap);

    this.installed = true;
  },
};

export * from './extensions/index';

export { ElementTiptapPlugin };
