<template>
    <div>
        <button type="button" @click="childFunc" ref="child_btn">
            자식에 있는 버튼클릭
        </button>

        <hr />
        <div>likes:{{ likes }}</div>
        <div>isOk:{{ isOk }}</div>
        <div>author name{{ author.name }}</div>
    </div>
</template>
<script>
export default {
    name: "",
    props: {
        likes: {
            type: Number,
            default: 0,
        },
        isOk: {
            type: Boolean,
            default: false,
        },
        commentIds: {
            type: Array,
        },
        author: {
            type: Object,
        },
    },
    components: {},
    data() {
        return {
            sampleData: "",
        };
    },
    setup() {},
    created() {},
    mounted() {
        console.log(this.commentIds);
    },
    unmounted() {},
    methods: {
        childFunc() {
            alert("부모 컴포넌트에서 직접 발생시킨 이벤트");
        },
    },
};
</script>
