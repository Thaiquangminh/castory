<template>
  <v-container fluid class="login-wrapper" pa-0>
    <v-row
      :class="[
        'login-row w-100',
        {
          'height-sm': $vuetify.breakpoint.smAndDown,
        },
        {
          'login-row-xs': $vuetify.breakpoint.xsOnly,
        },
      ]"
    >
      <v-col
        cols="12"
        md="4"
        sm="12"
        xs="12"
        v-if="$vuetify.breakpoint.mdAndUp"
      >
        <v-flex class="login-flex-image">
          <img class="login-image" src="@/assets/images/logo.svg" alt="" />
        </v-flex>
      </v-col>
      <v-col
        cols="12"
        md="4"
        sm="12"
        xs="12"
        :class="[
          {
            'login-wrapper-form': $vuetify.breakpoint.mdAndUp,
            'login-col-sm': $vuetify.breakpoint.smAndDown,
          },
        ]"
        :style="$vuetify.breakpoint.mdAndUp ? 'max-width: 400px' : ''"
      >
        <v-card elevation="0" class="login-group-form-card">
          <!--  --------------------Header-------------------- -->
          <v-card-title
            class="mb-2"
            :class="$vuetify.breakpoint.xsOnly ? 'd-flex justify-center' : ' '"
          >
            <h3>Welcome to <span class="castory">Castory</span></h3>
          </v-card-title>
          <v-card-subtitle
            class="ml-1 pb-0 d-flex flex-column"
            :class="{
              'd-flex justify-center': $vuetify.breakpoint.xsOnly,
              'mb-15': isValidForm,
            }"
          >
            <div :class="$vuetify.breakpoint.xsOnly && 'text-center'">
              <text-averta-400 style="color: #384961 !important">
                Đăng nhập để bắt đầu học
              </text-averta-400>
            </div>
            <div v-if="!isValidForm" class="mt-3 login-invalid-helper-text">
              Your user name or password is wrong!
            </div>
          </v-card-subtitle>
          <!--  --------------------Start form-------------------- -->
          <v-card-text>
            <form @submit.prevent="handleSubmit">
              <v-row
                :class="[
                  'login-group-form',
                  {
                    'invalid-form': !isValidForm,
                    'login-group-sm': $vuetify.breakpoint.xsOnly,
                  },
                ]"
              >
                <label class="login-label mb-2" for="username">
                  <h7>Tên đăng nhập</h7>
                </label>
                <InputComponent
                  :inputProps="usernameInput"
                  v-model.trim="username.value"
                />
              </v-row>
              <v-row
                :class="[
                  'login-group-form',
                  {
                    'invalid-form': !isValidForm,
                    'login-group-sm': $vuetify.breakpoint.xsOnly,
                  },
                ]"
              >
                <label class="login-label mb-2" for="password">
                  <h7>Mật khẩu</h7>
                </label>
                <InputComponent
                  :inputProps="passwordInput"
                  v-model.trim="password.value"
                />
              </v-row>
              <v-row class="login-group-form">
                <v-btn type="submit" text class="login-btn">
                  <h7 class="login-btn-text">Đăng nhập</h7>
                </v-btn>
              </v-row>
            </form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import InputComponent from "@/components/ui/InputComponent.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { InputComponent },
  data() {
    return {
      usernameInput: {
        typeInput: "text",
        placeholder: "Điền tên đăng nhập",
        id: "username",
      },
      passwordInput: {
        typeInput: "password",
        placeholder: "Điền mật khẩu",
        id: "password",
      },
      username: {
        value: "",
        typeError: "",
      },
      password: {
        value: "",
        typeError: "",
      },
      isValidForm: true,
      errorMessage: "",
    };
  },
  computed: {
    ...mapGetters("auth", ["getToken"]),
    token() {
      return this.getToken;
    },
  },
  methods: {
    ...mapActions("auth", ["handleSetToken", "handleLogin"]),
    validateForm() {
      if (this.username.value === "") {
        this.username.typeError = "empty";
        this.isValidForm = false;
      } else if (this.username.value.length < 6) {
        this.username.typeError = "minlength";
        this.isValidForm = false;
      } else if (this.username.value.length > 127) {
        this.username.typeError = "maxlength";
        this.isValidForm = false;
      }

      if (this.password.value === "") {
        this.password.typeError = "empty";
        this.isValidForm = false;
      } else if (this.password.value.length < 6) {
        this.password.typeError = "minlength";
        this.isValidForm = false;
      } else if (this.password.value.length > 127) {
        this.password.typeError = "maxlength";
        this.isValidForm = false;
      }
    },
    async handleSubmit() {
      this.isValidForm = true;
      await this.validateForm();
      if (this.isValidForm) {
        try {
          await this.handleLogin({
            username: this.username.value,
            password: this.password.value,
          });
        } catch (error) {
          this.errorMessage = error;
        }
        // logic login here
        this.token && (await this.$router.replace("/list"));
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.login-wrapper, .login-group-form-card
  background-color: #F3F4FD !important

.login-wrapper
  padding-top: 1px !important
  height: 100vh
  .login-row
    height: 95vh
    width: 95vw
    display: flex
    justify-content: center

.login-wrapper-form
  padding-top: 18vh
  margin-left: 44px
.login-flex-image
  height: 100%
  width: 100%
  max-height: 677px
  max-width: 683px
  .login-image
    height: 100%
    width: 100%
    max-height: 677px
    max-width: 683px
    object-fit: contain

.castory
  color: #453FE3

// ---------- FORM CSS ------------ //
form
  display: flex
  flex-direction: column
  .login-group-form
    margin-bottom: 24px
    display: flex
    flex-direction: column
    padding-left: 16px
    margin-right: 4px
    .login-label
      font-size: 16px
      font-weight: 600
    .login-btn
      background-color: #453FE3
      border-radius: 12px !important
      margin-top: 24px
      padding: 28px 0 !important
      h7
        color: #FFFFFF !important
        text-transform: initial

.login-input::placeholder
  color: #AEB7CA

// --------------- MOBI --------------- //
.login-wrapper
  .height-sm
    height: unset
    width: 100vw
    margin: 0
    .login-flex-image
      display: flex
      justify-content: end
  .login-row-xs
    padding: 0 16px
    margin: 87px 0 0 0
    width: 100%

form
  .login-group-sm
    padding-left: 12px
    margin-right: 0

.login-row
  .login-col-sm
    padding: 0 16px
    margin: 87px 0 0 0
    width: 100%
    .login-group-form-card
      height: 100vh
      .v-card__title
        justify-content: center!important
      .v-card__subtitle
        text-align: center
// ------------- Invalid Form ---------------- //
.invalid-form
  input
    border-color: #FD443A !important
.login-invalid-helper-text
  color: #FD443A
  margin-bottom: 24px
  padding-bottom: 2px
</style>
