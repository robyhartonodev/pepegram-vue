<template>
  <div class="w-96 flex justify-between items-center bg-gray-200 rounded-lg p-2">
    <IconSearch
      v-show="!isInputFocus"
      class="h-6 w-6 text-gray-400 cursor-pointer"
    />
    <input
      v-model="text"
      type="text"
      placeholder="Search"
      class="bg-gray-200 w-full border-transparent focus:border-transparent focus:ring-0 text-gray-400"
      @focus="isInputFocus = true"
      @blur="isInputFocus = false"
    >
    <button class="p-3" @click="clearSearchInput">
      <IconCloseCircle
        v-show="isInputFocus"
        class="h-6 w-6 text-gray-400 cursor-pointer"
      />
    </button>
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
  },
  methods: {
    clearSearchInput () {
      this.text = ''
    }
  }
})
</script>
