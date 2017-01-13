import { connect } from 'react-redux';
import Results from '../components/results';

const mapStateToProps = (state) => ({
  score: state.score,
});

export default connect(mapStateToProps)(Results);
