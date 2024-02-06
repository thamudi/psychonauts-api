<script lang="ts" setup>
  import { computed } from 'vue'

  const props = defineProps({
    code: {
      type: Number,
      default: 0,
    },
  })

  const connections = [
    {
      color: 'text-red-500',
      border: 'border-red-500',
      status: 'Not Connected',
      description: 'Please Check Your Connection!',
    },
    {
      color: 'text-green-500',
      border: 'border-green-500',
      status: 'Connected',
      description: 'Everything is Working Perfectly!',
    },
    {
      color: 'text-yellow-500',
      border: 'border-yellow-500',
      status: 'Connecting',
      description: 'Just a Moment, We"re Getting There!',
    },
    {
      color: 'text-orange-500',
      border: 'border-orange-500',
      status: 'Disconnecting',
      description: 'Preparing to Safely Disconnect!',
    },
  ]

  const connection = computed(() => connections[props.code])
</script>

<template>
  <div class="py-4 mb-2 border-y-2" :class="connection.border">
    <div v-if="code === 1" class="mongodb"></div>
    <div class="flex justify-start">
      <img src="/images/mongo.svg" class="mr-2" alt="" srcset="" />
      <div
        class="animate-pulse items-center text-lg font-bold"
        :class="connection.color"
      >
        ({{ code }}): {{ connection.status }},
        {{ connection.description }}
      </div>
    </div>
  </div>
</template>

<style>
  .mongodb::before {
    content: '';
    width: 400px;
    height: 400px;
    z-index: 9999;
    position: absolute;
    z-index: 0;
    transition: all ease 0.3s;
    background-color: #10a74f30;
    top: 50%;
    left: 50%;
    filter: blur(150px);
    transform: translate(-50%, -50%);
    @apply animate-pulse;
  }
</style>
