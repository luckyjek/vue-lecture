<template>
    <div>
        <!--https://www.youtube.com/watch?v=ibYCwlEmILI-->

        <h2 v-for="(animal, index) in animals" :key="index">
            {{ animal }} index:: {{ index }}
        </h2>
        <hr />

        <template v-for="(animal, index) in animals" :key="index">
            <h2 v-if="animal !== 'monkey'">{{ animal }} index:: {{ index }}</h2>
        </template>

        <!--
          바로 위의 코드는(10~12번째 줄) 원하는 갯수 만큼만 꺼내기위해 template tag를 사용했다.
          <h2 v-for="(animal, index) in animals" :key="index">
            <span v-if="animal !== 'monkey'">
                {{ animal }} index:: {{ index }}</span
            >
        </h2>-->
        <hr />

        <ul>
            <li v-for="(user, index) in users" :key="index">
                이름은 {{ user.name }}이고 직업은 {{ user.job }}
                <p v-for="item in user.skill" :key="item">{{ item }}</p>
            </li>
        </ul>

        <hr />
        <h2 v-if="display">보입니다!!</h2>
        <!--v-show(감춤)모듈 덩어리 불러올때 많이 사용-->
        <h2 v-show="display">보입니다!!</h2>

        <hr />
        <h2>당신의 나이는 {{ age }}입니다.</h2>
        <h3 v-if="age >= 18">당신은 어른입니다.</h3>
        <h3 v-else-if="age > 13 && age <= 18">당신은 청소년입니다.</h3>
        <h3 v-else>당신은 어린이입니다.</h3>
        <hr />
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
            animals: ["monkey", "rat", "dog", "lion", "monkey"],
            users: [
                {
                    name: "scalper",
                    job: "developer",
                    gender: "male",
                    skill: ["html", "css", "javascript"],
                },
                {
                    name: "john",
                    job: "designer",
                    gender: "male",
                    skill: ["html", "css", "javascript"],
                },
                {
                    name: "철수",
                    job: "pm",
                    gender: "female",
                    skill: ["html", "css", "javascript"],
                },
            ],
            display: true,
            age: 18,
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
