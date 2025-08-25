<script setup>
defineProps(['product'])
const emit = defineEmits(['add-to-cart'])
</script>

<template>
  <a
    @click.prevent="emit('add-to-cart', product)"
    href="#"
    class="list-group-item list-group-item-action"
    ><div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{ product.name }}</h5>
      <small>${{ product.price }}</small>
    </div>
    <p class="mb-1">{{ product.description }}</p></a
  >
</template>
