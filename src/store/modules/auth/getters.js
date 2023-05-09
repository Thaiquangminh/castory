export default {
  getToken(state) {
    return state.access_token;
  },
  getIsLoggedIn(state) {
    if (localStorage.getItem("access_token"))
      state.access_token = localStorage.getItem("access_token");
    return Boolean(state.access_token);
  },
};
