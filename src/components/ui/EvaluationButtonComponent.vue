<template>
  <v-btn text :class="typeButton">
    <img :src="getIcon(prependIcon)" class="mr-2" />
    <v-flex :class="typeButton">{{ title }}</v-flex>
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
      default: "easy",
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
  .hard
    color: #F56742
  .normal
    border-color: #3887FE
    color: #3887FE
  .easy
    color: #459804
</style>
