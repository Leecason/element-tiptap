import { createApp } from 'vue';
import App from './App.vue';
import ElementTiptapPlugin from '../src/index';

const app = createApp(App);

app.use(ElementTiptapPlugin, {});
app.mount('#app');
