export default {
  handleSetId(state, payload) {
    state.setCardId = payload;
    localStorage.setItem("setCardId", payload);
  },
  handleGetElementIndex(state, payload) {
    state.nextElementId = payload.nextId;
    state.previousElementId = payload.previousId;
  },
};
