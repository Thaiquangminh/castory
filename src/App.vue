<template>
  <v-app>
    <v-main>
      <v-overlay v-if="overlay" class="align-center justify-center">
        <v-progress-circular
          color="primary"
          indeterminate
          size="64"
        ></v-progress-circular>
      </v-overlay>
      <NavBarComponent v-if="getIsLoggedIn || this.$route.path === '/login'" />
      <router-view v-slot="{ Component, route }">
        <component :is="Component" :key="route.patch" />
      </router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBarComponent from "@/components/ui/NavBarComponent.vue";
import { mapGetters } from "vuex";
import "@/assets/styles/style.sass";

export default {
  name: "App",
  components: { NavBarComponent },

  data: () => ({
    overlay: false,
  }),
  computed: {
    ...mapGetters("auth", ["getIsLoggedIn"]),
  },
  created() {
    this.$store.dispatch("auth/handleKeepLogin");
  },
};
</script>

<style lang="sass">
// ---------- convert 1 rem = 10px ---------- //
html
  box-sizing: border-box
.v-application
  font-family: AvertaRegular
</style>
