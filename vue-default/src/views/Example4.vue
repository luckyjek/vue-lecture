<template>
    <!--v-bind를 사용하면 , class가 하나 더 add된다고 생각하면된다. (원래js는 추가적으로 class는 사용못함) -->
    <!--<div class="container" v-bind:class="{ active: isActive, 'text-red': isRed }">Class Binding</div>-->

    <!--배열로 했을경우는? -->
    <!--<div class="container" v-bind:class="[activeClass, redClass]">
        Class Binding
    </div>-->

    <!--How to Use Object-->
    <!--<div v-bind:style="styleObject">
        인라인 스타일 Binding
    </div>-->
    <!--How to Use Array-->
    <div v-bind:style="[baseStyle, addStyle]">
        인라인 스타일 Binding
    </div>
</template>
<script>
export default {
    data() {
        return {
            baseStyle: "background-color:yellow;width:100%;height:200px;",
            addStyle: "color:red;font-weight:bold",
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
