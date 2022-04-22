<template>
  <div class="p-4">
    <UserChangePasswordForm :user-id="userId" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'UserEditPasswordPage',
  layout: 'edituser',
  middleware: ['auth'],
  data () {
    return {
      userId: ''
    }
  },
  mounted () {
    const currentUser = this.$fire.auth.currentUser

    if (currentUser) {
      this.userId = currentUser.uid
    }
  }
})
</script>
