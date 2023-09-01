/*
 * @Author: ChooJSON
 * @Github: https://github.com/ChooJSON
 * @Date: 2023-04-21 08:19:57
 * @LastEditors: ChooJSON
 * @LastEditTime: 2023-04-21 08:41:10
 * @Description: Please write the description of this file.
 */

export const steps = (i18n) => [
  {
    element: '#guide',
    popover: {
      title: i18n('driver.guideBtn'),
      position: 'left'
    }
  },
  {
    element: '#hamburger',
    popover: {
      title: i18n('driver.hamburgerBtn'),
      position: 'bottom'
    }
  },
  {
    element: '#fullscreen',
    popover: {
      title: i18n('driver.fullScreen'),
      position: 'left'
    }
  },
  {
    element: '#toggleLang',
    popover: {
      title: i18n('driver.toggleLang'),
      position: 'left'
    }
  }
]
