<template>
  <div class="flex flex-col justify-center p-16 md:p-32">
    <div class="instagram-font text-5xl text-slate-800 mb-4 flex justify-center">
      Pepegram
    </div>

    <div class="flex flex-col border-2 shadow-sm p-8 space-y-6">
      <div class="text-gray-400 text-3xl font-bold">
        Login
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
        @keyup.enter="login"
      >

      <div class="text-gray-400">
        Forgot your password? Click <a href="/reset-password" class="text-teal-500">here</a>
      </div>

      <button
        class="p-3 w-full bg-green-600 text-2xl text-white rounded-lg"
        :disabled="isBusy"
        @click="login"
      >
        SIGN IN
      </button>

      <div class="text-gray-400">
        Don't have account? <a href="/register" class="text-teal-500">Register now</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { AuthError } from '@firebase/auth'
import { DocumentData } from '@firebase/firestore'
import Vue from 'vue'

export default Vue.extend({
  name: 'LoginPage',
  layout: 'guest',
  middleware: ['guest'],
  data () {
    return {
      email: '',
      password: '',
      isBusy: false
    }
  },
  head () {
    return {
      title: 'Pepegram - Login'
    }
  },
  mounted () {
  },
  methods: {
    login () {
      this.isBusy = true

      this.$fire.auth.signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          const currentUser = this.$fire.auth.currentUser

          // Set current user object into the store using action
          if (currentUser) {
            this.$fire.firestore.collection('users')
              .doc(currentUser.uid)
              .get()
              .then((doc: DocumentData) => {
                this.$store.dispatch('currentUser/setCurrentUser', { currentUser: doc.data() })
                this.$router.push('/')
                this.$store.dispatch('flashmessage/show', { text: 'Login Successful', duration: 5000, type: 'success' })
                console.log('currentUser set successfully!')
              })
          }
        })
        .catch((err: AuthError) => {
          this.$store.dispatch('flashmessage/show', { text: 'Login Failed. Please check your credentials!', duration: 2000, type: 'danger' })
          return Promise.reject(err)
        })
        .finally(() => {
          this.isBusy = false
        })
    }
  }
})
</script>
