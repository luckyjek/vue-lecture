import axios from "axios";
//공통함수! (vue 에서 가장 중요한 부분 )
//mixins를 globle로 사용할 경우, 다른 곳와 mix 될 경우 아래 함수들이
//모두 다 붙게되므로, 다른 함수들과 구분해서 사용하도록한다.
export default {
    methods: {
        async $api(url, method, data) {
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
