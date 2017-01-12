import { connect } from 'react-redux';
import Choice from '../components/choice';
import SelectVal from '../actions/selectVal';

const mapDispatchToProps = (dispatch) => {
  return {
    action: (questionIndex, answerIndex) => dispatch(SelectVal(questionIndex, answerIndex)),
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    selected: state.responses[ownProps.questionIndex] === ownProps.answerIndex,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Choice);
