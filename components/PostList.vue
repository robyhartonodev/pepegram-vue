<template>
  <div class="flex justify-between items-center bg-gray-200 rounded-lg p-2">
    <div
      class="flex flex-col"
    >
      <div
        v-for="index in 30"
        :key="'post' + index"
        class="p-5"
      >
        Post {{ index }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SearchBar',
  data () {
    return {
      text: '',
      isInputFocus: false
    }
  }
})
</script>
