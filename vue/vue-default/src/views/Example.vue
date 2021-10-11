<template>
    <div>
        <div v-bind:style="styleObject">인라인 스타일(1) Binding</div>
        <div v-bind:style="[baseStyle, addStyle]">인라인 스타일(2) Binding</div>
        <hr />

        <div class="container" v-bind:class="[activeClass, redClass]">
            Class Binding
        </div>
        <hr />

        <!-- <img src="http://localhost:8080/img/logo.82b9c7a5.png" style="height:100px;width:auto;" /> -->
        <!-- <img v-bind:src="url" /> -->

        <!--10줄이나 쳐서 나오는 과정을 이렇게 간단하게 처리해버렸따.-->
        <input type="text" v-model="textValue" />
        <button type="button" v-bind:disabled="textValue == ''">
            Click
        </button>
        <hr />
        <!-- <select v-model="city">
            <option value="02">서울</option>
            <option value="21">부산</option>
            <option value="064">제주</option>
        </select> -->
        <!-- <label><input type="checkbox" v-model="checked" />{{ checked }}</label> -->
        <!-- <hr />
        <label
            ><input type="checkbox" value="서울" v-model="checked" />서울</label
        >
        <label
            ><input type="checkbox" value="부산" v-model="checked" />부산</label
        >
        <label
            ><input type="checkbox" value="제주" v-model="checked" />제주</label
        >
    <br />
        <span>체크한지억:{{ checked }}</span> -->
        <label
            ><input
                type="radio"
                v-bind:value="radio[0]"
                v-model="picked"
            />서울</label
        >
        <label
            ><input
                type="radio"
                v-bind:value="radio[1]"
                v-model="picked"
            />부산</label
        >
        <label
            ><input
                type="radio"
                v-bind:value="radio[2]"
                v-model="picked"
            />제주</label
        >
        <br />
        <span>선택한 지역:{{ picked }}</span>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            styleObject: {
                backgroundColor: "blue",
                color: "red",
                fontWeight: "bold",
            },
            baseStyle: "background-color:yellow;width:100%;height:200px",
            addStyle: "color:red;font-weight:bold",
            activeClass: "active",
            redClass: "text-red",
            textValue: "",
            url: "http://localhost:8080/img/logo.82b9c7a5.png",
            city: "21",
            // checked: true,
            checked: [],
            picked: "",
            radio: ["서울", "부산", "제주"],
            radio1: "서울",
            radio2: "부산",
            radio3: "제주",
        };
    },
};
</script>
<style scoped>
.container {
    width: 100%;
    height: 200px;
}
.active {
    background-color: yellow;
    font-weight: bold;
}
.text-red {
    color: red;
}
</style>
