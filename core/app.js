import React from 'react';
import Question from './screens/question';
import TestConstants from './constants/phq-9-constants';

export default () => (
  <div>
    {TestConstants.PROMPTS.map((prompt, index) => <Question key={index} questionIndex={index} />)}
  </div>
);
