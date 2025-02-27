// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import { createPinia } from 'pinia'
import router from './router/route';

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
