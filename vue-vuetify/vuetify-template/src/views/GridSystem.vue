<template>
  <v-container fluid>
    <v-card class="mt-5 pa-3">
      <v-row>
        <v-col cols="auto">
          <v-card class="pa-3" outlined>Col </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>Col </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>Col </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="auto">
          <v-card class="pa-3" outlined>Col </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>Col </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>Col </v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="mt-5 pa-3">
      <v-row>
        <v-col>
          <v-card class="pa-3" outlined>Col </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>Col </v-card>
        </v-col>
        <v-spacer />
        <v-col>
          <v-card class="pa-3" outlined>Col </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card class="pa-3" outlined>Col </v-card>
        </v-col>
        <v-spacer />
        <v-col>
          <v-card class="pa-3" outlined>Col </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>Col </v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="mt-5 pa-3">
      <!-- <v-row justify="space-around"> -->
      <v-row justify="space-between">
        <v-col cols="auto">
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>
      </v-row>
    </v-card>
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
