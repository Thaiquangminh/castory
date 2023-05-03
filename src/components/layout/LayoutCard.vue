<template>
  <v-container fluid>
    <v-row
      class="d-flex justify-center align-center"
      :class="{
        'mt-8': $vuetify.breakpoint.smAndUp,
      }"
    >
      <v-col
        cols="12"
        md="8"
        :class="{
          'pt-4 px-1': $vuetify.breakpoint.xsOnly,
        }"
      >
        <!--  ----------Header---------- -->
        <v-card elevation="0">
          <v-flex class="d-flex">
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
            <ButtonComponent
              title="Browse"
              isGrayBtn
              @click="handleNavigateBrowse"
            />
          </v-flex>

          <v-card-title
            class="pa-0 align-baseline"
            :class="{
              'd-flex flex-column align-start': $vuetify.breakpoint.xsOnly,
            }"
          >
            <h4>{{ title }}</h4>
            <span
              class="layout-card-time-left"
              :class="{
                'ml-2': $vuetify.breakpoint.smAndUp,
              }"
              >{{ timeLeft }}</span
            >
          </v-card-title>
          <!-- ----------Start header of content---------- -->
          <v-row class="d-flex justify-center">
            <v-col cols="12" md="10">
              <v-card
                class="layout-card-wrapper"
                :class="{
                  'pa-2 mt-4': $vuetify.breakpoint.xsOnly,
                }"
                elevation="0"
              >
                <v-row class="ma-0">
                  <v-col cols="12" class="d-flex justify-space-between pa-0">
                    <p class="layout-type">{{ type }}</p>
                    <!-- --------------------Menu item------------------- -->
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
                          @click="handleEmit(item.emitFunction)"
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
                <div class="mt-8">
                  <v-divider v-if="haveFooter" class="mb-6"></v-divider>
                  <FooterCardView
                    v-if="haveFooter"
                    @clickEasyType="handleClickEasyType"
                    @clickNormalType="handleClickNormalType"
                    @clickHardType="handleClickHardType"
                  />
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ButtonComponent from "@/components/ui/ButtonComponent.vue";
import FooterCardView from "@/views/card/FooterCardView.vue";

export default {
  props: {
    subtitle: String,
    title: String,
    type: String,
    timeLeft: String,
    haveFooter: {
      type: Boolean,
      default: false,
    },
  },
  components: { FooterCardView, ButtonComponent },
  data: () => ({
    items: [
      {
        color: "color: #1BB763",
        icon: "save",
        title: "Lưu thẻ",
        emitFunction: "saveCard",
      },
      {
        color: "color: #FD443A",
        icon: "trash",
        title: "Xóa thẻ",
        emitFunction: "openDeleteDialog",
      },
      {
        color: "color: #3887FE",
        icon: "back",
        title: "Quay lại",
        emitFunction: "backCard",
      },
    ],
  }),
  methods: {
    getIcon(name) {
      return require("@/assets/icons/" + name + ".svg");
    },
    handleBackPage() {
      this.$emit("back");
    },
    handleEmit(action) {
      return this.$emit(action);
    },
    handleNavigateBrowse() {
      this.$router.push("/browse");
    },
    // emit study again methods
    handleClickEasyType() {
      this.$emit("clickEasyType");
    },
    handleClickNormalType() {
      this.$emit("clickEasyType");
    },
    handleClickHardType() {
      this.$emit("clickEasyType");
    },
  },
};
</script>

<style lang="sass" scoped>
.layout-card-wrapper
  margin-top: 56px
  border-radius: 16px
  background-color: #F9FBFC
  padding: 24px

.layout-card-time-left
  color: #384961
  font-size: 16px
  font-weight: 400

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

// ------------------- Mobile ------------------------ //
.layout-card-wrapper-xs
  padding: 8px
  margin-top: 16px
</style>
