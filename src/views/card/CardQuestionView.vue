<template>
  <v-container fluid>
    <LayoutCard
      :title="getTitle"
      subtitle="Bộ thẻ:"
      type="CÂU HỎI"
      timeLeft="Còn 1 giờ 16 phút"
      @openDeleteDialog="handleOpenDeleteDialog"
      @back="handleBackPage"
      @pressEnter="handleAnswer"
      @backCard="handleBackCard"
    >
      <v-layout class="d-flex flex-column" style="min-height: 432px">
        <div
          class="mb-2 justify-center d-flex"
          :class="{
            'mb-4': $vuetify.breakpoint.xsOnly,
          }"
        >
          <!--  ------------- Question title ----------------- -->
          <h4>
            Phân biệt <span class="font-weight-bold text-2">elder</span> và
            <span class="font-weight-bold text-2">elderly</span>
          </h4>
        </div>
        <!--  --------------------Input answer------------------- -->
        <div>
          <div class="mb-2">
            <label for="answer">
              <h7>Câu trả lời:</h7>
            </label>
          </div>
          <InputComponent :inputProps="answerInput" v-model="answerValue" />
        </div>
        <div class="d-flex align-center justify-space-between mt-4">
          <div
            class="d-flex"
            :class="{
              'flex-column': $vuetify.breakpoint.xsOnly,
            }"
          >
            <captionOne>
              Số thẻ mới:<span class="ml-2 text-1">140</span>
            </captionOne>
            <captionOne :class="{ 'ml-8': $vuetify.breakpoint.smAndUp }">
              Số thẻ cần ôn:<span class="ml-2 text-2">42</span>
            </captionOne>
          </div>
          <ButtonComponent
            title="Đáp án"
            append-icon="arrow-right"
            @click="handleAnswer"
          />
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
import InputComponent from "@/components/ui/InputComponent.vue";
import ButtonComponent from "@/components/ui/ButtonComponent.vue";
import DialogComponent from "@/components/ui/DialogComponent.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    DialogComponent,
    ButtonComponent,
    InputComponent,
    LayoutCard,
  },
  created() {
    if (localStorage.getItem("setCardId") === null) {
      this.setCardId = this.$store.getters["card/getSetCardId"];
    } else {
      this.setCardId = localStorage.getItem("setCardId");
    }
    this.handleGetElementIndex(this.setCardId);
  },
  mounted() {
    this.handleSetId(this.$route.params.id);
  },
  data() {
    return {
      componentKey: 0,
      answerInput: {
        placeholder: "Nhập câu trả lời của bạn",
        id: "answer",
      },
      answerValue: "",
      setCardId: "",
      showDialog: false,
    };
  },
  computed: {
    ...mapGetters("card", [
      "getPreviousElementId",
      "getNextElementId",
      "getSetCardId",
    ]),
    getTitle() {
      return `Tuần ${this.getSetCardId} thi đại học`;
    },
  },
  methods: {
    ...mapActions("list", ["handleRemoveProduct"]),
    ...mapActions("card", ["handleGetElementIndex", "handleSetId"]),
    // ---------------------- Handle open and close dialogs -------------------- //
    handleShowDialog() {
      this.showDialog = true;
    },
    handleCloseDialog() {
      this.showDialog = false;
    },
    handleOpenDeleteDialog() {
      this.handleShowDialog();
    },
    handleBackPage() {
      this.$router.push(`/list`);
    },
    handleAnswer() {
      console.log(this.answerValue);
      this.$router.push(`/answer/${this.setCardId}`);
    },
    //   ----------Delete card + back card from list cards action-------- //
    handleConfirmRequest() {
      this.handleCloseDialog();
      this.handleRemoveProduct(this.setCardId);
      this.$router.push(`/list/${this.getNextElementId}`);
    },
    handleBackCard() {
      this.$router.push(`/list/${this.getPreviousElementId}`);
    },
  },
};
</script>

<style lang="sass" scoped>
// will change later
.text-1
  color: #3887FE
.text-2
  color: #1BB763
</style>
