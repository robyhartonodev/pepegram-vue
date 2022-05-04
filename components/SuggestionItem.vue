<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center space-x-4">
      <div class="w-8 h-8 rounded-full flex items-center justify-center bg-amber-700 text-white">
        {{ profilePicturePath }}
      </div>
      <div class="flex flex-col text-sm">
        <div class="font-bold">
          {{ username }}
        </div>
        <!-- <div class="text-gray-400">
          Followed by username1 +n more
        </div> -->
      </div>
    </div>
    <div>
      <button
        class="text-blue-400 text-sm"
        @click="onFollowClick"
      >
        Follow
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { arrayUnion, increment } from '@firebase/firestore'
import Vue from 'vue'

export default Vue.extend({
  name: 'SuggestionItem',
  props: {
    username: {
      type: String,
      default: ''
    },
    userId: {
      type: String,
      default: ''
    },
    profilePicturePath: {
      type: String,
      default: 'PP'
    }
  },
  data () {
    return {
    }
  },
  methods: {
    onFollowClick () {
      const currentUser = this.$fire.auth.currentUser

      if (currentUser) {
        const batch = this.$fire.firestore.batch()

        const currentUserRef = this.$fire.firestore.collection('users').doc(currentUser.uid)
        batch.update(currentUserRef, {
          followingCount: increment(1),
          followingArray: arrayUnion(this.userId)
        })

        const followerUserRef = this.$fire.firestore.collection('users').doc(this.userId)
        batch.update(followerUserRef, {
          followerCount: increment(1),
          followerArray: arrayUnion(currentUser.uid)
        })

        batch.commit().then(() => {
          this.$store.dispatch('flashmessage/show', {
            text: 'User followed succesfully',
            duration: 5000,
            type: 'success'
          })

          this.$emit('follow')
        })
      }

      //   const currentUserRef = this.$fire.firestore.collection('users').doc(currentUser.uid)

      //   // For user that is following
      //   this.$fire.firestore.runTransaction((transaction) => {
      //     return transaction.get(currentUserRef)
      //       .then((currentUserDoc) => {
      //         const newFollowingRecord = {
      //           userId: this.userId,
      //           username: currentUserDoc.data()?.username,
      //           name: currentUserDoc.data()?.name
      //         }

      //         const userFollowingArray = currentUserDoc.data()?.followingArray as any[]
      //         const isExist = userFollowingArray.filter(item => item.id === this.userId).length > 0

      //         if (!isExist) {
      //           currentUserRef.update({
      //             followingArray: arrayUnion(newFollowingRecord),
      //             followingCount: increment(1)
      //           })

      //           console.log('not exist! following')
      //         } else {
      //           console.log('exist! not following')
      //         }
      //       })
      //   })
      //     .then(() => {
      //       console.log('Transaction success!')
      //     })
      //     .catch(() => {
      //       console.log('Transaction failed!')
      //     })

      //   const followerUserRef = this.$fire.firestore.collection('users').doc(this.userId)

      //   // For user that is followed
      //   this.$fire.firestore.runTransaction((transaction) => {
      //     return transaction.get(followerUserRef)
      //       .then((followerUserDoc) => {
      //         const newFollowerRecord = {
      //           userId: currentUser.uid,
      //           username: followerUserDoc.data()?.username,
      //           name: followerUserDoc.data()?.name
      //         }

      //         const userFollowerArray = followerUserDoc.data()?.followedArray as any[]
      //         const isExist = userFollowerArray.filter(item => item.id === currentUser.uid).length > 0

      //         if (!isExist) {
      //           followerUserRef.update({
      //             followerArray: arrayUnion(newFollowerRecord),
      //             followerCount: increment(1)
      //           })

      //           console.log('not exist! followed')
      //         } else {
      //           console.log('exist! not followed')
      //         }
      //       })
      //   })
      //     .then(() => {
      //       console.log('Transaction success!')
      //     })
      //     .catch(() => {
      //       console.log('Transaction failed!')
      //     })
      // }
    },
    OnUnfollowClick () {
      // TODO
    }
  }
})
</script>
