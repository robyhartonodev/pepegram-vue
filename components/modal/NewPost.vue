<template>
  <div
    class="fixed inset-0 h-screen w-screen bg-gray-800 bg-opacity-40 z-50 px-8 py-4"
  >
    <div class="flex justify-end">
      <button class="text-white w-8 h-8" @click="closeModal">
        <IconCloseCircle />
      </button>
    </div>

    <div class="flex justify-center items-center h-full w-full">
      <!-- file picker mode -->
      <div
        v-show="(currentStep === 'filePick')"
        class="flex flex-col items-center bg-white rounded-md"
      >
        <div class="p-2 text-gray-400 font-bold">
          Create new post
        </div>

        <div class="h-[1px] w-full bg-gray-400" />

        <div class="flex flex-col space-y-4 items-center p-16">
          <div>
            <IconPhotograph class="h-16 w-16 text-slate-800" />
          </div>
          <input
            id="modal-new-post-input-file"
            name="modal-new-post-input-file"
            type="file"
            class="bg-blue-600 rounded-lg text-white p-2 hidden"
            accept="image/png, image/jpeg"
            multiple
            @change="handleFileChange($event)"
          >
          <label for="modal-new-post-input-file" class="bg-blue-600 rounded-lg text-white p-2">
            Pick file from the device
          </label>
        </div>
      </div>

      <!-- post information form mode -->
      <div
        v-show="(currentStep === 'postInformation')"
        class="flex flex-col bg-white rounded-md"
        style="height: 85%; width:85%;"
      >
        <div class="p-2 text-gray-400 font-bold flex justify-between w-full">
          <div>
            <button
              class="text-slate-800"
              @click="onBackPostForm"
            >
              <IconArrowLeft class="w-8 h-8" />
            </button>
          </div>
          <div>Post Form</div>
          <div>
            <button
              class="text-teal-500"
              @click="onShareSubmit"
            >
              Share
            </button>
          </div>
        </div>

        <div class="h-[1px] w-full bg-gray-400" />

        <div class="grid grid-cols-4 h-full w-full">
          <div class="col-span-4 md:col-span-1">
            <img :src="previewImageUrl" class="object-cover w-full h-full">
          </div>
          <div class="col-span-4 md:col-span-3 flex flex-col">
            <textarea
              id="new-post-caption"
              v-model="postCaption"
              name="new-post-caption"
              placeholder="Add a caption..."
              class="rounded-md border-gray-300 placeholder:text-gray-500 h-full w-full"
            />
            <div class="flex justify-between p-2">
              <button>
                <IconSmile class="w-8 h-8 text-gray-400" />
              </button>

              <div class="text-gray-400">
                {{ postCaption.length }} / 500
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ModalComponent',
  data () {
    return {
      currentStep: 'filePick',
      steps: ['filePick', 'postInformation'],
      selectedFiles: null as null|File,
      postCaption: '',
      previewImageUrl: null as null|string
    }
  },
  methods: {
    closeModal () {
      this.$emit('close')

      this.selectedFiles = null
      this.previewImageUrl = null
      this.currentStep = 'filePick'
      this.postCaption = ''
    },
    setStep (step: string) {
      this.currentStep = step
    },
    onBackPostForm () {
      this.selectedFiles = null
      this.previewImageUrl = null
      this.currentStep = 'filePick'
      this.postCaption = ''
    },
    onShareSubmit () {
      const currentUser = this.$fire.auth.currentUser

      if (currentUser && this.selectedFiles) {
        this.$fire.firestore.collection('posts')
          .add({
            caption: this.postCaption,
            posterId: currentUser.uid
          })
          .then((response) => {
            this.$fire.storage.ref(`posts/${currentUser.uid}/${response.id}/1.jpg`)
              .put((this.selectedFiles as Blob))
              .then((response) => {
                this.$store.dispatch('flashmessage/show', {
                  text: 'Post created!',
                  duration: 5000,
                  type: 'success'
                })

                console.log(response.metadata.fullPath)

                this.closeModal()
                this.$router.push('/')
              })
              .catch(() => {
                this.$store.dispatch('flashmessage/show', {
                  text: 'Something went wrong with post media storage!',
                  duration: 5000,
                  type: 'danger'
                })
              })
          })
          .catch(() => {
            this.$store.dispatch('flashmessage/show', {
              text: 'Something went wrong',
              duration: 5000,
              type: 'danger'
            })
          })
      }
    },
    handleFileChange (evt: Event) {
      // evt.target.files contains Array-like FileList object
      if (evt) {
        const target = evt.target as HTMLInputElement
        const files = target.files

        if (files) {
          this.selectedFiles = files[0]
          this.previewImageUrl = URL.createObjectURL(this.selectedFiles)
          this.setStep('postInformation')

          console.log(this.selectedFiles)
        }
      }
    }
  }
})
</script>
