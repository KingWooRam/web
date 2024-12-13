import React from 'react';
import Box from './Box';
import Q1 from './styles/Q1.png';
import Q2 from './styles/Q2.png';
import Q4 from './styles/Q4.png';
import Q5 from './styles/Q5.png';

function Quiz() {
  const qs = [
    { id: 1, img: Q1, txt: '1. ________ 운동이나 집안일 등을 매일 하는 것이 좋다.', ans: ['여가시간을 활용한'] },
    { id: 2, img: Q2, txt: '2. 일주일에 적어도 ________ 또는 75분 격렬한 강도의 유산소 운동을 한다.\n3. 유산소 운동을 일주일에 3일 이상 하고 한 번 시작하면 ________.', ans: ['150분 중간 강도', '10분 이상 지속한다'] },
    { id: 4, img: Q4, txt: '4. 근육 강화운동은 ________.', ans: ['일주일에 2일 이상한다.'] },
    { id: 5, img: Q5, txt: '5. 권장량만큼 운동할 수 없으면 ________.', ans: ['자기 컨디션에 맞게 한다.'] },
  ];

  return (
    <div className="quiz">
      {qs.map((q) => (
        <Box key={q.id} item={q} />
      ))}
    </div>
  );
}

export default Quiz;
