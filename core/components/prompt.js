import React from 'react';

const promptStyle = {
  width: '75%',
  textAlign: 'center',
  padding: '1.5em',
  fontSize: '2em',
  margin: 'auto',
  fontFamily: 'Roboto, arial, sans-serif',
};

export default props => (
  <div style={promptStyle}>
    {props.text}
  </div>
);
