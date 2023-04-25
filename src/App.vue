<template>
  <v-app>
    <v-main>
      <NavBarComponent v-if="getIsLoggedIn" />
      <router-view v-slot="{ Component, route }">
        <component :is="Component" :key="route.patch" />
      </router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBarComponent from "@/components/ui/NavBarComponent.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: { NavBarComponent },

  data: () => ({
    //
  }),
  computed: {
    ...mapGetters("auth", ["getIsLoggedIn"]),
  },
};
</script>

<style lang="sass">
// ---------- convert 1 rem = 10px ---------- //
html
  box-sizing: border-box
</style>
