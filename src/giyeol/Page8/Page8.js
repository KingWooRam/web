import React from 'react';
import { Link } from 'react-router-dom';
import { PiPottedPlantDuotone } from "react-icons/pi";
import  styles from "./style";
const App = () => {

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>일기</h1>
        <div style={styles.dateSection}>
          <span>년</span>
          <span>월</span>
          <span>일</span>
          <span>요일</span>
          <span>날씨</span>
        </div>
      </header>

      <section style={styles.myDaySection}>
        <h2>나의 하루</h2>
        <table style={styles.table}>
          <tbody>
            <tr>
              <td style={styles.td}>
                방문한 장소<textarea style={styles.inBox}/>
          </td>
              
              <td style={styles.td}>오늘 만난 사람{<textarea style={styles.inBox}/>}</td>
            </tr>
            <tr>
              <td style={styles.td}>구입한 물건{<textarea style={styles.inBox}/>}</td>
              <td style={styles.td}>지출 금액{<textarea style={styles.inBox}/>}</td>
            </tr>
            <tr>
              <td colSpan="2" style={styles.td}>오늘의 뉴스{<textarea style={styles.inBox}/>}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>중요한 일</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>시간</th>
              <th style={styles.th}>중요한 일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>오전 5시 ~ 8시</td>
              <td style={styles.td}>일어나서 할 일{<textarea style={styles.inBox}/>}</td>
            </tr>
            <tr>
              <td style={styles.td}>오전 8시 ~ 12시</td>
              <td style={styles.td}>아침식사 후에 할 일{<textarea style={styles.inBox}/>}</td>
            </tr>
            <tr>
              <td style={styles.td}>오후 12시 ~ 5시</td>
              <td style={styles.td}>오후에 할 일{<textarea style={styles.inBox}/>}</td>
            </tr>
            <tr>
              <td style={styles.td}>오후 5시 ~ 10시</td>
              <td style={styles.td}>저녁식사 후 할 일{<textarea style={styles.inBox}/>}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>내일 계획</h2>
        <textarea    
          style={{
            width: '100%',
            height: '80px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
      </section>
      <div className="Page8" styles={styles.header} >
            <Link to={'/page6'}>p.7 이동</Link>

        </div>
      
    </div>
  );
};

export default App;

