// Actually let's try something like this
// Playing around with using something that is not a SWITCH statement
// The issue of not being able to redeclare consts inside of a switch is annoying
// want to use function scope
const reducers = {
  SELECT_VAL: (state, payload) => {
    const newState = Object.assign({}, state);
    const { questionIndex, answerIndex } = payload;
    newState.responses[questionIndex] = answerIndex;
    return newState;
  },
  // aggregate score
  COMPUTE_SCORE: (state) => {
    const { responses } = state;
    const score = responses.reduce((a,b) => a + b, 0);
    const newState = Object.assign({}, state);
    newState.score = score;
    return newState;
  },
  COMPLETE_ASSESMENT: (state) => {
    const newState = Object.assign({}, state);
    newState.completed = true;
    return newState;
  },
};

export default (state, { type, payload }) => {
  if (!reducers[type]) {
    return state;
  }
  const newState = reducers[type](state, payload);
  // really this should be middleware
  return reducers.COMPUTE_SCORE(newState);
};
