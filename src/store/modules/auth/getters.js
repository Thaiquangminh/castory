export default {
  getToken(state) {
    return state.token;
  },
  getIsLoggedIn(state) {
    return Boolean(state.token);
  },
};
