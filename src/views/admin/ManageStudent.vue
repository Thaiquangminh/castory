<template>
  <v-container fluid class="mt-5">
    <v-row>
      <v-col cols="12" md="3" sm="3" class="d-flex align-end">
        <v-menu>
          <template> </template>
        </v-menu>
        <v-menu offset-y transition="slide-y-transition" location="end">
          <template v-slot:activator="{ attrs, on }">
            <img
              src="@/assets/icons/add-new.svg"
              alt=""
              class="ml-4"
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <v-list style="min-width: 150px">
            <v-list-item link @click="handleShowDialogAddAdmin">
              <v-list-item-title>Thêm admin mới</v-list-item-title>
            </v-list-item>
            <v-list-item link @click="handleShowDialogAddStudent">
              <v-list-item-title>Thêm học sinh mới</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-title>Quản lý lớp</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
      <v-col cols="12" md="9" sm="9">
        <InputComponent :inputProps="inputProps" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12" sm="12">
        <TableComponent
          :items="getUserDetails"
          :headers="userDetailsHeader"
          :options="userDetailsOptions"
          @delete="handleShowDialogDeleteUser"
          @edit="handleShowDialogEditUser"
        />
      </v-col>
    </v-row>
    <DialogComponent
      typeDialog="delete-admin"
      :showDialogValue="showDialogDelete"
      @closeDialog="handleCloseDialog"
    />
    <DialogComponent
      typeDialog="add-admin"
      :showDialogValue="showDialogAddAdmin"
      @closeDialog="handleCloseDialog"
    />
    <DialogComponent
      typeDialog="add-student"
      :showDialogValue="showDialogAddStudent"
      @closeDialog="handleCloseDialog"
      :itemsSelect="getAllClassUserDetails"
    />
  </v-container>
</template>
<script>
import InputComponent from "@/components/ui/InputComponent.vue";
import TableComponent from "@/components/ui/TableComponent.vue";
import { mapGetters } from "vuex";
import DialogComponent from "@/components/ui/DialogComponent.vue";
export default {
  components: { DialogComponent, TableComponent, InputComponent },
  data() {
    return {
      showDialogDelete: false,
      showDialogAddAdmin: false,
      showDialogAddStudent: false,
      inputProps: {
        placeholder: "Tìm kiếm học sinh",
      },
      userDetailsHeader: [
        {
          text: "Họ và tên",
          value: "name",
          sortable: false,
        },
        {
          text: "Username",
          value: "userName",
          sortable: false,
          align: "center",
        },
        {
          text: "Password",
          value: "password",
          sortable: false,
          align: "center",
        },
        {
          text: "Lớp",
          value: "class",
          sortable: false,
          align: "center",
        },
        {
          text: "Ngày thêm",
          value: "dateCreated",
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
      userDetailsOptions: [
        {
          title: "Sửa",
          emitFunction: "edit",
        },
        {
          title: "Xoá",
          emitFunction: "delete",
        },
      ],
    };
  },
  computed: {
    ...mapGetters("admin", ["getUserDetails", "getAllClassUserDetails"]),
  },
  methods: {
    handleShowDialogDeleteUser(user) {
      console.log(user);
      this.showDialogDelete = true;
    },
    handleShowDialogAddAdmin() {
      this.showDialogAddAdmin = true;
    },
    handleShowDialogAddStudent() {
      this.showDialogAddStudent = true;
    },
    handleCloseDialog() {
      this.showDialogDelete = false;
      this.showDialogAddAdmin = false;
      this.showDialogAddStudent = false;
    },
    handleShowDialogEditUser(user) {
      if (user.role === "0") {
        this.handleShowDialogAddAdmin();
      } else {
        this.handleShowDialogAddStudent();
      }
    },
  },
};
</script>
