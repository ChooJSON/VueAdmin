/*
 * @Author: ChooJSON
 * @Github: https://github.com/ChooJSON
 * @Date: 2023-04-21 05:03:36
 * @LastEditors: ChooJSON
 * @LastEditTime: 2023-04-21 05:03:46
 * @Description: 超时被动退出。
 */
import { TOKEN_TIME, TOKEN_TIME_VALUE } from './constant'

// 记录登录时间
export const setTokenTime = () => {
  localStorage.setItem(TOKEN_TIME, Date.now())
}

// 获取
export const getTokenTime = () => {
  return localStorage.getItem(TOKEN_TIME)
}

// 验证登录时长是否已超过规定时间
export const validTokenTime = () => {
  const currentTime = Date.now()
  const tokenTime = getTokenTime()
  return currentTime - tokenTime > TOKEN_TIME_VALUE
}
