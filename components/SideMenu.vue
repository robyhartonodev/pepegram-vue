<template>
  <div class="p-4 py-8 sticky top-0">
    <div class="flex items-center justify-between text-base">
      <div class="flex items-center space-x-4">
        <div class="w-16 h-16 rounded-full flex items-center justify-center bg-amber-700 text-white">
          PP
        </div>
        <div class="flex flex-col">
          <div class="font-bold">
            {{ currentUser.username }}
          </div>
          <div class="text-gray-400">
            {{ currentUser.name }}
          </div>
        </div>
      </div>
      <div>
        <button class="text-blue-400 text-sm">
          Switch
        </button>
      </div>
    </div>
    <div
      v-if="suggestionList.length > 0"
      class="flex justify-between items-center mt-8"
    >
      <div class="text-gray-400 text-lg font-bold">
        Suggestions For You
      </div>
      <button class="text-slate-800">
        See All
      </button>
    </div>
    <div class="flex flex-col space-y-2 mt-4">
      <SuggestionItem
        v-for="item,index in suggestionList"
        :key="'suggest-' + index"
        :username="item.username"
        :user-id="item.id"
        @follow="getFriendSuggestionList"
      />
    </div>
    <div class="mt-8 text-gray-400 text-sm">
      <div class="flex">
        <a href="#">About</a>
        <div>-</div>
        <a href="#">Help</a>
        <div>-</div>
        <a href="#">Press</a>
        <div>-</div>
        <a href="#">API</a>
        <div>-</div>
        <a href="#">Jobs</a>
        <div>-</div>
        <a href="#">Privacy</a>
      </div>
      <div class="flex">
        <a href="#">Impressum/Terms/NetzDG/UrhDaG</a>
        <div>-</div>
        <a href="#">Locations</a>
      </div>
      <div class="flex">
        <a href="#">Top Accounts</a>
        <div>-</div>
        <a href="#">Hashtags</a>
        <div>-</div>
        <a href="#">Language</a>
      </div>
    </div>
    <div class="mt-8 text-gray-400">
      &copy; 2022 Pepegram 😎 Instagram clone demo showcase by Roby Hartono
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { DocumentData, documentId } from 'firebase/firestore'

export default Vue.extend({
  name: 'SideMenu',
  data () {
    return {
      suggestionList: [] as any[],
      currentUser: this.$store.state.currentUser.currentUser
    }
  },
  mounted () {
    this.getFriendSuggestionList()
  },
  methods: {
    onEmitFollow () {
      const currentUser = this.$fire.auth.currentUser

      if (currentUser) {
        this.$fire.firestore
          .collection('users')
          .where(documentId(), '!=', currentUser.uid)
          .get()
          .then((response) => {
            this.suggestionList = response.docs.map((doc) => { return { id: doc.id, ...doc.data() } })
            // Update current user store object
            this.$fire.firestore.collection('users')
              .doc(currentUser.uid)
              .get()
              .then((doc: DocumentData) => {
                this.$store.dispatch('currentUser/setCurrentUser', { currentUser: { id: doc.id, ...doc.data() } })
                  .then(() => {
                    const followingArray = this.$store.state.currentUser.currentUser.followingArray as string[]
                    this.suggestionList = this.suggestionList.filter((suggestion: any) => !followingArray.includes(suggestion.id))
                  })
              })
          })
      }
    },
    getFriendSuggestionList () {
      const currentUser = this.$fire.auth.currentUser

      if (currentUser) {
        this.$fire.firestore
          .collection('users')
          .where(documentId(), '!=', currentUser.uid)
          .get()
          .then((response) => {
            this.suggestionList = response.docs.map((doc) => { return { id: doc.id, ...doc.data() } })
          })
      }
    }
  }
})
</script>
