import { createRouter, createWebHistory } from 'vue-router';
import List from '../views/List.vue';
import Detail from '../views/Detail.vue';

const routes = [
  {
    path: '/',
    name: 'List',
    component: List,
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
