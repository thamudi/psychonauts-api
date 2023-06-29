<template>
  <div class="flex flex-col gap-y-4">
    <h1>
      {{ props.title }}
    </h1>

    <p>
      {{ props.desc }}
    </p>

    <p>
      NOTE: In order to display the images contact the site url without the
      /api/ endpoint
    </p>

    <code class="flex w-fit">
      <span class="hidden lg:block">{{ config.public.siteUrl }}</span
      >{{ props.endpoint }}
    </code>
    <!-- <p>Click on the title to copy the url</p> -->
    <hr />
    <div v-for="(item, idx) in searchQueries" :id="idx">
      <h2 @click="copyToClipBoard" :id="item[0]">{{ item[0] }} &#x1F587;</h2>
      <p>{{ item[2] }}</p>

      <form @submit.prevent="() => fetchNewData(e, item[0])">
        <label :htmlfor="item[0]"
          ><span class="hidden lg:block">{{ config.public.siteUrl }}</span>
          {{ props.endpoint }}?{{ item[0].toLowerCase() }}=
        </label>
        <input
          type="text"
          :name="item[0]"
          :placeholder="item[0]"
          v-model="form[item[0]]"
          :default-value="form[item[0]]"
        />
        <button type="submit" value="submit">Submit</button>
      </form>
      <div class="jsonViewer box">
        <code>
          <pre>
            {{ state[item[0]] ? state[item[0]] : item[3] }}
          </pre>
        </code>
      </div>
    </div>
  </div>
</template>
<script setup>
  const config = useRuntimeConfig()
  const props = defineProps({
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    endpoint: {
      type: String,
      default: '',
    },
    searchQueries: {
      type: Array,
      default: [],
    },
  })

  const form = reactive({
    limit: props.searchQueries[0][1],
    gender: props.searchQueries[1][1],
    name: props.searchQueries[2][1],
  })

  const { data: limit } = await useFetch(`/api/characters?limit=${form.limit}`)
  const { data: name } = await useFetch(`/api/characters?name=${form.name}`)
  const { data: gender } = await useFetch(
    `/api/characters?gender=${form.gender}`
  )

  const state = reactive({
    limit: limit,
    gender: gender,
    name: name,
  })

  const fetchNewData = async (e, name) => {
    const { data } = await useFetch(`/api/characters?${name}=${form[name]}`)
    state[name] = data
  }
</script>
<style scoped lang="postcss">
  form {
    @apply flex flex-col md:flex-row;
    @apply text-base;
  }

  label {
    @apply flex;
    @apply py-1 px-2;
    @apply bg-psychonaut-green-400;
  }

  input,
  button {
    @apply flex-1;
    @apply py-1 px-2;
    @apply text-black;
  }

  button {
    @apply bg-psychonaut-yellow;
    @apply border-psychonaut-cyan border-solid border-2;
  }

  input:focus {
    @apply outline-psychonaut-cyan outline-double;
  }

  h2 {
    @apply capitalize;
    @apply my-1;
    @apply cursor-pointer;
  }

  .jsonViewer {
    @apply bg-psychonaut-gray-600;
    @apply overflow-y-auto;
    @apply p-2;
    @apply resize-y max-h-96;
    @apply font-mono;
    @apply text-sm;
  }
</style>
