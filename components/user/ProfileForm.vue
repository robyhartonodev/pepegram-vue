<template>
  <div class="p-4">
    user change profile information form
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'UserProfileForm',
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
