import { createStore } from "vuex";

//store는 상태관리를 체계적으로 관리하기위해 만들어졌다.
//사용자 로그인정보를 user정보에 만들어서 사용한다.
const store = createStore({
    state() {
        return {
            count: 0,
            cart: [
                { product_id: 1, product_name: "아이폰 거치대" },
                { product_id: 2, product_name: "블루투스 마우스" },
            ],
        };
    },
    mutations: {
        increment(state) {
            state.count = state.count + 1;
        },
    },
    getters: {
        cartCount: (state) => {
            return state.cart.length;
        },
    },
});

export default store;
