<template>
  <NuxtLink class="flex flex-col items-center gap-y-8 mb-8" to="/">
    <!-- <img src="/images/psychonauts-logo.png" alt="psychonauts-logo" /> -->
    <img src="/images/psychonauts-logo.png" alt="psychonauts-logo" />
    <!-- <img src="/images/api.png" alt="api-logo" />
    <img src="/images/description.png" alt="description-logo" /> -->
  </NuxtLink>
  <UIConnection :code="readyState ?? 0" />
</template>
<script setup>
  import { useIntervalFn } from '@vueuse/core'

  const { data, refresh } = await useFetch('/api/status')
  const readyState = ref(data.value ?? 0)
  const { pause, resume } = useIntervalFn(async () => {
    refresh()
    readyState.value = data.value ?? 0
    console.log('re-checking...')
  }, 5000)

  watch(
    readyState,
    () => {
      if (readyState.value === 1) pause()
      else resume()
    },
    { immediate: true },
  )
</script>
<style scoped lang="postcss"></style>
