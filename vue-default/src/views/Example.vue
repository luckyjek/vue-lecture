<template>
    <div>
        <input type="text" v-model="valueModel" />
        <!-- <input type="number" v-model="valueModel2" /> 이렇게하면 문자열로 인식한다. 따라서 숫자로 인식하게하려면 ? 아래처럼 -->
        <input
            type="number"
            v-model.number="valueModel2"
        /><!--.number 작성해서, 숫자형타입으로 바꿔준다! -->
        <!--textarea의 경우는 {{}}가 아닌, v-model을 사용해줘야한다.-->
        <textarea v-model="valueModel3"></textarea>
        <div>{{ valueModel3 }}</div>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            valueModel: "South Korea",
            valueModel2: 12,
            valueModel3: "안녕하세요.",
        };
    },
    setup() {},
    created() {},
    mounted() {
        //mounted() 는 컴포넌트가 다 화면에 로딩되고나면, 자동으로 실행되는 메소드이다.
        console.log(this.valueModel);
        console.log(this.valueModel2);
        let valueModel3 = 11;
        console.log(valueModel3); //this가 필요없다.
    },
    unmounted() {},
    methods: {},
};
</script>
