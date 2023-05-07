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
        <v-col cols="12" md="3" sm="3" xs="3" class="pa-1">
          <v-flex
            class="d-flex align-center"
            :class="{
              ['pa-4 mb-3']: $vuetify.breakpoint.smAndUp,
            }"
          >
            <img
              v-if="$vuetify.breakpoint.smAndUp"
              src="@/assets/icons/button-back.svg"
              alt=""
              @click="handleBackPage"
              style="cursor: pointer"
            />
            <v-flex
              class="ml-3"
              :class="{ 'pl-1': $vuetify.breakpoint.xsOnly }"
            >
              <h4>Browse</h4>
            </v-flex>
          </v-flex>
        </v-col>
        <v-col
          cols="12"
          md="9"
          sm="9"
          xs="9"
          :class="{
            ['px-5 py-4']: $vuetify.breakpoint.xsOnly,
            'pr-5': $vuetify.breakpoint.sm,
            'pr-4': $vuetify.breakpoint.mdAndUp,
          }"
        >
          <v-flex>
            <InputComponent
              :inputProps="inputProps"
              v-model.trim="searchValues"
            />
          </v-flex>
        </v-col>
      </v-row>
      <v-row :class="{ 'mt-1': $vuetify.breakpoint.xsOnly }" class="px-4">
        <v-col cols="12" md="3" sm="12" class="pa-1">
          <TableComponent
            v-if="$vuetify.breakpoint.smAndUp"
            :items="getCardSet"
            :headers="cardSetHeader"
          />
          <TableComponent
            v-if="$vuetify.breakpoint.xsOnly"
            :items="getCardSet"
            :headers="cardSetHeader"
            @navigate="handleGoBrowseCard"
          />
        </v-col>
        <v-col
          v-if="$vuetify.breakpoint.smAndUp"
          cols="12"
          md="9"
          sm="12"
          :class="{ 'mt-5': $vuetify.breakpoint.smAndDown }"
        >
          <v-row>
            <v-col cols="12" md="6" sm="6" class="pa-1">
              <TableComponent
                :items="getCardSetDetails"
                :headers="cardSetDetailHeader"
              />
            </v-col>
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
        </v-col>
      </v-row>
    </v-row>
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
  </v-container>
</template>
<script>
import InputComponent from "@/components/ui/InputComponent.vue";
import DialogComponent from "@/components/ui/DialogComponent.vue";
import TableComponent from "@/components/ui/TableComponent.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { TableComponent, InputComponent, DialogComponent },
  data() {
    return {
      showDialogRemind: false,
      showDialogCustomRemind: false,
      inputProps: {
        typeInput: "text",
        placeholder: "Tìm kiếm thẻ",
        id: "search",
      },
      searchValues: "",

      // -----------------card set data table------------------
      cardSetHeader: [
        {
          text: "Tất cả bộ thẻ",
          value: "cardSetName",
          sortable: false,
        },
      ],

      //   ----------card details data table----------
      cardSetDetailHeader: [
        {
          text: "Thẻ",
          value: "name",
          sortable: false,
        },
        {
          text: "Đến hạn",
          value: "dueDate",
          sortable: false,
          align: "center",
        },
        {
          text: "Bộ thẻ",
          value: "cardSetName",
          sortable: false,
          align: "center",
        },
        {
          text: "",
          value: "actions",
          sortable: false,
          align: "center",
        },
      ],
    };
  },
  computed: {
    ...mapGetters("browse", ["getCardSet", "getCardSetDetails"]),
  },
  methods: {
    ...mapActions("card", ["handleSetId"]),
    handleBackPage() {
      this.$router.replace("/list");
    },
    handleGoBrowseCard(id) {
      this.handleSetId(id);
      this.$router.push(`/browse/${id}`);
    },
    handleCloseDialog() {
      this.showDialogCustomRemind = false;
      this.showDialogRemind = false;
    },
    handleStudy() {
      this.showDialogRemind = true;
    },
    handleRandomStudy() {
      this.showDialogCustomRemind = true;
    },
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
