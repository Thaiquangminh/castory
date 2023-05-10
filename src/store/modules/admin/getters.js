export default {
  getCardSet(state) {
    return state.cardSet;
  },
  getCardSetDetails(state) {
    return state.cardSetDetails;
  },
  getUserDetails(state) {
    return state.userDetails;
  },
  getAllClassUserDetails(state) {
    const classes = [];
    state.classes.map((classItem) => {
      classes.push(classItem.name);
    });
    return classes;
  },
};
