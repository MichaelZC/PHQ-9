export default (state, action) => {
  const newState = Object.assign({}, state);
  if (action.type === 'SELECT_VAL') {
    const { questionIndex, answerIndex } = action.payload;
    newState.responses[questionIndex] = answerIndex;
  }
  return newState;
};

