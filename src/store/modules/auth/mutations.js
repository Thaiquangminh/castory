export default {
  handleLogin(state, payload) {
    state.access_token = payload.access_token;
    state.token_type = payload.token_type;
  },
  handleSetToken(state, payload) {
    state.access_token = payload;
    localStorage.setItem("access_token", payload);
  },
  handleClearLocalStorage(state) {
    state.access_token = null;
    state.token_type = null;
    localStorage.removeItem("access_token");
    localStorage.removeItem("token_type");
    localStorage.removeItem("setCardId");
    localStorage.removeItem("mobileScreen");
  },
  handleKeepLogin(state, payload) {
    state.access_token = payload;
  },
};
