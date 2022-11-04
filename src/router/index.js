import { createRouter, createWebHistory } from 'vue-router';
import Root from '@/components/Root.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: Root,
    children: [
      {
        path: '/',
        redirect: '/monster_table'
      },
      {
        path: '/monster_table',
        name: 'monster_table',
        component: () => import('@/components/MonsterTable/MonsterTable.vue')
      },
      {
        path: '/monster',
        name: 'monster_list_container',
        component: () => import('@/components/MonsterList/MonsterListContainer.vue'),
        children: [
          {
            path: '/monster',
            name: 'monster_list',
            component: () => import('@/components/MonsterList/MonsterList.vue')
          },          {
            path: '/monster/detail/:id',
            name: 'monster_detail',
            component: () => import('@/components/MonsterList/MonsterDetail.vue')
          },
        ]
      },
      {
        path: '/item',
        name: 'item',
        component: () => import('@/components/ItemList/ItemList.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router