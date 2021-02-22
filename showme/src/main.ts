import { createApp } from 'vue'
import App from './App.vue'
import Name from './1.name'

console.log(App);
console.log(Name.name);

import router from './router'

createApp(App).use(router).mount('#app')
