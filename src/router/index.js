/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/home/HomePage';
import RobotBuilder from '@/build/RobotBuilder';
import ProductSearch from '@/search/ProductSearch';
import PartInfo from '@/parts/PartInfo';

export default createRouter({
  linkActiveClass: 'active-link',
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
    {
      path: '/parts/:partType/:id',
      name: 'Parts',
      component: PartInfo,
    },
  ],
});
