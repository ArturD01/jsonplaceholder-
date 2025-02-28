<script setup>
import { onMounted } from 'vue';
import { usePhotoStore } from '@/stores/photoStore';

const store = usePhotoStore();
// Подгруза фото при входе
onMounted(() => {
  store.fetchPhotos();
});
</script>

<template>
  <div class="max-h-[600px] overflow-auto border" @scroll="store.handleScroll">
    <table v-if="!store.loading" class="w-full border-collapse">
      <thead class="sticky top-0 bg-white shadow-md dark:bg-gray-900 dark:text-white">
        <tr>
          <th class="border p-2">ID</th>
          <th class="border p-2">Альбом</th>
          <th class="border p-2">Заголовок</th>
          <th class="border p-2">Ссылка</th>
        </tr>
      </thead>
      <tbody class="dark:bg-gray-900 dark:text-white">
        <tr v-for="photo in store.displayedPhotos" :key="photo.id">
          <td class="border p-2">{{ photo.id }}</td>
          <td class="border p-2">{{ photo.albumId }}</td>
          <td class="border p-2" :title="photo.title">{{ photo.title }}</td>
          <td class="border p-2">
            <a :href="photo.url" target="_blank" class="text-blue-500 underline">Открыть</a>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-else class="text-center p-4">
      <p class="animate-pulse text-gray-500">Загрузка...</p>
    </div>

    <!-- <button @click="store.loadMore" class="mt-4 p-2 bg-blue-500 text-white rounded">Загрузить еще</button> -->
  </div>
</template>