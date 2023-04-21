<template>
  <v-row justify="center">
    <!-- ----------Delete && Logout dialog------------ -->
    <v-dialog
      v-if="typeDialog === 'delete' || typeDialog === 'logout'"
      :value="showDialogValue"
      max-width="400"
    >
      <v-card class="pa-8">
        <v-card-title class="pa-0 mb-7">
          <h4
            class="dialog-delete-title"
            v-text="typeDialog === 'logout' ? 'Đăng xuất?' : 'Xoá thẻ?'"
          />
        </v-card-title>
        <v-card-text class="pa-0 mb-7">
          <span
            class="dialog-delete-subtitle"
            v-text="
              typeDialog === 'logout'
                ? 'Bạn sẽ đăng xuất khỏi tài khoản hiện tại'
                : 'Thẻ sẽ bị xóa vĩnh viễn'
            "
          >
          </span>
        </v-card-text>
        <v-card-actions class="d-flex align-center pa-0">
          <v-spacer></v-spacer>
          <v-btn class="cancel-btn" elevation="0" @click="handleCloseDialog"
            >Huỷ</v-btn
          >
          <ButtonComponent
            :title="typeDialog === 'logout' ? 'Đăng xuất' : 'Xoá'"
            class="ml-3"
            @click="handleLogOut"
          />
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- ----------Success dialog------------ -->
    <v-dialog
      v-if="typeDialog === 'success'"
      :value="showDialogValue"
      max-width="400"
    >
      <v-card class="pa-8 d-flex flex-column" style="border-radius: 12px">
        <v-flex class="mb-6 d-flex justify-center">
          <img src="@/assets/images/success.svg" alt="" />
        </v-flex>
        <v-card-title class="pa-0 mb-7 text-center">
          <h5 class="dialog-success-title">
            Chúc mừng bạn
            <br />
            đã hoàn thành bộ thẻ
          </h5>
        </v-card-title>
        <v-card-actions class="d-flex justify-center pa-0">
          <ButtonComponent title="OK" @click="handleTurnOffDialog" />
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- ----------Review random dialog------------ -->
    <v-dialog
      v-if="typeDialog === 'remind'"
      :value="showDialogValue"
      max-width="600"
    >
      <v-card class="pa-8">
        <v-card-title class="pa-0 mb-7">
          <h4 class="dialog-delete-title">Ôn thêm ngẫu nhiên</h4>
        </v-card-title>
        <v-card-text class="pa-0 mb-6 d-flex flex-column">
          <span class="dialog-delete-subtitle mb-1">
            Bạn muốn ôn ngẫu nhiên bao nhiêu thẻ?
          </span>
          <span class="dialog-helper-text">
            Nhập số thẻ từ 1 - [tổng số thẻ]
          </span>
        </v-card-text>
        <v-card-actions class="d-flex align-center pa-0">
          <InputComponent :inputProps="inputProps" class="ma-0" />
          <ButtonComponent
            title="Bắt đầu ôn"
            icon="fa-arrow-right"
            class="ml-3"
            @click="handleReview"
          />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import ButtonComponent from "@/components/ui/ButtonComponent.vue";
import InputComponent from "@/components/ui/InputComponent.vue";

export default {
  components: { InputComponent, ButtonComponent },
  data() {
    return {
      showDialog: false,
      inputProps: {
        placeholder: "Nhập số thẻ",
      },
    };
  },
  props: {
    showDialogValue: {
      type: Boolean,
      default: false,
    },
    typeDialog: {
      type: String,
      default: "delete",
    },
  },
  methods: {
    handleCloseDialog() {
      this.$emit("closeDialog");
    },
    handleLogOut() {
      this.$emit("logOut");
    },
    handleTurnOffDialog() {
      this.$emit("turnOffDialog");
    },
    handleReview() {
      this.$emit("review");
    },
  },
};
</script>

<style lang="sass" scoped>
// ----- dialog delete --------- //
.dialog-delete-title
  font-size: 22px
  color: #1C283D

.dialog-delete-subtitle
  font-size: 16px
  color: #384961

.cancel-btn
  background-color: transparent !important
  text-transform: initial
  color: #453FE3

// ------- dialog success ------- //
.v-card
  border-radius: 12px !important

.dialog-success-title
  font-size: 22px
  color: #384961
  word-break: normal
  line-height: 33px
  width: 100%

.v-responsive__content
  justify-content: center
  display: flex
</style>
