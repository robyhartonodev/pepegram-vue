<template>
  <div class="grid grid-cols-3 gap-1 md:gap-5">
    <div
      v-for="item in postList"
      :key="item.imageUrl"
      class="h-36 md:h-72 text-white"
    >
      <img :src="item.imageUrl" :alt="item.imageUrl" class="w-full h-full object-cover">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface postItem {
  id?: string;
  caption?: string;
  imageUrl?: string;
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
    // TODO call all posts collection of the current user
    // TODO call storage service, based on posterId key
    // TODO map postList and append imageUrl based on post ID

    return {
      postList: [] as postItem[]
    }
  },
  mounted () {
    // const currentUser = this.$fire.auth.currentUser

    // if (currentUser) {
    //   this.$fire.firestore
    //     .collection('posts')
    //     .where('posterId', '==', currentUser.uid)
    //     .get()
    //     .then((querySnapshot) => {
    //       querySnapshot.forEach((doc) => {
    //         console.log(doc.data())
    //       })
    //     })
    // }
  }
})
</script>
