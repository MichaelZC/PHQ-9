import React from 'react';

const optionStyles = {
  flex: '1',
  border: '0.5px solid #2196F3',
  padding: '1em',
  margin: '1em',
};

export default ({ name }) => {
  return (<div style={optionStyles}>
    {`Click here to ask ${name} to contact you!`}
  </div>);
};
