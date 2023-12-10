import Home from "./views/Home.vue";
import Releases from "./views/Releases.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/releases",
        name: "Releases",
        component: Releases,
    },
]

export default routes;