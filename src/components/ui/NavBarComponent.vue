<template>
  <v-container fluid class="container-navbar bg-blue nav-login" pa-0 ma-0>
    <v-row class="d-flex justify-center" style="height: 60px; margin: 0">
      <v-col
        cols="12"
        md="8"
        pa-0
        ma-0
        class="d-flex align-center"
        style="padding: 0 12px !important"
      >
        <v-flex class="nav-login">
          <img src="@/assets/images/miniLogo.png" class="center" alt="" />
        </v-flex>
        <!--        User info and logout for SM and up-->
        <v-flex
          class="d-flex"
          style="max-width: 300px"
          v-if="getIsLoggedIn && $vuetify.breakpoint.smAndUp"
        >
          <v-flex class="d-flex justify-end align-center">
            <img
              src="@/assets/icons/account.svg"
              alt=""
              style="width: 32px; height: 32px"
            />
            <h6
              class="ml-3"
              style="color: #ffffff; font-size: 16px; font-weight: 600"
            >
              Nguyen Van A
            </h6>
          </v-flex>
          <v-flex class="d-flex justify-end align-center">
            <captionTwo
              style="color: #ffffff; font-size: 14px; font-weight: 600"
            >
              Đăng xuất
            </captionTwo>
            <img
              src="@/assets/icons/logout.svg"
              alt=""
              class="ml-3"
              style="width: 13px; height: 16px; cursor: pointer"
              @click="handleShowDialog"
            />
          </v-flex>
        </v-flex>
        <!--        User info and logout for XS only-->
        <v-flex v-if="getIsLoggedIn && $vuetify.breakpoint.xsOnly">
          <v-flex class="d-flex justify-end align-center">
            <v-menu
              offset-y
              transition="slide-y-transition"
              location="end"
              min-width="200"
            >
              <!-- -------------------Menu list-------------------- -->
              <template v-slot:activator="{ attrs, on }">
                <div class="d-flex align-center" v-bind="attrs" v-on="on">
                  <img
                    src="@/assets/icons/account.svg"
                    alt=""
                    style="width: 32px; height: 32px"
                  />
                  <img
                    src="@/assets/icons/ArrowDown.svg"
                    style="width: 16px; height: 16px"
                    alt=""
                  />
                </div>
              </template>
              <v-list class="pa-0 layout-list">
                <v-list-item
                  class="d-flex justify-end align-center"
                  style="border-bottom: 1px solid #0000001a"
                >
                  <h6>Nguyen Van A</h6>
                </v-list-item>
                <v-list-item>
                  <v-flex
                    class="d-flex justify-end align-center mb-1 logout-mobile"
                    @click="handleShowDialog"
                  >
                    <captionTwo
                      style="color: #453fe3; font-size: 14px; font-weight: 600"
                    >
                      Đăng xuất
                    </captionTwo>
                    <img
                      src="@/assets/icons/logout-mobile.svg"
                      alt=""
                      class="ml-3"
                      style="width: 13px; height: 16px"
                    />
                  </v-flex>
                </v-list-item>
              </v-list>
            </v-menu>
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
import { mapActions, mapGetters } from "vuex";

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
  computed: {
    ...mapGetters("auth", ["getIsLoggedIn"]),
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
  height: 60px
.logout-mobile
  cursor: pointer
</style>
