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
            'login-col-sm': $vuetify.breakpoint.xsOnly,
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
              Log in to start learning
            </div>
            <div v-if="!isValidForm" class="mt-3 login-invalid-helper-text">
              Your user name or password is wrong!
            </div>
          </v-card-subtitle>
          <!--  --------------------Start form-------------------- -->
          <v-card-text>
            <form @submit.prevent="handleLogin">
              <v-row
                :class="[
                  'login-group-form',
                  {
                    'invalid-form': !isValidForm,
                    'login-group-sm': $vuetify.breakpoint.xsOnly,
                  },
                ]"
              >
                <label class="login-label" for="username">User name</label>
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
                <label class="login-label" for="password">Password</label>
                <InputComponent
                  :inputProps="passwordInput"
                  v-model.trim="password.value"
                />
              </v-row>
              <v-row class="login-group-form">
                <v-btn type="submit" text class="login-btn">Login</v-btn>
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
import { mapActions } from "vuex";

export default {
  components: { InputComponent },
  data() {
    return {
      usernameInput: {
        typeInput: "text",
        placeholder: "Type in your username",
        id: "username",
      },
      passwordInput: {
        typeInput: "password",
        placeholder: "Type in your password",
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
    };
  },
  methods: {
    ...mapActions("auth", ["handleSetToken"]),
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
    async handleLogin() {
      await this.validateForm();
      if (this.isValidForm) {
        //   login login here
        await this.handleSetToken("token");
        await this.$router.replace("/list");
      }
      console.log(this.username, this.password, "");
    },
  },
};
</script>

<style lang="sass" scoped>
.login-wrapper, .login-group-form-card
  background-color: #F3F4FD !important

.login-wrapper
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
    display: flex
    flex-direction: column
    padding-left: 16px
    margin-right: 4px
    .login-label
      font-size: 16px
      font-weight: 600
    .login-btn
      background-color: #453FE3
      color: #FFFFFF !important
      border-radius: 12px !important
      margin-top: 24px
      padding: 28px 0 !important


.login-input::placeholder
  color: #AEB7CA

// --------------- MOBI --------------- //
.login-wrapper
  .height-sm
    height: unset
    .login-flex-image
      display: flex
      justify-content: end
  .login-row-xs
    padding: 0 16px
    margin-top: 87px

form
  .login-group-sm
    padding-left: 12px
    margin-right: 0

.login-row
  .login-col-sm
    padding: 0

// ------------- Invalid Form ---------------- //
.invalid-form
  input
    border-color: #FD443A !important
.login-invalid-helper-text
  color: #FD443A
  margin-bottom: 24px
  padding-bottom: 2px
</style>
