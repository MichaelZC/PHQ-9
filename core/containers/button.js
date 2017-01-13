import { connect } from 'react-redux';
import Button from '../components/button';
import SelectVal from '../actions/selectVal';

const mapDispatchToProps = (dispatch) => {
  return {
    // selection action for button    
    action: (questionIndex, answerIndex) => dispatch(SelectVal(questionIndex, answerIndex)),
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    // whether we're selected
    selected: state.responses[ownProps.questionIndex] === ownProps.answerIndex,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
