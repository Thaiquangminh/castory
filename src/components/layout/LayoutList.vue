<template>
  <v-container fluid>
    <v-row class="d-flex flex-column justify-center align-center mt-8">
      <v-col cols="12" md="8">
        <v-card elevation="0" class="d-flex justify-space-between mb-6">
          <v-card-title class="pa-0">
            <h4>{{ title }}</h4>
          </v-card-title>
          <ButtonComponent title="Browse" :isGrayBtn="true" />
        </v-card>
        <slot></slot>
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
};
</script>
