<template>
  <v-container fluid class="container-navbar" pa-0 ma-0>
    <v-flex class="bg-blue nav-login">
      <img
        src="@/assets/images/miniLogo.png"
        :class="$vuetify.breakpoint.smAndDown ? 'ml-2' : ''"
        alt=""
      />
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: "NavBarComponent",
};
</script>

<style lang="sass" scoped>
.bg-blue
  background: #453FE3
  img
    height: 60px
    width: 103px
    margin-left: 24vw
.nav-login
  max-height: 60px
</style>
