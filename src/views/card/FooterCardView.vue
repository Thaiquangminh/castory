<template>
  <v-row class="d-flex align-center">
    <v-col cols="12" md="3" sm="3" xs="3" class="d-flex flex-column">
      <ButtonComponent
        title="Học lại"
        prependIcon="fa-rotate-right"
        isGrayBtn
      />
      <span class="text-center" style="width: 108px">1 phút</span>
    </v-col>
    <v-col cols="12" md="9" sm="9" xs="9">
      <v-row>
        <v-col
          cols="12"
          md="4"
          sm="4"
          xs="4"
          class="d-flex flex-column align-center px-1"
        >
          <EvaluationButtonComponent
            title="Dễ"
            prependIcon="easy"
            typeButton="easyType"
          />
          <span>6 phút</span>
        </v-col>
        <v-col
          cols="12"
          md="4"
          sm="4"
          xs="4"
          class="d-flex flex-column align-center px-1"
          ><EvaluationButtonComponent
            title="Tốt"
            prependIcon="normal"
            typeButton="normalType"
          />
          <span>10 phút</span>
        </v-col>
        <v-col
          cols="12"
          md="4"
          sm="4"
          xs="4"
          class="d-flex flex-column align-center px-1"
          ><EvaluationButtonComponent
            title="Khó"
            prependIcon="hard"
            typeButton="hardType"
          />
          <span>4 ngày</span>
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
span
  font-weight: 400
  font-size: 14px
  margin-top: 4px
</style>
