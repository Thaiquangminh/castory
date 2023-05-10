import actions from "@/store/modules/admin/actions";
import mutations from "@/store/modules/admin/mutations";
import getters from "@/store/modules/admin/getters";

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
      userDetails: [
        {
          id: "1",
          role: "0",
          name: "Nông Thế Sơn",
          userName: "sonbeo",
          password: "123456",
          class: "admin",
          dateCreated: "23/03/23",
        },
        {
          id: "2",
          role: "1",
          name: "Thái Quang Minh",
          userName: "tequyem",
          password: "123456",
          class: "Ielts",
          dateCreated: "15/03/23",
        },
        {
          id: "3",
          role: "1",
          name: "Lê Thị Hoài",
          userName: "hoailt",
          password: "123456",
          class: "Toeic",
          dateCreated: "15/08/21",
        },
        {
          id: "4",
          role: "1",
          name: "Nguyễn Quang Quân",
          userName: "quannq",
          password: "123456",
          class: "Ielts",
          dateCreated: "15/03/23",
        },
      ],
      classes: [
        {
          id: 1,
          name: "Ielts",
        },
        {
          id: 2,
          name: "Toeic",
        },
        {
          id: 3,
          name: "Thi đại học",
        },
      ],
    };
  },
  actions: actions,
  mutations: mutations,
  getters: getters,
};
