<template>
  <v-app>
    <v-main>
      <NavBarComponent />
      <router-view v-slot="{ Component, route }">
        <component :is="Component" :key="route.patch" />
      </router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBarComponent from "@/components/ui/NavBarComponent.vue";

export default {
  name: "App",
  components: { NavBarComponent },

  data: () => ({
    //
  }),
};
</script>

<style lang="sass">
// ---------- convert 1 rem = 10px ---------- //
html
  box-sizing: border-box
</style>
