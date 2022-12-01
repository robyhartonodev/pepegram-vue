<template>
  <div>
    <div
      v-for="item in postList"
      :key="'post-item-'+item.id"
      class="mb-4"
    >
      <PostItem :post="item" />
      <SuggestionFriendSlider
        v-if="index === 2"
        class="mt-4"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

// interface MainPostItem {
//   likeCount: number;
//   posterId: string;
// }

// TODO get all posts of current user and users that followed by the current user
// TODO limit the get all posts by 5 posts maximum
// TODO sort the posts by post date time (newest to oldest posts)

export default Vue.extend({
  name: 'PostList',
  data () {
    return {
      paginationCount: 3,
      postList: [] as any[],
      currentUser: {} as any
    }
  },
  mounted () {
    // const currentUser = JSON.parse(JSON.stringify(this.$store.state.currentUser.currentUser))
    // currentUser.followingArray.push(currentUser.id)
    // this.getCurrentUserPostList()
  },
  methods: {
    getCurrentUserPostList () {
      this.currentUser = JSON.parse(JSON.stringify(this.$store.state.currentUser.currentUser))

      // Push current user id as well to the filter query array
      this.currentUser.followingArray.push(this.currentUser.id)

      if (this.currentUser) {
        this.$fire.firestore
          .collection('posts')
          .where('posterId', 'in', this.currentUser.followingArray)
          .orderBy('postCreateDateTime', 'desc')
          .limit(this.paginationCount)
          .get()
          .then((response) => {
            response.docs.forEach(() => {
              this.postList = response.docs.map((doc) => { return { id: doc.id, ...doc.data() } })
            })
          })
      }
    }
  }
})
</script>
