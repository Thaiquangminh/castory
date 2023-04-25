export default {
  handleSetToken(state, payload) {
    state.token = payload;
    localStorage.setItem("token", payload);
  },
  handleClearToken(state) {
    state.token = null;
    localStorage.removeItem("token");
  },
};
