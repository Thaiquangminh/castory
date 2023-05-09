<template>
  <v-container>
    <form @submit.prevent="handleAddNewCard">
      <v-row>
        <v-col cols="12" md="6" sm="6" class="pb-0">
          <v-select
            :items="cardSet"
            v-model="formValue.cardSetSelected"
            label="Chọn bộ thẻ"
            outlined
          ></v-select>
        </v-col>
        <v-col cols="12" md="6" sm="6" class="pb-0">
          <v-select
            :items="cardType"
            v-model="formValue.cardTypeSelected"
            label="Chọn kiểu thẻ"
            outlined
          ></v-select>
        </v-col>
      </v-row>
      <v-row class="ma-0">
        <v-col cols="12" md="12" class="pl-0">
          <h7>Từ</h7>
          <div class="mt-1">
            <InputComponent inputProps="" v-model.trim="formValue.word" />
          </div>
        </v-col>
      </v-row>
      <v-row class="ma-0">
        <v-col cols="12" md="12" class="pl-0">
          <h7>Phiên âm</h7>
          <div class="mt-1">
            <InputComponent inputProps="" v-model.trim="formValue.spelling" />
          </div>
        </v-col>
      </v-row>
      <v-row class="ma-0">
        <v-col cols="12" md="12" class="pl-0">
          <h7>Nghĩa</h7>
          <div class="mt-1">
            <InputComponent inputProps="" v-model.trim="formValue.mean" />
          </div>
        </v-col>
      </v-row>
      <v-row class="ma-0">
        <v-col cols="12" md="12" class="pl-0">
          <h7>Audio</h7>
          <div class="mt-1">
            <InputComponent inputProps="" v-model.trim="formValue.audio" />
          </div>
        </v-col>
      </v-row>
      <v-row class="ma-0">
        <v-col cols="12" md="12" class="pl-0">
          <h7>Từ loại</h7>
          <div class="mt-1">
            <InputComponent inputProps="" v-model.trim="formValue.typeWord" />
          </div>
        </v-col>
      </v-row>
      <v-row class="ma-0">
        <v-col cols="12" md="12" class="pl-0">
          <h7>Ví dụ</h7>
          <div class="mt-1">
            <InputComponent inputProps="" v-model.trim="formValue.example" />
          </div>
        </v-col>
      </v-row>
      <v-row class="d-flex">
        <v-col cols="12" md="6" sm="6" class="pb-0 d-flex justify-center">
          <ButtonComponent title="Thêm" type="submit" />
        </v-col>
        <v-col cols="12" md="6" sm="6" class="pb-0 d-flex justify-center">
          <ButtonComponent title="History" />
        </v-col>
      </v-row>
    </form>
  </v-container>
</template>

<script>
import InputComponent from "@/components/ui/InputComponent.vue";
import ButtonComponent from "@/components/ui/ButtonComponent.vue";

export default {
  components: { ButtonComponent, InputComponent },
  props: {
    cardSet: {
      type: [],
      default: () => [],
    },
    inputProps: {
      placeholder: "lalala",
      typeInput: "text",
    },
  },
  data() {
    return {
      cardType: ["Kiểu 1", "Kiểu 2", "Kiểu 3"],
      formValue: {
        cardSetSelected: "",
        cardTypeSelected: "",
        word: "",
        spelling: "",
        mean: "",
        audio: "",
        typeWord: "",
        example: "",
      },
    };
  },
  methods: {
    handleAddNewCard() {
      console.log(this.formValue);
    },
  },
};
</script>

<style lang="sass" scoped>
::v-deep .v-btn
  min-width: 150px !important
</style>
