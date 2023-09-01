/*
 * @Author: ChooJSON
 * @Github: https://github.com/ChooJSON
 * @Date: 2023-04-21 09:24:18
 * @LastEditors: ChooJSON
 * @LastEditTime: 2023-04-21 12:14:56
 * @Description: Please write the description of this file.
 */
import request from './request'

export const getUser = (params) => {
  return request({
    url: '/users',
    params
  })
}

export const changeUserState = (uid, type) => {
  return request({
    url: `users/${uid}/state/${type}`,
    method: 'PUT'
  })
}

export const addUser = (data) => {
  return request({
    url: 'users',
    method: 'POST',
    data
  })
}
