<!--
 * @Author: ChooJSON
 * @Github: https://github.com/ChooJSON
 * @Date: 2023-04-21 06:43:11
 * @LastEditors: ChooJSON
 * @LastEditTime: 2023-04-21 06:56:24
 * @Description: Please write the description of this file.
-->
<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar :size="50" :src="circleUrl" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const circleUrl = ref(
  'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
)

const logout = () => {
  store.dispatch('app/logout')
}
</script>

<style lang="scss" scoped></style>
