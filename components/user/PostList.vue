<template>
  <div class="grid grid-cols-3 gap-1 md:gap-5">
    <div
      v-for="item in postList"
      :key="item.mediaPathUrl"
      class="h-36 md:h-72 text-white"
    >
      <img :src="item.mediaPathUrl" :alt="item.mediaPathUrl" class="w-full h-full object-cover">
    </div>
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
  name: 'UserPostList',
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
    this.getUserPosts()
  },
  methods: {
    getUserPosts () {
      const userParamId = this.$route.params.id

      if (userParamId) {
        this.$fire.firestore
          .collection('posts')
          .where('posterId', '==', userParamId)
          .get()
          .then((querySnapshot) => {
            this.postList = querySnapshot.docs.map((doc) => {
              const data = doc.data()

              return {
                id: doc.id,
                caption: data.caption,
                posterId: data.posterId,
                mediaPathUrl: data.mediaPathUrl
              }
            })
          })
      }
    }
  }
})
</script>
