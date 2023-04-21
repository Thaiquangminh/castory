<template>
  <v-row justify="center">
    <v-dialog v-model="showDialogTest" max-width="400">
      <v-card class="pa-8">
        <v-card-title class="pa-0 mb-7">
          <h4 class="dialog-title">Đăng xuất?</h4>
        </v-card-title>
        <v-card-text class="pa-0 mb-7">
          <span class="dialog-subtitle">
            Bạn sẽ đăng xuất khỏi tài khoản hiện tại
          </span>
        </v-card-text>
        <v-card-actions class="d-flex align-center pa-0">
          <v-spacer></v-spacer>
          <v-btn class="cancel-btn" elevation="0" @click="handleCloseDialog"
            >Huỷ</v-btn
          >
          <ButtonComponent
            title="Đăng xuất"
            class="ml-3"
            @click="handleLogOut"
          />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import ButtonComponent from "@/components/ui/ButtonComponent.vue";

export default {
  components: { ButtonComponent },
  data() {
    return {
      showDialogTest: false,
    };
  },
  props: {
    showDialog: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleCloseDialog() {
      this.$emit("closeDialog");
    },
    handleLogOut() {
      this.$emit("logOut");
    },
  },
};
</script>

<style lang="sass" scoped>
.dialog-title
  font-size: 22px
  color: #1C283D
.dialog-subtitle
  font-size: 16px
  color: #384961
.cancel-btn
  background-color: transparent !important
  text-transform: initial
  color: #453FE3
</style>
