<template>
    <div>
        <!-- <select v-model="city">
            <option value="02">서울</option>
            <option value="21">부산</option>
            <option value="064">제주</option>
        </select> -->

        <!--checkbox-->
        <!-- <label
            ><input type="checkbox" value="서울" v-model="checked" />
            서울
        </label>
        <label
            ><input type="checkbox" value="부산" v-model="checked" />
            부산
        </label>
        <label
            ><input type="checkbox" value="제주" v-model="checked" />
            제주
        </label>
        <br />
        <span>체크한 지역: {{ checked }}</span> -->

        <!--radio-->
        <lable
            ><input
                type="radio"
                v-bind:value="radio1"
                v-model="picked"
            />서울</lable
        >
        <lable
            ><input
                type="radio"
                v-bind:value="radio2"
                v-model="picked"
            />부산</lable
        >
        <lable
            ><input
                type="radio"
                v-bind:value="radio3"
                v-model="picked"
            />제주</lable
        >
        <br />
        <span>선택한 지역: {{ picked }}</span>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            city: "21",
            checked: [],
            radio1: "서울",
            radio2: "부산",
            radio3: "제주",
            picked: "",
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {},
};
</script>
