export default {
  handleSetId(context, payload) {
    context.commit("handleSetId", payload);
  },
  handleGetElementIndex(context, payload) {
    const listCards = context.rootState.list.listCards;
    const currentIndex = listCards.findIndex((card) => card.id === payload);
    const nextElementId = listCards[currentIndex + 1].id;
    const previousElementId = listCards[currentIndex - 1].id;
    context.commit("handleGetElementIndex", {
      nextId: nextElementId,
      previousId: previousElementId,
    });
  },
};
