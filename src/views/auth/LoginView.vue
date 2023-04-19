<template>
  <v-container fluid class="login-wrapper">
    <v-row
      :class="[
        'login-row',
        {
          'height-sm': $vuetify.breakpoint.smAndDown,
        },
      ]"
    >
      <v-col cols="12" md="6" sm="12" xs="12">
        <v-flex :class="[{ 'login-flex-image': $vuetify.breakpoint.mdAndUp }]">
          <img class="login-image" src="@/assets/logo.svg" />
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
          <v-card-title class="mb-2">
            <h3>Welcome to <span class="castory">Castory</span></h3>
          </v-card-title>
          <v-card-subtitle class="mb-8 ml-1">
            <div>Log in to start learning</div>
          </v-card-subtitle>
          <v-card-text>
            <form>
              <v-row
                :class="[
                  'login-group-form',
                  {
                    'login-group-sm': $vuetify.breakpoint.xsOnly,
                  },
                ]"
              >
                <label class="mb-2 login-label" for="username">User name</label>
                <InputComponent :inputProps="usernameInput" />
              </v-row>
              <v-row class="login-group-form">
                <label class="mb-2 login-label" for="password">Password</label>
                <InputComponent :inputProps="passwordInput" />
              </v-row>
              <v-row class="login-group-form">
                <v-btn text class="login-btn">Login</v-btn>
              </v-row>
            </form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      usernameInput: {
        type: "text",
        placeholder: "Type in your username",
        id: "username",
      },
      passwordInput: {
        type: "password",
        placeholder: "Type in your password",
        id: "password",
      },
    };
  },
};
</script>

<style lang="sass" scoped>
.login-wrapper, .login-group-form-card
  background-color: #F3F4FD !important

.login-wrapper
  height: 100%
  .login-row
    height: 100%
    display: flex
    justify-content: center
    align-items: center

.login-wrapper-form
  margin-left: 46px

.login-image
  height: 100%
  width: 100%
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
    //.login-input
    //  padding: 16px 0 16px 16px
    //  border: 1px solid #D9DFEA
    //  border-radius: 12px
    //  margin-bottom: 24px
    //  background-color: #F9FBFC
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

form
  .login-group-sm
    padding-left: 12px
    margin-right: 0

.login-row
  .login-col-sm
    padding: 0
</style>
<script setup>
import InputComponent from "@/components/ui/InputComponent.vue";
</script>
