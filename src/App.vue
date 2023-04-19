<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style lang="sass">
// ---------- convert 1 rem = 10px ---------- //
html
  margin-top: 0
  padding-top: 0
  box-sizing: border-box
</style>
