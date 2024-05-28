<script setup lang='ts'>
import { ref } from 'vue'
import Tourist from './components/Tourist'

const values = ref([])
</script>

<template>
  <Tourist.Root v-model="values">
    <Tourist.Add />
    <Tourist.List />
  </Tourist.Root>
</template>
