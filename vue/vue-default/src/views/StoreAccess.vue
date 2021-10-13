<template>
    <div>
        <h1>Cart:{{ cartCount }}</h1>
        <h2>Count: {{ count }}</h2>
        <button type="button" @click="increment">Increment</button>
    </div>
</template>
<script>
export default {
    computed: {
        count() {
            return this.$store.state.count;
        },
        cartCount() {
            return this.$store.getters.cartCount;
        },
    },
    methods: {
        increment() {
            this.$store.commit("increment");
        },
    },
};
</script>
