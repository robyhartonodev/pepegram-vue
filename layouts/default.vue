<template>
  <div class="flex flex-col">
    <Header />
    <FlashMessage />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LayoutDefault'
})
</script>
