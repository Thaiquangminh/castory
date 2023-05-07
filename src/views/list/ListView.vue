<template>
  <LayoutList title="Danh sách bộ thẻ" @goBrowse="handleGoBrowse">
    <TableComponent
      :items="listCards"
      :headers="tableHeaders"
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
import DialogComponent from "@/components/ui/DialogComponent.vue";
import { mapActions, mapGetters } from "vuex";
import TableComponent from "@/components/ui/TableComponent.vue";

export default {
  components: {
    TableComponent,
    DialogComponent,
    LayoutList,
  },
  data() {
    return {
      showDialogRemind: false,
      showDialogCustomRemind: false,
      tableHeaders: [
        { text: "Bộ thẻ", value: "cardSetName", sortable: false },
        { text: "Thẻ mới", value: "newCard", align: "center", sortable: false },
        {
          text: "Thẻ ôn tập",
          value: "reviewCard",
          align: "center",
          sortable: false,
        },
        { text: "", value: "actions", align: "center", sortable: false },
      ],
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
