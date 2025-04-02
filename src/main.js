import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Icon } from '@iconify/vue/dist/iconify.js'
import Aos from 'aos'
import 'aos/dist/aos.css';

Aos.init({ duration: 1000 });

createApp(App).component('Icon', Icon).mount('#app')
