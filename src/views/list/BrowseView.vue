<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3">
        <v-flex>
          <img src="@/assets/icons/button-back.svg" alt="" />
          <v-flex>Browse</v-flex>
          <TableComponent :value="tableValue" :headers="tableHeaders" />
        </v-flex>
      </v-col>
      <v-col cols="12 md=9">
        <div>Content here</div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import TableComponent from "@/components/ui/TableComponent.vue";

export default {
  components: { TableComponent },
  data() {
    return {
      tableValue: [
        { name: "Tuần 1 thi đại học (140)" },
        { name: "Tuần 1 thi đại học (140)" },
        { name: "Tuần 1 thi đại học (140)" },
      ],
      tableHeaders: ["Tất cả bộ thẻ"],
    };
  },
};
</script>
