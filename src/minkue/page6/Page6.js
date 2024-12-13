import React from 'react';
import { style } from './Styles';
import Contents from './Contents';
import { Link } from 'react-router-dom';
function Page6() {
  return (
    <div className="Page5" style={style.pageContainer}>
      <p className="PageTitle" style={style.pageTitle}>
        <span style={style.titleText}>신체활동 기준 기억하기</span>
      </p>
      <Contents />


      <Link to="/page5" style={{ marginRight: '10px' }}>이전</Link><br/>
      <Link to="/page7">다음</Link>
    </div>
  );
}

export default Page6;