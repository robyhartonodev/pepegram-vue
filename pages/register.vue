<template>
  <div class="flex flex-col justify-center p-16 md:p-32">
    <div class="instagram-font text-5xl text-slate-800 mb-4 flex justify-center">
      Pepegram
    </div>

    <div class="flex flex-col border-2 shadow-sm p-8 space-y-6">
      <div class="text-gray-400 text-3xl font-bold">
        Create account
      </div>

      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="px-4 py-3 rounded-md border-gray-400"
        :disabled="isBusy"
        @keyup.enter="$event.target.nextElementSibling.focus()"
      >
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="px-4 py-3 rounded-md border-gray-400"
        :disabled="isBusy"
        @keyup.enter="register"
      >

      <button
        class="p-3 w-full bg-green-600 text-2xl text-white rounded-lg"
        :disabled="isBusy"
        @click="register"
      >
        Register
      </button>

      <div class="text-gray-400">
        Already have an account? <a href="/login" class="text-teal-500">Login here</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'RegisterPage',
  layout: 'guest',
  data () {
    return {
      email: '',
      password: '',
      passwordConfirmation: '',
      isBusy: false
    }
  },
  methods: {
    register () {
      this.isBusy = true

      this.$fire.auth.createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push('/login')
          this.$store.dispatch('flashmessage/show', { text: 'Registration successful', duration: 5000, type: 'success' })
        })
        .catch((err) => {
          this.$store.dispatch('flashmessage/show', { text: 'Registration failed! Please check your data!', duration: 2000, type: 'danger' })
          return Promise.reject(err)
        })
        .finally(() => {
          this.isBusy = false
        })
    }
  }
})
</script>
