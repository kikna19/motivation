import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router";
// import './assets/bootstrap/bootstrap-5.2.1-dist/js/bootstrap.bundle.min'
// import './assets/bootstrap/bootstrap-5.2.1-dist/css/bootstrap.min.css'


const app = createApp(App);
app.use(router)
app.mount('#app');
