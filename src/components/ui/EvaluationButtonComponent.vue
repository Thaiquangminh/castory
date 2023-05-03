<template>
  <v-btn text :class="typeButton" @click="handleClickEvaluationBtn">
    <img :src="getIcon(prependIcon)" class="mr-2" />
    <div
      :class="{
        easyTypeColor: typeButton === 'easyType',
        normalTypeColor: typeButton === 'normalType',
        hardTypeColor: typeButton === 'hardType',
      }"
    >
      <span>{{ title }}</span>
    </div>
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
    handleClickEvaluationBtn() {
      if (this.typeButton === "easyType") {
        this.$parent.$emit("clickEasyType");
      } else if (this.typeButton === "normalType") {
        this.$parent.$emit("clickNormalType");
      } else if (this.typeButton === "hardType") {
        this.$parent.$emit("clickHardType");
      }
    },
  },
};
</script>

<style lang="sass" scoped>
button
  text-transform: initial
  width: 100%
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
