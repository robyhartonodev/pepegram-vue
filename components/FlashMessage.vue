<template>
  <div>
    <transition
      enter-active-class="animate__animated animate__slideInUp"
      leave-active-class="animate__animated animate__slideOutDown"
      mode="out-in"
    >
      <div
        v-show="show"
        id="pepegram-flash-message"
        class="w-96 flex justify-between items-center text-lg rounded-lg p-5 fixed bottom-4 right-4 text-white z-50"
        :class="type"
      >
        {{ text }}
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FlashMessage',
  data () {
    return {

    }
  },
  computed: {
    text () {
      return this.$store.state.flashmessage.text
    },
    show () {
      return this.$store.state.flashmessage.show
    },
    type () {
      const help = this.$store.state.flashmessage.type

      if (help === 'default') {
        return 'bg-indigo-500'
      }

      if (help === 'success') {
        return 'bg-green-500'
      }

      if (help === 'danger') {
        return 'bg-red-500'
      }

      if (help === 'warning') {
        return 'bg-yellow-500'
      }

      return 'bg-indigo-500'
    }
  },
  mounted () {
  }
})
</script>
