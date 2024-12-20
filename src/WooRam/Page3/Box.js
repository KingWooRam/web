import React, { useState } from 'react';

function Box({ item }) {
  const blanks = (item.txt.match(/________/g) || []).length;
  const [ans, setAns] = useState(Array(blanks).fill(''));
  const [editable, setEditable] = useState(true);
  const [correct, setCorrect] = useState(null);

  const updAns = (e, idx) => {
    const updated = [...ans];
    updated[idx] = e.target.value;
    setAns(updated);
  };

  const save = () => {
    if (ans.some((a) => a.trim() === '')) {
      alert('빈칸을 모두 채워주세요!');
      return;
    }

    const isCorrect = ans.every((a, idx) => a.trim() === item.ans[idx]);
    setCorrect(isCorrect);
    setEditable(false);
  };

  const editBtn = () => {
    setEditable(true);
    setCorrect(null);
  };

  const renFields = (txt) => {
    const parts = txt.split('________');
    return parts.flatMap((part, idx) => [
      part,
      idx < blanks && (editable ? (
        <input
          key={idx}
          type="text"
          value={ans[idx]}
          onChange={(e) => updAns(e, idx)}
          className="input"
        />
      ) : (
        <span key={idx} className="input">{ans[idx]}</span>
      )),
    ]);
  };

  return (
    <div className="q-box">
      <div className="q-content">
        <div className="q-img">
          <img src={item.img} alt="활동 이미지" />
        </div>
        <div className="q-form">
          <p className="q-txt">{renFields(item.txt)}</p>
          <div className="q-btns">
            {editable ? (
              <button className="btn save" onClick={save}>
                저장
              </button>
            ) : (
              <>
                <button className="btn edit" onClick={editBtn}>
                  수정
                </button>
                {correct !== null && (
                  <span className="result">
                    {correct ? '○ 정답!' : '× 오답!'}
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
