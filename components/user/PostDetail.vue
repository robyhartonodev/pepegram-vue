<template>
  <div>
    <!-- TODO -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface PostItem {
  id: string;
  caption: string;
  posterId: string;
  mediaPathUrl: string;
}

export default Vue.extend({
  name: 'UserPostDetail',
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      postList: [] as PostItem[]
    }
  },
  mounted () {
  }
})
</script>
