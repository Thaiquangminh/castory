<template>
  <v-container>
    <v-row
      class="mt-8 d-flex flex-column"
      :class="{
        'px-4': $vuetify.breakpoint.xsOnly,
      }"
    >
      <v-row>
        <v-col cols="12" md="3" sm="3" xs="3" class="pa-1 pl-5">
          <v-flex class="d-flex align-center">
            <img
              src="@/assets/icons/button-back.svg"
              alt=""
              @click="handleBackPage"
              style="cursor: pointer"
            />
            <v-flex class="ml-3">
              <h4>Tuần thi {{ setCardId }}</h4>
            </v-flex>
          </v-flex>
        </v-col>
        <v-col
          cols="12"
          md="9"
          sm="9"
          xs="9"
          class="pr-5"
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
        <v-col cols="12" sm="12" class="pa-1">
          <TableComponent
            :items="getCardSetDetails"
            :headers="cardSetDetailHeader"
            @navigate="handleGoBrowseCardDetails"
          />
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>
<script>
import InputComponent from "@/components/ui/InputComponent.vue";
import TableComponent from "@/components/ui/TableComponent.vue";
import { mapGetters } from "vuex";

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
      setCardId: "",

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
    ...mapGetters("browse", ["getCardSetDetails"]),
  },
  methods: {
    handleBackPage() {
      this.$router.replace("/browse");
    },
    handleGoBrowseCardDetails(id) {
      this.$router.push(`/browse/card/${id}`);
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
