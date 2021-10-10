<template>
    <div>
        <!--실질적으로 우리 보여줄 html코드들이 들어가게된다.-->
        <h1>Hello {{ animal }}</h1>
        <h2>Hello {{ food }}</h2>
        <input type="text" v-model="food" />
        <div v-html="alertMessage"></div>
        <img v-bind:src="imageSource" alt="random" />
        <a :href="naverUrl">naver</a>
        <a :href="food">{{ food }}</a>
        <hr />
        <!--위에 input-> v-model="food"에 조건을 걸어줬다.
        {클래스 : 참/거짓}
        -->
        <h2
            v-bind:class="{
                red: food === 'apple',
                'not-good': food === 'rice',
            }"
        >
            원숭이는{{ food }}를 좋아합니다.
        </h2>
    </div>
</template>

<script>
//자바스크립트 코드들이 들어가게된다.

export default {
    name: "App",
    data() {
        return {
            animal: "Monkey",
            food: "apple",
            alertMessage: "<h2>경고!!!</h2>",
            imageSource: "https://placeimg.com/100/100/any",
            naverUrl: "https://www.naver.com",
        };
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
input {
    font-size: 20px;
}

.orange {
    color: orange;
}
.salmon {
    color: salmon;
}
.red {
    color: red;
}
.not-good {
    text-decoration: line-through;
}
</style>
