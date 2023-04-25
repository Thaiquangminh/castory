export default {
  handleSetId(state, payload) {
    state.cardId = payload;
    localStorage.setItem("cardId", payload);
  },
  handleGetElementIndex(state, payload) {
    state.nextElementId = payload.nextId;
    state.previousElementId = payload.previousId;
  },
};
