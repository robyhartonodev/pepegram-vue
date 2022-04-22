<template>
  <div class="p-4">
    <UserProfileForm />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'UserEditDetailPage',
  layout: 'edituser',
  middleware: ['auth'],
  data () {
    return {}
  }
})
</script>
