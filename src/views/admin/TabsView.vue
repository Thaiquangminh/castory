<template>
  <v-container fluid>
    <v-tabs>
      <v-tab href="#manage-card">
        <h7>Quản lý thẻ gốc</h7>
      </v-tab>
      <v-tab-item value="manage-card">
        <ManageOriginCardSet />
      </v-tab-item>

      <v-tab href="#manage-student">
        <h7>Quản lý học sinh</h7>
      </v-tab>
      <v-tab-item value="manage-student"><ManageStudent /></v-tab-item>

      <v-tab href="#manage-study">
        <h7>Quản lý học tập</h7>
      </v-tab>
      <v-tab-item value="manage-study"> 3 </v-tab-item>
    </v-tabs>
  </v-container>
</template>
<script setup>
import ManageOriginCardSet from "@/views/admin/ManageOriginCardSet.vue";
import ManageStudent from "@/views/admin/ManageStudent.vue";
</script>
