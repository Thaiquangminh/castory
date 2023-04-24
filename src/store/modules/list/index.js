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
        {
          id: "5",
          name: "Tuần thi 5 đại học",
          newCard: 140,
          remindCard: 42,
        },
        {
          id: "6",
          name: "Tuần thi 6 đại học",
          newCard: 140,
          remindCard: 42,
        },
        {
          id: "7",
          name: "Tuần thi 7 đại học",
          newCard: 140,
          remindCard: 42,
        },
        {
          id: "8",
          name: "Tuần thi 8 đại học",
          newCard: 140,
          remindCard: 42,
        },
        {
          id: "9",
          name: "Tuần thi 9 đại học",
          newCard: 140,
          remindCard: 42,
        },
        {
          id: "10",
          name: "Tuần thi 10 đại học",
          newCard: 140,
          remindCard: 42,
        },
        {
          id: "11",
          name: "Tuần thi 11 đại học",
          newCard: 140,
          remindCard: 42,
        },
        {
          id: "12",
          name: "Tuần thi 12 đại học",
          newCard: 140,
          remindCard: 42,
        },
        {
          id: "13",
          name: "Tuần thi 13 đại học",
          newCard: 140,
          remindCard: 42,
        },
        {
          id: "14",
          name: "Tuần thi 14 đại học",
          newCard: 140,
          remindCard: 42,
        },
        {
          id: "15",
          name: "Tuần thi 15 đại học",
          newCard: 140,
          remindCard: 42,
        },
      ],
    };
  },
  actions: actions,
  mutations: mutations,
  getters: getters,
};
