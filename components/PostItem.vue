<template>
  <div class="flex flex-col border-2">
    <div class="flex justify-between p-4 border-b-2">
      <div class="flex space-x-4 items-center">
        <div class="h-8 w-8 rounded-full flex justify-center p-1 bg-indigo-700 text-white">
          PP
        </div>
        <div>username123</div>
      </div>
      <button>
        <IconDotHorizontal />
      </button>
    </div>

    <div class="h-full w-full flex flex-col items-center">
      <img src="~/assets/images/people/pp-1.jpg" class="object-contain h-[48rem] w-full">
      <div>
        <IconDotHorizontal />
      </div>
    </div>

    <div class="flex justify-between p-4">
      <div class="flex space-x-4">
        <button>
          <IconHeart class="h-8 w-8" />
        </button>
        <button>
          <IconComment class="h-8 w-8" />
        </button>
        <button>
          <IconPaperPlane class="h-8 w-8" />
        </button>
      </div>
      <div>
        <button>
          <IconBookmark class="h-8 w-8" />
        </button>
      </div>
    </div>

    <div class="flex flex-col p-4">
      <div class="text-slate-800 font-bold">
        322 likes
      </div>

      <!--Poster comments-->
      <div class="flex space-x-2">
        <div class="text-slate-800 font-bold">
          username1
        </div>
        <div>user's comments</div>
      </div>

      <div>
        <button class="text-gray-400">
          View all n comments
        </button>
      </div>

      <!--Latest comment-->
      <div class="flex space-x-2">
        <div class="text-slate-800 font-bold">
          username2
        </div>
        <div>user's comments</div>
      </div>

      <div class="mt-4 text-gray-400">
        322 DAY AGO
      </div>
    </div>

    <div class="w-full flex justify-between items-center rounded-lg p-4 border-t-2">
      <IconSmile
        class="h-8 w-8 text-gray-400 cursor-pointer"
      />
      <input
        v-model="comment"
        type="text"
        placeholder="Add a comment..."
        class=" w-full border-transparent focus:border-transparent focus:ring-0"
      >
      <button class="text-teal-200 font-bold">
        Post
      </button>
    </div>

    <div />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PostItem',
  data () {
    return {
      comment: ''
    }
  }
})
</script>
