<template>
  <div class="flex flex-col">
    <Header />
    <FlashMessage />
    <div class="px-4 lg:px-48 py-4">
      <div class="flex border-2 min-h-screen">
        <div class="border-r-2 hidden md:flex">
          <UserNavigationEditTab />
        </div>
        <div>
          <Nuxt />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LayoutDefault'
})
</script>
