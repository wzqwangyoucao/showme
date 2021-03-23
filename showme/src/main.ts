import { createApp } from 'vue'
import App from './App.vue'
import Name from './1.name'

import router from './router' // vue-rouiter
import { store } from './store' // vuex

import ElementPlus from 'element-plus'; // 引入element
import 'element-plus/lib/theme-chalk/index.css'; 
import './assets/css/reset.css' // 默认样式重置

console.log(Name.name);

createApp(App).use(ElementPlus).use(store).use(router).mount('#app')