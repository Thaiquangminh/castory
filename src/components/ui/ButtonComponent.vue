<template>
  <div>
    <v-btn v-if="!isGrayBtn" class="blue-btn" @click="handleClickBtn"
      >{{ title }}
      <v-icon v-if="icon" class="ml-3" small>{{ icon }}</v-icon>
    </v-btn>
    <v-btn v-if="isGrayBtn" class="gray-btn" @click="handleClickBtn"
      >{{ title }}
      <v-icon v-if="icon" class="ml-3" small>{{ icon }}</v-icon>
    </v-btn>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      default: "",
      type: String,
    },
    icon: {
      default: "",
      type: String,
    },
    isGrayBtn: {
      default: false,
      type: Boolean,
    },
  },
  methods: {
    handleClickBtn() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="sass" scoped>
button
  color: #FFFFFF !important
  border-radius: 12px !important
  text-transform: initial
  height: 48px !important
  min-width: 82px !important
.blue-btn
  background-color: #453FE3 !important
.gray-btn
  background-color: #384961 !important
</style>
