import { createApp } from 'vue'

import App from './App.vue'
import Name from './1.name'
import router from './router'

console.log(Name.name);


createApp(App).use(router).mount('#app')