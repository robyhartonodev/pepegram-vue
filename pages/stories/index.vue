<template>
  <div class="px-0 md:px-32">
    <StoryFullSlider />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'StoryIndexPage',
  layout: 'story',
  middleware: ['auth']
})
</script>
