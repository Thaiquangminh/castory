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
        <v-card elevation="0">
          <img class="login-image" src="/images/logo.jpg" />
        </v-card>
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
                <label class="mb-2 login-label">User name</label>
                <input
                  class="login-input"
                  placeholder="Type in your username"
                />
              </v-row>
              <v-row class="login-group-form">
                <label class="mb-2 login-label">Password</label>
                <input
                  class="login-input"
                  placeholder="Type in your password"
                />
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

<style lang="sass">
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

.castory
  color: #453FE3

// ---------- FORM CSS ------------ //
form
  display: flex
  flex-direction: column

.login-image
  height: 300px
  width: 300px
  object-fit: contain

.login-group-form
  display: flex
  flex-direction: column
  padding-left: 16px
  margin-right: 4px

.login-input
  padding: 16px 0 16px 16px
  border: 1px solid #D9DFEA
  border-radius: 12px
  margin-bottom: 24px
  background-color: #F9FBFC

.login-input::placeholder
  color: #AEB7CA

.login-label
  font-size: 16px
  font-weight: 600

.login-btn
  background-color: #453FE3
  color: #FFFFFF !important
  border-radius: 12px !important
  margin-top: 24px
  padding: 28px 0 !important

// --------------- MOBI --------------- //
.height-sm
  height: unset

.login-group-sm
  padding-left: 12px
  margin-right: 0

.login-col-sm
  padding: 0
</style>
