<template>
  <v-container>
    <v-row
      class="mt-8 d-flex flex-column"
      :class="{
        'px-5': $vuetify.breakpoint.sm,
        'px-4': $vuetify.breakpoint.xsOnly,
      }"
    >
      <v-row>
        <v-col cols="12" md="3" sm="3" xs="3" class="pa-1 pl-5">
          <v-flex
            class="d-flex align-center mb-4"
            :class="{
              'pa-4': $vuetify.breakpoint.smAndUp,
              'mb-3': $vuetify.breakpoint.smAndUp,
            }"
          >
            <img
              src="@/assets/icons/button-back.svg"
              alt=""
              @click="handleBackPage"
              style="cursor: pointer"
            />
          </v-flex>
        </v-col>
      </v-row>
      <v-row :class="{ 'mt-1': $vuetify.breakpoint.xsOnly }" class="px-4">
        <v-col cols="12" md="6" sm="6" class="pa-1 pr-0">
          <v-card class="browse-card-detail" elevation="0">
            <v-card-title class="mb-2">
              <h4 class="browse-card-title">Flower</h4>
              &nbsp;
              <h7 class="browse-card-title-des">(Đại từ phản thân)</h7>
            </v-card-title>
            <v-card-subtitle>
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
            <v-card-text class="d-flex flex-column">
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
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";

export default {
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
  background-color: #F9FBFC
  border-radius: 12px
  border: 1px solid #E9EDF5
  min-height: 70vh
.browse-card-title
  color: #1BB763
.browse-card-title-des
  color: #F56742

li
  font-weight: bold
</style>
