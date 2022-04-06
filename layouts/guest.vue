<template>
  <div class="flex">
    <div class="sticky top-0 h-full w-full basis-1/3">
      <img src="~/assets/images/landing-image.jpg" class="object-fill h-screen w-full">
    </div>
    <div class="basis-2/3">
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
