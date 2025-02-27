import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutePage from '../views/AboutePage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/aboute', component: AboutePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;