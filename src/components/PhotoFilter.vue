<template>
    <div class="flex space-x-2 mb-4">
      <input
        v-model="albumIdsInput"
        @keyup.enter="applyFilter"
        type="text"
        placeholder="Введите ID альбомов (например, '1 2 3')"
        class="border p-2 flex-grow"
      />
      <button @click="applyFilter" class="bg-blue-500 text-white p-2">
        Поиск
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { usePhotoStore } from '../stores/photoStore.js'
  
  const albumIdsInput = ref('')
  const photoStore = usePhotoStore()
  
  const applyFilter = () => {
    const albumIds = albumIdsInput.value
      .split(' ')
      .map(id => parseInt(id))
      .filter(id => !isNaN(id))
    photoStore.fetchPhotos(albumIds)
  }
  </script>
  