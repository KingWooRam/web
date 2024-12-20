import React, { useState } from 'react';

const Date = ({ onSave }) => {
  const [yr, setYr] = useState('');
  const [mo, setMo] = useState('');
  const [dy, setDy] = useState('');
  const [wt, setWt] = useState('');
  const [edit, setEdit] = useState(true);

  const saveData = () => {
    setEdit(false);
    if (onSave) {
      onSave({
        date: `${yr}년 ${mo}월 ${dy}일`,
        weather: wt,
      });
    }
  };

  const enableEdit = () => setEdit(true);

  return (
    <div className="date-box">
      <div className="inputs">
        {edit ? (
          <>
            <input
              type="text"
              placeholder="____"
              value={yr}
              onChange={(e) => setYr(e.target.value)}
              className="input"
            />
            <span>년</span>
            <input
              type="text"
              placeholder="__"
              value={mo}
              onChange={(e) => setMo(e.target.value)}
              className="input"
            />
            <span>월</span>
            <input
              type="text"
              placeholder="__"
              value={dy}
              onChange={(e) => setDy(e.target.value)}
              className="input"
            />
            <span>일</span>
          </>
        ) : (
          <span>
            {yr || '____'}년 {mo || '__'}월 {dy || '__'}일
          </span>
        )}
      </div>
      <div className="weather-box">
        <span
          className={`icon ${wt === '맑음' ? 'active' : ''}`}
          onClick={() => edit && setWt('맑음')}
        >
          ☀️
        </span>
        <span
          className={`icon ${wt === '흐림' ? 'active' : ''}`}
          onClick={() => edit && setWt('흐림')}
        >
          ☁️
        </span>
        <span
          className={`icon ${wt === '비' ? 'active' : ''}`}
          onClick={() => edit && setWt('비')}
        >
          🌧️
        </span>
        <span
          className={`icon ${wt === '눈' ? 'active' : ''}`}
          onClick={() => edit && setWt('눈')}
        >
          ❄️
        </span>
      </div>
      <button onClick={edit ? saveData : enableEdit} className="btn">
        {edit ? '저장' : '수정'}
      </button>
    </div>
  );
};

export default Date;
