<template>
    <div>
        <input type="text" v-model="userInfo.name" />
        <input type="text" v-model.number="userInfo.age" />
        <input type="text" v-model="userInfo.job" />
        <button type="button" @click="saveUserInfo">저장</button>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            name: "",
            age: 0,
            job: "",
            userInfo: {
                //Object로 묶어서 하나로 관리해서 하면 나중에 필드가 복잡해졌을때 관리가 쉽다.
                name: "",
                age: 0,
                job: "",
            },
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        saveUserInfo() {
            if (this.userInfo.name == "") {
                //return alert("사용자 이름을 입력하세요.");
                return this.$swal("사용자 이름을 입력하세요.");
            }

            if (this.userInfo.age == "" || this.userInfo.age == "") {
                return alert("나이를 입력하세요.");
            }

            //    const params = {
            //        name: this.name,
            //        age: this.age,
            //        job: this.job,
            //    };

            const r = this.saveData(this.userInfo);
            //서버로 부터 가져온 값이 S이면 '사용자 정보가 생성되었습니다.' 라고 출력해라.
            if (r == "S") {
                alert("사용자 정보가 생성되었습니다.");
            }
        },

        //서버랑 통신하는 함수 params를 넘겨준다.
        saveData(params) {
            console.log(params);
            const r = "S"; // result가 Success 로 왔다.
            return r; //성공했을시, r
        },
    },
};
</script>
