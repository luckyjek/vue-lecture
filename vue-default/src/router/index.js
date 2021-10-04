import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Example from "../views/Example.vue";
import Example2 from "../views/Example2.vue";
import Example3 from "../views/Example3.vue";
import Example4 from "../views/Example4.vue";
import ListRander from "../views/ListRander.vue";
import BasicRander from "../views/BasicRander.vue";
import EventButton from "../views/EventButton.vue";
import ComputedStudy from "../views/ComputedStudy.vue";
import WatchStudy from "../views/WatchStudy.vue";
import SaveStudy from "../views/SaveStudy.vue";
import Search from "../views/Search.vue";
import ServerData from "../views/ServerData.vue";
// import Contact from "../views/Contact.vue";

const routes = [
    {
        path: "/serverdata",
        name: "ServerData",
        component: ServerData,
    },
    {
        path: "/search",
        name: "Search",
        component: Search,
    },
    {
        path: "/savestudy",
        name: "SaveStudy",
        component: SaveStudy,
    },
    {
        path: "/watchstudy",
        name: "WatchStudy",
        component: WatchStudy,
    },
    {
        path: "/computedstudy",
        name: "ComputedStudy",
        component: ComputedStudy,
    },
    {
        path: "/eventbutton",
        name: "EventButton",
        component: EventButton,
    },
    {
        path: "/basicrander",
        name: "BasicRander",
        component: BasicRander,
    },
    {
        path: "/listRander",
        name: "ListRander",
        component: ListRander,
    },
    {
        path: "/example4",
        name: "Example4",
        component: Example4,
    },
    {
        path: "/example3",
        name: "Example3",
        component: Example3,
    },
    {
        path: "/contact",
        name: "Contact",
        component: () =>
            import(
                /* webpackChunkName: "contact", webpackPrefetch:true */ "../views/Contact.vue"
            ),
    },
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/example",
        name: "Example",
        component: Example,
    },
    {
        path: "/example2",
        name: "Example2",
        component: Example2,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // 방문하는 순간에 그때 로드시킨다 !
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
