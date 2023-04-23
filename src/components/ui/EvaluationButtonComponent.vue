<template>
  <v-btn text :class="typeButton">
    <img :src="getIcon(prependIcon)" class="mr-2" />
    <v-flex
      :class="{
        easyTypeColor: typeButton === 'easyType',
        normalTypeColor: typeButton === 'normalType',
        hardTypeColor: typeButton === 'hardType',
      }"
      >{{ title }}</v-flex
    >
  </v-btn>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    prependIcon: {
      type: String,
      default: "",
    },
    typeButton: {
      type: String,
      default: "easyType",
    },
  },
  methods: {
    getIcon(name) {
      return require("@/assets/icons/" + name + ".svg");
    },
  },
};
</script>

<style lang="sass" scoped>
button
  text-transform: initial
  .hardTypeColor
    color: #F56742
  .normalTypeColor
    color: #3887FE
  .easyTypeColor
    color: #459804
.hardType
  border: 1px solid #F56742
.normalType
  border: 1px solid #3887FE
.easyType
  border: 1px solid #459804
</style>
