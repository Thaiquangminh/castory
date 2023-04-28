<template>
  <v-container fluid class="container-navbar bg-blue nav-login" pa-0 ma-0>
    <v-row class="d-flex justify-center" style="height: 60px">
      <v-col
        cols="12"
        md="8"
        pa-0
        ma-0
        class="d-flex align-center"
        style="padding: 0 12px !important"
      >
        <v-flex class="nav-login" style="height: 48px">
          <img src="@/assets/images/miniLogo.png" class="center" alt="" />
        </v-flex>
        <v-flex class="d-flex" style="max-width: 300px; padding-top: 10px">
          <v-flex class="d-flex justify-end align-center">
            <img
              src="@/assets/icons/account.svg"
              alt=""
              style="width: 32px; height: 32px"
            />
            <span
              class="ml-3"
              style="color: #ffffff; font-size: 16px; font-weight: 600"
              >Nguyen Van A</span
            >
          </v-flex>
          <v-flex class="d-flex justify-end align-center">
            <span style="color: #ffffff; font-size: 14px; font-weight: 600"
              >Log out</span
            >
            <img
              src="@/assets/icons/logout.svg"
              alt=""
              class="ml-3"
              style="width: 13px; height: 16px; cursor: pointer"
              @click="handleShowDialog"
            />
          </v-flex>
        </v-flex>
      </v-col>
    </v-row>
    <DialogComponent
      typeDialog="logout"
      :showDialogValue="showDialog"
      @closeDialog="handleCloseDialog"
      @confirmRequest="handleLogOut"
    />
  </v-container>
</template>

<script>
import DialogComponent from "@/components/ui/DialogComponent.vue";
import { mapActions } from "vuex";

export default {
  name: "NavBarComponent",
  components: { DialogComponent },
  data() {
    return {
      showDialog: false,
    };
  },
  methods: {
    ...mapActions("auth", ["handleClearLocalStorage"]),
    handleShowDialog() {
      this.showDialog = true;
    },
    handleCloseDialog() {
      this.showDialog = false;
    },
    handleLogOut() {
      this.handleCloseDialog();
      this.handleClearLocalStorage();
      this.$router.replace("/login");
    },
  },
};
</script>

<style lang="sass" scoped>
.bg-blue
  background: #453FE3
  img
    height: 60px
    width: 103px
.nav-login
  max-height: 60px
  height: 100%
</style>
