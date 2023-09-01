/*
 * @Author: ChooJSON
 * @Github: https://github.com/ChooJSON
 * @Date: 2023-04-21 10:30:01
 * @LastEditors: ChooJSON
 * @LastEditTime: 2023-04-21 10:33:58
 * @Description: Please write the description of this file.
 */
const dayjs = require('dayjs')

const filterTime = (val, format = 'YYYY-MM-DD') => {
  if (!isNull(val)) {
    val = parseInt(val) * 1000
    return dayjs(val).format(format)
  } else {
    return '--'
  }
}

export const isNull = (date) => {
  if (!date) return true
  if (JSON.stringify(date) === '{}') return true
  if (JSON.stringify(date) === '[]') return true
}

export default app => {
  app.config.globalProperties.$filters = {
    filterTime
  }
}
