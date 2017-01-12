// state logic is dead simple atm, so not going to split it out;
// as this grows I would split and combine;
export default (state, action) => {
  const newState = Object.assign({}, state);
  if (action.type === 'SELECT_VAL') {
    const { questionIndex, answerIndex } = action.payload;
    newState.responses[questionIndex] = answerIndex;
  }
  return newState;
};

