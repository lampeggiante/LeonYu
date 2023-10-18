<script setup>
// 中英国际处理
import zh from 'element-plus/dist/locale/zh-cn.mjs'
</script>

<template>
  <el-config-provider :locale="zh">
    <router-view></router-view>
  </el-config-provider>
</template>

<style scoped></style>
