import React, { useState } from 'react';
import './styles/Box.css';

function Box({ item }) {
  const blankCount = (item.text.match(/________/g) || []).length;
  const [fields, setFields] = useState(Array(blankCount).fill(''));
  const [editable, setEditable] = useState(true);
  const [correct, setCorrect] = useState(null);

  const updateField = (e, index) => {
    const nextFields = [...fields];
    nextFields[index] = e.target.value;
    setFields(nextFields);
  };

  const save = () => {
    if (fields.some(f => f.trim() === '')) {
      alert('모든 빈칸에 답변을 입력하세요!');
      return;
    }

    const allMatch = fields.every((f, i) => f.trim() === item.correctAnswers[i]);
    setCorrect(allMatch);
    setEditable(false);
  };

  const edit = () => {
    setEditable(true);
    setCorrect(null);
  };

  const renderFields = (text) => {
    const parts = text.split('________');
    const elements = [];

    parts.forEach((part, i) => {
      elements.push(part);
      if (i < blankCount) {
        if (editable) {
          elements.push(
            <input
              key={`input-${i}`}
              type="text"
              value={fields[i]}
              onChange={(e) => updateField(e, i)}
              className="question-input"
              placeholder="답 입력"
            />
          );
        } else {
          elements.push(
            <span key={`answer-${i}`} className="question-input">{fields[i]}</span>
          );
        }
      }
    });

    return elements;
  };

  return (
    <div className="question-box">
      <div className="question-body">
        <div className="question-image-area">
          <img src={item.imageSrc} alt="activity" className="question-img" />
        </div>
        <div className="question-form">
          <p className="question-text">{renderFields(item.text)}</p>
          <div className="question-actions">
            {editable ? (
              <button className="btn btn-save" onClick={save}>저장</button>
            ) : (
              <>
                <button className="btn btn-edit" onClick={edit}>수정</button>
                {correct !== null && (
                  <span className="check-indicator">
                    {correct ? '○ 정답입니다!' : '× 오답입니다.'}
                  </span>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
