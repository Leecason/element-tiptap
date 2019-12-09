import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/Index.vue';
import Basic from '../views/Basic.vue';
import Output from '../views/Output.vue';
import MenuBubble from '../views/MenuBubble.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Index,
    children: [
      {
        name: 'Basic',
        path: '/',
        component: Basic,
      },
      {
        name: 'Output',
        path: '/output',
        component: Output,
      },
      {
        name: 'MenuBubble',
        path: '/menu_bubble',
        component: MenuBubble,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
