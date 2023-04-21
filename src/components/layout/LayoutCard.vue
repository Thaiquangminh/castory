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
                    <v-menu
                      offset-y
                      transition="slide-y-transition"
                      location="end"
                    >
                      <template v-slot:activator="{ attrs, on }">
                        <img
                          src="@/assets/icons/menu.svg"
                          style="cursor: pointer"
                          v-bind="attrs"
                          v-on="on"
                          alt=""
                        />
                      </template>

                      <v-list class="pa-0 layout-list">
                        <v-list-item
                          class="px-5 py-1"
                          v-for="(item, index) in items"
                          :key="index"
                          link
                          @click="handleDelete"
                        >
                          <v-img :src="getIcon(item.icon)" alt="" />
                          <v-list-item-title
                            class="ml-4 d-flex"
                            :style="item.color"
                          >
                            {{ item.title }}
                          </v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
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
  data: () => ({
    items: [
      {
        color: "color: #1BB763",
        icon: "save",
        title: "Lưu thẻ",
      },
      {
        color: "color: #FD443A",
        icon: "trash",
        title: "Xóa thẻ",
      },
      {
        color: "color: #3887FE",
        icon: "back",
        title: "Quay lại",
      },
    ],
  }),
  props: {
    subtitle: String,
    title: String,
    type: String,
  },
  methods: {
    handleBackPage() {
      this.$emit("back");
    },
    getIcon(name) {
      return require("@/assets/icons/" + name + ".svg");
    },
    handleDelete() {
      this.$emit("delete");
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

.layout-list
  min-width: 185px
  min-height: 168px
.v-menu__content
  border-radius: 12px
  //left: 62vw !important
  //top: 25vh !important
.v-list-item__title
  font-style: normal
  font-weight: 600
  font-size: 16px
  line-height: 150%
</style>
