<template>
  <div class="relative">
    <div
      v-show="showLeftArrow"
      class="absolute inset-y-24 left-2 z-10"
    >
      <button
        class="border-2 border-transparent rounded-full w-8 h-8 drop-shadow-md bg-gray-500 opacity-80"
        @click="scrollLeft"
      >
        <IconChevronLeft class="text-white" />
      </button>
    </div>
    <div class="border-2 p-4">
      <div class="flex justify-between mb-4">
        <div class="text-gray-400 font-bold">
          Suggestions For You
        </div>
        <div>
          <a href="#" class="text-blue-400 font-bold">See All</a>
        </div>
      </div>
      <div
        id="suggestion-friend-item-list"
        class="flex space-x-6 overflow-x-hidden"
        @scroll="onHorizontalScroll"
      >
        <SuggestionFriendItem v-for="index in 20" :key="'suggestion-friend-item-' + index" />
      </div>
    </div>
    <div
      class="absolute inset-y-24 right-2 z-10"
    >
      <button
        class="border-2 border-transparent rounded-full w-8 h-8 drop-shadow-md bg-gray-500 opacity-80"
        @click="scrollRight"
      >
        <IconChevronRight class="text-white" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SuggestionFriendSlider',
  data () {
    return {
      storyItemList: document.getElementById('suggestion-friend-item-list'),
      offsetLeft: 0,
      showLeftArrow: false
    }
  },
  mounted () {
    this.storyItemList = document.getElementById('suggestion-friend-item-list')
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
