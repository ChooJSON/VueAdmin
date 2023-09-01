/*
 * @Author: ChooJSON
 * @Github: https://github.com/ChooJSON
 * @Date: 2023-04-21 03:36:51
 * @LastEditors: ChooJSON
 * @LastEditTime: 2023-04-21 03:45:37
 * @Description: 路由守卫
 */

import router from './index.js'
import store from '@/store'

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
