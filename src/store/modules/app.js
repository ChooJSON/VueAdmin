/*
 * @Author: ChooJSON
 * @Github: https://github.com/ChooJSON
 * @Date: 2023-04-21 03:20:27
 * @LastEditors: ChooJSON
 * @LastEditTime: 2023-04-21 05:55:28
 * @Description: Please write the description of this file.
 */
import { login as loginApi } from '@/api/login'
import router from '@/router'
import { setTokenTime } from '@/utils/auth'

export default {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem('token') || '',
    // sideBar 是否折叠：true 表示不折叠，false 表示折叠
    siderType: true,
    lang: localStorage.getItem('lang') || 'zh'
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    changeSiderType(state) {
      state.siderType = !state.siderType
    },
    changeLang(state, lang) {
      state.lang = lang
    }
  },
  actions: {
    login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        loginApi(userInfo)
          .then(res => {
            console.log(res)
            commit('setToken', res.token)
            setTokenTime()
            router.replace('/')
            resolve()
          }).catch(err => {
            reject(err)
          })
      })
    },
    // 退出登录
    logout({ commit }) {
      commit('setToken', '')
      localStorage.clear()
      router.replace('/login')
    }
  }
}
