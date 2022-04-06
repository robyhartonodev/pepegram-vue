<template>
  <div class="flex justify-between px-4 lg:px-64 py-4 items-center border-b-2 mb-4">
    <div class="instagram-font text-slate-900 text-3xl">
      Pepegram
    </div>
    <SearchBar class="hidden md:flex" />
    <div class="flex space-x-6">
      <button>
        <IconHome class="h-10 w-10 text-slate-800" />
      </button>
      <button>
        <IconPaperPlane class="h-10 w-10 text-slate-800" />
      </button>
      <button>
        <IconPlusCircle class="h-10 w-10 text-slate-800" />
      </button>
      <button>
        <IconGlobe class="h-10 w-10 text-slate-800" />
      </button>
      <button>
        <IconHeart class="h-10 w-10 text-slate-800" />
      </button>
      <div class="rounded-full bg-blue-700 text-white w-10 h-10 flex justify-center items-center">
        <div>PP</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HeaderComponent',
  data () {
    return {

    }
  }
})
</script>
