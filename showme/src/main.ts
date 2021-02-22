import { createApp } from 'vue'
import App from './App.vue'
import Name from './1.name'

var name: Name = {
    name: '123'
}

import router from './router'

createApp(App).use(router).mount('#app')
