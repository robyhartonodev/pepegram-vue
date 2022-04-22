<template>
  <div>
    <div class="flex flex-col space-y-4 items-center">
      <button
        v-for="item in tabItems"
        :key="item.id"
        class="p-4 w-full"
        :class="(selectedTab === item.id) ? 'border-l-2 border-l-black font-bold' : ''"
        @click="redirectToUserEditPath(item)"
      >
        {{ item.title }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface IEditTabItem {
  id: string;
  title: string;
  path: string;
}

export default Vue.extend({
  name: 'NavigationEditTab',
  data () {
    return {
      selectedTab: 'userProfile',
      tabItems: [
        { id: 'userProfile', title: 'Edit Profile', path: '' },
        { id: 'userChangePassword', title: 'Change Password', path: 'password' }
      ]
    }
  },
  methods: {
    redirectToUserEditPath (item: IEditTabItem) {
      const currentUser = this.$fire.auth.currentUser
      this.selectedTab = item.id

      if (currentUser) {
        this.$router.push(`/users/${currentUser.uid}/edit/${item.path}`)
      }
    }
  }
})
</script>
