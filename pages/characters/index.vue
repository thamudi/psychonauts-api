<template>
  <SiteCharactersContent
    :title="content.title"
    :desc="content.desc"
    :endpoint="content.endpoint"
    :searchQueries="content.searchQueries"
  />
</template>
<script setup>
  const config = useRuntimeConfig()
  const content = ref({
    title: 'Characters',
    desc: 'An endpoint responsible for fetching data related to the characters of Psychonauts',
    endpoint: `/api/characters`,
    searchQueries: [
      [
        'limit',
        5,
        'Limit the number of Characters you get back from the API',
        'Nothing to see Here',
      ],
      [
        'gender',
        'male',
        'Get the Characters by their Gender',
        'Nothing to see Here',
      ],
      [
        'name',
        'razputin',
        'Get the Character by their unique name',
        'Nothing to see Here',
      ],
    ],
  })
</script>
<style scoped lang="postcss"></style>
