import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 定义特性标志
window.__VUE_PROD_DEVTOOLS__ = false;
window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;

const app = createApp(App);
// 关闭生产提示
app.config.productionTip = false; // 关闭生产提示

// 确保 DevTools 被启用
app.config.devtools = true; // 开发模式下，确保 DevTools 可用
app.use(router);
app.use(ElementPlus);
app.mount("#app");
