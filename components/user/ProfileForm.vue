<template>
  <div class="flex flex-col space-y-5">
    <div class="grid grid-cols-3 gap-6 grid-baseline">
      <div class="w-8 h-8 justify-self-end col-span-1 font-bold flex justify-center items-center rounded-full bg-slate-800 text-white">
        TT
      </div>
      <div class="col-span-2">
        <div>Username322</div>
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
          name="edit-user-name"
          type="text"
          placeholder="Name"
          value="test name"
          class="rounded-md border-gray-300 placeholder:text-gray-500 min-w-[24rem]"
        >
        <div class="text-xs text-gray-500 w-[24rem] mt-4">
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
          name="edit-user-username"
          type="text"
          placeholder="Username"
          value="test username"
          class="rounded-md border-gray-300 placeholder:text-gray-500 min-w-[24rem]"
        >
        <div class="text-xs text-gray-500 w-[24rem] mt-4">
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
          name="edit-user-website"
          type="text"
          placeholder="Website"
          value="test website"
          class="rounded-md border-gray-300 placeholder:text-gray-500 min-w-[24rem]"
        >
      </div>

      <div class="justify-self-end col-span-1 font-bold">
        Bio
      </div>
      <div class="col-span-2">
        <textarea
          id="edit-user-biography"
          name="edit-user-biography"
          placeholder="Biography"
          value="test biography"
          class="rounded-md border-gray-300 placeholder:text-gray-500 min-w-[24rem]"
        />
        <div class="text-sm text-gray-500 w-[24rem] mt-4 font-bold">
          Personal Information
        </div>
        <div class="text-xs text-gray-500 w-[24rem] mt-4">
          Provide your personal information, even if the account is used for a business, a pet or something else.
          This won't be a part of your public profile.
        </div>
      </div>

      <div class="justify-self-end col-span-1 font-bold">
        Email
      </div>
      <div class="col-span-2">
        <input
          id="edit-user-email"
          name="edit-user-email"
          type="email"
          placeholder="Email"
          value="test email"
          class="rounded-md border-gray-300 placeholder:text-gray-500 min-w-[24rem]"
        >
      </div>

      <div class="justify-self-end col-span-1 font-bold">
        Phone Number
      </div>
      <div class="col-span-2">
        <input
          id="edit-user-phone-number"
          name="edit-user-phone-number"
          type="text"
          placeholder="Phone Number"
          value="test phone number"
          class="rounded-md border-gray-300 placeholder:text-gray-500 min-w-[24rem]"
        >
      </div>

      <div class="justify-self-end col-span-1 font-bold">
        Gender
      </div>
      <div class="col-span-2">
        <select
          id="edit-user-gender"
          name="edit-user-gender"
          placeholder="Email"
          value="male"
          class="rounded-md border-gray-300 placeholder:text-gray-500 min-w-[24rem]"
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
        <button class="bg-blue-500 text-white p-2 rounded-md">
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

    }
  }
})
</script>

<style scoped>
.grid-baseline {
  place-items: baseline normal;
}
</style>
</template></template></template></template></template></template></template></template></template></template></template>
