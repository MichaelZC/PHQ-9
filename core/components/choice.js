import React from 'react';

const choiceContainerStyle = {
  padding: '1em',
  backgroundColor: '#E8EAF6',
  flex: 1,
  margin: '1em',
  border: '0.5px solid #3F51B5',
  textAlign: 'center',
};

const Choice = ({ text, action, questionIndex, answerIndex }) => (
  <div
    onClick={() => action(questionIndex, answerIndex)}
    style={choiceContainerStyle}
  >
    {text}
  </div>
);

Choice.propTypes = {
  text: React.PropTypes.string.isRequired,
  action: React.PropTypes.func.isRequired,
  answerIndex: React.PropTypes.number.isRequired,
  questionIndex: React.PropTypes.number.isRequired,
};

export default Choice;
