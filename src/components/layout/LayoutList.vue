<template>
  <v-container fluid>
    <v-row class="d-flex flex-column justify-center align-center mt-5">
      <v-col cols="12" md="8">
        <v-card elevation="0" class="d-flex justify-space-between mb-6">
          <v-card-title class="pa-0">
            <h4 v-if="$vuetify.breakpoint.smAndUp">{{ title }}</h4>
            <h5 v-if="$vuetify.breakpoint.xsOnly">{{ title }}</h5>
          </v-card-title>
          <ButtonComponent
            title="Browse"
            :isGrayBtn="true"
            @click="handleGoBrowse"
          />
        </v-card>
        <slot></slot>
        <v-flex class="mt-12 d-flex justify-center">
          <h7>Đã học 24 thẻ trong: 3.46 phút</h7> &nbsp;
          <text-averta-400> (17.32 giây/thẻ) </text-averta-400>
        </v-flex>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ButtonComponent from "@/components/ui/ButtonComponent.vue";

export default {
  components: { ButtonComponent },
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleGoBrowse() {
      this.$emit("goBrowse");
    },
  },
};
</script>
