<template>
    <div>
        <h1>{{ msg }}</h1>
        <button type="button" @click="changData">
            자식 컴포넌트 데이터변경
        </button>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            msg: "자식 컴포넌트로 부터 보내는 메시지",
            // sendMsg: "From :자식 컴포넌트로 부터 보내는 메시지",
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        changData() {
            this.msg = "자식 컴포넌트에서 데이터 변경이 일어났습니다.";
        },
    },
};
</script>
