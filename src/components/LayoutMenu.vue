<template>
  <el-menu
    active-text-color="#7bbcfe"
    background-color="#1668b9"
    class="el-menu-vertical"
    :default-active="defaultActive"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
    router
    unique-opened
    :collapse = "!$store.getters.siderType"
  >
    <el-sub-menu :index="item.id" v-for="item in menuList" :key="item.id">
      <template #title>
        <el-icon v-if="item.authName === '用户管理'"><User /></el-icon>
        <el-icon v-if="item.authName === '权限管理'"><Key /></el-icon>
        <el-icon v-if="item.authName === '商品管理'"><Goods /></el-icon>
        <el-icon v-if="item.authName === '订单管理'"><List /></el-icon>
        <el-icon v-if="item.authName === '数据统计'"><DataAnalysis /></el-icon>
        <span>{{ $t(`menus.${item.path}`) }}</span>
      </template>
      <el-menu-item
        :index="'/' + childItem.path"
        v-for="childItem in item.children"
        :key="childItem.id"
        @click="savePath(childItem.path)"
      >
        <el-icon><Menu /></el-icon>
        {{ $t(`menus.${childItem.path}`) }}
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { getMenuList } from '@/api/menu'
import { ref } from 'vue'

const defaultActive = ref(sessionStorage.getItem('path') || '/users')
const menuList = ref([])
const initMenuList = async () => {
  menuList.value = await getMenuList()
}
initMenuList()

const savePath = (path) => {
  sessionStorage.setItem('path', `/${path}`)
}
</script>

<style lang='scss'>
</style>
