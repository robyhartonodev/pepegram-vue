<template>
  <div
    class="flex flex-col min-w-[100%] md:min-w-[30%] rounded-lg shadow-md p-2"
    :style="{
      'background': `url(${require('~/assets/images/stories/story-4.jpg')})`,
      'background-size': 'cover',
      'height': '80vh'
    }"
  >
    <!-- progress bar -->
    <div class="h-2 w-full border-t-2 border-dashed" />

    <div class="flex justify-between mt-4">
      <div class="flex items-center space-x-2">
        <div class="w-8 h-8 flex justify-center items-center rounded-full bg-slate-800 text-white text-sm">
          TT
        </div>
        <div class="text-white text-sm">
          username
        </div>
        <div class="text-gray-600 text-sm">
          322h
        </div>
      </div>

      <div class="flex text-white space-x-3">
        <button>
          <IconStop />
        </button>
        <button>
          <IconVolumeUp />
        </button>
        <button>
          <IconDotHorizontal />
        </button>
      </div>
    </div>

    <div class="flex justify-center items-center space-x-4 mt-[25rem] p-2">
      <input
        type="text"
        placeholder="Reply to max musterman..."
        class="text-white w-5/6 rounded-full text-xs bg-transparent border-2 p-2 border-white placeholder:text-white"
      >
      <button class="text-white w-1/6 flex justify-center">
        <IconPaperPlane />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'StoryFullItem',
  data () {
    return {

    }
  }
})
</script>

<style scoped>
</style>
