<template>
  <div class="box">
    <div v-for="(item, index) in items" :id="index" class="accordion-section">
      <UIAccordion
        :title="item.title"
        :body="item.body"
        :linkText="item.linkText"
        :linkAnchor="item.linkAnchor"
        :endpoint="item.endpoint"
      />
    </div>
  </div>
</template>
<script setup>
  const items = ref([
    {
      title: 'Get Characters',
      body: 'An endpoint to get all the characters within this API',
      linkText: 'characters',
      linkAnchor: 'characters',
      endpoint: `/api/characters`,
    },
    {
      title: 'Get a single character',
      body: 'An endpoint to get a character by their name within this API',
      linkText: 'characters',
      linkAnchor: 'characters#name',
      endpoint: `/api/characters?name=razputin`,
    },
    {
      title: 'Get PSI-Powers',
      body: 'An endpoint to get all the PSI-Powers within this API',
      linkText: 'psi-powers',
      linkAnchor: 'psi-powers',
      endpoint: `/api/psi-powers`,
    },
    {
      title: 'Get a single PSI-Powers',
      body: 'An endpoint to get a PSI-Power by its name within this API',
      linkText: 'psi-powers',
      linkAnchor: 'psi-powers#name',
      endpoint: `/api/powers?name=psi-punch`,
    },
  ])
</script>
<style scoped lang="postcss">
  .accordion-section {
    @apply border-t-[1px] border-solid border-t-psychonaut-gray-500;
  }
</style>
