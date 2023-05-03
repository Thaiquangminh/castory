<template>
  <LayoutList title="Danh sách bộ thẻ từ vựng" @goBrowse="handleGoBrowse">
    <TableComponent
      :values="listCards"
      :headers="tableHeaders"
      :haveOptions="true"
      cols="3"
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
      tableHeaders: ["Bộ thẻ", "Thẻ mới", "Thẻ ôn tập", ""],
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
    handleGoBrowse() {
      this.$router.push("/browse");
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
