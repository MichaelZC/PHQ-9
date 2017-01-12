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
  // We can make this more specific. We know exactly what's going in,
  // but for now leave it simple.
  children: React.PropTypes.arrayOf(React.PropTypes.func).isRequired,
};

export default Row;
