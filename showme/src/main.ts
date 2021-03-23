import { createApp } from 'vue'

import App from './App.vue'
import Name from './1.name'
import router from './router'
import { store } from './store'

console.log(Name.name);

createApp(App).use(store).use(router).mount('#app')