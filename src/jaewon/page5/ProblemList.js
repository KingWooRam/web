import React from 'react';
import atm from '../assets/atm.jpg';
import { style } from './styles5';

const text = `금숙 씨는 광주에서 대학을 다니는 아들에게 ATM기로 용돈 50만원을보
냈습니다. 그 후 추석을 맞아 시골에 사는 어머니께 백만원을 송금하였습
니다. 금숙 씨는 저번 주에 샀던 머플러 반품 금액 27,000원이 입금되지
않자 매장에 전화를 하였고 배송비 5,000원을 제외한 나머지 금액을 돌
려받았습니다.`;

function ProblemList() {
  return (
    <div className='ProblemList' style={style.problemTextContainer}>
        <img src={atm} style={style.problemImg} alt="problem"></img>
        <p>{text}</p>
    </div>
  )
}

export default ProblemList