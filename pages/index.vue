<template>
  <div class="px-0 md:px-48 grid grid-cols-3 gap-3">
    <div class="col-span-3 lg:col-span-2">
      <StorySlider class="mb-4" />
      <div class="flex flex-col space-y-6">
        <PostList />
      </div>
    </div>
    <div class="col-span-0 lg:col-span-1">
      <SideMenu />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  middleware: ['auth'],
  head () {
    return {
      title: 'Pepegram'
    }
  },
  mounted () {
  }
})
</script>
