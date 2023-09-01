/*
 * @Author: ChooJSON
 * @Github: https://github.com/ChooJSON
 * @Date: 2023-04-20 23:20:30
 * @LastEditors: ChooJSON
 * @LastEditTime: 2023-04-21 03:49:59
 * @Description: Please write the description of this file.
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/',
    name: '/',
    component: () => import('../views/LayoutView.vue'),
    redirect: '/users',
    children: [
      {
        path: 'users',
        name: 'users',
        component: () => import('@/views/Layout/UsersView.vue')
      },
      {
        path: 'categories',
        name: 'categories',
        component: () => import('@/views/Layout/CategoriesView.vue')
      },
      {
        path: 'goods',
        name: 'goods',
        component: () => import('@/views/Layout/GoodsView.vue')
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('@/views/Layout/OrdersView.vue')
      },
      {
        path: 'params',
        name: 'params',
        component: () => import('@/views/Layout/ParamsView.vue')
      },
      {
        path: 'reports',
        name: 'reports',
        component: () => import('@/views/Layout/ReportsView.vue')
      },
      {
        path: 'rights',
        name: 'rights',
        component: () => import('@/views/Layout/RightsView.vue')
      },
      {
        path: 'roles',
        name: 'roles',
        component: () => import('@/views/Layout/RolesView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
