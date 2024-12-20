import React, { useState, useRef } from 'react';
import { style } from './styles5';


const questions = [
    {
        question : "금숙 씨가 지출한 금액은 총 얼마인가요?",
        answer : "1505000",
    },
    {
        question : "금숙 씨 통장에 입금 된 금액은 총 얼마인가요?",
        answer : "22000",
    },
    {
        question : "금숙 씨 통장의 현재 잔액은 얼마인가요?",
        answer : "1417000",
    },
]

function Question() {

    const [inputStates, setInputStates] = useState(
        questions.map(() => ({ value: "", isCorrect: null })) 
    );

    const [passMessageStates, setPassMessageStates] = useState(false);
    const inputRefs = useRef([]);

    const handleKeyDown = (index, e) => {
        if (e.key === "Enter"){
            const correct = questions[index].answer === e.target.value.trim();;
            
            setInputStates(prevState => {
                const updatedStates = [...prevState];
                updatedStates[index] = {
                    value: e.target.value,
                    isCorrect: correct,
                };

                const allCorrect = updatedStates.every(i => i.isCorrect);
                setPassMessageStates(allCorrect);

                if (correct && index < questions.length - 1){
                    inputRefs.current[index + 1].focus();
                }else if(!correct){
                    inputRefs.current[index].focus();
                }

                return updatedStates;

            })
        }
    }

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
                inputStates[index].value !== "" && (
                  <span>❌</span>
                )}
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
  )
}

export default Question