<template>
  <div class="flex flex-col justify-center p-16 md:p-32">
    <div class="instagram-font text-5xl text-slate-800 mb-4 flex justify-center">
      Pepegram
    </div>

    <div class="flex flex-col border-2 shadow-sm p-8 space-y-6">
      <div class="text-gray-400 text-3xl font-bold">
        Reset Password
      </div>

      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="px-4 py-3 rounded-md border-gray-400"
        :disabled="isBusy"
        @keyup.enter="sendResetEmailLink"
      >

      <button
        class="p-3 w-full bg-green-600 text-2xl text-white rounded-lg"
        :disabled="isBusy"
        @click="sendResetEmailLink"
      >
        Send reset password email
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ResetPasswordPage',
  layout: 'guest',
  data () {
    return {
      email: '',
      isBusy: false
    }
  },
  methods: {
    sendResetEmailLink () {
      this.isBusy = true

      this.$fire.auth.sendPasswordResetEmail(this.email)
        .then(() => {
          this.$store.dispatch('flashmessage/show', {
            text: 'Password reset email successfully sent! Please check your email!',
            duration: 5000,
            type: 'success'
          })

          this.$router.push('/login')
        })
        .catch((error) => {
          if (error.code === 'auth/invalid-email') {
            this.$store.dispatch('flashmessage/show', {
              text: 'Wrong Email! Please provide a valid email (registered)!',
              duration: 5000,
              type: 'danger'
            })
          } else {
            this.$store.dispatch('flashmessage/show', {
              text: 'Something went wrong! Please try again later',
              duration: 5000,
              type: 'danger'
            })
          }
        })
        .finally(() => {
          this.isBusy = false
        })
    }
  }
})
</script>
