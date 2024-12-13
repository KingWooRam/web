import React, { useState } from 'react';

const Date = ({ onSave }) => {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [weather, setWeather] = useState('');
  const [isEditing, setIsEditing] = useState(true);

  const handleSave = () => {
    setIsEditing(false);
    if (onSave) {
      onSave({
        date: `${year}년 ${month}월 ${day}일`,
        weather,
      });
    }
  };

  const handleEdit = () => setIsEditing(true);

  return (
    <div className="date-container">
      <div className="date-input-container">
        {isEditing ? (
          <>
            <input
              type="text"
              placeholder="____"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="date-input year"
            />
            <span>년</span>
            <input
              type="text"
              placeholder="__"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="date-input month"
            />
            <span>월</span>
            <input
              type="text"
              placeholder="__"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="date-input day"
            />
            <span>일</span>
          </>
        ) : (
          <span>
            {year || '____'}년 {month || '__'}월 {day || '__'}일
          </span>
        )}
      </div>
      <div className="weather-input-container">
        <span
          className={`weather-icon ${weather === '맑음' ? 'selected' : ''}`}
          onClick={() => isEditing && setWeather('맑음')}
        >
          ☀️
        </span>
        <span
          className={`weather-icon ${weather === '흐림' ? 'selected' : ''}`}
          onClick={() => isEditing && setWeather('흐림')}
        >
          ☁️
        </span>
        <span
          className={`weather-icon ${weather === '비' ? 'selected' : ''}`}
          onClick={() => isEditing && setWeather('비')}
        >
          🌧️
        </span>
        <span
          className={`weather-icon ${weather === '눈' ? 'selected' : ''}`}
          onClick={() => isEditing && setWeather('눈')}
        >
          ❄️
        </span>
      </div>
      <button onClick={isEditing ? handleSave : handleEdit} className="save-button">
        {isEditing ? '저장' : '수정'}
      </button>
    </div>
  );
};

export default Date;
