import { createApp } from 'vue';
import {
  // layout
  ElContainer,
  ElHeader,
  ElMain,
  ElFooter,
  ElButton,
} from 'element-plus';

import ElementTiptap from 'element-tiptap';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);

app.use(ElContainer);
app.use(ElHeader);
app.use(ElMain);
app.use(ElFooter);
app.use(ElButton);

app.use(ElementTiptap);

app.mount('#app');
