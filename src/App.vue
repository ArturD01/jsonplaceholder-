<template>
  <div class="min-h-screen bg-gray-50 text-gray-900">
    <!-- Навигация -->
    <nav class="bg-white shadow-md fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center">
      <div class="text-xl font-bold">Мое Приложение</div>
      <div class="space-x-6">
        <router-link to="/" class="hover:text-blue-500 transition">Главная</router-link>
        <router-link to="/aboute" class="hover:text-blue-500 transition">Инфа</router-link>
      </div>
    </nav>

    <!-- Контент -->
    <div class="pt-20 px-10 max-w-5xl mx-auto">
      <router-view />
    </div>
  </div>
</template>

<style>

</style>
