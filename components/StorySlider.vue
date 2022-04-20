<template>
  <div class="relative">
    <div
      v-show="showLeftArrow"
      class="absolute inset-y-10 left-2 z-10"
    >
      <button
        class="border-2 rounded-full w-8 h-8 drop-shadow-md bg-white"
        @click="scrollLeft"
      >
        <IconChevronLeft />
      </button>
    </div>
    <div
      id="story-item-list"
      class="flex space-x-6 border-2 p-4 overflow-x-hidden"
      @scroll="onHorizontalScroll"
    >
      <StoryItem v-for="index in 15" :key="'story-item-' + index" />
    </div>
    <div
      class="absolute inset-y-10 right-2 z-10"
    >
      <button
        class="border-2 rounded-full w-8 h-8 drop-shadow-md bg-white"
        @click="scrollRight"
      >
        <IconChevronRight />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'StorySlider',
  data () {
    return {
      storyItemList: document.getElementById('story-item-list'),
      offsetLeft: 0,
      showLeftArrow: false
    }
  },
  mounted () {
    this.storyItemList = document.getElementById('story-item-list')
  },
  methods: {
    scrollRight () {
      if (this.storyItemList) {
        this.storyItemList.scrollTo({ top: 0, left: (this.storyItemList.scrollLeft + 400), behavior: 'smooth' })
      }
    },
    scrollLeft () {
      if (this.storyItemList) {
        this.storyItemList.scrollTo({ top: 0, left: (this.storyItemList.scrollLeft - 400), behavior: 'smooth' })
      }
    },
    onHorizontalScroll () {
      if (this.storyItemList) {
        this.showLeftArrow = (this.storyItemList.scrollLeft) > 0
      }
    }
  }
})
</script>
