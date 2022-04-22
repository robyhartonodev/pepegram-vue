<template>
  <div class="px-0 md:px-48 flex flex-col">
    <!-- header section -->
    <div class="flex space-x-20 items-center">
      <!-- profile picture -->
      <div class="w-40 h-40 flex justify-center items-center rounded-full bg-amber-700 text-white text-2xl">
        CC
      </div>

      <!-- user information sections -->
      <div class="flex flex-col space-y-10">
        <div class="flex space-x-3 items-center">
          <div class="text-4xl font-thin">
            username322
          </div>
          <div>
            <button class="font-bold text-slate-800 border-2 p-2 rounded-md text-sm">
              Edit Profile
            </button>
          </div>
          <div><button><IconCog class="w-8 h-8" /></button></div>
        </div>

        <div class="flex space-x-12">
          <div>
            <span class="font-bold">10</span> posts
          </div>
          <div>
            <span class="font-bold">322</span> followers
          </div>
          <div>
            <span class="font-bold">644</span> following
          </div>
        </div>

        <div class="flex flex-col text-sm text-slate-800">
          <div class="font-bold">
            Max Mustermann
          </div>
          <div>Biography 123</div>
        </div>
      </div>
    </div>

    <div class="mt-12">
      <hr>
    </div>

    <!-- tab section -->
    <div class="flex justify-center font-thin space-x-10 text-gray-500 mb-8">
      <button class="p-1">
        POSTS
      </button>
      <button class="p-1">
        SAVED
      </button>
      <button class="p-1">
        TAGGED
      </button>
    </div>

    <div>
      <UserPostList />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'UserDetailPage',
  middleware: ['auth']
})
</script>
