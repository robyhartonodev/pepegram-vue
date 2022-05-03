<template>
  <div class="relative inline-block text-left">
    <div>
      <button
        id="menu-button"
        type="button"
        class="inline-flex justify-center w-full rounded-md border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
        aria-expanded="true"
        aria-haspopup="true"
        @click="toggleDropdown"
      >
        <div class="rounded-full bg-blue-700 text-white h-8 w-8 flex justify-center items-center">
          <div>PP</div>
        </div>
      </button>
    </div>

    <div
      v-show="showDropdown"
      class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div role="none">
        <div class="flex flex-col p-3 space-y-2">
          <div class="flex items-center">
            <IconUserCircle />
            <button
              id="menu-item-0"
              class="text-gray-700 text-left block px-4 py-2 text-sm w-full"
              role="menuitem"
              tabindex="-1"
              @click="redirectToUserProfile"
            >
              Profile
            </button>
          </div>
          <!-- <div class="flex items-center">
            <IconBookmark />
            <button id="menu-item-1" class="text-gray-700 text-left block px-4 py-2 text-sm w-full" role="menuitem" tabindex="-1">
              Saved
            </button>
          </div> -->
          <div class="flex items-center">
            <IconCog />
            <button
              id="menu-item-2"
              class="text-gray-700 text-left block px-4 py-2 text-sm w-full"
              role="menuitem"
              tabindex="-1"
              @click="redirectToUserSettings"
            >
              Settings
            </button>
          </div>
          <!-- <div class="flex items-center">
            <IconRefresh />
            <button id="menu-item-3" class="text-gray-700 text-left block px-4 py-2 text-sm w-full" role="menuitem" tabindex="-1">
              Switch Accounts
            </button>
          </div> -->
        </div>
        <hr>
        <div>
          <button
            id="menu-item-4"
            class="text-gray-700 block w-full text-left px-4 py-2 text-sm"
            role="menuitem"
            tabindex="-1"
            @click="logout"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DropdownComponent',
  data () {
    return {
      showDropdown: false
    }
  },
  methods: {
    toggleDropdown () {
      this.showDropdown = !this.showDropdown
    },
    logout () {
      this.$fire.auth.signOut()
        .then(() => {
          this.$router.push('/login')
          this.$store.dispatch('flashmessage/show', { text: 'Logout successful', duration: 5000, type: 'success' })
        })
        .catch(() => {
        })
    },
    redirectToUserProfile () {
      const currentUser = this.$fire.auth.currentUser

      if (currentUser) {
        this.$router.push(`/users/${currentUser.uid}`)
      }
    },
    redirectToUserSettings () {
      const currentUser = this.$fire.auth.currentUser

      if (currentUser) {
        this.$router.push(`/users/${currentUser.uid}/edit`)
      }
    }
  }
})
</script>
