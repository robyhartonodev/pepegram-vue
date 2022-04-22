<template>
  <div class="p-4">
    user change password form
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'UserChangePasswordForm',
  props: {
    userId: {
      type: String,
      default: ''
    }
  },
  data () {
    return {

    }
  }
})
</script>
