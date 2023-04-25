<template>
  <v-container fluid>
    <LayoutCard
      :title="getTitle"
      subtitle="Bộ thẻ:"
      type="CÂU HỎI"
      timeLeft="Còn 1 giờ 16 phút"
      @openDeleteDialog="handleOpenDeleteDialog"
      @back="handleBackPage"
      @backCard="handleBackCard"
    >
      <v-layout class="d-flex flex-column">
        <v-flex
          class="mb-2 justify-center d-flex"
          :class="{
            'mb-4': $vuetify.breakpoint.xsOnly,
          }"
        >
          <h4>
            Phân biệt <span class="font-weight-bold text-2">elder</span> và
            <span class="font-weight-bold text-2">elderly</span>
          </h4>
        </v-flex>
        <v-flex>
          <label for="answer" class="card-answer">Câu trả lời:</label>
          <InputComponent :inputProps="answerInput" v-model="answerValue" />
        </v-flex>
        <v-flex class="d-flex align-center justify-space-between">
          <div
            class="d-flex"
            :class="{
              'flex-column': $vuetify.breakpoint.xsOnly,
            }"
          >
            <div>Số thẻ mới:<span class="ml-2 text-1">140</span></div>
            <div :class="{ 'ml-8': $vuetify.breakpoint.smAndUp }">
              Số thẻ cần ôn:<span class="ml-2 text-2">42</span>
            </div>
          </div>
          <ButtonComponent
            title="Đáp án"
            append-icon="fa-arrow-right"
            @click="handleAnswer"
          />
        </v-flex>
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
    if (localStorage.getItem("cardId") === null) {
      this.cardId = this.$store.getters["card/getCardId"];
    } else {
      this.cardId = localStorage.getItem("cardId");
    }
    this.handleGetElementIndex(this.cardId);
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
      cardId: "",
      showDialog: false,
    };
  },
  computed: {
    ...mapGetters("card", [
      "getPreviousElementId",
      "getNextElementId",
      "getCardId",
    ]),
    getTitle() {
      return `Tuần ${this.getCardId} thi đại học`;
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
    },
    //   ----------Delete card + back card from list cards action-------- //
    handleConfirmRequest() {
      this.handleCloseDialog();
      this.handleRemoveProduct(this.cardId);
      this.$router.push(`/list/${this.getNextElementId}`);
    },
    handleBackCard() {
      this.$router.push(`/list/${this.getPreviousElementId}`);
    },
  },
};
</script>

<style lang="sass" scoped>
h4
  font-size: 28px
  font-weight: 400
.card-answer
  font-weight: 600

// will change later
.text-1
  color: #3887FE
.text-2
  color: #1BB763
</style>
