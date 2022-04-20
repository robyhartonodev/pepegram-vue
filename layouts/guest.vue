<template>
  <div class="flex">
    <div class="hidden md:flex md:sticky top-0 h-full w-full md:basis-1/3">
      <img src="~/assets/images/landing-image.jpg" class="object-fill h-screen w-full">
    </div>
    <div class="basis-full md:basis-2/3">
      <FlashMessage />
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LayoutGuest'
})
</script>
