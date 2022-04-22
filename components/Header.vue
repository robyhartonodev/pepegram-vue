<template>
  <div class="flex justify-between px-4 lg:px-48 py-4 items-center border-b-2 mb-4">
    <button class="instagram-font text-slate-900 text-3xl" @click="redirectToPath('/')">
      Pepegram
    </button>
    <SearchBar class="hidden md:flex" />
    <div class="flex space-x-5">
      <button @click="redirectToPath('/')">
        <IconHome class="h-8 w-8 text-slate-800" />
      </button>
      <button>
        <IconPaperPlane class="h-8 w-8 text-slate-800" />
      </button>
      <button>
        <IconPlusCircle class="h-8 w-8 text-slate-800" />
      </button>
      <button>
        <IconGlobe class="h-8 w-8 text-slate-800" />
      </button>
      <button>
        <IconHeart class="h-8 w-8 text-slate-800" />
      </button>
      <ProfileDropdown />
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
  },
  methods: {
    redirectToPath (path: string) {
      this.$router.push(path)
    }
  }
})
</script>
