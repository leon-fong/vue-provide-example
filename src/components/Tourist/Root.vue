<script setup lang='ts'>
import { computed, provide, ref } from 'vue'

interface Item {
  name: string
  phone: string
}

const values = defineModel<Item[]>({
  required: true,
  default: [],
})

const targetIndex = ref()

provide('Tourist', {
  values,
  insert: (value: Item) => values.value.push(value),
  edit: (value: Item) => values.value.splice(targetIndex.value, 1, value),
  remove: () => values.value.splice(targetIndex.value, 1),
  bindIndex: (index: number) => targetIndex.value = index,
  target: computed(() => values.value[targetIndex.value]),
})
</script>

<template>
  <slot />
</template>
