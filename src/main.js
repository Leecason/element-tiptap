import Vue from 'vue';
import {
  // layout
  Container,
  Header,
  Main,

  Tooltip,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  MessageBox,
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';
import router from './router';
import './style/index.scss';

Vue.config.productionTip = false;

Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Tooltip);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);

Vue.prototype.$prompt = MessageBox.prompt;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
