<template>
    <!--이 파일은 안쓴다. -> 나중에 추후에 공부하기-->
    <div>
        <h2>Calculator</h2>
        <div>
            <input
                type="text"
                v-focus
                v-model.number="state.num1"
                @keyup="plusNumberes"
            />
            <span>+</span>
            <input
                type="text"
                v-model.number="state.num2"
                @keyup="plusNumberes"
            />
            <span>=</span>
            <span>{{ result }}</span>
        </div>
    </div>
</template>
<script>
import { reactive } from "vue";
export default {
    name: "calculator",
    setup() {
        let state = reactive({
            num1: 0,
            num2: 0,
            result: 0,
        });

        function plusNumberes() {
            this.result = this.num1 + this.num2;
        }
        return {
            //return을 반드시 해줘야, 이 템블릿안에서 사용할 수 있다.
            //reactive로 선언된 state와 plusNumbers함수를 반환함으로써 data, methods옵션처럼 사용가능.
            state,
            plusNumberes,
        };
    },
};
</script>
