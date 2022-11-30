import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/main.css'
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'

createApp(App).use(store).use(router).use(VueViewer).mount('#app')
