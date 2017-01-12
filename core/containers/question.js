import { connect } from 'react-redux';
import Question from '../components/question';

const mapStateToProps = (state, ownProps) => {
  return {
    // only show if previous question was answered or we are first question
    visible: ownProps.questionIndex === 0 ||
      state.responses[ownProps.questionIndex - 1] !== undefined,
  };
};

export default connect(mapStateToProps)(Question);
