<template>
  <v-app>
    <!-- v-main은 컨텐츠 영역이다. -->
    <v-app-bar v-if="$vuetify.breakpoint.xsOnly" app />
    <v-navigation-drawer app />
    <v-main>
      <v-container fluid>
        컨텐츠영역
      </v-container>
    </v-main>
    <v-footer app />
  </v-app>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      sampleData: ""
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
};
</script>
