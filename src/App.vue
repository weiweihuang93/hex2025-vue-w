<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container py-2">
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </div>
  <RouterView />
</template>
