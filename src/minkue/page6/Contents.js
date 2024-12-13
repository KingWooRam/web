import React from 'react';
import ProblemList from './ProblemList';
import QuestionList from './QuestionList';
import { style } from './Styles';

function Contents() {
  return (
    <div className="Contents" style={style.contents}>
      <p className="Guide">앞서 기억해 둔 신체활동 기준을 떠올리며 문제를 풀어보세요(1~4).</p>
      <ProblemList />
      <QuestionList />
    </div>
  );
}

export default Contents;
