export default {
  handleLogin(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
  },
  handleSetToken(state, payload) {
    state.token = payload;
    localStorage.setItem("token", payload);
  },
  handleClearLocalStorage(state) {
    state.token = null;
    state.userId = null;
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("setCardId");
    localStorage.removeItem("mobileScreen");
  },
  handleKeepLogin(state, payload) {
    state.token = payload;
  },
};
