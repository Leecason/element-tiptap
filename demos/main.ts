import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';
import router from './router';
import ElementTiptapPlugin from '../src/index';

const app = createApp(App);

app.use(ElementPlus);

app.use(ElementTiptapPlugin);

app.use(router);

app.mount('#app');
