<template>
  <v-row>
    <v-col>
      <ButtonComponent
        title="Học lại"
        prependIcon="fa-rotate-right"
        isGrayBtn
      />
    </v-col>
    <v-col>
      <EvaluationButtonComponent title="Khó" prependIcon="hard" />
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
