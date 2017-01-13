import React from 'react';
import assess from '../utils/assess';

export default ({ score }) => {
  const assessment = assess(score);
  return (
    <div>
      <h4>{`Your score is ${score}`}</h4>
      <h3>{`Your depression level is ${assessment}`}</h3>
    </div>
  );
};
