<script setup>
import PhotoFilter from "../components/PhotoFilter.vue";
import PhotoTable from "../components/PhotoTable.vue";
import { useThemeStore } from '../stores/photoStore.js'
const themeStore = useThemeStore();
 
</script>


<template>
    <!-- Навигация -->
<nav class="dark:bg-gray-900 dark:text-white fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center">
    <div class="space-x-6">
        <router-link to="/" class="hover:text-blue-500 transition">Главная</router-link>
        <router-link to="/aboute" class="hover:text-blue-500 transition">Инфа</router-link>
    </div>
    <button 
      @click="themeStore.toggleTheme" 
      class="mb-2 p-3 border rounded bg-gray-100 dark:bg-gray-900 dark:text-white">Переключить тему
    </button>
</nav>
    <PhotoFilter />
    <PhotoTable />
</template>