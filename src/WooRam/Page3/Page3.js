import React from 'react';
import Content from './Content';
import { Link } from 'react-router-dom';
import introImage from './styles/1.png';
import outroImage from './styles/2.png';
import './styles/Page3.css';

function Page3() {
  return (
    <div className="container">
      <img src={introImage} alt="신체활동 기준 설명 이미지" />
      <p className="subtitle">
        기억해 둔 <b style={{ color: 'red' }}>신체활동 기준</b>입니다. 빈칸을 채워보세요 (1~5)
      </p>
      <Content />
      <img src={outroImage} alt="퀴즈 힌트 이미지" /><br />
      <Link to="/Page2" style={{ marginRight: '10px' }}>이전</Link>
      <Link to="/Page4">다음</Link>
    </div>
  );
}

export default Page3;
