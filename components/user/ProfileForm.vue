<template>
  <div class="flex flex-col space-y-5">
    <div class="grid grid-cols-3 gap-6 grid-baseline">
      <div class="w-8 h-8 justify-self-end col-span-1 font-bold flex justify-center items-center rounded-full bg-slate-800 text-white">
        TT
      </div>
      <div class="col-span-2">
        <div>{{ username }}</div>
        <div>
          <button class="text-blue-500">
            Change Profile Photo
          </button>
        </div>
      </div>

      <div class="justify-self-end col-span-1 font-bold">
        Name
      </div>
      <div class="col-span-2">
        <input
          id="edit-user-name"
          v-model="name"
          name="edit-user-name"
          type="text"
          placeholder="Name"
          class="rounded-md border-gray-300 placeholder:text-gray-500 w-full"
        >
        <div class="text-xs text-gray-500 w-full mt-4 text-justify">
          Help people discover your account by using the name you're known by:
          either your full name, nickname, or business name.
        </div>
      </div>

      <div class="justify-self-end col-span-1 font-bold">
        Username
      </div>
      <div class="col-span-2">
        <input
          id="edit-user-username"
          v-model="username"
          name="edit-user-username"
          type="text"
          placeholder="Username"
          class="rounded-md border-gray-300 placeholder:text-gray-500 w-full"
        >
        <div class="text-xs text-gray-500 w-full mt-4 text-justify">
          Help people discover your account by using the name you're known by:
          either your full name, nickname, or business name.
        </div>
      </div>

      <div class="justify-self-end col-span-1 font-bold">
        Website
      </div>
      <div class="col-span-2">
        <input
          id="edit-user-website"
          v-model="website"
          name="edit-user-website"
          type="url"
          placeholder="Website"
          class="rounded-md border-gray-300 placeholder:text-gray-500 w-full"
        >
      </div>

      <div class="justify-self-end col-span-1 font-bold">
        Bio
      </div>
      <div class="col-span-2">
        <textarea
          id="edit-user-biography"
          v-model="biography"
          name="edit-user-biography"
          placeholder="Biography"
          value="test biography"
          class="rounded-md border-gray-300 placeholder:text-gray-500 w-full"
        />
        <div class="text-sm text-gray-500 w-full mt-4 text-justify font-bold">
          Personal Information
        </div>
        <div class="text-xs text-gray-500 w-full mt-4 text-justify">
          Provide your personal information, even if the account is used for a business, a pet or something else.
          This won't be a part of your public profile.
        </div>
      </div>

      <!-- <div class="justify-self-end col-span-1 font-bold">
        Email
      </div>
      <div class="col-span-2">
        <input
          id="edit-user-email"
          v-model="email"
          name="edit-user-email"
          type="email"
          placeholder="Email"
          value="test email"
          class="rounded-md border-gray-300 placeholder:text-gray-500 w-full"
        >
      </div> -->

      <div class="justify-self-end col-span-1 font-bold">
        Phone Number
      </div>
      <div class="col-span-2">
        <input
          id="edit-user-phone-number"
          v-model="phoneNumber"
          name="edit-user-phone-number"
          type="tel"
          placeholder="Phone Number"
          class="rounded-md border-gray-300 placeholder:text-gray-500 w-full"
          pattern="[+]{1}[0-9]{11,14}"
          required
        >
      </div>

      <div class="justify-self-end col-span-1 font-bold">
        Gender
      </div>
      <div class="col-span-2">
        <select
          id="edit-user-gender"
          v-model="gender"
          name="edit-user-gender"
          placeholder="Email"
          class="rounded-md border-gray-300 placeholder:text-gray-500 w-full"
        >
          <option value="male">
            Male
          </option>
          <option value="female">
            Female
          </option>
        </select>
      </div>

      <div class="justify-self-end col-span-1">
        <button class="bg-blue-500 text-white p-2 rounded-md" @click="onSubmit">
          Submit
        </button>
      </div>
    </div>
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
      isBusy: false,
      name: '',
      username: '',
      website: '',
      biography: '',
      email: '',
      phoneNumber: '',
      gender: ''
    }
  },
  mounted () {
    const currentUser = this.$fire.auth.currentUser

    if (currentUser) {
      this.$fire.firestore.collection('users').doc(currentUser.uid).get()
        .then((response) => {
          const responseUser = response.data()

          console.log(responseUser)

          if (responseUser) {
            this.name = responseUser.name
            this.username = responseUser.username
            this.website = responseUser.website
            this.biography = responseUser.biography
            this.email = responseUser.email
            this.phoneNumber = responseUser.phoneNumber
            this.gender = responseUser.gender
          }
        })
        .catch(() => {
          this.$store.dispatch('flashmessage/show', {
            text: 'Something went wrong!',
            duration: 5000,
            type: 'danger'
          })
        })
    }
  },
  methods: {
    onSubmit () {
      const currentUser = this.$fire.auth.currentUser

      if (currentUser) {
        this.$fire.firestore.collection('users')
          .doc(currentUser.uid)
          .update({
            name: this.name,
            username: this.username,
            website: this.website,
            biography: this.biography,
            phoneNumber: this.phoneNumber,
            gender: this.gender
          })
          .then(() => {
            this.$store.dispatch('flashmessage/show', {
              text: 'User updated successfuly',
              duration: 5000,
              type: 'success'
            })

            this.$router.go(0)
          })
          .catch(() => {
            this.$store.dispatch('flashmessage/show', {
              text: 'Something went wrong!',
              duration: 5000,
              type: 'danger'
            })
          })
      }
    }
  }
})
</script>

<style scoped>
.grid-baseline {
  place-items: baseline normal;
}
</style>
