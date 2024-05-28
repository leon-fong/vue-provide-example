<script setup lang="tsx">
import { inject, ref } from 'vue'
import { DrawerContent, DrawerOverlay, DrawerPortal, DrawerRoot, DrawerTitle, DrawerTrigger } from 'vaul-vue'
import ProfileForm from './ProfileForm.vue'

const open = ref(false)
const { edit, target } = inject('Tourist') as any

function onConfirm(value: any) {
  edit(value)
  open.value = false
}
</script>

<template>
  <DrawerRoot v-model:open="open">
    <DrawerTrigger
      class="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      @click="open = true"
    >
      编辑
    </DrawerTrigger>
    <DrawerPortal>
      <DrawerOverlay class="fixed bg-black/40 inset-0" />
      <DrawerContent
        class="bg-gray-100 flex flex-col rounded-t-[10px] h-full mt-24 max-h-[96%] fixed bottom-0 left-0 right-0"
      >
        <div class="p-4 bg-white rounded-t-[10px] flex-1">
          <div class="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />
          <DrawerTitle class="font-semibold text-center pb-4">
            新增游客信息
          </DrawerTitle>
          <div class="max-w-md mx-auto">
            <ProfileForm :default-value="target" @confirm="onConfirm" />
          </div>
        </div>
      </DrawerContent>
    </DrawerPortal>
  </DrawerRoot>
</template>
