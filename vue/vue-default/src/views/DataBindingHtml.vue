<template>
    <div>
        <div v-html="htmlString"></div>
        <input type="text" v-model="valueModel" />
        <input type="number" v-model.number="valueModel2" />
        <textarea v-model="valueModel3"></textarea>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            htmlString: '<p style="color:red;">This is a red string.</p>',
            valueModel: "South Korea",
            valueModel2: 12,
            valueModel3: "hihihi",
        };
    },
    setup() {},
    created() {},
    mounted() {
        //해당 컴포넌트가 다 실행되고난 후, 자동으로 실행되는 메소드이다.
        console.log(this.valueModel2); //data 안에서 선언된 데이터들은 this를 붙여줘야 접근이가능.
    },
    unmounted() {},
    methods: {},
};
</script>
