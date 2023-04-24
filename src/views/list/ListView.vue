<template>
  <LayoutList title="Danh sách bộ thẻ từ vựng">
    <TableComponent
      :value="listCards"
      @navigate="handleNavigateToCard"
      @study="handleStudy"
      @randomStudy="handleRandomStudy"
    />
    <DialogComponent
      typeDialog="remind"
      :showDialogValue="showDialogRemind"
      @closeDialog="handleCloseDialog"
    />
    <DialogComponent
      typeDialog="customRemind"
      :showDialogValue="showDialogCustomRemind"
      @closeDialog="handleCloseDialog"
    />
  </LayoutList>
</template>

<script>
import LayoutList from "@/components/layout/LayoutList.vue";
import TableComponent from "@/components/ui/TableComponent.vue";
import DialogComponent from "@/components/ui/DialogComponent.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { DialogComponent, TableComponent, LayoutList },
  data() {
    return {
      showDialogRemind: false,
      showDialogCustomRemind: false,
    };
  },
  computed: {
    ...mapGetters("list", ["getListCard"]),
    listCards() {
      return this.getListCard;
    },
  },
  methods: {
    ...mapActions("card", ["handleSetId"]),
    handleNavigateToCard(id) {
      this.handleSetId(id);
      this.$router.push(`/list/${id}`);
    },
    handleStudy() {
      this.showDialogRemind = true;
    },
    handleRandomStudy() {
      this.showDialogCustomRemind = true;
    },
    handleCloseDialog() {
      this.showDialogCustomRemind = false;
      this.showDialogRemind = false;
    },
  },
};
</script>
