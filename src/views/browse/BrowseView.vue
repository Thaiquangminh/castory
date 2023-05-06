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
              'pa-4': $vuetify.breakpoint.smAndUp,
              'mb-3': $vuetify.breakpoint.smAndUp,
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
          class="pr-4"
          :class="{
            'px-5': $vuetify.breakpoint.xsOnly,
            'py-4': $vuetify.breakpoint.xsOnly,
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
            :items="tableGroupCards"
            :headers="tableGroupCardsHeader"
          />
          <TableComponent
            v-if="$vuetify.breakpoint.xsOnly"
            :items="tableGroupCards"
            :headers="tableGroupCardsHeader"
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
                :items="tableCardsDetail"
                :headers="tableCardDetailHeader"
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
  </v-container>
</template>
<script>
import InputComponent from "@/components/ui/InputComponent.vue";
import TableComponent from "@/components/ui/TableComponent.vue";
import { mapActions } from "vuex";

export default {
  components: { TableComponent, InputComponent },
  data() {
    return {
      inputProps: {
        typeInput: "text",
        placeholder: "Tìm kiếm thẻ",
        id: "search",
      },
      searchValues: "",

      // -----------------card title data table------------------
      tableGroupCards: [
        { id: "1", cardSetName: "Tuần 1 thi đại học (140)" },
        { id: "2", cardSetName: "Tuần 2 thi đại học (141)" },
        { id: "3", cardSetName: "Tuần 3 thi đại học (143)" },
        { id: "4", cardSetName: "Tuần 4 thi đại học (143)" },
        { id: "5", cardSetName: "Tuần 5 thi đại học (143)" },
        { id: "6", cardSetName: "Tuần 6 thi đại học (143)" },
        { id: "7", cardSetName: "Tuần 7 thi đại học (143)" },
        { id: "8", cardSetName: "Tuần 8 thi đại học (143)" },
        { id: "9", cardSetName: "Tuần 9 thi đại học (143)" },
        { id: "10", cardSetName: "Tuần 10 thi đại học (143)" },
        { id: "11", cardSetName: "Tuần 11 thi đại học (143)" },
        { id: "12", cardSetName: "Tuần 12 thi đại học (143)" },
        { id: "13", cardSetName: "Tuần 13 thi đại học (143)" },
        { id: "14", cardSetName: "Tuần 14 thi đại học (143)" },
      ],
      tableGroupCardsHeader: [
        {
          text: "Tất cả bộ thẻ",
          value: "cardSetName",
          sortable: false,
        },
      ],

      //   ----------card details data table----------
      tableCardsDetail: [
        {
          id: "1",
          name: "Hoa",
          dueDate: "25/04/23",
          cardSetName: "Tuần 1 thi đại học",
        },
        {
          id: "2",
          name: "Hoa",
          dueDate: "25/04/23",
          cardSetName: "Tuần 1 thi đại học",
        },
        {
          id: "3",
          name: "Hoa",
          dueDate: "25/04/23",
          cardSetName: "Tuần 1 thi đại học",
        },
        {
          id: "4",
          name: "Hoa",
          dueDate: "25/04/23",
          cardSetName: "Tuần 1 thi đại học",
        },
      ],
      tableCardDetailHeader: [
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
  methods: {
    ...mapActions("card", ["handleSetId"]),
    handleBackPage() {
      this.$router.replace("/list");
    },
    handleGoBrowseCard(id) {
      this.handleSetId(id);
      this.$router.push(`/browse/${id}`);
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
