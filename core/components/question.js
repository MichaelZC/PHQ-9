import React from 'react';
import TestConstants from '../constants/phq-9-constants';
import Prompt from '../components/prompt';
import Button from '../containers/button';
import Row from '../components/row';

const Question = ({ questionIndex, visible }) => {
  if (!visible) {
    return <div />;
  }
  return (
    <div>
      <Prompt text={TestConstants.PROMPTS[questionIndex]} />
      <Row>
        {TestConstants.RESPONSES.map(
          (text, i) => <Button
            key={i} 
            answerIndex={i}
            questionIndex={questionIndex}
            text={text}
          />,
        )}
      </Row>
    </div>
  );
};

Question.propTypes = {
  questionIndex: React.PropTypes.number.isRequired,
  visible: React.PropTypes.bool.isRequired,
};

export default Question;
