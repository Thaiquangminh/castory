<template>
  <div>
    <v-btn
      v-if="!isGrayBtn"
      class="blue-btn"
      @click="handleClickBtn"
      elevation="0"
    >
      <v-icon v-if="prependIcon" class="mr-2" small>{{ prependIcon }}</v-icon>
      <h7>{{ title }}</h7>
      <v-icon v-if="appendIcon" class="ml-3" small>{{ appendIcon }}</v-icon>
    </v-btn>
    <v-btn
      v-if="isGrayBtn"
      class="gray-btn"
      @click="handleClickBtn"
      elevation="0"
    >
      <v-icon v-if="prependIcon" class="mr-2" small>{{ prependIcon }}</v-icon>
      <h7>{{ title }}</h7>
      <v-icon v-if="appendIcon" class="ml-3" small>{{ appendIcon }}</v-icon>
    </v-btn>
  </div>
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
    appendIcon: {
      type: String,
      default: "",
    },
    isGrayBtn: {
      type: Boolean,
      default: false,
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
h7
  color: #FFFFFF !important
</style>
