<template>
  <v-btn
    >{{ title }}
    <v-icon v-if="icon" class="ml-3" small>{{ icon }}</v-icon>
  </v-btn>
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
  },
};
</script>

<style lang="sass" scoped>
button
  background-color: #453FE3 !important
  color: #FFFFFF !important
  border-radius: 12px !important
</style>
