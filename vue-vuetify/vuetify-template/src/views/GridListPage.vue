<template>
  <v-container>
    <v-row>
      <!-- <v-col cols="6">
        <v-card class="pa-3">
          Hello
        </v-card>
      </v-col> -->
      <v-col v-for="count in 12" :key="count" cols="12" sm="6" md="4" lg="3">
        <v-card class="pa-3" outlined>
          Hello
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
