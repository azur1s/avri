import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from "vue-router";

import App from './App.vue'
import Main from './View/Main.vue'
import Roll from './View/Roll.vue'

const routes = [
    { path: '/', component: Main },
    { path: '/roll', component: Roll },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

const app = createApp(App);

app.use(router);

app.mount('#app')
