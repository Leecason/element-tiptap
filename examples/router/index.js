import Vue from 'vue';
import VueRouter from 'vue-router';

const Index = () => import('../views/Index.vue');
const Basic = () => import('../views/Basic.vue');
const MenuBubble = () => import('../views/MenuBubble.vue');
const Table = () => import('../views/Table.vue');
const Embed = () => import('../views/Embed.vue');
const Event = () => import('../views/Event.vue');
const Output = () => import('../views/Output.vue');

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
        name: 'MenuBubble',
        path: '/menu_bubble',
        component: MenuBubble,
      },
      {
        name: 'Table',
        path: '/table',
        component: Table,
      },
      {
        name: 'Embed',
        path: '/embed',
        component: Embed,
      },
      {
        name: 'Event',
        path: '/event',
        component: Event,
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
