<template>
  <input
    :type="inputProps.typeInput"
    :placeholder="inputProps.placeholder"
    :id="inputProps.id"
    @input="handleUpdateValue($event.target.value)"
  />
</template>

<script>
export default {
  props: {
    inputProps: {
      typeInput: {
        type: String,
        default: "text",
      },
      placeholder: {
        type: String,
        default: "",
      },
      id: {
        type: String,
        default: "",
      },
    },
  },
  methods: {
    handleUpdateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style lang="sass" scoped>
input
  width: 100%
  padding: 16px 0 16px 16px
  border: 1px solid #D9DFEA
  border-radius: 12px
  margin-bottom: 24px
  margin-top: 8px
  background-color: #F9FBFC
  min-width: 305px

.inputIcon
  position: absolute
</style>
