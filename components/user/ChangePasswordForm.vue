<template>
  <div class="flex flex-col">
    <div class="grid grid-cols-3 gap-6 place-items-center">
      <div class="justify-self-end col-span-1 font-bold">
        Old Password
      </div>
      <div class="col-span-2">
        <input
          id="edit-user-password-old-password"
          v-model="oldPassword"
          name="edit-user-password-old-password"
          type="password"
          placeholder="Old Password"
          class="rounded-md border-gray-300 placeholder:text-gray-500 min-w-[24rem]"
        >
      </div>
      <div class="justify-self-end col-span-1 font-bold">
        New Password
      </div>
      <div class="col-span-2">
        <input
          id="edit-user-password-new-password"
          v-model="newPassword"
          name="edit-user-password-new-password"
          type="password"
          placeholder="New Password"
          class="rounded-md border-gray-300 placeholder:text-gray-500 min-w-[24rem]"
        >
      </div>
      <div class="justify-self-end col-span-1 font-bold">
        Confirm New Password
      </div>
      <div class="col-span-2">
        <input
          id="edit-user-password-new-password-confirmation"
          v-model="newPasswordConfirmation"
          name="edit-user-password-new-password-confirmation"
          type="password"
          placeholder="Confirm New Password"
          class="rounded-md border-gray-300 placeholder:text-gray-500 min-w-[24rem]"
        >
      </div>

      <div class="justify-self-end col-span-1" />

      <div class="col-span-2 justify-self-start">
        <button
          class="bg-blue-500 text-white p-2 rounded-md disabled:bg-blue-300"
          :disabled="!(newPassword.length > 0 && newPasswordConfirmation.length > 0)"
          @click="onSubmit"
        >
          Change Password
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { AuthError, EmailAuthProvider } from '@firebase/auth'
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
      oldPassword: '',
      newPassword: '',
      newPasswordConfirmation: '',
      errors: []
    }
  },
  mounted () {
  },
  methods: {
    onSubmit () {
      const currentUser = this.$fire.auth.currentUser

      const confirmationPasswordCheck = (
        (this.newPassword === this.newPasswordConfirmation) &&
        (this.newPassword.length > 0) &&
        (this.newPasswordConfirmation.length > 0)
      )

      if (confirmationPasswordCheck) {
        if (currentUser) {
          // Check old password validity
          if (currentUser.email) {
            const credentials = EmailAuthProvider.credential(currentUser.email, this.oldPassword)

            currentUser.reauthenticateWithCredential(credentials)
              .then(() => {
                // Update user password
                currentUser.updatePassword(this.newPassword)
                  .then(() => {
                    this.$fire.auth.signOut()
                    this.$router.push('/login')
                    this.$store.dispatch('flashmessage/show', {
                      text: 'Password changed successfuly!',
                      duration: 5000,
                      type: 'success'
                    })
                  })
                  .catch((error: AuthError) => {
                    if (error.code === 'auth/weak-password') {
                      this.$store.dispatch('flashmessage/show', {
                        text: 'Weak password! Please provide a password with at least 6 characters!',
                        duration: 5000,
                        type: 'danger'
                      })
                    }
                  })
              })
              .catch(() => {
                this.$store.dispatch('flashmessage/show', {
                  text: 'Wrong old password. Please provide a valid password!',
                  duration: 5000,
                  type: 'danger'
                })
              })
          }
        }
      } else {
        this.$store.dispatch('flashmessage/show', {
          text: 'Wrong confirmation password. Please check your new password inputs!',
          duration: 5000,
          type: 'danger'
        })
      }
    }
  }
})
</script>
