export default (questionIndex, answerIndex) => ({
  type: 'SELECT_VAL',
  payload: {
    questionIndex,
    answerIndex,
  },
});
