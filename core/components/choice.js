import React from 'react';

const choiceContainerStyle = {
  padding: '1em',
  backgroundColor: 'red',
  flex: 1,
};

export default props => (
  <div style={choiceContainerStyle}>
    {props.text}
  </div>
);
