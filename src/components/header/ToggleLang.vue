<!--
 * @Author: ChooJSON
 * @Github: https://github.com/ChooJSON
 * @Date: 2023-04-21 07:17:56
 * @LastEditors: ChooJSON
 * @LastEditTime: 2023-04-21 07:35:58
 * @Description: Please write the description of this file.
-->
<template>
  <el-dropdown @command="handleCommand" id="toggleLang">
    <span class="el-dropdown-link">
      <el-icon><More /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zh" :disabled="currentLang === 'zh'"
          >中文</el-dropdown-item
        >
        <el-dropdown-item command="en" :disabled="currentLang === 'en'"
          >English</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { useStore } from 'vuex'

const i18n = useI18n()
const store = useStore()

const currentLang = computed(() => {
  return i18n.locale.value
})

const handleCommand = (val) => {
  i18n.locale.value = val
  store.commit('app/changeLang', val)
  localStorage.setItem('lang', val)
}
</script>

<style lang="scss" scoped></style>
