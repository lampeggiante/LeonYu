<script setup>
// import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
// const router = useRouter()
// const route = useRoute()

const userStore = useUserStore()
</script>

<template>
  <router-view></router-view>
  <div>我是APP</div>
  <p>{{ userStore.token }}</p>
  <el-button @click="userStore.setToken('新的 token 。')">登录</el-button>
  <el-button @click="userStore.removeToken()">退出</el-button>
</template>

<style scoped></style>
