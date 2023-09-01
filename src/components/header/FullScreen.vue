<template>
  <div @click="toggleFullScreen" class="toggle-fullscreen" id="fullscreen">
    <el-icon><FullScreen /></el-icon>
  </div>
</template>

<script setup>
import screenfull from 'screenfull'

const toggleFullScreen = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle()
  }
}
</script>

<style lang='scss' scoped>
.toggle-fullscreen {
  cursor: pointer;
}
</style>
