<template>
  <button
    type="button"
    @click="toggle"
    class="flex justify-between"
    :class="`accordion ${active ? 'active' : ''}`"
  >
    {{ props.title }}
    <span><i class="arrow" :class="active ? 'up' : 'down'"></i></span>
  </button>
  <div class="panel">
    <div class="panel-container">
      <p>{{ props.body }}</p>

      <code class="flex"
        ><span class="hidden lg:block">{{ config.public.siteUrl }}</span
        >{{ props.endpoint }}</code
      >

      <NuxtLink :href="`/${props.linkAnchor}`"
        >Link to {{ props.linkText }} endpoint details</NuxtLink
      >
    </div>
  </div>
</template>
<script setup>
  import { set, get } from '@vueuse/core'

  const config = useRuntimeConfig()
  const active = ref(false)

  const props = defineProps({
    title: {
      type: String,
      default: 'Lorem Ipsum',
    },
    body: {
      type: String,
      default: 'Lorem Ipsum',
    },
    linkAnchor: {
      type: String,
      default: 'Lorem Ipsum',
    },
    linkText: {
      type: String,
      default: 'Lorem Ipsum',
    },
    endpoint: {
      type: String,
      default: 'Lorem Ipsum',
    },
  })

  const toggle = (e) => {
    set(active, !get(active))
    const panel = e.target.nextElementSibling
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px'
    }
  }
</script>
<style scoped lang="postcss">
  .accordion {
    @apply bg-black text-psychonaut-green-100;
    @apply cursor-pointer;
    @apply p-[18px] w-full;

    @apply border-none;
    @apply border-b-[1px] border-solid border-b-psychonaut-gray-500;

    @apply text-left;
    @apply outline-none;
    @apply text-base;
    @apply transition duration-[0.4s];
  }

  .active,
  .accordion:hover {
    @apply bg-psychonaut-green-200 text-[#0e191a];
    .arrow {
      @apply border-[#0e191a];
    }
  }

  .panel {
    @apply max-h-0;
    @apply overflow-hidden;
    transition: max-height 0.2s ease-out;
  }

  .panel-container {
    @apply flex flex-col gap-y-4;
    @apply py-0 px-5 my-4;
    @apply bg-inherit;
    @apply transition duration-[0.2s] ease-out;
  }

  .arrow {
    @apply border-solid border-psychonaut-green-200;
    border-width: 0 2px 2px 0;
    @apply inline-block;
    @apply p-1;
  }

  .down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

  .up {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }
</style>
