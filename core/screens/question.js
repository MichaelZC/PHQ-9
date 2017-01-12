import React from 'react';
import TestConstants from '../constants/phq-9-constants';
import Prompt from '../components/prompt';
import Choice from '../components/choice';
import Row from '../components/row';

export default props => (
  <div>
    <Prompt text={TestConstants.PROMPTS[props.promptIndex]} />
    <Row>
      {TestConstants.RESPONSES.map(text => <Choice text={text} />)}
    </Row>
  </div>
);
