import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import createVuetify from './plugins/vuetify.js'


createApp(App).use(createVuetify).mount('#app')
