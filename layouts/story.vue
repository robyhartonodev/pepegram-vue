<template>
  <div class="flex flex-col bg-stone-800 min-h-screen">
    <div class="flex justify-between px-4 py-4 items-center mb-4">
      <div class="instagram-font text-white text-2xl">
        Pepegram
      </div>
      <button @click="redirectToHome">
        <IconCloseCircle class="w-12 h-12 text-white" />
      </button>
    </div>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LayoutStory',
  methods: {
    redirectToHome () {
      this.$router.push('/')
    }
  }
})
</script>

<style scoped>
.bg-story{
  background-color: '#1A1A1A';
}
</style>
