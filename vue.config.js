/*
 * @Author: ChooJSON
 * @Github: https://github.com/ChooJSON
 * @Date: 2023-04-20 23:20:30
 * @LastEditors: ChooJSON
 * @LastEditTime: 2023-04-21 04:03:34
 * @Description: Please write the description of this file.
 */
// const { defineConfig } = require('@vue/cli-service')

// Element UI 按需导入
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    // 使用额外的插件以按需导入要使用的组件
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  },
  // 解决跨域问题
  devServer: {
    https: false,
    hot: false,
    proxy: {
      '/api': {
        target: 'http://43.143.0.76:8889/api/private/v1/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  // 全局使用 scss 变量
  css: {
    loaderOptions: {
      sass: {
        additionalData:
        `
          @import "@/styles/variables.scss";  // scss文件地址
          @import "@/styles/mixin.scss";     // scss文件地址
        `
      }
    }
  }
}
