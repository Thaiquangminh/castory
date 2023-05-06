<template>
  <v-container fluid>
    <LayoutCard
      :title="getTitle"
      :haveFooter="true"
      subtitle="Bộ thẻ:"
      type="ĐÁP ÁN"
      timeLeft="Còn 1 giờ 16 phút"
      @openDeleteDialog="handleOpenDeleteDialog"
      @back="handleBackPage"
      @clickEasyType="handleClickEasyType"
      @clickNormalType="handleClickEasyType"
      @clickHardType="handleClickEasyType"
    >
      <v-layout
        class="d-flex flex-column align-center"
        style="min-height: 332px"
      >
        <div
          class="mb-2 justify-center d-flex"
          :class="{
            'mb-4': $vuetify.breakpoint.xsOnly,
          }"
        >
          <!--  ----------------- Question title ------------------- -->
          <h4>
            Phân biệt <span class="text-2">elder</span> và
            <span class="text-2">elderly</span>
          </h4>
        </div>
        <!--  ----------------- Answer content ------------------ -->
        <!--  ----------------------Example content--------------------      -->
        <div class="mt-4 text-center">
          <h7>My elder brother</h7>
          <text-averta-400 class="text-center">
            (Anh trai tôi.)
          </text-averta-400>
        </div>
        <div class="mt-4 text-center">
          <h7>Children have no respect for their elders nowadays.</h7>
          <text-averta-400 class="text-center">
            (Trẻ em ngày nay không còn tôn trọng người lớn tuổi.)
          </text-averta-400>
        </div>
        <div class="mt-4 text-center">
          <h7>My elder brother</h7>
          <text-averta-400 class="text-center">
            (Anh trai tôi.)
          </text-averta-400>
        </div>
      </v-layout>
      <DialogComponent
        :showDialogValue="showDialog"
        typeDialog="delete"
        @closeDialog="handleCloseDialog"
        @confirmRequest="handleConfirmRequest"
      />
    </LayoutCard>
  </v-container>
</template>
<script>
import LayoutCard from "@/components/layout/LayoutCard.vue";
import { mapActions, mapGetters } from "vuex";
import DialogComponent from "@/components/ui/DialogComponent.vue";

export default {
  components: { DialogComponent, LayoutCard },
  data() {
    return {
      setCardId: null,
      showDialog: false,
    };
  },
  created() {
    this.setCardId = localStorage.getItem("setCardId");
  },
  methods: {
    ...mapActions("list", ["handleRemoveProduct"]),
    getIcon(name) {
      return require("@/assets/icons/" + name + ".svg");
    },
    handleBackPage() {
      this.$router.push(`/list`);
    },
    // handle dialog
    handleShowDialog() {
      this.showDialog = true;
    },
    handleCloseDialog() {
      this.showDialog = false;
    },
    handleOpenDeleteDialog() {
      this.handleShowDialog();
    },
    handleConfirmRequest() {
      this.handleCloseDialog();
      this.handleRemoveProduct(this.setCardId);
    },
    //   handle study again
    handleClickEasyType() {
      console.log("con me may bo log dc r");
    },
  },
  computed: {
    ...mapGetters("card", ["getSetCardId"]),
    getTitle() {
      return `Tuần ${this.getSetCardId} thi đại học`;
    },
  },
};
</script>

<style lang="sass" scoped>
h4
  font-size: 28px
  font-weight: 400

// will change later
.text-1
  color: #3887FE
.text-2
  color: #1BB763
</style>
