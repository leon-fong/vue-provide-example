<script setup lang='ts'>
interface Item {
  name: string
  phone: string
}

withDefaults(defineProps<{
  defaultValue?: Item
}>(), {
  defaultValue: () => ({
    name: '',
    phone: '',
  }),
})

const emit = defineEmits<{
  confirm: [value: Item]
}>()

function onSubmit(event: any) {
  event.preventDefault()
  const formData = new FormData(event.target)
  const result = Object.fromEntries(formData) as unknown as Item
  emit('confirm', result)
}
</script>

<template>
  <form class="grid items-start gap-4 px-4" @submit="onSubmit">
    <div class="grid gap-2">
      <label html-for="name">姓名</label>
      <input
        id="name"
        type="text"
        name="name"
        autocomplete="off"
        class="border"
        required
        :value="defaultValue.name"
      >
    </div>
    <div class="grid gap-2">
      <label html-for="phone">电话</label>
      <input
        id="phone"
        name="phone"
        type="string"
        autocomplete="off"
        class="border"
        required
        :value="defaultValue.phone"
      >
    </div>
    <button type="submit">
      保存
    </button>
  </form>
</template>
