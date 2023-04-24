export default {
  handleRemoveProduct(state, payload) {
    state.listCards = state.listCards.filter((card) => {
      return card.id !== payload;
    });
  },
};
