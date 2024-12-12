import React from 'react';
import ProblemList from './ProblemList';
import QuestionList from './QuestionList';
import { style } from './styles5';


function Contents() {
  return (
    <div className='Contents' style={style.contents}>
        <p className='Guide'>다음 글을 읽고 문제를 풀어보세요(1~3).</p>

        <ProblemList></ProblemList>

        <QuestionList></QuestionList>
    
    </div>
  )
}

export default Contents