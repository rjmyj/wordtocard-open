import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/reset.css';
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
let app = createApp(App)
app.use(Antd)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

