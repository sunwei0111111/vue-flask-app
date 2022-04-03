//import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import { createApp } from 'vue'
//import Icon from "@/components/Icon.vue";

axios.defaults.baseURL = 'http://127.0.0.1:5000';

//createApp().component('Icon', Icon);
//new Vue({
 // render: h => h(App),
//).$mount('#app')
const myApp = createApp(App)

myApp.prototype.$ajax = axios;

myApp.config.productionTip = false;
//myApp.config.productionTip = false;
myApp.mount('#app');
