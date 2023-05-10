<template>
  <v-data-table
    height="70vh"
    :headers="headers"
    :items="items"
    :hide-default-footer="true"
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
        <v-list class="pa-0 layout-list" style="min-width: 180px">
          <v-list-item
            class="px-5 py-1"
            v-for="(option, index) in options"
            :key="index"
            link
            @click="handleEmit(option.emitFunction, item)"
          >
            <v-img :src="option.icon && getIcon(option.icon)" alt="" />
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
      default: () => [],
    },
    options: {
      type: Array,
      default: () => [],
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
    handleEmit(action, item) {
      return this.$emit(action, item);
    },
    handleNavigate(id) {
      this.$emit("navigate", id);
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="sass" scoped>
.v-data-table
  border: 1px solid rgba(0, 0, 0, 0.12)
  border-top-left-radius: 12px
  border-top-right-radius: 12px
::v-deep .v-data-table__wrapper
  .v-data-table-header
    background-color: #453FE3 !important
    th
      border-right: 1px solid
      color: #FFFFFF !important
      &:first-child
        border-top-left-radius: 12px
      &:last-child
        border-top-right-radius: 12px
        border-right: none
  tbody
    tr
      cursor: pointer
      td
        font-weight: 600
        &:nth-child(2)
          color: #3887FE
        &:nth-child(3)
          color: #1BB763
</style>
