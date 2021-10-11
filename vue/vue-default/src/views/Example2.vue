<template>
    <div>
        <button type="button" @click="showData">부모 버튼</button>
        <ChildComponent2 ref="child_component" />
        <hr />
        <PageTitle :title="title" />
        <button type="button" @click="callChildFunc">
            부모에있는 버튼 클릭
        </button>
        <!-- <ChildComponent
            ref="child_component"
            :likes="23"
            :isOk="true"
            :commentIds="[1, 5, 2, 3]"
            :author="author"
        /> -->
    </div>
</template>
<script>
import PageTitle from "../components/PageTitle";
// import ChildComponent from "./ChildComponent";
import ChildComponent2 from "./ChildComponent2";

export default {
    name: "",
    // components: { PageTitle, ChildComponent, ChildComponent2 },
    components: { PageTitle, ChildComponent2 },
    data() {
        return {
            parentMsg: "",
            title: "부모컴포넌트에서 전송할 페이지 타이틀",
            author: {
                name: "홍길동",
                company: "회사이름",
            },
        };
    },
    computed: {
        msg() {
            return this.$refs.child_component.msg;
        },
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        showData() {
            alert(this.msg);
        },
        callChildFunc() {
            // this.$refs.child_component.$refs.child_btn.click();
            // this.$refs.child_component.childFunc();
            this.$refs.child_component.msg = "부모컴포넌트에서 변경한 메시지";
        },
    },
};
</script>
