<template>
  <div class="flex flex-col space-y-2 items-center">
    <div class="relative h-16 w-16 rounded-full bg-gradient-to-r from-red-500 to-yellow-500">
      <button class="absolute inset-0 w-full h-full p-1" @click="redirectTo()">
        <div class="flex justify-center w-14 h-14 bg-slate-800 text-white rounded-full p-4">
          MM
        </div>
      </button>
    </div>
    <div class="text-sm">
      username1
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'StoryItem',
  data () {
    return {}
  },
  methods: {
    redirectTo () {
      this.$router.push('/stories')
    }
  }
})
</script>
