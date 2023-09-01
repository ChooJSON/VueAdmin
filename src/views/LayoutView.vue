<!--
 * @Author: ChooJSON
 * @Github: https://github.com/ChooJSON
 * @Date: 2023-04-21 03:47:09
 * @LastEditors: ChooJSON
 * @LastEditTime: 2023-04-21 06:23:44
 * @Description: Please write the description of this file.
-->
<template>
  <el-container class="common-layout">
    <el-aside :width="asideWidth" class="sidebar-container">
      <LayoutMenu />
    </el-aside>
    <el-container class="container" :class="{ hidderContainer: !$store.getters.siderType }">
      <el-header>
        <LayoutHeader />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import LayoutMenu from '@/components/LayoutMenu.vue'
import LayoutHeader from '@/components/LayoutHeader.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const asideWidth = computed(() => {
  return store.getters.siderType ? '15rem' : '4rem'
})
</script>

<style lang="scss" scoped>
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.container {
  width: calc(100% - 15rem);
  height: 100%;
  padding: 1rem;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  transition: all 0.25s;
  &.hidderContainer {
    width: calc(100% - 4rem);
  }
}
::v-deep .el-header {
  padding: 0;
}
</style>
