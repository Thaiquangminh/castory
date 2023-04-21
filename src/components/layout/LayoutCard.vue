<template>
  <v-container fluid>
    <v-row class="d-flex justify-center align-center mt-8">
      <v-col cols="12" md="8">
        <v-card elevation="0">
          <v-flex class="d-flex align-center mb-2">
            <img
              src="@/assets/icons/button-back.svg"
              alt=""
              @click="handleBackPage"
              style="cursor: pointer"
            />
            <v-card-subtitle class="pa-0 d-flex align-center ml-2">
              <p class="mb-0">{{ subtitle }}</p>
            </v-card-subtitle>
          </v-flex>
          <v-card-title class="pa-0">
            <h4>{{ title }}</h4>
          </v-card-title>
          <v-row class="d-flex justify-center">
            <v-col cols="12" md="10">
              <v-card class="layout-card-wrapper" elevation="0">
                <v-row class="ma-0">
                  <v-col cols="12" class="d-flex justify-space-between pa-0">
                    <p class="layout-type">{{ type }}</p>
                    <img
                      src="@/assets/icons/menu.svg"
                      @click="handleMoreOption"
                      style="cursor: pointer"
                    />
                  </v-col>
                </v-row>
                <slot></slot>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    subtitle: String,
    title: String,
    type: String,
  },
  methods: {
    handleMoreOption() {
      this.$emit("options");
    },
    handleBackPage() {
      this.$emit("back");
    },
  },
};
</script>

<style lang="sass" scoped>
.layout-card-wrapper
  margin-top: 56px
  border-radius: 16px
  background-color: #F9FBFC
  min-height: 585px
  padding: 24px

.layout-type
  padding: 4px
  background-color: #E9EDF5
  border-radius: 6px
</style>
