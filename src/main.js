import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import router from '@/router/router.js'

createApp(App)
    .use(createPinia())
    .use(router)
    .mount('#app')
