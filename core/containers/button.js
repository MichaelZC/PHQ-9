import { connect } from 'react-redux';
import Choice from '../components/choice';
import SelectVal from '../actions/selectVal';

const mapDispatchToProps = (dispatch) => {
  return {
    action: (questionIndex, answerIndex) => dispatch(SelectVal(questionIndex, answerIndex)),
  };
};

export default connect(null, mapDispatchToProps)(Choice);
