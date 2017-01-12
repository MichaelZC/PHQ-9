import React from 'react';
import Choice from './components/choice';
import Row from './components/row';
import Prompt from './components/prompt';

const textProps = {
  text: 'Hello World!',
};

const promptProps = {
  text: `Moving or speaking so slowly that other people could have noticed?
   Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?`,
};

export default () => (
  <div>
    <Prompt {...promptProps} />
    <Row>
      <Choice {...textProps} />
      <Choice {...textProps} />
    </Row>
  </div>
);
