import React, { useState } from 'react';

function Box({ item }) {
  const blanks = (item.text.match(/________/g) || []).length;
  const [answers, setAnswers] = useState(Array(blanks).fill(''));
  const [editable, setEditable] = useState(true);
  const [correct, setCorrect] = useState(null);

  const updateAns = (e, idx) => {
    const updated = [...answers];
    updated[idx] = e.target.value;
    setAnswers(updated);
  };

  const saveAns = () => {
    if (answers.some((ans) => ans.trim() === '')) {
      alert('모든 빈칸에 답을 입력하세요!');
      return;
    }

    const allCorrect = answers.every(
      (ans, idx) => ans.trim() === item.correctAnswers[idx]
    );
    setCorrect(allCorrect);
    setEditable(false);
  };

  const editAns = () => {
    setEditable(true);
    setCorrect(null);
  };

  const renderFields = (text) => {
    const parts = text.split('________');
    const elements = [];

    parts.forEach((part, idx) => {
      elements.push(part);
      if (idx < blanks) {
        if (editable) {
          elements.push(
            <input
              key={`input-${idx}`}
              type="text"
              value={answers[idx]}
              onChange={(e) => updateAns(e, idx)}
              className="input-field"
              placeholder="답 입력"
            />
          );
        } else {
          elements.push(
            <span key={`answer-${idx}`} className="input-field">
              {answers[idx]}
            </span>
          );
        }
      }
    });

    return elements;
  };

  return (
    <div className="quiz-item">
      <div className="quiz-content">
        <div className="image-area">
          <img src={item.imageSrc} alt="활동 이미지" />
        </div>
        <div className="form-area">
          <p className="text-area">{renderFields(item.text)}</p>
          <div className="action-buttons">
            {editable ? (
              <button className="button button-save" onClick={saveAns}>
                저장
              </button>
            ) : (
              <>
                <button className="button button-edit" onClick={editAns}>
                  수정
                </button>
                {correct !== null && (
                  <span className="indicator">
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
