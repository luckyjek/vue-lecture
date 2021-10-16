<template>
  <v-app>
    <Authentication-view />
  </v-app>
</template>

<script>
import AuthenticationView from "./View";
export default {
  name: "AuthenticationLayout",
  components: {
    AuthenticationView
  }
};
</script>

<style scoped></style>
