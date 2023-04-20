<template>
  <LayoutList title="Danh sách bộ thẻ từ vựng">
    <TableComponent :value="cardList" />
  </LayoutList>
</template>

<script>
import LayoutList from "@/components/layout/LayoutList.vue";
import TableComponent from "@/components/ui/TableComponent.vue";

export default {
  components: { TableComponent, LayoutList },
  data() {
    return {
      cardList: [
        {
          name: "Tuần thi 1 đại học",
          newCard: 140,
          remindCard: 42,
        },
        {
          name: "Tuần thi 2 đại học",
          newCard: 140,
          remindCard: 42,
        },
        {
          name: "Tuần thi 3 đại học",
          newCard: 140,
          remindCard: 42,
        },
        {
          name: "Tuần thi 4 đại học",
          newCard: 140,
          remindCard: 42,
        },
        {
          name: "Tuần thi 5 đại học",
          newCard: 140,
          remindCard: 42,
        },
        {
          name: "Tuần thi 6 đại học",
          newCard: 140,
          remindCard: 42,
        },
        {
          name: "Tuần thi 7 đại học",
          newCard: 140,
          remindCard: 42,
        },
        {
          name: "Tuần thi 8 đại học",
          newCard: 140,
          remindCard: 42,
        },
        {
          name: "Tuần thi 9 đại học",
          newCard: 140,
          remindCard: 42,
        },
        {
          name: "Tuần thi 10 đại học",
          newCard: 140,
          remindCard: 42,
        },
      ],
    };
  },
};
</script>
