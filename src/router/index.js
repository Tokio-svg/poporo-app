import { createRouter, createWebHistory } from 'vue-router';
import Sidebar from '@/components/sidebar.vue';
import HelloWorld from '@/components/HelloWorld.vue';

const routes = [
  {
    path: '/',
    name: 'routerTestFirst',
    component: Sidebar
  },
  {
    path: '/second',
    name: 'routerTestSecond',
    component: HelloWorld
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router