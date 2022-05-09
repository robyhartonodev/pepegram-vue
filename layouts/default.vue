<template>
  <div class="flex flex-col">
    <Header />
    <FlashMessage />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LayoutDefault',
  mounted () {
    // const currentUser = this.$fire.auth.currentUser

    // if (currentUser) {
    //   const currentUserDoc = this.$fire.firestore.collection('users').doc(currentUser.uid)

    //   currentUserDoc.onSnapshot((docSnapshot) => {
    //     console.log('Current user data changed! Re-fetching the current user from the firestore...: ', docSnapshot)

    //     this.$fire.firestore.collection('users')
    //       .doc(currentUser.uid)
    //       .get()
    //       .then((doc: DocumentData) => {
    //         this.$store.dispatch('currentUser/setCurrentUser', { currentUser: doc.data() })
    //         console.log('currentUser set successfully!')
    //       })
    //   }, (err) => {
    //     console.log('observer error! ', err)
    //   })
    // }
  }
})
</script>
