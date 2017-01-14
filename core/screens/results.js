import React from 'react';
import assess from '../utils/assess';
import Option from '../components/professional-option';
import Row from '../components/row';
import constants from '../constants/phq-9-constants';

const resultStyle = {
  textAlign: 'center',
};

export default ({ score }) => {
  const assessment = assess(score);
  return (
    <div style={resultStyle}>
      {// these can be their own presentational components}
      }
      <h4>{`Your score is ${score}`}</h4>
      <h3>{`Your depression level is ${assessment}`}</h3>
      <Row>
        {constants.PROFESSIONALS.map(name => <Option name={name} />)}
      </Row>
    </div>
  );
};
