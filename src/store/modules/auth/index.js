import actions from "@/store/modules/auth/actions";
import mutations from "@/store/modules/auth/mutations";
import getters from "@/store/modules/auth/getters";

export default {
  namespaced: true,
  state() {
    return {
      token_type: null,
      access_token: null,
    };
  },
  actions: actions,
  mutations: mutations,
  getters: getters,
};
