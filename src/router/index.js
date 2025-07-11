import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/home/HomePage';
import RobotBuilder from '@/build/RobotBuilder';
import ProductSearch from '@/search/ProductSearch';

export default createRouter({
  history: createWebHistory(), // ✅ obrigatório para Vue Router funcionar
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/build',
      name: 'Build',
      component: RobotBuilder,
    },
    {
      path: '/search',
      name: 'Search',
      component: ProductSearch,
    },
  ],
});
