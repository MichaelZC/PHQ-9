import React from 'react';

const rowStyle = {
  display: 'flex',
};

const Row = ({ children }) => (
  <div style={rowStyle}>
    {children}
  </div>
);

Row.propTypes = {
  // TODO: We can make this more specific. We know exactly what's going in,
  children: React.PropTypes.any.isRequired, //eslint-disable-line
};

export default Row;
