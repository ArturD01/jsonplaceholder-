import { defineStore } from 'pinia';
import axios from 'axios';

export const usePhotoStore = defineStore('photoStore', {
  state: () => ({
    photos: [],
    loading: false,
    error: null,
    limit: 30,
    offset: 0,
  }),
  actions: {
    async fetchPhotos(albumIds = []) {
      this.loading = true;
      this.error = null;
      try {

        let url = 'http://jsonplaceholder.typicode.com/photos';
        if (albumIds.length) {
          const params = albumIds.map(id => `albumId=${id}`).join('&');
          url += `?${params}`;
        }
        const response = await axios.get(url);
        this.photos = response.data;
        this.offset = 0;

      } catch (err) {
        this.error = 'Ошибка при загрузке фотографий';
      } finally {
        this.loading = false;
      }
    },
    loadMore() {
      if (this.offset + this.limit < this.photos.length) {
        this.offset += this.limit;
      }
    },
  },
  getters: {
    displayedPhotos: (state) => state.photos.slice(0, state.offset + state.limit),
  },
});
