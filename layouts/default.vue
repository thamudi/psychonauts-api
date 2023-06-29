<template>
  <Html lang="en">
    <Head>
      <Title>Psychonauts API</Title>
    </Head>
    <Body class="container">
      <div class="w-full lg:max-w-[70vw] lg:container">
        <div class="p-12 bg-gray-900 opacity-95">
          <UIHeaderHero />
          <main>
            <slot />
          </main>
          <UIFooter />
        </div>
      </div>
    </Body>
  </Html>
</template>
<script setup>
  useSeoMeta({
    title: () => 'Psychonauts API',
    ogTitle: () => 'Psychonauts API',
    twitterTitle: () => 'Psychonauts API',
    description: () => 'An Api Tribute to the cult classic game Psychonauts',
    ogDescription: () => 'An Api Tribute to the cult classic game Psychonauts',
    twitterDescription: () =>
      'An Api Tribute to the cult classic game Psychonauts',
    ogImage: () => '/images/brain-jar.png',
    twitterImage: () => '/images/brain-jar.png',
  })
</script>
