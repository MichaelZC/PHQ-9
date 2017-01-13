import TEST_CONSTANTS from '../constants/phq-9-constants';

export default (questionIndex, answerIndex) =>
  (dispatch) => {
    if (questionIndex === TEST_CONSTANTS.PROMPTS.length - 1) {
      dispatch({
        type: 'COMPLETE_ASSESMENT',
        payload: {},
      });
    }
    return dispatch({
      type: 'SELECT_VAL',
      payload: {
        questionIndex,
        answerIndex,
      },
    });
  };
