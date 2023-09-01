/*
 * @Author: ChooJSON
 * @Github: https://github.com/ChooJSON
 * @Date: 2023-04-21 02:36:53
 * @LastEditors: ChooJSON
 * @LastEditTime: 2023-04-21 03:15:17
 * @Description: Please write the description of this file.
 */

import axios from 'axios'
import { ElMessage } from 'element-plus'
import { validTokenTime } from '@/utils/auth'
import store from '@/store'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(
  (config) => {
    if (localStorage.getItem('token')) {
      if (validTokenTime()) {
        store.dispatch('app/logout')
        return Promise.reject(new Error('Token 已失效！'))
      }
    }
    config.headers.Authorization = localStorage.getItem('token')
    return config
  },
  (error) => {
    return Promise.reject(new Error(error))
  }
)

service.interceptors.response.use(
  (response) => {
    const { data, meta } = response.data
    if (meta.status === 200 || meta.status === 201) {
      return data
    } else {
      // 以 Element UI 消息提示的形式显示返回消息通知。如：密码错误！
      ElMessage.error(meta.msg)
      return Promise.reject(new Error(meta.msg))
    }
  },
  (error) => {
    error.response && ElMessage.error(error.response.data)
    return Promise.reject(new Error(error.response.data))
  }
)

export default service
