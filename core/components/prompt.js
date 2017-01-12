import React from 'react';

const promptStyle = {
  width: '75%',
  textAlign: 'center',
  padding: '1.5em',
  fontSize: '2em',
  margin: 'auto',
  fontFamily: 'Roboto, arial, sans-serif',
};

const Prompt = ({ text }) => (
  <div style={promptStyle}>
    {text}
  </div>
);

Prompt.propTypes = {
  text: React.PropTypes.string.isRequired,
};

export default Prompt;
