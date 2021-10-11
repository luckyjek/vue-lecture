<template>
    <div>
        <button type="button" @click="getProductList">조회</button>
    </div>
</template>
<script>
// import ApiMixin from "../api.js";
import MonitoringMixin from "../monitoring.js";

export default {
    name: "",
    mixins: [MonitoringMixin],
    components: {},
    data() {
        return {
            productList: [],
        };
    },
    setup() {},
    created() {},
    mounted() {
        console.log("컴포넌트 mounted()");
    },
    unmounted() {},
    methods: {
        async getProductList() {
            this.productList = await this.$api(
                "https://ca6ec645-a4d6-4572-82a1-6768e39df010.mock.pstmn.io/getproducList",
                "get",
                {}
            );
            console.log(this.productList);
        },
    },
};
</script>
