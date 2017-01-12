import React from 'react';

const rowStyle = {
  display: 'flex',
};

export default props => (
  <div style={rowStyle}>
    {props.children}
  </div>
);
