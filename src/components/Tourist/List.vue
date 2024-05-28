<script setup lang='ts'>
import { inject } from 'vue'
import Edit from './Edit.vue'

const { values, remove, bindIndex } = inject('Tourist') as any
</script>

<template>
  <template v-for="(item, index) in values" :key="index">
    <div class="flex justify-between w-full border-b" @click="bindIndex(index)">
      <button
        class="text-sm bg-transparent"
        @click="remove"
      >
        删除
      </button>
      <div class="flex-auto">
        <p>{{ item.name }}</p>
        <p>{{ item.phone }}</p>
      </div>
      <Edit />
    </div>
  </template>
</template>
