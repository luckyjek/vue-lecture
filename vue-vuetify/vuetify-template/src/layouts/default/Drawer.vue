<template>
  <v-navigation-drawer
    v-model="drawer"
    v-bind="$attrs"
    dark
    app
    :src="require('@/assets/sidebar.jpg')"
  >
    <template v-slot:img="props">
      <v-img :gradient="gradient" v-bind="props" />
    </template>

    <default-drawer-header />
    <v-divider />

    <default-list :items="items" />
    <!-- <v-list dense nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :to="item.to"
        active-class="primary"
        class="py-2"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list> -->
  </v-navigation-drawer>
</template>
<script>
import DefaultList from "./List";
import DefaultDrawerHeader from "./DrawerHeader";
export default {
  name: "DefaultDrawer",
  components: { DefaultDrawerHeader, DefaultList },
  data: () => ({
    gradient: "rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)",
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
      {
        title: "Pages",
        icon: "mdi-menu",
        items: [
          {
            title: "Authentication",
            icon: "mdi-login",
            items: [
              {
                title: "SignIn",
                icon: "mdi-login",
                to: "/authentication/sign-in"
              },
              {
                title: "SignUp",
                icon: "mdi-logout",
                to: "/authentication/sign-up"
              }
            ]
          },
          {
            title: "ProductList",
            icon: "mdi-reproduction",
            to: "/page/product-list"
          }
        ]
      },
      { title: "GridSystem", icon: "mdi-image", to: "/grid-system" },
      { title: "Breakpoints", icon: "mdi-image", to: "/breakpoints" },
      { title: "Grid List Page", icon: "mdi-image", to: "/grid-list-page" },
      { title: "Typography", icon: "mdi-image", to: "/typography" },
      { title: "Tables", icon: "mdi-image", to: "/tables" },
      { title: "Forms", icon: "mdi-image", to: "/forms" },
      { title: "Buttons", icon: "mdi-image", to: "/buttons" },
      { title: "Icons", icon: "mdi-image", to: "/icons" }
    ]
  })
};
</script>
