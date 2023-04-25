import actions from "@/store/modules/auth/actions";
import mutations from "@/store/modules/auth/mutations";
import getters from "@/store/modules/auth/getters";

export default {
  namespaced: true,
  state() {
    return {
      token: "",
    };
  },
  actions: actions,
  mutations: mutations,
  getters: getters,
};
