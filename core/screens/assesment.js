import React from 'react';
import Question from '../containers/question';
import TestConstants from '../constants/phq-9-constants';

export default () => (
  <div style={{ textAlign: 'center' }}>
    <h1>How do these statements apply to you?</h1>
    {TestConstants.PROMPTS.map((prompt, index) => <Question key={index} questionIndex={index} />)}
  </div>
);
