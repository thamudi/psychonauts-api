<template>
  <SitePsiPowersContent
    :title="content.title"
    :desc="content.desc"
    :endpoint="content.endpoint"
    :searchQueries="content.searchQueries"
  />
</template>
<script setup>
  const config = useRuntimeConfig()
  const content = ref({
    title: 'PSI Powers',
    desc: 'An endpoint responsible for everything related to PSI Powers in Psychonauts',
    endpoint: `/api/psi-powers`,
    searchQueries: [
      [
        'limit',
        5,
        'Limit the number of Psi Powers you get back from the API", "Nothing to see Here',
        'Nothing to see Here',
      ],
      [
        'name',
        'telekinesis',
        'Get the Psi Power by their unique name", "Nothing to see Here',
      ],
    ],
  })
</script>
<style scoped lang="postcss"></style>
