<template>
  <v-menu offset-y transition="slide-y-transition" location="end">
    <!-- -------------------Menu list folder-------------------- -->
    <template v-slot:activator="{ attrs, on }">
      <div class="d-flex" v-bind="attrs" v-on="on">
        <div v-text="headerTitle === '' ? 'Chọn thư mục' : headerTitle"></div>
        <img src="@/assets/icons/arrow-down.svg" alt="" />
      </div>
    </template>

    <v-list class="pa-0 layout-list" style="min-width: 300px">
      <v-list-item link @click="handleAddFolder">
        <v-list-item-title class="d-flex py-3 px-5">
          Thêm thư mục
        </v-list-item-title>
        <img :src="getIcon('plus')" alt="" style="height: 37px" class="pa-3" />
      </v-list-item>
      <v-list-item
        class="py-1"
        v-for="(option, index) in options"
        :key="index"
        link
      >
        <v-list-item-title
          class="d-flex py-3 px-5"
          @click="handleSetHeaderTitle(option.title)"
        >
          {{ option.title }}
        </v-list-item-title>
        <!-- -------------------Menu list click more button-------------------- -->
        <v-menu offset-y transition="slide-y-transition" location="end">
          <template v-slot:activator="{ attrs, on }">
            <img
              :src="option.icon && getIcon(option.icon)"
              alt=""
              v-bind="attrs"
              v-on="on"
              class="pa-3"
            />
          </template>
          <v-list style="min-width: 150px">
            <v-list-item link>
              <v-list-item-title>Đổi tên</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-title @click="handleDeleteFolder(option.id)"
                >Xoá</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      headerTitle: "",
      options: [
        {
          id: "1",
          title: "Thi đại học",
          icon: "menu",
        },
        {
          id: "2",
          title: "Ielts",
          icon: "menu",
        },
      ],
    };
  },
  methods: {
    getIcon(name) {
      return require("@/assets/icons/" + name + ".svg");
    },
    handleSetHeaderTitle(title) {
      this.headerTitle = title;
    },
    handleAddFolder() {
      console.log("click add folder");
      this.$emit("addFolder");
    },
    handleDeleteFolder(id) {
      console.log(id);
      this.$parent.$emit("deleteFolder", id);
    },
  },
};
</script>
