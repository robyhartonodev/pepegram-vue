<template>
  <div class="p-4">
    <UserChangePasswordForm />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'UserEditPasswordPage',
  layout: 'edituser',
  middleware: ['auth'],
  data () {
    return {}
  }
})
</script>
