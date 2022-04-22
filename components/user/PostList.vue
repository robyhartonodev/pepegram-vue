<template>
  <div class="grid grid-cols-3 gap-5">
    <div
      v-for="index in 10"
      :key="'post' + index"
      class="h-72 bg-green-500 text-white"
    >
      T
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'UserPostList',
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {

    }
  }
})
</script>
