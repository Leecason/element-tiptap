import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index.vue';
import Simple from '../views/Simple.vue';

const routes = [
  {
    path: '/',
    component: Index,
    children: [
      {
        name: 'Simple',
        path: '/',
        component: Simple,
      },
      //   {
      //     name: 'AllExtensions',
      //     path: 'all_extensions',
      //     component: AllExtensions,
      //   },
      //   {
      //     name: 'BubbleMenu',
      //     path: '/bubble_menu',
      //     component: BubbleMenu,
      //   },
      //   {
      //     name: 'Placeholder',
      //     path: '/placeholder',
      //     component: Placeholder,
      //   },
      //   {
      //     name: 'Readonly',
      //     path: '/readonly',
      //     component: Readonly,
      //   },
      //   {
      //     name: 'Title',
      //     path: '/title',
      //     component: Title,
      //   },
      //   {
      //     name: 'CustomMenubar',
      //     path: '/custom_menubar',
      //     component: CustomMenubar,
      //   },
      //   {
      //     name: 'Event',
      //     path: '/event',
      //     component: Event,
      //   },
      //   {
      //     name: 'Output',
      //     path: '/output',
      //     component: Output,
      //   },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
