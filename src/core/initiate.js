import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

const vueInit = createApp(App)

vueInit.use(router)

export default vueInit