<!--
 * @Author: ChooJSON
 * @Github: https://github.com/ChooJSON
 * @Date: 2023-04-21 06:26:09
 * @LastEditors: ChooJSON
 * @LastEditTime: 2023-04-21 06:41:34
 * @Description: Please write the description of this file.
-->
<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        :to="{ path: '/' }"
        v-for="(item, index) in breadcrumbList"
        :key="index"
      >
        <span class="no-direct" v-if="index === breadcrumbList.length - 1">{{
          $t(`menus.${item.name}`)
        }}</span>
        <span class="redirect" v-else @click="redirectTo(item.path)">{{
          $t(`menus.${item.name}`)
        }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup>
import { watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const breadcrumbList = ref([])

const initBreadcrumbList = () => {
  breadcrumbList.value = route.matched
}

const redirectTo = (path) => {
  router.push(path)
}

watch(
  route,
  () => {
    initBreadcrumbList()
  },
  {
    deep: true,
    immediate: true
  }
)
</script>

<style lang="scss" scoped>
.no-direct {
  color: gray;
  cursor: text;
}
.redirect {
  color: dimgrey;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: gray;
  }
}
</style>
