<template><div className="toast success">Copied to clipboard</div></template>
<script setup></script>
<style scoped lang="postcss">
  .toast.success {
    @apply bg-psychonaut-green-400;
    @apply p-2 w-fit;
    @apply transition-transform ease-linear;

    transition: 1s linear;
  }
</style>
