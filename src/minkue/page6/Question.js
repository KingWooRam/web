import React, { useState, useRef } from 'react';
import { style } from './Styles';

const questions = [
  { question: "65세 이상 노인들은 중간 강도의 유산소 운동을 일주일에 적어도 몇 분 이상 해야 하나요?", answer: "150" },
  { question: "격렬한 강도의 유산소 운동은 일주일에 적어도 몇 분 이상 해야 하나요?", answer: "75" },
  { question: "유산소 운동은 한 번 시작하면 몇 분 이상 지속해야 하나요?", answer: "10" },
  { question: "근육 강화운동은 일주일에 몇 회 이상 해야 하나요?", answer: "2" },
];

function Question() {
  const [inputStates, setInputStates] = useState(
    questions.map(() => ({ value: "", isCorrect: null }))
  );
  const [passMessageStates, setPassMessageStates] = useState(false);
  const inputRefs = useRef([]);

  const handleKeyDown = (index, e) => {
    if (e.key === "Enter") {
      const correct = questions[index].answer === e.target.value.trim();
      setInputStates((prevState) => {
        const updatedStates = [...prevState];
        updatedStates[index] = { value: e.target.value, isCorrect: correct };
        const allCorrect = updatedStates.every((i) => i.isCorrect);
        setPassMessageStates(allCorrect);
        if (correct && index < questions.length - 1) {
          inputRefs.current[index + 1].focus();
        } else if (!correct) {
          inputRefs.current[index].focus();
        }
        return updatedStates;
      });
    }
  };

  const handleChange = (index, e) => {
    const updatedStates = [...inputStates];
    updatedStates[index].value = e.target.value;
    setInputStates(updatedStates);
  };

  return (
    <>
      {passMessageStates && <p style={style.passMessage}>통과!</p>}
      {questions.map((question, index) => (
        <div className="question" key={index}>
          <p style={style.questionTextContainer}>
            <span style={style.iconMessage}>
              {inputStates[index].isCorrect === true && <span>⭕</span>}
              {inputStates[index].isCorrect === false &&
                inputStates[index].value !== "" && <span>❌</span>}
            </span>
            <span>{index + 1}</span>. {question.question}
          </p>
          <input
            style={style.answerInput}
            value={inputStates[index].value}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={(el) => (inputRefs.current[index] = el)}
          />
        </div>
      ))}
    </>
  );
}

export default Question;
