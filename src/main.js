import {createApp} from 'vue';
import App from './App.vue';

import router from './router';
import axios from 'axios'
import VueAxios from "vue-axios";
import {store} from "./store/index";
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.withCredentials = true;


import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../public/fonts/fontawesome-free-5.15.1-web/css/all.min.css';

const app = createApp(App).use(router);
app.use(VueAxios, axios)
app.use(store)
app.mount('#app');