import getters from "@/store/modules/list/getters";
import actions from "@/store/modules/list/actions";
import mutations from "@/store/modules/list/mutations";
export default {
  namespaced: true,
  state() {
    return {
      listCards: [
        {
          id: "0",
          cardSetName: "Bộ thẻ đã lưu",
          newCard: 0,
          reviewCard: 0,
        },
        {
          id: "1",
          cardSetName: "Tuần thi 1 đại học",
          newCard: 140,
          reviewCard: 42,
        },
        {
          id: "2",
          cardSetName: "Tuần thi 2 đại học",
          newCard: 140,
          reviewCard: 42,
        },
        {
          id: "3",
          cardSetName: "Tuần thi 3 đại học",
          newCard: 140,
          reviewCard: 42,
        },
        {
          id: "4",
          cardSetName: "Tuần thi 4 đại học",
          newCard: 140,
          reviewCard: 42,
        },
        {
          id: "5",
          cardSetName: "Tuần thi 5 đại học",
          newCard: 140,
          reviewCard: 42,
        },
        {
          id: "6",
          cardSetName: "Tuần thi 6 đại học",
          newCard: 140,
          reviewCard: 42,
        },
        {
          id: "7",
          cardSetName: "Tuần thi 7 đại học",
          newCard: 140,
          reviewCard: 42,
        },
        {
          id: "8",
          cardSetName: "Tuần thi 8 đại học",
          newCard: 140,
          reviewCard: 42,
        },
        {
          id: "9",
          cardSetName: "Tuần thi 9 đại học",
          newCard: 140,
          reviewCard: 42,
        },
        {
          id: "10",
          cardSetName: "Tuần thi 10 đại học",
          newCard: 140,
          reviewCard: 42,
        },
        {
          id: "11",
          cardSetName: "Tuần thi 11 đại học",
          newCard: 140,
          reviewCard: 42,
        },
        {
          id: "12",
          cardSetName: "Tuần thi 12 đại học",
          newCard: 140,
          reviewCard: 42,
        },
        {
          id: "13",
          cardSetName: "Tuần thi 13 đại học",
          newCard: 140,
          reviewCard: 42,
        },
        {
          id: "14",
          cardSetName: "Tuần thi 14 đại học",
          newCard: 140,
          reviewCard: 42,
        },
        {
          id: "15",
          cardSetName: "Tuần thi 15 đại học",
          newCard: 140,
          reviewCard: 42,
        },
      ],
    };
  },
  actions: actions,
  mutations: mutations,
  getters: getters,
};
