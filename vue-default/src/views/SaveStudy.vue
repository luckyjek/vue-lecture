<template>
    <!--조회화면 구현하기-->
    <div>
        <!--조회조건-->
        <div>
            <select v-model="selectedCity">
                <option
                    :value="city.code"
                    :key="i"
                    v-for="(city, i) in cityList"
                    >{{ city.name }}</option
                >
            </select>
            <input
                type="text"
                v-model="userName"
                @keyup.enter="searchUserList"
            />
            <button type="button" @click="searchUserList">조회</button>
        </div>
        <!--조회결과-->
        <div>
            <table>
                <thead>
                    <tr>
                        <!--filed 3개-->
                        <th>이름</th>
                        <th>나이</th>
                        <th>직업</th>
                    </tr>
                </thead>
                <tbody>
                    <tr :key="i" v-for="(person, i) in userList">
                        <td>{{ person.name }}</td>
                        <td>{{ person.age }}</td>
                        <td>{{ person.job }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            cityList: [
                { name: "서울", code: "02" },
                { name: "부산", code: "21" },
                { name: "제주", code: "064" },
            ],
            selectedCity: "",
            userName: "",
            userList: [], //우리가 받아온거 여기에 넣기
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        searchUserList() {
            // const selectedCity = this.selectedCity;
            // const userName = this.userName;

            //params == 파라미터
            const params = {
                //이 파랄미터를 서버 프로그램쪽으로 HTTP 리퀘스트 던져야되는데, 그럼 그 결과를 받아와서 , 화면에 뿌려준다.
                selectedCity: this.selectedCity,
                userName: this.userName,
            };
            //서버로부터 받아온 List를 userList []에 넣는다. 그리고, -> 조회 버튼을 클릭 하면, 테이블을 만들어준다.
            this.userList = this.getUserList(params);
        },

        //서버가 없으므로, 가상 함수를 만들어보자! --하드코딩으로 처리함
        getUserList(params) {
            console.log(params);

            let list = [
                { name: "유재석", age: 50, job: "연예인" },
                { name: "하하", age: 40, job: "연예인" },
                { name: "양세찬", age: 37, job: "연예인" },
                { name: "김종국", age: 46, job: "연예인" },
            ];

            return list;
        },
    },
};
</script>
