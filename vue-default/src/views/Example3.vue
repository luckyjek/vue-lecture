<template>
    <div>
        <img v-bind:src="rul" alt="" />
        <input type="text " v-model="textValue" />
        <!--textValue가 비어있으면 disabled시켜라 -> 비어있는경우 true를 반환! -->
        <button type="button" v-bind:disabled="textValue == ''">Click</button>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            rul: "http://localhost:8080/img/logo.82b9c7a5.png",
            textValue: "",
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {},
};
</script>
