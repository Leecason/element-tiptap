import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/Index.vue';
import Basic from '../views/Basic.vue';
import Output from '../views/Output.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
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
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
