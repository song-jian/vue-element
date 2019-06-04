import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
import "babel-polyfill";
Vue.use(ElementUI);

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
Vue.prototype.$http = window.axios

// Vue.use(axios);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');