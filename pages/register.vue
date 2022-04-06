<template>
  <div class="flex flex-col justify-center p-32">
    <div class="instagram-font text-5xl text-slate-800 mb-4 flex justify-center">
      Pepegram
    </div>

    <div class="flex flex-col border-2 shadow-sm p-8 space-y-6">
      <div class="text-gray-400 text-3xl font-bold">
        Create account
      </div>

      <input type="text" placeholder="Username" class="px-4 py-3 rounded-md border-gray-400">
      <input type="password" placeholder="Password" class="px-4 py-3 rounded-md border-gray-400">
      <input type="password" placeholder="Password confirmation" class="px-4 py-3 rounded-md border-gray-400">

      <button class="p-3 w-full bg-green-600 text-2xl text-white rounded-lg">
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
  layout: 'guest'
})
</script>
