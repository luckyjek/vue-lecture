<template>
    <div>
        <button type="button" @click="getProductList">조회</button>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name: "",
    components: {},
    data() {
        return {
            productList: [],
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        async getProductList() {
            this.productList = await this.api(
                "https://ca6ec645-a4d6-4572-82a1-6768e39df010.mock.pstmn.io/getproducList",
                "get",
                {}
            );
            console.log(this.productList);
        },
        async api(url, method, data) {
            return (
                await axios({
                    method: method,
                    url: url,
                    data: data,
                }).catch((e) => {
                    console.log(e);
                })
            ).data;
            //response한 데이터를 .data를 해서 받아올수있다.
        },
    },
};
</script>
