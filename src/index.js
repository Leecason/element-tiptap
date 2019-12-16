import {
  Tooltip,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  MessageBox,
  Dialog,
  Upload,
} from 'element-ui';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import ElTiptap from './components/ElTiptap.vue';

const ElTiptapPlugin = {
  installed: false,

  install (Vue) {
    Vue.component('font-awesome-icon', FontAwesomeIcon);
    Vue.use(Tooltip);
    Vue.use(Dropdown);
    Vue.use(DropdownMenu);
    Vue.use(DropdownItem);
    Vue.use(Dialog);
    Vue.use(Upload);
    Vue.prototype.$prompt = MessageBox.prompt;

    Vue.component('el-tiptap', ElTiptap);

    this.installed = true;
  },
};

export * from './extensions/index';

export { ElTiptapPlugin };
