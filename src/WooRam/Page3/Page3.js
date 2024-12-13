import React from 'react';
import Content from './Content';
import { style } from './styles/Page3.css';
import { Link } from 'react-router-dom';
import imageSrc1 from './styles/1.png';
import imageSrc2 from './styles/2.png';



function Page3() {
  return (

    <div className="page-container">
      <img src={imageSrc1} alt="신체활동 기준 기억하기" />
      <p className="page-subtitle">
        앞서 기억해 둔 <b style={{ color: 'red' }}>신체활동 기준</b>입니다. 빈칸을 채워보세요 (1~5)
      </p>

      <Content />
      <img src={imageSrc2}></img><br></br>
      <Link to="/Page2" style={{ marginRight: '10px' }}>이전</Link>
      <Link to="/Page4" >다음</Link>
    </div>


  );
}

export default Page3;
