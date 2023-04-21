<template>
  <v-container fluid class="login-wrapper" pa-0>
    <NavBarComponent />
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
          <v-card-title
            class="mb-2"
            :class="$vuetify.breakpoint.xsOnly ? 'd-flex justify-center' : ' '"
          >
            <h3>Welcome to <span class="castory">Castory</span></h3>
          </v-card-title>
          <v-card-subtitle
            class="mb-8 ml-1"
            :class="$vuetify.breakpoint.xsOnly ? 'd-flex justify-center' : ' '"
          >
            <div>Log in to start learning</div>
          </v-card-subtitle>
          <v-card-text>
            <form @submit.prevent="handleSubmitForm">
              <v-row
                :class="[
                  'login-group-form',
                  {
                    'login-group-sm': $vuetify.breakpoint.xsOnly,
                  },
                ]"
              >
                <label class="login-label" for="username">User name</label>
                <InputComponent
                  :inputProps="usernameInput"
                  v-model.trim="username"
                />
              </v-row>
              <v-row class="login-group-form">
                <label class="login-label" for="password">Password</label>
                <InputComponent
                  :inputProps="passwordInput"
                  v-model.trim="password"
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
import NavBarComponent from "@/components/ui/NavBarComponent.vue";
import InputComponent from "@/components/ui/InputComponent.vue";

export default {
  components: { InputComponent, NavBarComponent },
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
      username: "",
      password: "",
    };
  },
  methods: {
    handleSubmitForm() {
      console.log(this.username, this.password);
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
</style>
