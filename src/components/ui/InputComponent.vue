<template>
  <div>
    <input
      :type="inputProps.typeInput"
      :placeholder="inputProps.placeholder"
      :id="inputProps.id"
    />
  </div>
</template>

<script>
export default {
  props: {
    inputProps: {
      typeInput: {
        type: String,
        default: "password",
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
};
</script>

<style lang="sass" scoped>
input
  width: 100%
  padding: 16px 0 16px 16px
  border: 1px solid #D9DFEA
  border-radius: 12px
  margin-bottom: 24px
  background-color: #F9FBFC
</style>
