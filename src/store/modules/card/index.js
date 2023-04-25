import actions from "@/store/modules/card/actions";
import mutations from "@/store/modules/card/mutations";
import getters from "@/store/modules/card/getters";

export default {
  namespaced: true,
  state() {
    return {
      cardId: "",
      previousElementId: "",
      nextElementId: "",
    };
  },
  actions: actions,
  mutations: mutations,
  getters: getters,
};
