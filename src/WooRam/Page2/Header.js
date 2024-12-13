import React from 'react';
import img from './styles/3.png'

const Header = () => (
  <div className="header">
    <img src={img} alt="Tree Icon" className="tree-icon" />    <div className="header-title">오늘의 날짜와 날씨</div>

  </div>
);

export default Header;
