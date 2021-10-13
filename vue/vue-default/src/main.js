import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mixins from "./mixins";
import store from "./store";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

createApp(App)
    .use(router)
    .mixin(mixins)
    .use(VueSweetalert2)
    .use(store)
    .directive("focus", {
        mounted(el) {
            el.focus();
        },
    })
    .mount("#app");
