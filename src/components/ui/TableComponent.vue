<template>
  <v-data-table
    height="70vh"
    :headers="headers"
    :items="items"
    :hide-default-footer="true"
    class="elevation-1"
    disable-pagination
    mobile-breakpoint="0"
    @click:row="(item) => handleNavigate(item.id)"
  >
    <template v-slot:[`item.actions`]="{ item }">
      <v-menu offset-y transition="slide-y-transition" location="end">
        <!-- -------------------Menu list-------------------- -->
        <template v-slot:activator="{ attrs, on }">
          <img
            src="@/assets/icons/menu.svg"
            style="cursor: pointer; padding: 15px 2px"
            v-bind="attrs"
            v-on="on"
            alt=""
          />
        </template>
        <v-list class="pa-0 layout-list">
          <v-list-item
            class="px-5 py-1"
            v-for="(option, index) in options"
            :key="index"
            link
            @click="handleEmit(option.emitFunction, item.id)"
          >
            <v-img :src="getIcon(option.icon)" alt="" />
            <v-list-item-title class="ml-4 d-flex">
              {{ option.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-data-table>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      default: () => [],
    },
    items: {
      type: Array,
    },
    cols: {
      type: Number,
      default: null,
    },
  },
  methods: {
    getIcon(name) {
      return require("@/assets/icons/" + name + ".svg");
    },
    handleEmit(action, id) {
      return this.$emit(action, id);
    },
    handleNavigate(id) {
      this.$emit("navigate", id);
    },
  },
  data() {
    return {
      options: [
        {
          color: "color: #1BB763",
          icon: "bookmark",
          title: "Ôn tập trước",
          emitFunction: "study",
        },
        {
          color: "color: #FD443A",
          icon: "openbook",
          title: "Ôn tập ngẫu nhiên",
          emitFunction: "randomStudy",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
::v-deep .v-data-table__wrapper
  .v-data-table-header
    background-color: #453FE3 !important
    th
      border-right: 1px solid
      color: #FFFFFF !important
      &:first-child
        border-top-left-radius: 13px
      &:last-child
        border-top-right-radius: 13px
        border-right: none
  tbody
    tr
      cursor: pointer
      &:last-child
        border-bottom: thin solid rgba(0, 0, 0, 0.12)
      td
        font-weight: 600
        &:nth-child(2)
          color: #3887FE
        &:nth-child(3)
          color: #1BB763
        &:first-child
          border-left: thin solid rgba(0, 0, 0, 0.12)
        &:last-child
          border-right: thin solid rgba(0, 0, 0, 0.12)
</style>
