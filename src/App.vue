<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container py-2">
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/week1">第一週 - 餐點管理工具</RouterLink> |
      <RouterLink to="/week2">第二週 - 串接 Todo List API</RouterLink> |
      <RouterLink to="/week3">第三週 - 餐點管理工具</RouterLink>
    </nav>
  </div>
  <RouterView />
</template>
