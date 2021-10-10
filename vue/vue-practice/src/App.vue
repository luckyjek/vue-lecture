<template>
    <div>
        <!--https://www.youtube.com/watch?v=ibYCwlEmILI-->
        <h2>
            응용버전( 사용을 하다보면 이벤트뿐만아니라 파라미터를 함께 넘겨줘야
            할때도 있을텐데 )
        </h2>
        <div>{{ message }}</div>
        <button @click="addNumber($event, 10)">10더하기</button
        ><button @click="addNumber($event, 100)">100더하기</button>
        <hr />
        <!-- <h1>{{ count }}</h1>
        <button v-on:click="addNumber(1)">증가</button>
        <button v-on:click="minusNumber">감소</button>
        <button v-on:mouseover="addNumber(10)">마우스오버10증가</button>
        <div>{{ message }}</div>
        <div @click="getMousePosition" class="box"></div> -->
        <hr />
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
    methods: {
        addNumber(e, value) {
            e.pageX;
            this.message = `마우스 좌표 ${
                e.pageX
            }와 더하기 ${value}는 ${e.pageX + value}입니다.`;
        },
        minusNumber() {
            this.count = this.count - 1;
        },
        getMousePosition(event) {
            console.log(event);
            this.message = `마우스의 위치는 ${event.pageX}, ${event.pageY}입니다.`;
        },
    },
    data() {
        return {
            message: "",
            count: 0,
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
button {
    width: 100px;
    height: 100px;
    margin-top: 24px;
}
.box {
    width: 300px;
    height: 300px;
    background: salmon;
}
</style>
