import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from "vue-router";

import App from './App.vue'
import Main from './View/Main.vue'
import Roll from './View/Roll.vue'

const routes = [
    { path: '/', component: Main },
    {
        path: '/roll',
        component: Roll,
        // @ts-ignore
        beforeEnter: (to, from, next) => { window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&autoplay=1"; }
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

const app = createApp(App);

app.use(router);

app.mount('#app')
