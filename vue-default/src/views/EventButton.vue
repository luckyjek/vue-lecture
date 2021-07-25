<template>
    <div>
        <!--<button type="button" v-on:click="increaseCounter">Add1</button>
        <button type="button" @click="increaseCounter">Add1</button>
        <p>The count is : {{ counter }}</p>-->

        <!--<button type="button" @click="one(), two()">Add1</button>
        <p>The count is : {{ counter }}</p>-->

        <!--<select v-model="city" @change="changeSelect">
            <option value="서울">서울</option>
            <option value="부산">부산</option>
            <option value="제주">제주</option>
        </select>-->

        <!--enter 키를 눌렀을때, showValue함수 실행 -->
        <input type="text" v-model="textValue" @keyup.up="showValue" />
        <!--input에 텍스트 하나라도 들어가면 바로 감지해서 showValue함수 실행
        <input type="text" v-model="textValue" @keyup="showValue" /> -->
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            textValue: "",
            counter: 0,
            city: "",
        };
    },
    methods: {
        showValue() {
            // 현재 사용자가 keyin할 (=input type="text")value값을 alert으로 보쳐준다.
            alert(this.textValue);
        },
        changeSelect() {
            //현재 선택된 값을 호출한다.
            alert(this.city);
        },
        increaseCounter() {
            this.counter = this.counter + 1;
        },
        one() {
            alert("One");
        },
        two() {
            alert("Two");
        },
    },
};
</script>
