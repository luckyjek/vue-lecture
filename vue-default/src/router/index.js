import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Example from "../views/Example.vue";
import Example2 from "../views/Example2.vue";
// import Contact from "../views/Contact.vue";

const routes = [
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
