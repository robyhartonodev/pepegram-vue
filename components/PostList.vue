<template>
  <div>
    <div v-for="index in 10" :key="'post-item-'+index">
      <PostItem />
      <SuggestionFriendSlider v-if="index === 2" class="mt-4" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface MainPostItem {
  likeCount: number;
  posterId: string;
  posterUsername: string;
}

export default Vue.extend({
  name: 'PostList',
  data () {
    return {
      postList: [] as MainPostItem[]
    }
  }
})
</script>
