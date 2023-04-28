<template>
  <v-simple-table fixed-header height="672px">
    <template v-slot:default>
      <thead class="table-wrapper-header">
        <tr>
          <th v-for="(item, index) in headers" :key="index">{{ item }}</th>
        </tr>
      </thead>
      <tbody class="table-wrapper-content">
        <tr
          v-for="value in values"
          :key="value.name"
          @click="handleNavigate(value.id)"
        >
          <td class="table-name">{{ value.name }}</td>
          <td class="text-center table-new-card">{{ value.newCard }}</td>
          <td class="text-center table-remind-card">{{ value.remindCard }}</td>
          <td v-if="haveOptions">
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
                  v-for="(item, index) in items"
                  :key="index"
                  link
                  @click="handleEmit(item.emitFunction, value.id)"
                >
                  <v-img :src="getIcon(item.icon)" alt="" />
                  <v-list-item-title class="ml-4 d-flex">
                    {{ item.title }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  props: {
    values: {
      type: Array,
      default: () => [],
    },
    headers: {
      type: Array,
      default: () => [],
    },
    haveOptions: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      items: [
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
  methods: {
    handleNavigate(id) {
      this.$emit("navigate", id);
    },
    getIcon(name) {
      return require("@/assets/icons/" + name + ".svg");
    },
    handleEmit(action, id) {
      return this.$emit(action, id);
    },
  },
};
</script>

<style lang="sass" scoped>
table
  border-top-right-radius: 3px
  th
    background-color: #453FE3 !important
    margin-right: 1px !important
    color: #FFFFFF !important
    font-weight: 400
    border-right: 1px solid
    &:nth-child(2), &:nth-child(3)
      text-align: center !important
    &:first-child
      border-top-left-radius: 13px
    &:last-child
      border-top-right-radius: 13px
  tr
    cursor: pointer
    td
      text-align: center
      font-weight: 600
      &:first-child
        text-align: left

.table-wrapper-content
  background-color: #F9FBFC
  .table-name
    color: #1C283D !important
  .table-new-card
    color: #3887FE
  .table-remind-card
    color: #1BB763
</style>
