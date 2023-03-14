import NProgress from "nprogress";
import { ViteSSG } from "vite-ssg";
import "virtual:windi.css";
import App from "./App.vue";
import routes from "./routes";

export const createApp = ViteSSG(
    App,
    { routes },
    ({ router, isClient }) => {
        if (isClient) {
            router.beforeEach(() => {
                NProgress.start();
            })
            router.afterEach(() => {
                NProgress.done();
            })
        }
    },
)