<template>
  <div class="flex flex-col">
    <Header />
    <FlashMessage />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LayoutDefault'
})
</script>
