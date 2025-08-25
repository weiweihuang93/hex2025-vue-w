<script setup>
const props = defineProps(['cartItem'])
const emit = defineEmits(['remove-to-cart', 'update-quantity'])
const updateQuantity = (event) => {
  emit('update-quantity', {
    id: props.cartItem.product.id,
    quantity: Number(event.target.value),
  })
}
</script>

<template>
  <tr>
    <td>
      <button @click="emit('remove-to-cart', cartItem.product.id)" type="button" class="btn btn-sm">
        x
      </button>
    </td>
    <td>{{ cartItem.product.name }}</td>
    <td>
      <small>{{ cartItem.product.description }}</small>
    </td>
    <td>
      <select :value="cartItem.quantity" @change="updateQuantity" class="form-select">
        <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
      </select>
    </td>
    <td>{{ cartItem.product.price }}</td>
    <td>{{ cartItem.product.price * cartItem.quantity }}</td>
  </tr>
</template>
