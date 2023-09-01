<!--
 * @Author: ChooJSON
 * @Github: https://github.com/ChooJSON
 * @Date: 2023-04-21 05:48:19
 * @LastEditors: ChooJSON
 * @LastEditTime: 2023-04-21 06:03:11
 * @Description: Please write the description of this file.
-->
<template>
  <div class="hamburger-container" @click="toggleSiderType" id="hamburger">
    <el-icon v-if="store.getters.siderType"><Fold /></el-icon>
    <el-icon v-if="!store.getters.siderType"><Expand /></el-icon>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()
const toggleSiderType = () => {
  store.commit('app/changeSiderType')
  console.log(store.getters.siderType)
}
</script>

<style lang="scss" scoped>
.hamburger-container {
  margin: 1rem;
  box-sizing: border-box;
  cursor: pointer;
  .el-icon {
    transform: scale(1.25);
    color: #409eff;
  }
}
</style>
