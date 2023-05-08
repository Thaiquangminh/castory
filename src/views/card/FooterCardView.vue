<template>
  <v-row
    class="d-flex align-center"
    :class="$vuetify.breakpoint.xsOnly ? 'flex-nowrap' : ''"
  >
    <!--    btn học lại-->
    <v-col
      cols="12"
      md="3"
      sm="3"
      xs="3"
      class="d-flex flex-column"
      :class="$vuetify.breakpoint.xsOnly ? 'mw-25' : ''"
    >
      <ButtonComponent title="Học lại" prepend-icon="reload" isGrayBtn />
      <captionOne class="text-center"> 1 phút </captionOne>
    </v-col>
    <!--    chọn option khó dễ -->
    <v-col
      cols="12"
      md="9"
      sm="9"
      xs="9"
      :class="$vuetify.breakpoint.xsOnly ? 'mw-83' : ''"
    >
      <v-row class="d-flex justify-center">
        <v-col
          cols="12"
          md="4"
          sm="4"
          xs="3"
          class="d-flex flex-column align-center px-1"
          :class="$vuetify.breakpoint.xsOnly ? 'mw-25' : ''"
        >
          <EvaluationButtonComponent
            title="Dễ"
            prependIcon="easy"
            typeButton="easyType"
          />
          <captionOne class="mt-1"> 6 phút </captionOne>
        </v-col>
        <v-col
          cols="12"
          md="4"
          sm="4"
          :class="$vuetify.breakpoint.xsOnly ? 'mw-25' : ''"
          class="d-flex flex-column align-center px-1"
          ><EvaluationButtonComponent
            title="Tốt"
            prependIcon="normal"
            typeButton="normalType"
          />
          <captionOne class="mt-1"> 10 phút </captionOne>
        </v-col>
        <v-col
          cols="12"
          md="4"
          sm="4"
          xs="4"
          class="d-flex flex-column align-center px-1"
          :class="$vuetify.breakpoint.xsOnly ? 'mw-25' : ''"
          ><EvaluationButtonComponent
            title="Khó"
            prependIcon="hard"
            typeButton="hardType"
          />
          <captionOne class="mt-1"> 4 ngày </captionOne>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import ButtonComponent from "@/components/ui/ButtonComponent.vue";
import EvaluationButtonComponent from "@/components/ui/EvaluationButtonComponent.vue";

export default {
  components: { EvaluationButtonComponent, ButtonComponent },
};
</script>

<style lang="sass" scoped>
captionOne
  margin-top: 4px
.mw-25
  max-width: 25%
.mw-83
  max-width: 83%
</style>
