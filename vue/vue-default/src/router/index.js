import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/basic",
        name: "Basic",
        component: () =>
            import(/* webpackChunkName: "basic" */ "../views/Basic.vue"),
    },
    {
        path: "/databindinghtml",
        name: "DataBindingHtml",
        component: () =>
            import(
                /* webpackChunkName: "databindinghtml" */ "../views/DataBindingHtml.vue"
            ),
    },
    {
        path: "/example",
        name: "Example",
        component: () =>
            import(
                /* webpackChunkName: "databindinghtml" */ "../views/Example.vue"
            ),
    },
    {
        path: "/listrandeng",
        name: "ListRandeng",
        component: () =>
            import(
                /* webpackChunkName: "databindinghtml" */ "../views/ListRandeng.vue"
            ),
    },
    {
        path: "/serverdata",
        name: "ServerData",
        component: () =>
            import(
                /* webpackChunkName: "databindinghtml" */ "../views/ServerData.vue"
            ),
    },
    {
        path: "/example2",
        name: "Example2",
        component: () =>
            import(
                /* webpackChunkName: "databindinghtml" */ "../views/Example2.vue"
            ),
    },
    {
        path: "/slot",
        name: "SlotUseModalLayout",
        component: () =>
            import(
                /* webpackChunkName: "databindinghtml" */ "../views/SlotUseModalLayout.vue"
            ),
    },
    {
        path: "/mixin",
        name: "MixinTest",
        component: () =>
            import(
                /* webpackChunkName: "databindinghtml" */ "../views/MixinTest.vue"
            ),
    },
    {
        path: "/calculator",
        name: "Calculator",
        component: () =>
            import(
                /* webpackChunkName: "databindinghtml" */ "../views/Calculator.vue"
            ),
    },
    {
        path: "/compositionapi",
        name: "/CompositionAPI",
        component: () =>
            import(
                /* webpackChunkName: "databindinghtml" */ "../views/CompositionAPI.vue"
            ),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
