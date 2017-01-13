import React from 'react';

const buttonContainerStyle = {
  padding: '1em',
  flex: 1,
  margin: '1em',
  border: '0.5px solid #3F51B5',
  textAlign: 'center',
  transition: '1s',
};

const Button = ({ selected, text, action, questionIndex, answerIndex }) => (
  <div
    onClick={() => action(questionIndex, answerIndex)}
    style={Object.assign({
      // Blue if we're selected
      backgroundColor: selected ? '#2196F3' : '#BBDEFB',
    }, buttonContainerStyle)}
  >
    {text}
  </div>
);

Button.propTypes = {
  text: React.PropTypes.string.isRequired,
  action: React.PropTypes.func.isRequired,
  answerIndex: React.PropTypes.number.isRequired,
  questionIndex: React.PropTypes.number.isRequired,
  selected: React.PropTypes.bool.isRequired,
};

export default Button;
