import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from 'axios';

// Фото
export const usePhotoStore = defineStore('photoStore', () => {
  const photos = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const limit = ref(30);
  const offset = ref(0);

  const fetchPhotos = async (albumIds = []) => {
    loading.value = true;
    error.value = null;
    try {
      let url = 'https://jsonplaceholder.typicode.com/photos';
      if (albumIds.length) {
        const params = albumIds.map(id => `albumId=${id}`).join('&');
        url += `?${params}`;
      }
      const response = await axios.get(url);
      photos.value = response.data;
      offset.value = 0;
    } catch (err) {
      error.value = 'Ошибка при загрузке фотографий';
    } finally {
      loading.value = false;
    }
  };
  // Кнопка прогрузки Загрузить еще
  const loadMore = () => {
    if (offset.value + limit.value < photos.value.length) {
      offset.value += limit.value;
    }
  };
  // Подгружаем photos в таблице PhotoTable
  const displayedPhotos = computed(() => photos.value.slice(0, offset.value + limit.value));

  return { photos, loading, error, fetchPhotos, loadMore, displayedPhotos };
});

//Tемы
export const useThemeStore = defineStore('theme', () => {
  const theme = ref(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', theme.value === 'dark');
    localStorage.setItem('theme', theme.value);
  };



  return { theme, toggleTheme };
});