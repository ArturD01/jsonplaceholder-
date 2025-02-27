<template>
  <div class="overflow-auto max-h-[600px] border rounded shadow-md" @scroll="onScroll">
    <table class="w-full border-collapse">
      <thead>
          <tr class="bg-gray-200">
            <th class="p-2 border">ID</th>
            <th class="p-2 border">Альбом</th>
            <th class="p-2 border">Название</th>
            <th class="p-2 border">Ссылка</th>
            <th class="p-2 border">Мииатюра</th>
          </tr>
        </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="photo in displayedPhotos" :key="photo.id" class="border-b">
          <td class="p-2 border">{{ photo.id }}</td>
          <td class="p-2 border">{{ photo.albumId }}</td>
          <td
            class="p-2 border truncate" :title="photo.title">{{ photo.title }}</td>
          <td class="p-2 border">
            <a :href="photo.url" target="_blank" class="underline">Ссылка</a>
          </td>
          <td class="p-2 border">
            <img :src='photo.thumbnailUrl' alt="Thumbnail" class="w-16 h-16" />
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="loading" class="p-4 text-center text-gray-500">Загрузка...</div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { usePhotoStore } from '@/stores/photoStore';

const photoStore = usePhotoStore();


const onScroll = (event) => {
  const { scrollTop, clientHeight, scrollHeight } = event.target;
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    photoStore.loadMore();
  }
};

const displayedPhotos = computed(() => photoStore.displayedPhotos);
const loading = computed(() => photoStore.loading);

onMounted(() => {
  photoStore.fetchPhotos();
});
</script>

<style scoped>
td.truncate {
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
