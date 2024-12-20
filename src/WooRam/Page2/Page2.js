import React, { useState } from 'react';
import Header from './Header';
import Date from './Date';
import Activity from './Activity';
import './styles/Page2.css';
import img1 from './styles/1.png';
import img2 from './styles/2.png';
import { Link } from 'react-router-dom';

const activityData = {
  description: [
    "여가시간을 활용한 운동이나 집안일 등을 매일 하는 것이 좋다.",
    "일주일에 적어도 150분 중간 강도 또는 75분 격렬한 강도의 유산소 운동을 한다.",
    "유산소 운동을 일주일에 3일 이상 하고 한 번 시작하면 10분 이상 지속한다.",
    "근육 강화 운동은 일주일에 2일 이상 한다.",
    "관절 강화 운동을 도울 수 없으면 자기 컨디션에 맞게 한다.",
    "신체활동이 부족할 시 비만, 고혈압, 당뇨, 고지혈증, 심장질환, 치매를 유발할 수 있다."
  ],
  middleIntensity: [
    "경쟁적 시합이 아닌 운동 연습 (농구, 배구, 배드민턴, 탁구 등)",
    "골프",
    "볼링",
    "자전거 타기 (시속 16km 이하)",
    "필라테스 (매트나 기구 이용)",
    "체조"
  ],
  highIntensity: [
    "경쟁적 시합 (축구, 농구, 배구, 배드민턴 등)",
    "등산 (평지 걷기 제외)",
    "줄넘기 (1분에 120~160개의 빠르기)",
    "에어로빅",
    "자전거 타기 (시속 16km 이상)",
    "달리기 (빠르게 달리기)"
  ]
};

const Page2 = () => {
  const [savedData, setSavedData] = useState(null);

  const handleSave = (data) => {
    console.log('저장된 데이터:', data);
    setSavedData(data);
  };

  return (
    <div className="container">
      <Header />
      <Date onSave={handleSave} />
      <img src={img1}></img>
      <div className="act">
        <p className="text">다음은 세계보건기구에서 지정한 신체활동 기준입니다. 소리 내어 읽어보세요.</p>
        <div className="main">
          <div className="guide">
            <h3 className="sub">건강증진을 위해 65세 이상 노인들은</h3>
            <div className="box">
              <ul className="list">
                {activityData.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="section">
            <Activity data={activityData} />
          </div>
        </div> 
        <br></br>
        <img src={img2}></img>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Link to="/login" style={{ marginRight: '10px' }}>이전</Link>
        <Link to="/page3" >다음</Link>
      </div>
    </div>
  );
};

export default Page2;
