import React from 'react';
import img from './styles/3.png'; // 이미지 경로 수정

const Header = () => (
  <div className="header">
    <img src={img} alt="Tree Icon" className="icon" />
    <div className="title">오늘의 날짜와 날씨</div>
  </div>
);

export default Header;
