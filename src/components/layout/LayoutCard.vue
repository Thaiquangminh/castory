<template>
  <v-container fluid>
    <v-row class="layout-row mt-8">
      <v-col cols="12" md="8">
        <v-card elevation="0">
          <v-card-subtitle class="layout-subtitle">
            <p class="mb-1">{{ subtitle }}</p>
          </v-card-subtitle>
          <v-card-title class="layout-title">
            <h4>{{ title }}</h4>
          </v-card-title>
          <v-row class="layout-row-content">
            <v-col cols="12" md="10">
              <v-card class="layout-card-wrapper" elevation="0">
                <v-row class="ma-0">
                  <v-col cols="12" class="layout-card-actions">
                    <p class="layout-type">{{ type }}</p>
                    <img src="/images/menu.svg" />
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
};
</script>

<style lang="sass" scoped>
.layout-row
  display: flex
  justify-content: center
  align-items: center

.layout-title
  padding: 0

.layout-subtitle
  padding: 0

.layout-row-content
  display: flex
  justify-content: center

.layout-card-wrapper
  margin-top: 56px
  border-radius: 16px
  background-color: #F9FBFC
  min-height: 585px

.layout-card-actions
  display: flex
  justify-content: space-between
  padding: 24px

.layout-type
  padding: 4px
  background-color: #E9EDF5
  border-radius: 6px
</style>
