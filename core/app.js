import React from 'react';
import Text from './components/text';

const textProps = {
  text: 'Hello World!',
};

export default () => (
  <div>
    <Text {...textProps} />
  </div>
);
