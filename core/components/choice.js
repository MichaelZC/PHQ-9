import React from 'react';

const choiceContainerStyle = {
  padding: '1em',
  backgroundColor: '#E8EAF6',
  flex: 1,
  margin: '1em',
  border: '0.5px solid #3F51B5',
  textAlign: 'center',
};

export default props => (
  <div style={choiceContainerStyle}>
    {props.text}
  </div>
);
