export default {
  handleSetToken(context, payload) {
    context.commit("handleSetToken", payload);
  },
  handleClearToken(context) {
    context.commit("handleClearToken");
  },
};
