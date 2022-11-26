import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/pages/home/Index.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import(/* webpackChunkName: "projects" */ '@/pages/projects/index/ProjectsIndex.vue')
  },
  {
    path: '/projects/:id',
    name: 'projects_show',
    component: () => import(/* webpackChunkName: "projects_show" */ '@/pages/projects/show/ProjectsShow.vue')
  },
  {
    path: '/my_way',
    name: 'my_way',
    component: () => import(/* webpackChunkName: "my_way" */ '@/pages/my_way/MyWayIndex.vue')
  },
  {
    path: "/:catchAll(.*)",
    name: 'not_found',
    component: () => import('@/pages/NotFound.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
