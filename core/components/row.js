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
  // Revision: actually fuck forgot that children can be an array OR a single element
  // TODO: create a proptype for this shit.
  children: React.PropTypes.any.isRequired, //eslint-disable-line
};

export default Row;
