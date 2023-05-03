<template>
  <v-container>
    <v-row
      class="mt-8"
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
              src="@/assets/icons/button-back.svg"
              alt=""
              @click="handleBackPage"
              style="cursor: pointer"
            />
            <v-flex class="ml-3">
              <h2>Browse</h2>
            </v-flex>
          </v-flex>
        </v-col>
        <v-col cols="12" md="9" sm="9" xs="9">
          <v-flex>
            <InputComponent
              :inputProps="inputProps"
              v-model.trim="searchValues"
            />
          </v-flex>
        </v-col>
      </v-row>
      <v-row :class="{ 'mt-1': $vuetify.breakpoint.xsOnly }">
        <v-col cols="12" md="3" sm="12" class="pa-1">
          <TableComponent
            :values="tableGroupCards"
            :headers="tableGroupCardsHeader"
            :cols="1"
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
                :values="tableCardsDetail"
                :headers="tableCardDetailHeader"
                :haveOptions="true"
                :cols="3"
              />
            </v-col>
            <v-col cols="12" md="6" sm="6" class="pa-1">
              <v-card class="browse-card-detail" elevation="0">
                <v-card-title class="mb-2">
                  <h2 class="browse-card-title">Flower</h2>
                  &nbsp;
                  <span class="browse-card-title-des">(Đại từ phản thân)</span>
                </v-card-title>
                <v-card-subtitle>
                  <div class="d-flex align-center mb-2">
                    <img src="@/assets/icons/audio.svg" />
                    <span class="ml-1">/ˈflaʊ.ɚ/</span>
                  </div>
                  <ul>
                    <li>Hoa</li>
                  </ul>
                </v-card-subtitle>
                <v-divider></v-divider>
                <v-card-text>
                  <span class="mb-1">Ví dụ:</span>
                  <h4 class="mb-1">
                    She was ill so I sent her some flowers to cheer her up.
                  </h4>
                  <p>(Cô ấy bị ốm nên tôi đã gửi hoa để khích lệ cô ấy)</p>
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
import TableComponent from "@/components/ui/TableComponent.vue";
import InputComponent from "@/components/ui/InputComponent.vue";

export default {
  components: { InputComponent, TableComponent },
  data() {
    return {
      inputProps: {
        typeInput: "text",
        placeholder: "Tìm kiếm thẻ",
        id: "search",
      },
      searchValues: "",

      // card title data table
      tableGroupCards: [
        { name: "Tuần 1 thi đại học (140)" },
        { name: "Tuần 2 thi đại học (141)" },
        { name: "Tuần 3 thi đại học (143)" },
        { name: "Tuần 4 thi đại học (143)" },
        { name: "Tuần 5 thi đại học (143)" },
        { name: "Tuần 6 thi đại học (143)" },
        { name: "Tuần 7 thi đại học (143)" },
        { name: "Tuần 9 thi đại học (143)" },
        { name: "Tuần 10 thi đại học (143)" },
        { name: "Tuần 11 thi đại học (143)" },
        { name: "Tuần 12 thi đại học (143)" },
        { name: "Tuần 13 thi đại học (143)" },
        { name: "Tuần 14 thi đại học (143)" },
        { name: "Tuần 15 thi đại học (143)" },
      ],
      tableGroupCardsHeader: ["Tất cả bộ thẻ"],

      //   card details data table
      tableCardsDetail: [
        {
          id: "0",
          name: "Bộ thẻ đã lưu",
          newCard: 0,
          remindCard: 0,
        },
        {
          id: "1",
          name: "Tuần thi 1 đại học",
          newCard: 140,
          remindCard: 42,
        },
        {
          id: "2",
          name: "Tuần thi 2 đại học",
          newCard: 140,
          remindCard: 42,
        },
        {
          id: "3",
          name: "Tuần thi 3 đại học",
          newCard: 140,
          remindCard: 42,
        },
        {
          id: "4",
          name: "Tuần thi 4 đại học",
          newCard: 140,
          remindCard: 42,
        },
      ],
      tableCardDetailHeader: ["Thẻ", "Đến hạn", "Bộ thẻ", ""],
    };
  },
  methods: {
    handleBackPage() {
      this.$router.replace("/list");
    },
  },
};
</script>

<style lang="sass" scoped>
.browse-card-detail
  background-color: #F9FBFC
  border-radius: 12px
  border: 1px solid #E9EDF5
  min-height: 672px
.browse-card-title
  color: #1BB763
.browse-card-title-des
  color: #F56742

li
  font-weight: bold
</style>
