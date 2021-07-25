<template>
    <div>
        <!--<h1 v-if="bRender">
            bRender값이 true이면, h1블록이 화면에 보여지게 된다.
        </h1>
        <h1 v-else>
            bRender값이 false이면, h1블록이 화면에 보여지게 된다.
        </h1>-->
        <!--<h1 v-if="type == 'A'">A</h1>
        <h1 v-else-if="type == 'B'">B</h1>
        <h1 v-else-if="type == 'C'">C</h1>
        <h1 v-else>Other</h1>-->

        <!--v-show또한 true이면 보인다 다만, else문이 존재하지않는다. -->
        <h1 v-show="bRender">A</h1>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            bRender: true,
            type: "E",
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {},
};
</script>
