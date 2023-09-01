<!--
 * @Author: ChooJSON
 * @Github: https://github.com/ChooJSON
 * @Date: 2023-04-21 05:30:11
 * @LastEditors: ChooJSON
 * @LastEditTime: 2023-04-21 05:46:47
 * @Description: Please write the description of this file.
-->
<template>
  <div class="navbar">
    <HeaderBurger />
    <BreadCrumb />
    <div class="navbar-right">
      <DriverGuide class="navbar-item"/>
      <FullScreen class="navbar-item"/>
      <ToggleLang class="navbar-item"/>
      <HeaderAvatar class="navbar-item"/>
    </div>
  </div>
</template>

<script setup>
import HeaderBurger from './header/HeaderBurger.vue'
import BreadCrumb from './header/BreadCrumb.vue'
import HeaderAvatar from './header/HeaderAvatar.vue'
import ToggleLang from './header/ToggleLang.vue'
import FullScreen from './header/FullScreen.vue'
import DriverGuide from './header/DriverGuide.vue'
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 4rem;
  overflow: hidden;
  padding: 0 16px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  .navbar-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ::v-deep .navbar-item {
      display: inline-block;
      margin-left: 18px;
      font-size: 22px;
      color: #5a5e66;
      box-sizing: border-box;
      cursor: pointer;
    }
  }
}
</style>
