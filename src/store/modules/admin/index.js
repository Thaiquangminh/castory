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
      ],
      cardSetDetails: [
        {
          id: "1",
          name: "Hoa",
          dueDate: "25/04/23",
          cardSetName: "Tuần 1 thi đại học",
          cardType: "Kiểu 1",
        },
        {
          id: "2",
          name: "Hoa",
          dueDate: "25/04/23",
          cardSetName: "Tuần 1 thi đại học",
          cardType: "Kiểu 1",
        },
        {
          id: "3",
          name: "Hoa",
          dueDate: "25/04/23",
          cardSetName: "Tuần 1 thi đại học",
          cardType: "Kiểu 1",
        },
        {
          id: "4",
          name: "Hoa",
          dueDate: "25/04/23",
          cardSetName: "Tuần 1 thi đại học",
          cardType: "Kiểu 1",
        },
      ],
    };
  },
  actions: actions,
  mutations: mutations,
  getters: getters,
};
