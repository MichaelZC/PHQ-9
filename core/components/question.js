import React from 'react';
import TestConstants from '../constants/phq-9-constants';
import Prompt from '../components/prompt';
import Button from '../containers/button';
import Row from '../components/row';

class Question extends React.Component {
  componentDidUpdate() {
    const { visible } = this.props;
    if (visible) {
      window.scrollTo(0,document.body.scrollHeight); //eslint-disable-line
    }
  }
  render() {
    const { visible, questionIndex } = this.props;
    return (
      <div
        style={{
          height: visible ? 'auto' : '0',
          opacity: visible ? '1' : '0',
          transition: '0.75s',
        }}
      >
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
  }
}

Question.propTypes = {
  questionIndex: React.PropTypes.number.isRequired,
  visible: React.PropTypes.bool.isRequired,
};

export default Question;
