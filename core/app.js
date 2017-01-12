import React from 'react';
import Choice from './components/choice';
import Row from './components/row';

const textProps = {
  text: 'Hello World!',
};

export default () => (
  <div>
    <Row>
      <Choice {...textProps} />
      <Choice {...textProps} />
    </Row>
  </div>
);
