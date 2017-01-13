// Actually let's try something like this
const reducers = {
  SELECT_VAL: (state, payload) => {
    const newState = Object.assign({}, state);
    const { questionIndex, answerIndex } = payload;
    newState.responses[questionIndex] = answerIndex;
    return newState;
  },
  COMPUTE_SCORE: (state) => {
    const { responses } = state;
    const score = responses.reduce((a,b) => a + b, 0);
    const newState = Object.assign({}, state);
    newState.score = score;
    return newState;
  },
};

export default (state, { type, payload }) => {
  if (!reducers[type]) {
    return state;
  }
  const newState = reducers[type](state, payload);
  // really this should be middleware or something
  return reducers.COMPUTE_SCORE(newState);
};
