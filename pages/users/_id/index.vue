<template>
  <div class="px-0 md:px-48 flex flex-col">
    <!-- header section -->
    <div class="flex space-x-0 md:space-x-20 justify-center items-center">
      <!-- profile picture -->
      <div class="w-40 h-40 hidden md:flex justify-center items-center rounded-full bg-amber-700 text-white text-2xl">
        CC
      </div>

      <!-- user information sections -->
      <div class="flex flex-col space-y-10">
        <div class="flex space-x-3 items-center">
          <div class="text-4xl font-thin">
            {{ username }}
          </div>
          <div>
            <button
              class="font-bold text-slate-800 border-2 p-2 rounded-md text-sm"
              @click="redirectToUserSettings"
            >
              Edit Profile
            </button>
          </div>
          <div><button><IconCog class="w-8 h-8" /></button></div>
        </div>

        <div class="flex space-x-12">
          <div>
            <span class="font-bold">10</span> posts
          </div>
          <div>
            <span class="font-bold">322</span> followers
          </div>
          <div>
            <span class="font-bold">644</span> following
          </div>
        </div>

        <div class="flex flex-col text-sm text-slate-800">
          <div class="font-bold">
            {{ name }}
          </div>
          <div>{{ biography }}</div>
          <div>{{ website }}</div>
        </div>
      </div>
    </div>

    <div class="mt-12">
      <hr>
    </div>

    <!-- tab section -->
    <div class="flex justify-center font-thin space-x-10 text-gray-500 mb-8">
      <button class="p-1">
        POSTS
      </button>
      <button class="p-1">
        SAVED
      </button>
      <button class="p-1">
        TAGGED
      </button>
    </div>

    <div>
      <UserPostList />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'UserDetailPage',
  middleware: ['auth'],
  data () {
    return {
      name: '',
      username: '',
      biography: '',
      website: ''
    }
  },
  mounted () {
    const currentUser = this.$fire.auth.currentUser

    if (currentUser) {
      this.$fire.firestore
        .collection('users')
        .doc(currentUser.uid)
        .get()
        .then((response) => {
          const responseUser = response.data()

          console.log(responseUser)

          if (responseUser) {
            this.name = responseUser.name
            this.username = responseUser.username
            this.website = responseUser.website
            this.biography = responseUser.biography
          }
        })
        .catch(() => {
          this.$store.dispatch('flashmessage/show', {
            text: 'Something went wrong!',
            duration: 5000,
            type: 'danger'
          })
        })

      // this.$fire.storage.ref('posts/M2sxPszYcsRGHzSUlNK02NBfNwG3')
      //   .listAll()
      //   .then((response) => {
      //     response.prefixes.forEach((folderRef) => {
      //       folderRef.listAll().then((response) => {
      //         response.items.forEach((itemRef) => {
      //           this.$fire.storage.ref(itemRef.fullPath)
      //             .getDownloadURL()
      //             .then((url) => {
      //               this.urlList.push(url)
      //               console.log(this.urlList)
      //             })
      //         })
      //       })
      //     })
      //   })
    }
  },
  methods: {
    redirectToUserSettings () {
      const currentUser = this.$fire.auth.currentUser

      if (currentUser) {
        this.$router.push(`/users/${currentUser.uid}/edit`)
      }
    }
  }
})
</script>
