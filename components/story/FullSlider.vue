<template>
  <div class="flex space-x-8 overflow-x-scroll p-4">
    <StoryFullItem
      v-for="index in 20"
      :key="'story-full-' + index"
      @click="setSelectedStoryIndex(index)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'StoryFullSlider',
  data () {
    return {
      selectedStoryIndex: null as null|number
    }
  },
  methods: {
    setSelectedStoryIndex (index: number) {
      this.selectedStoryIndex = index
    }
  }
})
</script>
