<template>
  <input
    :type="inputProps.typeInput"
    :placeholder="inputProps.placeholder"
    :id="inputProps.id"
    @input="handleChangeInput($event.target.value)"
    @focus="$emit('focus')"
    autoComplete
  />
  <!--  :append-icon="inputProps.appendIcon && getIcon(inputProps.appendIcon)"-->
  <!--  <v-text-field-->
  <!--    outlined-->
  <!--    :type="inputProps.typeInput"-->
  <!--    :placeholder="inputProps.placeholder"-->
  <!--    :id="inputProps.id"-->
  <!--    @input="(value) => $emit('input', value)"-->
  <!--    @focus="$emit('focus')"-->
  <!--    :append-icon="inputProps.appendIcon"-->
  <!--    :prepend-icon="inputProps.prependIcon"-->
  <!--    autoComplete-->
  <!--  >-->
  <!--    <template v-slot:prepend>-->
  <!--      <template v-slot:activator="{ on }">-->
  <!--        <v-icon v-on="on">-->
  <!--          <img-->
  <!--            src="https://www.google.com/search?q=image+online+link&sxsrf=APwXEdfWhdn2QireyL4I4tU58dbMaKNuiw:1683528960981&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjUrMCNkuX-AhVvrlYBHd-jBRAQ_AUoAXoECAEQAw&biw=1346&bih=853&dpr=2#imgrc=jRPtNzyvz_6SdM"-->
  <!--            alt=""-->
  <!--          />-->
  <!--        </v-icon>-->
  <!--      </template>-->
  <!--    </template>-->
  <!--  </v-text-field>-->
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
      appendIcon: {
        type: String,
        default: "",
      },
      prependIcon: {
        type: String,
        default: "",
      },
    },
  },
  methods: {
    getIcon(name) {
      return require("@/assets/icons/" + name + ".svg");
    },
    handleChangeInput(value) {
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
  background-color: #F9FBFC
  min-width: 305px
</style>
