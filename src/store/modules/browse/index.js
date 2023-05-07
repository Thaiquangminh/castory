import actions from "@/store/modules/browse/actions";
import mutations from "@/store/modules/browse/mutations";
import getters from "@/store/modules/browse/getters";

export default {
  namespaced: true,
  state() {
    return {
      cardSet: [
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
      cardSetDetails: [
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
    };
  },
  actions: actions,
  mutations: mutations,
  getters: getters,
};
