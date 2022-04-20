<template>
  <div class="p-4 py-8 sticky top-0">
    <div class="flex items-center justify-between text-base">
      <div class="flex items-center space-x-4">
        <div class="w-16 h-16 rounded-full flex items-center justify-center bg-amber-700 text-white">
          PP
        </div>
        <div class="flex flex-col">
          <div class="font-bold">
            username123
          </div>
          <div class="text-gray-400">
            Max Mustermann
          </div>
        </div>
      </div>
      <div>
        <button class="text-blue-400 text-sm">
          Switch
        </button>
      </div>
    </div>
    <div class="flex justify-between items-center mt-8">
      <div class="text-gray-400 text-lg font-bold">
        Suggestions For You
      </div>
      <button class="text-slate-800">
        See All
      </button>
    </div>
    <div class="flex flex-col space-y-2 mt-4">
      <SuggestionItem
        v-for="index in 5"
        :key="'suggest-' + index"
      />
    </div>
    <div class="mt-8 text-gray-400 text-sm">
      <div class="flex">
        <a href="#">About</a>
        <div>-</div>
        <a href="#">Help</a>
        <div>-</div>
        <a href="#">Press</a>
        <div>-</div>
        <a href="#">API</a>
        <div>-</div>
        <a href="#">Jobs</a>
        <div>-</div>
        <a href="#">Privacy</a>
      </div>
      <div class="flex">
        <a href="#">Impressum/Terms/NetzDG/UrhDaG</a>
        <div>-</div>
        <a href="#">Locations</a>
      </div>
      <div class="flex">
        <a href="#">Top Accounts</a>
        <div>-</div>
        <a href="#">Hashtags</a>
        <div>-</div>
        <a href="#">Language</a>
      </div>
    </div>
    <div class="mt-8 text-gray-400">
      &copy; 2022 Pepegram 😎 Instagram clone demo showcase by Roby Hartono
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SideMenu',
  data () {
    return {}
  }
})
</script>
