<template>
    <div></div>
</template>
<script>
export default {
    name: "", //컴포넌트의 name을 지정 가능 (해도되고, 안해도됨)
    components: {}, //vue가 가지고있는 굉장히 중요한 재사용성을 만들어진 컴포넌트를 다른 컴포넌트에서
    //import시켜서 사용할 수 있다.
    data() {
        //dataBinding
        return {};
    },
    setup() {},
    created() {}, //vue-components가 실행이 되는 순간 자동으로 created안에 들어있는
    //코드는 바로 실행이 된다.
    mounted() {}, //<template></template>안에 지정되어있는 html Dom이 실제 화면에 로딩이
    //되는순간 mounte가 다 끝나는 순간 mounted에 정의된 자바스크립트 코드가 바로 실행.
    unmounted() {}, //이 components에서 다음 components로 이동할때, unmount가 일어나면서,
    //numounted가 자동으로 실행된다.
    methods: {
        //function함수를 정의해서 components안에서 사용할 수 있게끔 실행된다.
    },
};
</script>
