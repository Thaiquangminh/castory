<template>
  <v-row justify="center">
    <!-- ----------Delete && Logout dialog------------ -->
    <v-dialog
      v-if="typeDialog === 'delete' || typeDialog === 'logout'"
      :value="showDialogValue"
      max-width="400"
      @click:outside="handleCloseDialog"
    >
      <v-card class="pa-8">
        <v-card-title class="pa-0 mb-7">
          <h5
            class="dialog-delete-title"
            v-text="typeDialog === 'logout' ? 'Đăng xuất?' : 'Xoá thẻ?'"
          />
        </v-card-title>
        <v-card-text class="pa-0 mb-7">
          <h7
            class="dialog-delete-subtitle"
            v-text="
              typeDialog === 'logout'
                ? 'Bạn sẽ đăng xuất khỏi tài khoản hiện tại'
                : 'Thẻ sẽ bị xóa vĩnh viễn'
            "
          >
          </h7>
        </v-card-text>
        <v-card-actions class="d-flex align-center pa-0">
          <v-spacer></v-spacer>
          <v-btn class="cancel-btn" elevation="0" @click="handleCloseDialog">
            <h7>Huỷ</h7>
          </v-btn>
          <ButtonComponent
            :title="typeDialog === 'logout' ? 'Đăng xuất' : 'Xoá'"
            class="ml-3"
            @click="handleConfirmRequest"
          />
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- ----------Success dialog && Firework dialog------------ -->
    <v-dialog
      v-if="typeDialog === 'success' || typeDialog === 'complete'"
      :value="showDialogValue"
      max-width="400"
      @click:outside="handleCloseDialog"
    >
      <v-card
        class="pa-8 d-flex flex-column bgsize"
        style="border-radius: 12px"
      >
        <v-flex
          v-if="typeDialog === 'success'"
          class="mb-6 d-flex justify-center"
        >
          <img src="@/assets/images/success.svg" alt="" />
        </v-flex>
        <v-flex
          v-if="typeDialog === 'complete'"
          class="mb-6 d-flex justify-center"
        >
          <img src="@/assets/images/firework.svg" alt="" />
        </v-flex>
        <v-card-title class="pa-0 mb-7 text-center">
          <h5 v-if="typeDialog === 'success'" class="dialog-success-title">
            Chúc mừng bạn
            <br />
            đã hoàn thành bộ thẻ
          </h5>
          <h5 v-if="typeDialog === 'complete'" class="dialog-success-title">
            Chúc mừng bạn đã hoàn thành
            <br />
            bài tập về nhà hôm nay
          </h5>
        </v-card-title>
        <v-card-actions class="d-flex justify-center pa-0">
          <ButtonComponent title="OK" @click="handleCloseDialog" />
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- ----------Review random dialog------------ -->
    <v-dialog
      v-if="typeDialog === 'remind' || typeDialog === 'customRemind'"
      :value="showDialogValue"
      max-width="600"
      @click:outside="handleCloseDialog"
    >
      <v-card class="pa-8">
        <v-card-title class="pa-0 mb-7">
          <h4
            class="dialog-delete-title"
            v-text="
              typeDialog === 'customRemind'
                ? 'Ôn thêm ngẫu nhiên'
                : 'Ôn tập trước'
            "
          ></h4>
        </v-card-title>
        <v-card-text class="pa-0 mb-6 d-flex flex-column">
          <h6
            class="dialog-delete-subtitle mb-1"
            v-text="
              typeDialog === 'customRemind'
                ? 'Bạn muốn ôn ngẫu nhiên bao nhiêu thẻ?'
                : 'Bạn muốn ôn tập trước bao nhiêu ngày?'
            "
          ></h6>
          <text-averta-400
            class="dialog-helper-text"
            v-text="
              typeDialog === 'customRemind'
                ? 'Nhập số thẻ từ 1 - [tổng số thẻ]'
                : 'Nhập số ngày ≤ 5'
            "
          >
            Nhập số thẻ từ 1 - [tổng số thẻ]
          </text-averta-400>
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
    <!--    -----------------------------------   -->
    <!-- ---------------------Dialog for admin-------------------   -->
    <!--    -----------------------------------   -->

    <!--  Dialog create new card set  -->
    <v-dialog
      v-if="typeDialog === 'add-folder' || typeDialog === 'add-cardSet'"
      :value="showDialogValue"
      max-width="400"
      @click:outside="handleCloseDialog"
    >
      <v-card class="pa-8">
        <v-card-title class="pa-0 mb-7">
          <h5
            class="dialog-delete-title"
            v-text="typeDialog === 'add-folder' ? 'Tên thư mục' : 'Tên bộ thẻ'"
          />
        </v-card-title>
        <v-card-text class="pa-0 mb-7">
          <InputComponent
            :inputProps="
              typeDialog === 'add-folder'
                ? addFolderInputProps
                : addCardSetInputProps
            "
            class="ma-0"
          />
        </v-card-text>
        <v-card-actions class="d-flex align-center pa-0">
          <v-spacer></v-spacer>
          <v-btn class="cancel-btn" elevation="0" @click="handleCloseDialog">
            <h7>Huỷ</h7>
          </v-btn>
          <ButtonComponent
            :title="'OK'"
            class="ml-3"
            @click="handleConfirmRequest"
          />
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- ----------Delete folder and cancel add card------------ -->
    <v-dialog
      v-if="typeDialog === 'delete-admin' || typeDialog === 'cancel-add-card'"
      :value="showDialogValue"
      max-width="400"
      @click:outside="handleCloseDialog"
    >
      <v-card class="pa-8">
        <v-card-title class="pa-0 mb-7">
          <h5
            class="dialog-delete-title"
            v-text="
              typeDialog === 'delete-admin'
                ? 'Xoá vĩnh viễn'
                : 'Tiếp tục tạo thẻ ?'
            "
          />
        </v-card-title>
        <v-card-actions class="d-flex align-center pa-0">
          <v-spacer></v-spacer>
          <v-btn
            v-if="typeDialog === 'delete-admin'"
            class="cancel-btn"
            elevation="0"
            @click="handleCloseDialog"
          >
            <h7>Huỷ</h7>
          </v-btn>
          <v-btn
            v-if="typeDialog === 'cancel-add-card'"
            class="cancel-btn"
            elevation="0"
            @click="handleConfirmRequest"
          >
            <h7>No</h7>
          </v-btn>

          <ButtonComponent
            v-if="typeDialog === 'delete-admin'"
            :title="'Xoá'"
            class="ml-3"
            @click="handleConfirmRequest"
          />
          <ButtonComponent
            v-if="typeDialog === 'cancel-add-card'"
            :title="'Yes'"
            class="ml-3"
            @click="handleCloseDialog"
          />
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- ----------Add and edit admin user------------ -->
    <v-dialog
      v-if="typeDialog === 'add-admin'"
      :value="showDialogValue"
      max-width="400"
      @click:outside="handleCloseDialog"
    >
      <form>
        <v-card class="pa-8">
          <v-row>
            <v-col cols="12" md="12" sm="12">
              <label>
                <h7>Họ và tên admin</h7>
              </label>
              <InputComponent inputProps="" class="mt-3" />
            </v-col>
            <v-col cols="12" md="12" sm="12">
              <label>
                <h7>Username</h7>
              </label>
              <InputComponent inputProps="" class="mt-3" />
            </v-col>
            <v-col cols="12" md="12" sm="12">
              <label>
                <h7>Password</h7>
              </label>
              <InputComponent inputProps="" class="mt-3" />
            </v-col>
          </v-row>
          <v-spacer></v-spacer>
          <v-card-actions class="d-flex align-center justify-end pa-0 mt-6">
            <v-btn class="cancel-btn" elevation="0" @click="handleCloseDialog">
              <h7>Huỷ</h7>
            </v-btn>
            <ButtonComponent
              :title="'OK'"
              class="ml-3"
              @click="handleConfirmRequest"
            />
          </v-card-actions>
        </v-card>
      </form>
    </v-dialog>
    <!-- ----------Add and edit student user------------ -->
    <v-dialog
      v-if="typeDialog === 'add-student'"
      :value="showDialogValue"
      max-width="400"
      @click:outside="handleCloseDialog"
    >
      <form>
        <v-card class="pa-8">
          <v-row>
            <v-col cols="12" md="12" sm="12">
              <label>
                <h7>Họ và tên</h7>
              </label>
              <InputComponent inputProps="" class="mt-3" />
            </v-col>
            <v-col cols="12" md="12" sm="12">
              <label>
                <h7>Lớp</h7>
              </label>
              <v-select
                :items="itemsSelect"
                outlined
                background-color="#F9FBFC"
                class="mt-3 mb-n6"
              />
            </v-col>
            <v-col cols="12" md="12" sm="12">
              <label>
                <h7>Username</h7>
              </label>
              <InputComponent inputProps="" class="mt-3" />
            </v-col>
            <v-col cols="12" md="12" sm="12">
              <label>
                <h7>Password</h7>
              </label>
              <InputComponent inputProps="" class="mt-3" />
            </v-col>
          </v-row>
          <v-spacer></v-spacer>
          <v-card-actions class="d-flex align-center justify-end pa-0 mt-6">
            <v-btn class="cancel-btn" elevation="0" @click="handleCloseDialog">
              <h7>Huỷ</h7>
            </v-btn>
            <ButtonComponent
              :title="'OK'"
              class="ml-3"
              @click="handleConfirmRequest"
            />
          </v-card-actions>
        </v-card>
      </form>
    </v-dialog>
  </v-row>
</template>

<script>
import ButtonComponent from "@/components/ui/ButtonComponent.vue";
import InputComponent from "@/components/ui/InputComponent.vue";

export default {
  components: { InputComponent, ButtonComponent },
  props: {
    showDialogValue: {
      type: Boolean,
      default: false,
    },
    typeDialog: {
      type: String,
      default: "delete",
    },
    itemsSelect: {
      type: [],
      default: () => [],
    },
  },
  data() {
    return {
      inputProps: {
        placeholder: "Nhập số thẻ",
      },
      addFolderInputProps: {
        placeholder: "Nhập tên thư mục",
      },
      addCardSetInputProps: {
        placeholder: "Nhập tên bộ thẻ",
      },
    };
  },
  methods: {
    handleCloseDialog() {
      this.$emit("closeDialog");
    },
    handleConfirmRequest() {
      this.$emit("confirmRequest");
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
.bgsize
  background-image: url(@/assets/images/firework-bg.svg)
  background-size: cover
</style>
