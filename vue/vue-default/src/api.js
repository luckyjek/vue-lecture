import axios from "axios";

export default {
    mounted() {
        console.log("믹스인 mounted()");
    },
    unmounted() {},
    methods: {
        async $callAPI(url, method, data) {
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
