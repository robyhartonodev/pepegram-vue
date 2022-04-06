<template>
  <div class="flex flex-col justify-center p-32">
    <div class="instagram-font text-5xl text-slate-800 mb-4 flex justify-center">
      Pepegram
    </div>

    <div class="flex flex-col border-2 shadow-sm p-8 space-y-6">
      <div class="text-gray-400 text-3xl font-bold">
        Login
      </div>

      <input
        v-model="username"
        type="text"
        placeholder="Username"
        class="px-4 py-3 rounded-md border-gray-400"
      >
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="px-4 py-3 rounded-md border-gray-400"
      >

      <div class="text-gray-400">
        Forgot your password? Click <a href="#" class="text-teal-500">here</a>
      </div>

      <button class="p-3 w-full bg-green-600 text-2xl text-white rounded-lg">
        SIGN IN
      </button>

      <div class="text-gray-400">
        Don't have account? <a href="/register" class="text-teal-500">Register now</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LoginPage',
  layout: 'guest',
  data () {
    return {
      username: '',
      password: ''
    }
  }
})
</script>
