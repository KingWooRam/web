import React from 'react';
import Box from './Box';
import './styles/Content.css';

import Q1 from './styles/Q1.png';
import Q2 from './styles/Q2.png';
import Q4 from './styles/Q4.png';
import Q5 from './styles/Q5.png';

function QuizList() {
  const questions = [
    {
      id: 1,
      imageSrc: Q1,
      text: '1. ________ 운동이나 집안일 등을 매일 하는 것이 좋다.',
      correctAnswers: ['여가시간을 활용한']
    },
    {
      id: 2,
      imageSrc: Q2,
      text: '2. 일주일에 적어도 ________ 또는 75분 격렬한 강도의 유산소 운동을 한다.\n3. 유산소 운동을 일주일에 3일 이상 하고 한 번 시작하면 ________.',
      correctAnswers: ['150분 중간 강도', '10분 이상 지']
    },
    {
      id: 4,
      imageSrc: Q4,
      text: '4. 근육 강화운동은 ________.',
      correctAnswers: ['일주일에 2일 이상한다.']
    },
    {
      id: 5,
      imageSrc: Q5,
      text: '5. 권장량만큼 운동할 수 없으면 ________.',
      correctAnswers: ['자기 컨디션에 맞게 한다.']
    }
  ];

  return (
    <div className="quiz-list">
      {questions.map((q) => (
        <Box key={q.id} item={q} />
      ))}
    </div>
  );
}

export default QuizList;
