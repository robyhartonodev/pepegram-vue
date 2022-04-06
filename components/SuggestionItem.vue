<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center space-x-4">
      <div class="w-12 h-12 rounded-full flex items-center justify-center bg-amber-700 text-white">
        PP
      </div>
      <div class="flex flex-col">
        <div class="font-bold">
          username123
        </div>
        <div class="text-gray-400">
          Followed by username1 +n more
        </div>
      </div>
    </div>
    <div>
      <button class="text-blue-400">
        Follow
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SuggestionItem',
  data () {
    return {
    }
  }
})
</script>
