<template>
  <div class="flex flex-col border-2 p-2 min-w-[50%] md:min-w-[25%]">
    <div class="flex justify-end">
      <button>
        <IconCloseCircle class="w-4 h-4 text-gray-400" />
      </button>
    </div>
    <div class="flex flex-col items-center justify-center">
      <div class="w-8 h-8 flex justify-center items-center bg-amber-600 text-white rounded-full mb-4">
        TT
      </div>
      <div class="text-center text-sm">
        Max Mustermann
      </div>
      <div class="text-gray-400 text-sm mb-4">
        Followed by ...
      </div>
      <button class="bg-blue-500 text-sm text-white p-2 rounded-md">
        Follow
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SuggestionFriendItem',
  data () {
    return {}
  }
})
</script>
