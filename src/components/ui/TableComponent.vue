<template>
  <v-simple-table fixed-header height="672px">
    <template v-slot:default>
      <thead class="table-wrapper-header">
        <tr>
          <th class="text-left table-header-border-left">Bộ thẻ</th>
          <th class="text-center">Thẻ mới</th>
          <th class="text-center">Thẻ ôn tập</th>
          <th class="text-left table-header-border-right"></th>
        </tr>
      </thead>
      <tbody class="table-wrapper-content">
        <tr v-for="item in value" :key="item.name" @click="navigate(item.id)">
          <td class="table-name">{{ item.name }}</td>
          <td class="text-center table-new-card">{{ item.newCard }}</td>
          <td class="text-center table-remind-card">{{ item.remindCard }}</td>
          <td>
            <img src="@/assets/icons/menu.svg" alt="" />
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    navigate(id) {
      this.$emit("navigate", id);
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
  tr
    cursor: pointer
    td
      font-weight: 600

.table-header-border-left
  border-top-left-radius: 12px

.table-header-border-right
  border-top-right-radius: 13px

.table-wrapper-content
  background-color: #F9FBFC
  .table-name
    color: #1C283D !important
  .table-new-card
    color: #3887FE
  .table-remind-card
    color: #1BB763
</style>
