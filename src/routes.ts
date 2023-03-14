import Home from "./views/Home.vue";
import Projects from "./views/Projects.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/projects",
        name: "Projects",
        component: Projects,
    },
]

export default routes;