<template>
    <div>
        <!--div>Hello, {{ getFullName() }}</!----div>-->
        <input type="text" v-model="lastName" />
        <input type="text" v-model="firstName" />

        <h1>Hello, {{ fullName }}</h1>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            firstName: "재석",
            lastName: "유",
        };
    },
    computed: {
        //computed에서 함수를 생성하게되면, fullName을 만드는 연산은 딱 1번만 일어난다.
        //data안에서 항상 감시하고있다.
        fullName() {
            //fullName안에서 사용한 data필드가있다면, 그 변경사항을 항상 감시하고 , 항상 반영을 해준다.
            return this.lastName + this.firstName;
        },
    },
    methods: {
        // 매번 함수를 호출할 때 마다 계속 동일한 연산을 반복하게된다.
        getFullName() {
            return this.lastName + this.firstName;
        },
    },
};
</script>
