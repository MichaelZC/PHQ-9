import React from 'react';
import { connect } from 'react-redux';
import Assesment from './screens/assesment';
import Results from './screens/results';

const mapStateToProps = ({ completed, score }) => {
  const props = {
    completed: false,
    score,
  };
  if (completed) {
    props.completed = true;
  }
  return props;
};

const App = ({ completed, score }) => (
  completed ? <Results score={score} /> : <Assesment />
);

App.propTypes = {
  completed: React.PropTypes.bool.isRequired,
  score: React.PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(App);
