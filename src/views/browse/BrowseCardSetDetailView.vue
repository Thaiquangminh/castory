<template>
  <v-container>
    <v-row
      class="mt-8 d-flex flex-column"
      :class="{
        'px-4': $vuetify.breakpoint.xsOnly,
      }"
    >
      <v-row>
        <v-col cols="12" sm="3" class="pa-1 pl-5">
          <v-flex class="d-flex align-center">
            <img
              src="@/assets/icons/button-back.svg"
              alt=""
              @click="handleBackPage"
            />
          </v-flex>
        </v-col>
      </v-row>
      <v-row :class="{ 'mt-1': $vuetify.breakpoint.xsOnly }" class="px-4">
        <v-col cols="12" sm="12" class="pa-1 pr-0">
          <v-card class="browse-card-detail" elevation="0">
            <v-card-title class="mb-2 px-0">
              <h4 class="browse-card-title">Flower</h4>
              &nbsp;
              <h7 class="browse-card-title-des">(Đại từ phản thân)</h7>
            </v-card-title>
            <v-card-subtitle class="px-0">
              <div class="d-flex align-center mb-2">
                <img src="@/assets/icons/audio.svg" />
                <h7 class="ml-1">/ˈflaʊ.ɚ/</h7>
              </div>
              <ul>
                <li>
                  <h7>Hoa</h7>
                </li>
              </ul>
            </v-card-subtitle>
            <v-divider></v-divider>
            <v-card-text class="d-flex flex-column px-0">
              <captionOne class="mb-1" style="color: #aeb7ca">
                Ví dụ:
              </captionOne>
              <h7 class="mb-1">
                She was ill so I sent her some flowers to cheer her up.
              </h7>
              <text-averta-400>
                (Cô ấy bị ốm nên tôi đã gửi hoa để khích lệ cô ấy)
              </text-averta-400>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="d-flex flex-column mt-13">
        <v-divider></v-divider>
        <v-row class="ma-0">
          <v-col class="d-flex justify-center">
            <div class="d-flex align-center px-5">
              <img src="@/assets/icons/save.svg" alt="" />
              <h7 class="ml-3">Lưu thẻ</h7>
            </div>
            <!--            <ButtonComponent title="Lưu thẻ" prepend-icon="save" />-->
          </v-col>
          <v-col class="d-flex justify-center">
            <div class="d-flex align-center px-5">
              <img src="@/assets/icons/trash.svg" alt="" />
              <h7 class="ml-3">Xoá thẻ</h7>
            </div>
            <!--            <ButtonComponent title="Xoá thẻ" prepend-icon="trash" />-->
          </v-col>
        </v-row>
      </v-row>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  components: {},
  created() {
    this.cardId = this.$route.params.id;
  },
  data() {
    return {
      cardId: "",
    };
  },
  methods: {
    handleBackPage() {
      this.$router.replace(`/browse/${this.cardId}`);
    },
    handleGoBrowseCardDetails(id) {
      this.$router.push(`/browse/card/${id}`);
    },
  },
  computed: {
    ...mapGetters("card", ["getSetCardId"]),
  },
};
</script>

<style lang="sass" scoped>
.browse-card-detail
  border-radius: 12px
  min-height: 70vh
.browse-card-title
  color: #1BB763
.browse-card-title-des
  color: #F56742

li
  font-weight: bold
</style>
